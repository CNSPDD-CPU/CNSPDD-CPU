---
layout: default
title: 研究与平台
permalink: /cn/research/
---

<style>
    .rp-page {
        --rp-ink: #172033;
        --rp-muted: #526071;
        --rp-line: #dce5ee;
        --rp-green: #2C5F2D;
        --rp-navy: #1E2761;
        --rp-purple: #735DA5;
        --rp-red: #962E2A;
        color: var(--rp-ink);
        overflow-x: clip;
    }

    .rp-shell {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 1.5rem;
        box-sizing: border-box;
    }

    .rp-hero {
        margin: 0 auto 3.1rem;
        padding: clamp(3.7rem, 8vw, 5rem) 0 3.2rem;
        background: linear-gradient(135deg, #eef5f2 0%, #f7f9fc 48%, #eef0f7 100%);
        border-bottom: 1px solid var(--rp-line);
    }

    .rp-kicker {
        margin: 0 0 .65rem;
        color: var(--rp-purple);
        font-size: .76rem;
        font-weight: 900;
        letter-spacing: .13em;
        text-transform: uppercase;
        text-align: left;
    }

    .rp-title {
        max-width: 900px;
        margin: 0;
        color: var(--rp-navy);
        font-size: clamp(3rem, 6.5vw, 5.2rem);
        line-height: .98;
        letter-spacing: -.05em;
        text-wrap: balance;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .rp-lead {
        max-width: 700px;
        margin: 1.2rem 0 0;
        color: var(--rp-muted);
        font-size: 1.08rem;
        line-height: 1.8;
        text-align: left;
    }

    .rp-section {
        margin: 3.8rem auto;
    }

    .section-head {
        display: grid;
        grid-template-columns: minmax(230px, .8fr) minmax(0, 1.2fr);
        gap: 2rem;
        align-items: end;
        margin: 0 0 1.4rem;
        text-align: left;
    }

    .section-head > div {
        min-width: 0;
    }

    .section-eyebrow {
        margin: 0 0 .55rem;
        color: var(--rp-purple);
        font-size: .76rem;
        font-weight: 900;
        letter-spacing: .13em;
        text-transform: uppercase;
        text-align: left;
    }

    .section-title {
        margin: 0;
        color: var(--rp-navy);
        font-size: clamp(1.85rem, 3vw, 2.55rem);
        line-height: 1.08;
        text-wrap: balance;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .section-copy {
        max-width: 640px;
        margin: 0;
        color: var(--rp-muted);
        line-height: 1.75;
    }

    .rp-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
        max-width: 980px;
        margin: 0 auto;
    }

    .platform-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
        max-width: 1040px;
        margin: 0 auto;
    }

    .rp-card {
        min-height: 100%;
        padding: 1.5rem;
        border: 1px solid var(--rp-line);
        border-radius: 16px;
        background: #fff;
        box-shadow: 0 10px 28px rgba(23, 32, 51, .07);
        box-sizing: border-box;
        text-align: left;
        transition: box-shadow .25s ease, border-color .25s ease;
    }

    .rp-card::before {
        content: "";
        display: block;
        width: 2.6rem;
        height: 3px;
        margin: 0 0 1rem;
        border-radius: 999px;
        background: var(--rp-green);
    }

    .rp-card:nth-child(2)::before {
        background: var(--rp-navy);
    }

    .rp-card:nth-child(3)::before {
        background: var(--rp-purple);
    }

    .rp-card:nth-child(4)::before {
        background: var(--rp-red);
    }

    @media (hover: hover) and (pointer: fine) {
        .rp-card:hover {
            border-color: rgba(44, 95, 45, .35);
            box-shadow: 0 18px 42px rgba(23, 32, 51, .11);
        }
    }

    .card-title {
        margin: 0 0 .7rem;
        color: var(--rp-navy);
        font-size: 1.12rem;
        line-height: 1.3;
        text-wrap: balance;
        text-align: left;
    }

    .card-copy {
        margin: 0;
        color: var(--rp-muted);
        line-height: 1.72;
        font-size: .98rem;
    }

    .program-band {
        padding: 3rem 0;
        background: linear-gradient(180deg, #f7fafc 0%, #eef4f8 100%);
        border-top: 1px solid var(--rp-line);
        border-bottom: 1px solid var(--rp-line);
    }

    @media (max-width: 900px) {
        .section-head {
            grid-template-columns: 1fr;
            gap: .75rem;
        }

        .rp-grid,
        .platform-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 640px) {
        .rp-shell {
            padding: 0 1rem;
        }

        .rp-hero {
            margin-bottom: 2.3rem;
            padding: 3.3rem 0 2.5rem;
        }

        .rp-title {
            font-size: clamp(2.7rem, 13vw, 4rem);
        }

        .rp-lead {
            font-size: 1rem;
        }

        .rp-grid,
        .platform-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .rp-card {
            transition: none;
        }
    }
</style>

<div class="rp-page">
    {% assign research = site.data.research.cn %}
    <section class="rp-hero">
        <div class="rp-shell">
            <p class="rp-kicker">{{ research.hero.kicker }}</p>
            <h1 class="rp-title">{{ research.hero.title }}</h1>
            <p class="rp-lead">{{ research.hero.lead }}</p>
        </div>
    </section>

    <section class="rp-section rp-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">{{ research.program.eyebrow }}</p>
                <h2 class="section-title">{{ research.program.title }}</h2>
            </div>
            <p class="section-copy">{{ research.program.copy }}</p>
        </div>
        <div class="platform-grid">
            {% for card in research.program.cards %}
            <article class="rp-card">
                <h3 class="card-title">{{ card.title }}</h3>
                <p class="card-copy">{{ card.copy }}</p>
            </article>
            {% endfor %}
        </div>
    </section>

    <section class="program-band">
        <div class="rp-shell">
            <div class="section-head">
                <div>
                    <p class="section-eyebrow">{{ research.focus.eyebrow }}</p>
                    <h2 class="section-title">{{ research.focus.title }}</h2>
                </div>
                <p class="section-copy">{{ research.focus.copy }}</p>
            </div>
            <div class="rp-grid">
                {% for card in research.focus.cards %}
                <article class="rp-card">
                    <h3 class="card-title">{{ card.title }}</h3>
                    <p class="card-copy">{{ card.copy }}</p>
                </article>
                {% endfor %}
            </div>
        </div>
    </section>

    <section class="rp-section rp-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">{{ research.platforms.eyebrow }}</p>
                <h2 class="section-title">{{ research.platforms.title }}</h2>
            </div>
            <p class="section-copy">{{ research.platforms.copy }}</p>
        </div>
        <div class="platform-grid">
            {% for card in research.platforms.cards %}
            <article class="rp-card">
                <h3 class="card-title">{{ card.title }}</h3>
                <p class="card-copy">{{ card.copy }}</p>
            </article>
            {% endfor %}
        </div>
    </section>
</div>
