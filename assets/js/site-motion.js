(() => {
    const header = document.querySelector('.site-header');
    const updateHeader = () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    const selectors = [
        '.home-hero-copy > *',
        '.home-field-note',
        '.home-section-head',
        '.home-mission-card',
        '.home-news-card',
        '.template-hero > *',
        '.template-section-head',
        '.template-card',
        '.template-note',
        '.rp-hero .rp-shell > *',
        '.section-head',
        '.rp-card',
        '.pi-overview-hero > *',
        '.pi-overview-section-head',
        '.pi-directory-card',
        '.pi-hero > *',
        '.pi-feature',
        '.pi-evidence-item',
        '.pi-focus',
        '.pi-publications',
        '.pi-patents',
        '.news-archive-hero > *',
        '.news-section-head',
        '.news-card',
        '.news-article-header > *',
        '.news-article-hero',
        '.news-article-copy > *',
        '.news-article-side',
        '.news-figure'
    ];

    const targets = [...new Set(document.querySelectorAll(selectors.join(',')))];
    if (!targets.length) return;

    targets.forEach((element, index) => {
        element.classList.add('reveal-item');
        element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
    });

    const reveal = (element) => {
        const delay = Number.parseInt(element.style.getPropertyValue('--reveal-delay'), 10) || 0;
        element.classList.add('is-visible');
        window.setTimeout(() => {
            element.classList.remove('reveal-item', 'is-visible');
            element.style.removeProperty('--reveal-delay');
        }, 620 + delay);
    };

    const initiallyVisible = [];
    const pending = [];
    targets.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * .94) initiallyVisible.push(element);
        else pending.push(element);
    });

    document.documentElement.classList.add('motion-enabled');
    window.requestAnimationFrame(() => {
        initiallyVisible.forEach(reveal);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });

    pending.forEach((element) => observer.observe(element));
})();