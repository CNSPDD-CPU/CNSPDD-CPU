(() => {
    const rotators = document.querySelectorAll('[data-home-rotator]');
    if (!rotators.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    rotators.forEach((rotator) => {
        const slides = [...rotator.querySelectorAll('[data-home-route-slide]')];
        const previous = rotator.querySelector('[data-home-route-prev]');
        const next = rotator.querySelector('[data-home-route-next]');
        const toggle = rotator.querySelector('[data-home-route-toggle]');
        const current = rotator.querySelector('[data-home-route-current]');
        const status = rotator.querySelector('[data-home-rotator-status]');
        const pauseLabel = rotator.dataset.pauseLabel || 'Pause';
        const playLabel = rotator.dataset.playLabel || 'Play';
        const interval = Number(rotator.dataset.interval) || 6500;

        if (slides.length < 2 || !previous || !next || !toggle || !current) return;

        let index = 0;
        let timer = null;
        let userPaused = false;
        let pointerPaused = false;
        let focusPaused = false;

        slides.forEach((slide, slideIndex) => {
            slide.hidden = false;
            slide.classList.toggle('is-active', slideIndex === index);
            slide.setAttribute('aria-hidden', String(slideIndex !== index));
            const link = slide.querySelector('a');
            if (link) link.tabIndex = slideIndex === index ? 0 : -1;
        });
        rotator.classList.add('is-ready');

        const stop = () => {
            if (timer !== null) window.clearTimeout(timer);
            timer = null;
        };

        const canAutoplay = () => !reduceMotion && !userPaused && !pointerPaused && !focusPaused && !document.hidden;

        const schedule = () => {
            stop();
            if (!canAutoplay()) return;
            timer = window.setTimeout(() => {
                show(index + 1, false);
                schedule();
            }, interval);
        };

        const show = (nextIndex, announce) => {
            const normalized = (nextIndex + slides.length) % slides.length;
            if (normalized === index) return;

            slides[index].classList.remove('is-active');
            slides[index].setAttribute('aria-hidden', 'true');
            const oldLink = slides[index].querySelector('a');
            if (oldLink) oldLink.tabIndex = -1;

            index = normalized;
            slides[index].classList.add('is-active');
            slides[index].setAttribute('aria-hidden', 'false');
            const activeLink = slides[index].querySelector('a');
            if (activeLink) activeLink.tabIndex = 0;

            current.textContent = String(index + 1).padStart(2, '0');
            if (announce && status) {
                const name = slides[index].dataset.routeName || '';
                status.textContent = name;
            }
        };

        const updateToggle = () => {
            toggle.textContent = userPaused ? playLabel : pauseLabel;
            toggle.setAttribute('aria-pressed', String(userPaused));
        };

        previous.addEventListener('click', () => {
            show(index - 1, true);
            schedule();
        });

        next.addEventListener('click', () => {
            show(index + 1, true);
            schedule();
        });

        toggle.addEventListener('click', () => {
            userPaused = !userPaused;
            updateToggle();
            schedule();
        });

        rotator.addEventListener('pointerenter', () => {
            pointerPaused = true;
            stop();
        });

        rotator.addEventListener('pointerleave', () => {
            pointerPaused = false;
            schedule();
        });

        rotator.addEventListener('focusin', () => {
            focusPaused = true;
            stop();
        });

        rotator.addEventListener('focusout', () => {
            window.setTimeout(() => {
                focusPaused = rotator.contains(document.activeElement);
                schedule();
            }, 0);
        });

        document.addEventListener('visibilitychange', schedule);

        if (reduceMotion) {
            toggle.hidden = true;
            toggle.setAttribute('aria-hidden', 'true');
        } else {
            updateToggle();
            schedule();
        }
    });
})();
