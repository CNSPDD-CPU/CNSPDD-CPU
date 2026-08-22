---
layout: default
title: Publications
permalink: /publications/
---

{% include standard_page_styles.html %}



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
