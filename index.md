---
layout: default
title: Home
---

<style>
    .home-page {
        --home-ink: #172033;
        --home-muted: #526071;
        --home-line: #dce5ee;
        --home-soft: #f5f8fb;
        --home-green: #2C5F2D;
        --home-navy: #1E2761;
        --home-purple: #735DA5;
        --home-red: #962E2A;
        color: var(--home-ink);
    }

    .home-shell {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        box-sizing: border-box;
    }

    .hero-section {
        position: relative;
        overflow: hidden;
        min-height: clamp(520px, 72vh, 720px);
        margin: 0 auto 2.5rem;
        display: grid;
        align-items: center;
        color: #ffffff;
        background:
            linear-gradient(90deg, rgba(18, 30, 52, 0.9) 0%, rgba(18, 30, 52, 0.74) 44%, rgba(18, 30, 52, 0.34) 100%),
            url('{{ "/assets/images/cnspdd-neuroscience-hero.png" | relative_url }}') center 44% / cover no-repeat;
    }

    .hero-content {
        width: min(760px, calc(100% - 4rem));
        margin-left: max(2rem, calc((100vw - 1200px) / 2 + 2rem));
        padding: 4rem 0;
    }

    .hero-kicker {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.45rem 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.32);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.86rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
    }

    .hero-title {
        margin: 1.25rem 0 1rem;
        color: #ffffff;
        font-size: clamp(2.75rem, 5.8vw, 5.25rem);
        line-height: 1.02;
        letter-spacing: 0;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .hero-subtitle {
        max-width: 720px;
        margin: 0 0 1.8rem;
        color: rgba(255, 255, 255, 0.88);
        font-size: 1.18rem;
        line-height: 1.72;
        font-weight: 500;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem;
        margin-bottom: 2rem;
    }

    .home-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.55rem;
        min-height: 46px;
        padding: 0.8rem 1.1rem;
        border-radius: 999px;
        font-weight: 800;
        text-decoration: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .home-btn::after {
        display: none;
    }

    .home-btn.primary {
        color: #ffffff;
        background: var(--home-green);
        box-shadow: 0 14px 30px rgba(44, 95, 45, 0.35);
    }

    .home-btn.secondary {
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.42);
        background: rgba(255, 255, 255, 0.08);
    }

    .home-btn:hover {
        transform: translateY(-2px);
        color: #ffffff;
    }

    .hero-tags {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.7rem;
        max-width: 760px;
    }

    .hero-tag {
        padding: 0.75rem 0.85rem;
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        font-size: 0.95rem;
        font-weight: 700;
        line-height: 1.35;
    }

    .home-section {
        margin: 3rem 0;
    }

    .section-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 1.5rem;
        margin-bottom: 1.4rem;
    }

    .section-eyebrow {
        margin: 0 0 0.35rem;
        color: var(--home-purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .section-title {
        margin: 0;
        color: var(--home-navy);
        font-size: clamp(1.75rem, 3vw, 2.45rem);
        line-height: 1.15;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .section-copy {
        max-width: 660px;
        margin: 0;
        color: var(--home-muted);
        line-height: 1.7;
    }

    .research-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
    }

    .research-card,
    .platform-card,
    .signal-card {
        position: relative;
        min-height: 100%;
        padding: 1.35rem;
        border: 1px solid var(--home-line);
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 10px 28px rgba(23, 32, 51, 0.07);
        box-sizing: border-box;
    }

    .research-card::before,
    .platform-card::before,
    .signal-card::before {
        content: "";
        display: block;
        width: 42px;
        height: 4px;
        margin-bottom: 1rem;
        border-radius: 999px;
        background: var(--home-green);
    }

    .research-card:nth-child(2)::before,
    .platform-card:nth-child(2)::before {
        background: var(--home-navy);
    }

    .research-card:nth-child(3)::before,
    .platform-card:nth-child(3)::before {
        background: var(--home-purple);
    }

    .research-card:nth-child(4)::before {
        background: var(--home-red);
    }

    .card-title {
        margin: 0 0 0.7rem;
        color: var(--home-navy);
        font-size: 1.08rem;
        line-height: 1.35;
        text-align: left;
    }

    .card-copy {
        margin: 0;
        color: var(--home-muted);
        line-height: 1.65;
        font-size: 0.98rem;
    }

    .platform-band {
        padding: 2.2rem 0;
        background: linear-gradient(180deg, #f7fafc 0%, #eef4f8 100%);
        border-top: 1px solid var(--home-line);
        border-bottom: 1px solid var(--home-line);
    }

    .platform-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .signal-row {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 1rem;
        align-items: stretch;
    }

    .news-panel {
        padding: 1.4rem;
        border: 1px solid var(--home-line);
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 10px 28px rgba(23, 32, 51, 0.07);
    }

    .hero-ticker {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1rem;
        align-items: center;
    }

    .ticker-label {
        color: var(--home-purple);
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-size: 0.82rem;
    }

    .ticker-track {
        position: relative;
        overflow: hidden;
        min-height: 2rem;
    }

    .ticker-inner {
        display: flex;
        gap: 1.5rem;
        white-space: nowrap;
        animation: tickerScrollX 24s linear infinite;
    }

    .hero-ticker:hover .ticker-inner {
        animation-play-state: paused;
    }

    .ticker-item {
        display: inline-flex;
        gap: 0.55rem;
        color: var(--home-ink);
        font-weight: 700;
        text-decoration: none;
    }

    .ticker-item::after,
    .ticker-link::after {
        display: none;
    }

    .ticker-date {
        color: var(--home-green);
    }

    .ticker-link {
        color: var(--home-navy);
        font-weight: 800;
    }

    @keyframes tickerScrollX {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    .join-card {
        padding: 1.4rem;
        border-radius: 8px;
        color: #ffffff;
        background: linear-gradient(135deg, #1E2761 0%, #2C5F2D 100%);
        box-shadow: 0 18px 40px rgba(30, 39, 97, 0.18);
    }

    .join-card h2 {
        margin: 0 0 0.7rem;
        color: #ffffff;
        font-size: 1.45rem;
        text-align: left;
    }

    .join-card p {
        margin: 0 0 1rem;
        color: rgba(255, 255, 255, 0.86);
        line-height: 1.65;
    }

    @media (max-width: 900px) {
        .hero-content {
            width: min(720px, calc(100% - 2rem));
            margin: 0 auto;
        }

        .research-grid,
        .platform-grid,
        .signal-row {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 640px) {
        .home-shell {
            padding: 0 1rem;
        }

        .hero-section {
            min-height: auto;
        }

        .hero-content {
            padding: 3rem 0;
        }

        .hero-title {
            font-size: 2.35rem;
        }

        .hero-tags,
        .research-grid,
        .platform-grid,
        .signal-row,
        .hero-ticker {
            grid-template-columns: 1fr;
        }

        .section-head {
            align-items: flex-start;
            flex-direction: column;
        }

        .ticker-inner {
            animation: none;
            white-space: normal;
            flex-direction: column;
            gap: 0.8rem;
        }

        .ticker-duplicate {
            display: none;
        }
    }
</style>

<div class="home-page">
    <section class="hero-section" aria-labelledby="home-title">
        <div class="hero-content">
            <div class="hero-kicker">China Pharmaceutical University</div>
            <h1 class="hero-title" id="home-title">Center for Neuroscience and Precision Drug Development</h1>
            <p class="hero-subtitle">CNSPDD advances mechanism-based, sex-informed precision therapies for neurological and psychiatric disorders by decoding neuron-glia communication, disease vulnerability, and drug action across development, adulthood, and aging.</p>
            <div class="hero-actions">
                <a class="home-btn primary" href="{{ '/research/' | relative_url }}"><i class="fas fa-microscope"></i> Research and Platforms</a>
                <a class="home-btn secondary" href="{{ '/jobs/' | relative_url }}"><i class="fas fa-user-plus"></i> Join the Center</a>
            </div>
            <div class="hero-tags" aria-label="Research themes">
                <span class="hero-tag">Sex-informed precision drug discovery</span>
                <span class="hero-tag">Dynamic neuron-glia communication</span>
                <span class="hero-tag">Early disease-modifying intervention windows</span>
                <span class="hero-tag">Cell-specific delivery and modulation</span>
            </div>
        </div>
    </section>

    <section class="home-section home-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">Center Mission</p>
                <h2 class="section-title">A connected path from brain mechanisms to compound validation</h2>
            </div>
            <p class="section-copy">CNSPDD organizes its work across three complementary directions: investigator-driven basic research, organized precision drug development, and service-oriented testing of novel compounds that modulate brain function.</p>
        </div>
        <div class="platform-grid">
            <article class="platform-card">
                <h3 class="card-title">Basic Research</h3>
                <p class="card-copy">Individual projects define mechanisms of brain function in health and disease, with emphasis on sex-specific neuron-glia interactions and early multicellular disease processes.</p>
            </article>
            <article class="platform-card">
                <h3 class="card-title">Drug Development</h3>
                <p class="card-copy">Organized projects develop cell-specific strategies to target intracellular signaling and intercellular communication in defined neuronal and glial populations.</p>
            </article>
            <article class="platform-card">
                <h3 class="card-title">Compound Validation</h3>
                <p class="card-copy">A service-oriented platform tests novel compounds for their ability to modulate brain function, circuit activity, and disease-relevant cellular communication.</p>
            </article>
        </div>
    </section>

    <section class="home-section home-shell">
        <div class="signal-row">
            {% assign news_page = site.pages | where: "path", "news.md" | first %}
            {% if news_page and news_page.news_items and news_page.news_items.size > 0 %}
            <div class="news-panel">
                <div class="hero-ticker">
                    <span class="ticker-label">What's New</span>
                    <div class="ticker-track">
                        <div class="ticker-inner">
                            {% for item in news_page.news_items limit: 4 %}
                            <a class="ticker-item" href="{{ '/news/' | relative_url }}">
                                <span class="ticker-date">{{ item.date }}</span>
                                <span class="ticker-title">{{ item.title }}</span>
                            </a>
                            {% endfor %}
                            <span class="ticker-duplicate">
                            {% for item in news_page.news_items limit: 4 %}
                            <a class="ticker-item" href="{{ '/news/' | relative_url }}">
                                <span class="ticker-date">{{ item.date }}</span>
                                <span class="ticker-title">{{ item.title }}</span>
                            </a>
                            {% endfor %}
                            </span>
                        </div>
                    </div>
                    <a class="ticker-link" href="{{ '/news/' | relative_url }}">View all</a>
                </div>
            </div>
            {% endif %}
            <aside class="join-card">
                <h2>Build with us</h2>
                <p>We are building an interdisciplinary team across electrophysiology, imaging, organoid technology, systems neuroscience, pharmacology, computational biology, and sex differences research.</p>
                <a class="home-btn secondary" href="{{ '/contact/' | relative_url }}"><i class="fas fa-envelope"></i> Contact Us</a>
            </aside>
        </div>
    </section>
</div>
