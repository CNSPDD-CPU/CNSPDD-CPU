---
layout: default
title: 研究与平台
permalink: /cn/research/
---

{% include research_styles.html %}

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
