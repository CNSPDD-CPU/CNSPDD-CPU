---
layout: default
title: ??
permalink: /cn/people/
---

{% include standard_page_styles.html %}



<div class="template-page">
    {% assign people = site.data.people.cn %}
    <section class="template-hero">
        <p class="template-eyebrow">{{ people.hero.eyebrow }}</p>
        <h1>{{ people.hero.title }}</h1>
        <p>{{ people.hero.copy }}</p>
    </section>

    <section class="template-section">
        <div class="template-section-head">
            <div>
                <p class="template-eyebrow">{{ people.section.eyebrow }}</p>
                <h2>{{ people.section.title }}</h2>
            </div>
            <p>{{ people.section.copy }}</p>
        </div>
        <div class="template-grid">
            {% for group in people.groups %}
            <article class="template-card">
                <h3>{{ group.title }}</h3>
                <p>{{ group.copy }}</p>
                <div class="template-meta">{{ group.meta }}</div>
            </article>
            {% endfor %}
        </div>
    </section>
</div>
