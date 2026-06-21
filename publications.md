---
layout: default
title: Publications
permalink: /publications/
---

<style>
.template-page { max-width: 1200px; margin: 0 auto; padding: 0 2rem 4rem; }
.template-hero { padding: 4rem 0 2.5rem; border-bottom: 1px solid #e1e8ed; }
.template-eyebrow { margin: 0 0 .45rem; color: #735DA5; font-size: .82rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.template-hero h1 { max-width: 820px; margin: 0 0 1rem; color: #1E2761; font-size: clamp(2.1rem, 4vw, 3.6rem); line-height: 1.1; text-align: left; background: none; -webkit-text-fill-color: currentColor; }
.template-hero p, .template-section-head p, .template-card p { color: #526071; line-height: 1.75; }
.template-section { margin: 2.8rem 0 0; }
.template-section-head { display: grid; grid-template-columns: minmax(220px, .8fr) minmax(320px, 1.2fr); gap: 1.4rem; align-items: end; margin-bottom: 1.2rem; }
.template-section-head h2 { margin: 0; color: #1E2761; font-size: 1.8rem; line-height: 1.2; text-align: left; }
.template-section-head p:not(.template-eyebrow) { margin: 0; }
.template-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.template-list { display: grid; gap: 1rem; }
.template-card { padding: 1.25rem; border: 1px solid #e1e8ed; border-radius: 8px; background: #fff; box-shadow: 0 2px 12px rgba(30,39,97,.08); }
.template-card h3 { margin: 0 0 .55rem; color: #1E2761; font-size: 1.05rem; line-height: 1.35; text-align: left; }
.template-card p { margin: 0; }
.template-meta { margin-top: .9rem; padding-top: .75rem; border-top: 1px solid #e1e8ed; color: #2C5F2D; font-size: .86rem; font-weight: 800; }
@media (max-width: 768px) { .template-page { padding: 0 1rem 3rem; } .template-section-head, .template-grid { grid-template-columns: 1fr; } }
</style>

<div class="template-page">
    {% assign publications = site.data.publications.en %}
    <section class="template-hero">
        <p class="template-eyebrow">{{ publications.hero.eyebrow }}</p>
        <h1>{{ publications.hero.title }}</h1>
        <p>{{ publications.hero.copy }}</p>
    </section>

    <section class="template-section">
        <div class="template-section-head">
            <div>
                <p class="template-eyebrow">{{ publications.section.eyebrow }}</p>
                <h2>{{ publications.section.title }}</h2>
            </div>
            <p>{{ publications.section.copy }}</p>
        </div>
        <div class="template-list">
            {% for item in publications.items %}
            <article class="template-card">
                <h3>{{ item.title }}</h3>
                <p>{{ item.copy }}</p>
                <div class="template-meta">{{ item.meta }}</div>
            </article>
            {% endfor %}
        </div>
    </section>
</div>
