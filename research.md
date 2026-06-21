---
layout: default
title: Research and Platforms
permalink: /research/
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
    }

    .rp-shell {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 2rem;
        box-sizing: border-box;
    }

    .rp-hero {
        margin: 0 auto 2.8rem;
        padding: 4rem 0;
        background: linear-gradient(135deg, #eef5f2 0%, #f7f9fc 48%, #eef0f7 100%);
        border-bottom: 1px solid var(--rp-line);
    }

    .rp-kicker {
        margin: 0 0 0.5rem;
        color: var(--rp-purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-align: center;
    }

    .rp-title {
        max-width: 850px;
        margin: 0 auto 1rem;
        color: var(--rp-navy);
        font-size: clamp(2.2rem, 4.5vw, 4rem);
        line-height: 1.05;
        text-align: center;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .rp-lead {
        max-width: 820px;
        margin: 0 auto;
        color: var(--rp-muted);
        font-size: 1.12rem;
        line-height: 1.75;
        text-align: center;
    }

    .rp-section {
        margin: 4rem auto;
    }

    .section-head {
        max-width: 900px;
        margin: 0 auto 2rem;
        text-align: center;
    }

    .section-eyebrow {
        margin: 0 0 0.35rem;
        color: var(--rp-purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-align: center;
    }

    .section-title {
        margin: 0;
        color: var(--rp-navy);
        font-size: clamp(1.75rem, 3vw, 2.45rem);
        line-height: 1.15;
        text-align: center;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .section-copy {
        max-width: 760px;
        margin: 0.9rem auto 0;
        color: var(--rp-muted);
        line-height: 1.7;
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
        padding: 1.45rem;
        border: 1px solid var(--rp-line);
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 10px 28px rgba(23, 32, 51, 0.07);
        box-sizing: border-box;
        text-align: center;
    }

    .rp-card::before {
        content: "";
        display: block;
        width: 42px;
        height: 4px;
        margin: 0 auto 1rem;
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

    .card-title {
        margin: 0 0 0.7rem;
        color: var(--rp-navy);
        font-size: 1.08rem;
        line-height: 1.35;
        text-align: center;
    }

    .card-copy {
        margin: 0;
        color: var(--rp-muted);
        line-height: 1.65;
        font-size: 0.98rem;
    }

    .program-band {
        padding: 2.2rem 0;
        background: linear-gradient(180deg, #f7fafc 0%, #eef4f8 100%);
        border-top: 1px solid var(--rp-line);
        border-bottom: 1px solid var(--rp-line);
    }

    @media (max-width: 900px) {
        .rp-grid,
        .platform-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 640px) {
        .rp-shell {
            padding: 0 1rem;
        }

        .rp-grid,
        .platform-grid {
            grid-template-columns: 1fr;
        }

        .section-head { text-align: center; }
    }
</style>

<div class="rp-page">
    {% assign research = site.data.research.en %}
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
