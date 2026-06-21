---
layout: default
title: Home
---

<style>
    .home-page {
        --ink: #172033;
        --muted: #526071;
        --line: #dce5ee;
        --green: #2C5F2D;
        --navy: #1E2761;
        --purple: #735DA5;
        color: var(--ink);
    }

    .hero-section {
        min-height: clamp(520px, 72vh, 720px);
        display: grid;
        align-items: center;
        color: #fff;
        background:
            linear-gradient(90deg, rgba(18, 30, 52, 0.9) 0%, rgba(18, 30, 52, 0.74) 48%, rgba(18, 30, 52, 0.34) 100%),
            url('{{ "/assets/images/cnspdd-neuroscience-hero.jpg" | relative_url }}') center 44% / cover no-repeat;
    }

    .home-shell,
    .hero-content {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 2rem;
        box-sizing: border-box;
    }

    .hero-content {
        width: 100%;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .hero-kicker,
    .section-eyebrow {
        margin: 0 0 0.6rem;
        color: var(--purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .hero-kicker {
        display: inline-flex;
        padding: 0.45rem 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.32);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
    }

    .hero-title {
        max-width: 840px;
        margin: 1.25rem 0 1rem;
        color: #fff;
        font-size: clamp(2.75rem, 5.8vw, 5.25rem);
        line-height: 1.02;
        letter-spacing: 0;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .hero-subtitle {
        max-width: 760px;
        margin: 0 0 1.8rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.18rem;
        line-height: 1.72;
        font-weight: 500;
    }

    .hero-actions,
    .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem;
    }

    .home-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        min-height: 46px;
        padding: 0.8rem 1.1rem;
        border-radius: 999px;
        font-weight: 800;
        text-decoration: none;
    }

    .home-btn::after { display: none; }
    .home-btn.primary { color: #fff; background: var(--green); }
    .home-btn.secondary { color: #fff; border: 1px solid rgba(255,255,255,0.42); background: rgba(255,255,255,0.08); }

    .hero-tags { max-width: 840px; margin-top: 2rem; }
    .hero-tag {
        padding: 0.75rem 0.85rem;
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 8px;
        color: rgba(255,255,255,0.92);
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(12px);
        font-weight: 700;
    }

    .home-section { margin: 4rem auto; }
    .section-head { max-width: 880px; margin: 0 auto 2rem; text-align: center; }
    .section-title { margin: 0; color: var(--navy); font-size: clamp(1.75rem, 3vw, 2.45rem); line-height: 1.2; text-align: center; background: none; -webkit-text-fill-color: currentColor; }
    .section-copy { max-width: 780px; margin: 0.9rem auto 0; color: var(--muted); line-height: 1.8; }
    .card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; max-width: 1040px; margin: 0 auto; }
    .home-card { padding: 1.45rem; border: 1px solid var(--line); border-radius: 8px; background: #fff; box-shadow: 0 10px 28px rgba(23,32,51,0.07); text-align: center; }
    .home-card::before { content: ""; display: block; width: 42px; height: 4px; margin: 0 auto 1rem; border-radius: 999px; background: var(--green); }
    .home-card:nth-child(2)::before { background: var(--navy); }
    .home-card:nth-child(3)::before { background: var(--purple); }
    .home-card h3 { margin: 0 0 0.7rem; color: var(--navy); font-size: 1.08rem; text-align: center; }
    .home-card p { margin: 0; color: var(--muted); line-height: 1.75; }

    @media (max-width: 768px) {
        .home-shell, .hero-content { padding-left: 1rem; padding-right: 1rem; }
        .section-head, .card-grid { grid-template-columns: 1fr; }
        .hero-title { font-size: 2.35rem; }
    }
</style>

<div class="home-page">
    {% assign home = site.data.home.en %}
    <section class="hero-section" aria-labelledby="home-title">
        <div class="hero-content">
            <div class="hero-kicker">China Pharmaceutical University</div>
            <h1 class="hero-title" id="home-title">{{ home.hero.title }}</h1>
            <p class="hero-subtitle">{{ home.hero.subtitle }}</p>
            <div class="hero-actions">
                <a class="home-btn primary" href="{{ '/research/' | relative_url }}"><i class="fas fa-microscope"></i> {{ home.hero.primary_button }}</a>
                <a class="home-btn secondary" href="{{ '/jobs/' | relative_url }}"><i class="fas fa-user-plus"></i> {{ home.hero.secondary_button }}</a>
            </div>
            <div class="hero-tags" aria-label="Research themes">
                {% for tag in home.hero.tags %}
                <span class="hero-tag">{{ tag }}</span>
                {% endfor %}
            </div>
        </div>
    </section>

    <section class="home-section home-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">{{ home.mission.eyebrow }}</p>
                <h2 class="section-title">{{ home.mission.title }}</h2>
            </div>
            <p class="section-copy">{{ home.mission.copy }}</p>
        </div>
        <div class="card-grid">
            {% for card in home.mission.cards %}
            <article class="home-card">
                <h3>{{ card.title }}</h3>
                <p>{{ card.copy }}</p>
            </article>
            {% endfor %}
        </div>
    </section>
</div>
