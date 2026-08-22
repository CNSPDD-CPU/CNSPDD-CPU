---
layout: default
title: Home
permalink: /
---

{% include home_styles.html %}

{% assign home = site.data.home.en %}
<div class="home-page">
    <section class="home-hero" aria-labelledby="home-title">
        <div class="home-shell home-hero-grid">
            <div class="home-hero-copy">
                <p class="home-kicker">China Pharmaceutical University · CNSIDD</p>
                <h1 class="home-title" id="home-title">{{ home.hero.title }}</h1>
                <p class="home-subtitle">{{ home.hero.subtitle }}</p>
                <div class="home-actions">
                    <a class="home-btn home-btn-primary" href="{{ '/research/' | relative_url }}"><i class="fas fa-microscope" aria-hidden="true"></i> {{ home.hero.primary_button }}</a>
                    <a class="home-btn home-btn-secondary" href="{{ '/jobs/' | relative_url }}"><i class="fas fa-user-plus" aria-hidden="true"></i> {{ home.hero.secondary_button }}</a>
                </div>
                <ul class="home-tag-list" aria-label="Research themes">
                    {% for tag in home.hero.tags %}
                    <li>{{ tag }}</li>
                    {% endfor %}
                </ul>
            </div>
            <aside class="home-field-note home-route-rotator"
                   data-home-rotator
                   data-interval="6500"
                   data-pause-label="Pause"
                   data-play-label="Play"
                   role="region"
                   aria-roledescription="carousel"
                   aria-label="Explore the Center">
                <div class="home-route-viewport" id="home-route-viewport">
                    {% for route in home.routes %}
                    <article class="home-route-slide{% if forloop.first %} is-active{% endif %}"
                             data-home-route-slide
                             data-route-name="{{ route.label }}"
                             role="group"
                             aria-roledescription="slide"
                             aria-label="{{ forloop.index }} of {{ forloop.length }}"
                             aria-hidden="{% if forloop.first %}false{% else %}true{% endif %}"
                             {% unless forloop.first %}hidden{% endunless %}>
                        <p class="home-field-label">Explore the Center · {{ route.label }}</p>
                        <span class="home-field-number" aria-hidden="true">{{ route.number }}</span>
                        <h2 class="home-route-title">{{ route.title }}</h2>
                        <p>{{ route.copy }}</p>
                        <a class="home-field-route" href="{{ route.url | relative_url }}"{% unless forloop.first %} tabindex="-1"{% endunless %}>{{ route.action }}</a>
                    </article>
                    {% endfor %}
                </div>
                <div class="home-route-controls" aria-label="Carousel controls">
                    <button class="home-route-control" type="button" data-home-route-prev aria-label="Show previous section"><span aria-hidden="true">←</span></button>
                    <span class="home-route-progress" aria-hidden="true"><strong data-home-route-current>01</strong><span>/ {{ home.routes.size | prepend: '0' }}</span></span>
                    <button class="home-route-control" type="button" data-home-route-next aria-label="Show next section"><span aria-hidden="true">→</span></button>
                    <button class="home-route-toggle" type="button" data-home-route-toggle aria-pressed="false">Pause</button>
                </div>
                <span class="sr-only" data-home-rotator-status aria-live="polite"></span>
            </aside>
        </div>
    </section>

    <section class="home-section home-shell" aria-labelledby="mission-title">
        <div class="home-section-head">
            <div>
                <p class="home-section-marker">01 / Center mission</p>
                <h2 class="home-section-title" id="mission-title">{{ home.mission.title }}</h2>
            </div>
            <p class="home-section-copy">{{ home.mission.copy }}</p>
        </div>
        <div class="home-mission-grid">
            {% for card in home.mission.cards %}
            <article class="home-mission-card">
                <span class="home-card-index">0{{ forloop.index }}</span>
                <h3>{{ card.title }}</h3>
                <p>{{ card.copy }}</p>
            </article>
            {% endfor %}
        </div>
    </section>

    <section class="home-news-band" aria-labelledby="latest-news-title">
        <div class="home-shell home-section">
            <div class="home-section-head home-news-head">
                <div>
                    <p class="home-section-marker">02 / Latest dispatches</p>
                    <h2 class="home-section-title" id="latest-news-title">Research in motion</h2>
                </div>
                <a class="home-news-link" href="{{ '/news/' | relative_url }}">View all news →</a>
            </div>
            <div class="home-news-grid">
                {% for item in site.data.news.en limit: 3 %}
                <a class="home-news-card" href="{{ item.url | relative_url }}" aria-label="Read {{ item.title }}">
                    <div class="home-news-media">
                        <img src="{{ item.image | relative_url }}" alt="{{ item.image_alt }}" width="{{ item.width }}" height="{{ item.height }}" {% if forloop.first %}loading="eager" fetchpriority="high"{% else %}loading="lazy"{% endif %} decoding="async">
                    </div>
                    <div class="home-news-body">
                        <div class="home-news-meta">
                            <time datetime="{{ item.iso_date }}">{{ item.date }}</time>
                            <span>{{ item.category }}</span>
                        </div>
                        <h3 class="home-news-title">{{ item.card_title | default: item.title }}</h3>
                        <p class="home-news-excerpt">{{ item.excerpt }}</p>
                    </div>
                </a>
                {% endfor %}
            </div>
        </div>
    </section>
</div>

<script src="{{ '/assets/js/home-rotator.js' | relative_url }}?v=20260822-1" defer></script>
