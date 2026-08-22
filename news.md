---
layout: default
title: News
permalink: /news/
---

{% include news_styles.html %}




<div class="news-archive-page">
    <a class="news-skip-link" href="#news-archive-title">Skip to news archive</a>
    <section class="news-archive-hero" aria-labelledby="news-archive-title">
        <div>
            <p class="news-archive-kicker">Center dispatches · 2026</p>
            <h1 class="news-archive-title" id="news-archive-title" tabindex="-1">News and updates</h1>
            <p class="news-archive-intro">A living record of the Center’s research exchange, platform building, international collaboration, and team life.</p>
        </div>
        <div class="news-archive-ledger" aria-label="Number of stories">
            <strong>06</strong>
            <span>stories from the Center</span>
        </div>
    </section>

    <section class="news-archive-section" aria-labelledby="news-section-title">
        <div class="news-section-head">
            <div>
                <p class="news-section-label">News archive</p>
                <h2 class="news-section-title" id="news-section-title" tabindex="-1">From research rooms to global exchange</h2>
            </div>
            <p class="news-section-count">6 stories</p>
        </div>

        <div class="news-card-grid">
            {% assign news_items = site.data.news.en %}
            {% for item in news_items %}
            <a class="news-card{% if forloop.first %} news-card--feature{% endif %}" href="{{ item.url | relative_url }}" aria-label="View {{ item.title }}">
                <div class="news-card-media">
                    <img src="{{ item.image | relative_url }}" alt="{{ item.image_alt }}" width="{{ item.width }}" height="{{ item.height }}" {% if forloop.first %}loading="eager" fetchpriority="high"{% else %}loading="lazy"{% endif %} decoding="async">
                    <span class="news-card-index">0{{ forloop.index }}</span>
                </div>
                <div class="news-card-body">
                    <div class="news-card-meta">
                        <time class="news-card-date" datetime="{{ item.iso_date }}">{{ item.date }}</time>
                        <span class="news-chip news-chip--{{ item.category_key }}">{{ item.category }}</span>
                    </div>
                    <h3 class="news-card-title">{{ item.title }}</h3>
                    <p class="news-card-excerpt">{{ item.excerpt }}</p>
                    <span class="news-card-cta">Read full story <span aria-hidden="true">→</span></span>
                </div>
            </a>
            {% endfor %}
        </div>

        <div class="news-archive-footer">
            <span class="news-archive-footer-mark" aria-hidden="true"></span>
            <span>Each dispatch keeps the full bilingual source story, image gallery, and captions.</span>
        </div>
    </section>
    <a class="news-back-link" href="{{ '/' | relative_url }}">← Back to home</a>
</div>
