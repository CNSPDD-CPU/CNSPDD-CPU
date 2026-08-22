---
layout: default
title: 新闻
permalink: /cn/news/
---

{% include news_styles.html %}




<div class="news-archive-page">
    <a class="news-skip-link" href="#news-archive-title">跳转到新闻列表</a>
    <section class="news-archive-hero" aria-labelledby="news-archive-title">
        <div>
            <p class="news-archive-kicker">Center dispatches · 2026</p>
            <h1 class="news-archive-title" id="news-archive-title" tabindex="-1">新闻与动态</h1>
            <p class="news-archive-intro">记录中心近期的科研交流、平台建设、国际合作与团队活动，按时间查看新闻现场与完整报道。</p>
        </div>
        <div class="news-archive-ledger" aria-label="新闻数量">
            <strong>06</strong>
            <span>篇中心新闻，持续更新</span>
        </div>
    </section>

    <section class="news-archive-section" aria-labelledby="news-section-title">
        <div class="news-section-head">
            <div>
                <p class="news-section-label">新闻汇总</p>
                <h2 class="news-section-title" id="news-section-title" tabindex="-1">从科研现场到合作网络</h2>
            </div>
            <p class="news-section-count">6 篇报道</p>
        </div>

        <div class="news-card-grid">
            {% assign news_items = site.data.news.cn %}
            {% for item in news_items %}
            <a class="news-card{% if forloop.first %} news-card--feature{% endif %}" href="{{ item.url | relative_url }}" aria-label="查看 {{ item.title }}">
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
                    <span class="news-card-cta">阅读全文 <span aria-hidden="true">→</span></span>
                </div>
            </a>
            {% endfor %}
        </div>

        <div class="news-archive-footer">
            <span class="news-archive-footer-mark" aria-hidden="true"></span>
            <span>每篇报道保留中英文正文、现场图片与图注。</span>
        </div>
    </section>
    <a class="news-back-link" href="{{ '/cn/' | relative_url }}">← 返回首页</a>
</div>
