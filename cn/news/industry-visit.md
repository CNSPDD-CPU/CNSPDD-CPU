---
layout: default
title: "神经科学与精准药物研发中心主任一行赴药大制药、药大健康开展调研交流"
permalink: /cn/news/industry-visit/
---

<style>
.news-archive-page,
.news-article-page {
    --news-ink: #172033;
    --news-muted: #526071;
    --news-line: #dce5ee;
    --news-green: #2C5F2D;
    --news-navy: #1E2761;
    --news-purple: #735DA5;
    --news-mist: #f4f7fa;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
    color: var(--news-ink);
    box-sizing: border-box;
    overflow-x: clip;
}

.news-skip-link {
    position: fixed;
    top: .75rem;
    left: 1rem;
    z-index: 2000;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: .6rem .9rem;
    border-radius: 999px;
    color: #fff;
    background: var(--news-navy);
    box-shadow: 0 8px 20px rgba(30,39,97,.2);
    text-decoration: none;
    transform: translateY(-160%);
    transition: transform .2s ease;
}

.news-skip-link::after,
.news-back-link::after,
.news-card::after {
    display: none;
}

.news-skip-link:focus-visible {
    outline: 3px solid var(--news-purple);
    outline-offset: 3px;
    transform: translateY(0);
}

.news-archive-page [id],
.news-article-page [id] {
    scroll-margin-top: 7rem;
}

.news-archive-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(260px, .85fr);
    gap: 2rem;
    align-items: end;
    padding: 4.3rem 0 3rem;
    border-bottom: 1px solid var(--news-line);
}

.news-archive-kicker,
.news-section-label,
.news-article-kicker {
    margin: 0 0 .6rem;
    color: var(--news-green);
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.news-archive-title {
    max-width: 760px;
    margin: 0;
    color: var(--news-navy);
    font-size: clamp(2.65rem, 5.4vw, 5rem);
    line-height: 1.02;
    letter-spacing: -.05em;
    text-align: left;
    background: none;
    -webkit-text-fill-color: currentColor;
}

.news-archive-intro {
    max-width: 700px;
    margin: .95rem 0 0;
    color: var(--news-muted);
    font-size: 1.06rem;
    line-height: 1.8;
}

.news-archive-ledger {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: .9rem;
    align-items: center;
    padding: 1rem 0 1rem 1rem;
    border-left: 3px solid var(--news-purple);
    background: linear-gradient(90deg, rgba(115,93,165,.08), transparent);
}

.news-archive-ledger strong {
    display: block;
    color: var(--news-navy);
    font-size: 2.6rem;
    line-height: 1;
    letter-spacing: -.05em;
}

.news-archive-ledger span {
    display: block;
    margin-top: .2rem;
    color: var(--news-muted);
    line-height: 1.55;
}

.news-archive-section {
    margin-top: 2.7rem;
}

.news-section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1.2rem;
    margin-bottom: 1.1rem;
}

.news-section-title {
    margin: 0;
    color: var(--news-navy);
    font-size: 1.7rem;
    line-height: 1.2;
    text-align: left;
}

.news-section-count {
    margin: 0;
    color: var(--news-green);
    font-size: .82rem;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.news-card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
}

.news-card {
    display: flex;
    min-width: 0;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--news-line);
    border-radius: 22px;
    color: inherit;
    background: #fff;
    box-shadow: 0 16px 42px rgba(23,32,51,.08);
    text-decoration: none;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.news-card--feature {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
}

.news-card:hover {
    border-color: rgba(44,95,45,.38);
    box-shadow: 0 22px 52px rgba(23,32,51,.13);
    color: inherit;
    transform: translateY(-4px);
}

.news-card:focus-visible {
    outline: 3px solid rgba(115,93,165,.58);
    outline-offset: 4px;
}

.news-card-media {
    position: relative;
    min-height: 220px;
    overflow: hidden;
    background: linear-gradient(155deg, var(--news-navy), var(--news-green));
}

.news-card--feature .news-card-media {
    min-height: 340px;
}

.news-card-media img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
    object-fit: cover;
    transition: transform .35s ease;
}

.news-card--feature .news-card-media img {
    min-height: 340px;
}

.news-card:hover .news-card-media img,
.news-card:focus-visible .news-card-media img {
    transform: scale(1.035);
}

.news-card-index {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.2rem;
    min-height: 2.2rem;
    padding: .25rem .45rem;
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 999px;
    color: #fff;
    background: rgba(23,32,51,.58);
    font-size: .76rem;
    font-weight: 900;
    letter-spacing: .08em;
    backdrop-filter: blur(10px);
}

.news-card-body {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;
    padding: 1.55rem 1.65rem 1.7rem;
}

.news-card-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .55rem .75rem;
    margin-bottom: .85rem;
}

.news-card-date {
    color: var(--news-green);
    font-size: .78rem;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.news-chip {
    display: inline-flex;
    align-items: center;
    min-height: 1.75rem;
    padding: .25rem .55rem;
    border: 1px solid rgba(115,93,165,.22);
    border-radius: 999px;
    color: var(--news-purple);
    background: rgba(115,93,165,.08);
    font-size: .72rem;
    font-weight: 800;
}

.news-card-title {
    margin: 0;
    color: var(--news-navy);
    font-size: clamp(1.3rem, 2.2vw, 1.75rem);
    line-height: 1.2;
    letter-spacing: -.025em;
    text-wrap: balance;
}

.news-card-excerpt {
    margin: .85rem 0 0;
    color: var(--news-muted);
    line-height: 1.72;
}

.news-card-cta {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    margin-top: auto;
    padding-top: 1.25rem;
    color: var(--news-navy);
    font-size: .88rem;
    font-weight: 900;
}

.news-card-cta span {
    color: var(--news-purple);
    font-size: 1.2rem;
    transition: transform .25s ease;
}

.news-card:hover .news-card-cta span,
.news-card:focus-visible .news-card-cta span {
    transform: translateX(4px);
}

.news-archive-footer {
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-top: 1.6rem;
    padding-top: 1rem;
    border-top: 1px solid var(--news-line);
    color: var(--news-muted);
    font-size: .88rem;
}

.news-archive-footer-mark {
    width: .5rem;
    height: 2.4rem;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--news-purple), var(--news-green));
}

.news-back-link {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    margin-top: 2.5rem;
    color: var(--news-green);
    font-weight: 900;
    text-decoration: none;
}

.news-article-back {
    padding-top: 2rem;
}

.news-article-header {
    max-width: 900px;
    padding: 2rem 0 1.4rem;
}

.news-article-title {
    margin: 0;
    color: var(--news-navy);
    font-size: clamp(2.25rem, 5vw, 4.75rem);
    line-height: 1.06;
    letter-spacing: -.045em;
    text-align: left;
    background: none;
    -webkit-text-fill-color: currentColor;
}

.news-article-lead {
    max-width: 780px;
    margin: 1rem 0 0;
    color: var(--news-muted);
    font-size: 1.08rem;
    line-height: 1.8;
}

.news-article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem .9rem;
    align-items: center;
    margin-top: 1.25rem;
    color: var(--news-muted);
    font-size: .84rem;
    font-weight: 800;
}

.news-article-meta time {
    color: var(--news-green);
    letter-spacing: .08em;
    text-transform: uppercase;
}

.news-article-hero {
    margin: 1rem 0 0;
    overflow: hidden;
    border: 1px solid var(--news-line);
    border-radius: 24px;
    background: var(--news-mist);
    box-shadow: 0 18px 48px rgba(23,32,51,.1);
}

.news-article-hero img {
    display: block;
    width: 100%;
    max-height: 540px;
    object-fit: cover;
}

.news-figure-caption {
    padding: .8rem 1rem .95rem;
    color: var(--news-muted);
    font-size: .82rem;
    line-height: 1.5;
}

.news-article-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(230px, .3fr);
    gap: 2.5rem;
    align-items: start;
    margin-top: 2.5rem;
}

.news-article-copy {
    min-width: 0;
    max-width: 760px;
}

.news-article-copy p {
    margin: 0 0 1.15rem;
    color: var(--news-muted);
    font-size: 1.02rem;
    line-height: 1.9;
}

.news-article-brief {
    margin: 0 0 1.7rem;
    padding: 1rem 1.1rem 1.05rem;
    border-left: 3px solid var(--news-purple);
    background: rgba(115,93,165,.07);
}

.news-article-brief-label {
    margin: 0 0 .35rem;
    color: var(--news-purple);
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
}

.news-article-brief p {
    margin: 0;
    color: var(--news-ink);
    font-size: .95rem;
    line-height: 1.7;
}

.news-article-side {
    position: sticky;
    top: 6rem;
    padding: 1rem 0 1rem 1.2rem;
    border-left: 1px solid var(--news-line);
}

.news-article-side-kicker {
    margin: 0 0 .7rem;
    color: var(--news-green);
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
}

.news-article-side-line {
    display: grid;
    gap: .22rem;
    padding: .85rem 0;
    border-top: 1px solid var(--news-line);
}

.news-article-side-line span {
    color: var(--news-muted);
    font-size: .78rem;
}

.news-article-side-line strong {
    color: var(--news-navy);
    font-size: .95rem;
    line-height: 1.45;
}

.news-article-gallery {
    margin-top: 2.8rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--news-line);
}

.news-article-gallery-title {
    margin: 0 0 1rem;
    color: var(--news-navy);
    font-size: 1.45rem;
}

.news-gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.news-figure {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--news-line);
    border-radius: 16px;
    background: var(--news-mist);
}

.news-figure img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 220px;
    object-fit: cover;
}

.news-figure figcaption {
    padding: .7rem .8rem .85rem;
    color: var(--news-muted);
    font-size: .78rem;
    line-height: 1.5;
}

@media (max-width: 900px) {
    .news-archive-page,
    .news-article-page {
        padding: 0 1.25rem 4rem;
    }

    .news-archive-hero {
        grid-template-columns: 1fr;
        gap: 1.2rem;
        padding-top: 3rem;
    }

    .news-card--feature {
        grid-template-columns: 1fr;
    }

    .news-card--feature .news-card-media,
    .news-card--feature .news-card-media img {
        min-height: 280px;
    }

    .news-article-content {
        grid-template-columns: 1fr;
        gap: 1.7rem;
    }

    .news-article-side {
        position: static;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0 1rem;
        padding: 1rem 0 0;
        border-top: 1px solid var(--news-line);
        border-left: 0;
    }

    .news-article-side-kicker {
        grid-column: 1 / -1;
    }

    .news-article-side-line {
        border-top: 0;
        border-bottom: 1px solid var(--news-line);
    }
}

@media (max-width: 640px) {
    .news-archive-page,
    .news-article-page {
        padding: 0 1rem 3.5rem;
    }

    .news-archive-title {
        font-size: 2.55rem;
    }

    .news-section-head {
        align-items: start;
        flex-direction: column;
        gap: .35rem;
    }

    .news-card-grid,
    .news-gallery-grid {
        grid-template-columns: 1fr;
    }

    .news-card-media,
    .news-card-media img,
    .news-card--feature .news-card-media,
    .news-card--feature .news-card-media img {
        min-height: 230px;
    }

    .news-card-body {
        padding: 1.3rem 1.2rem 1.4rem;
    }

    .news-article-title {
        font-size: 2.35rem;
    }

    .news-article-hero img {
        min-height: 230px;
    }

    .news-article-side {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
    .news-skip-link,
    .news-card,
    .news-card-media img,
    .news-card-cta span {
        transition: none;
    }
}
</style>


<div class="news-article-page">
    <div class="news-article-back">
        <a class="news-back-link" href="{{ '/cn/news/' | relative_url }}">← 返回新闻汇总</a>
    </div>
    <header class="news-article-header">
        <p class="news-article-kicker">中心动态 · CNSPDD</p>
        <h1 class="news-article-title">神经科学与精准药物研发中心主任一行赴药大制药、药大健康开展调研交流</h1>
        <p class="news-article-lead">Frank Kirchhoff 教授一行赴药大制药、药大健康开展调研，围绕科研转化和校企协同进行交流。</p>
        <div class="news-article-meta">
            <time datetime="2026-06-25">2026年6月25日</time>
            <span class="news-chip news-chip--industry">产学研交流</span>
        </div>
    </header>

    <figure class="news-article-hero">
        <img src="{{ '/assets/images/news/industry-visit.jpg' | relative_url }}" alt="Frank Kirchhoff教授一行开展调研交流" width="1600" height="1067" loading="eager" decoding="async">
        <figcaption class="news-figure-caption">Frank Kirchhoff教授一行开展调研交流</figcaption>
    </figure>

    <div class="news-article-content">
        <div class="news-article-copy">
            
            <p>2026年6月25日，神经科学与精准药物研发中心主任、欧洲科学院院士Frank Kirchhoff教授一行赴药大制药、药大健康开展调研交流。神经科学与精准药物研发中心PI白贤淑教授、主任助理高涵参加调研。</p>
<p>调研期间，Frank Kirchhoff教授一行实地了解了药大制药、药大健康在企业发展、产品布局、研发转化和生命健康产业服务等方面的情况，并围绕神经科学研究转化、创新药物研发、健康产品开发、产学研协同及国际合作等内容与相关负责人进行了交流。</p>
<p>交流中，双方结合神经科学与精准药物研发中心的研究方向和平台优势，就如何进一步推动基础研究与产业需求对接、促进科研成果转化、拓展校企合作模式等进行了探讨。Frank Kirchhoff教授表示，神经科学研究的发展不仅需要高水平基础研究支撑，也需要面向真实应用场景加强交叉合作与转化探索。</p>
<p>此次调研进一步加深了神经科学与精准药物研发中心对学校相关产业平台和生命健康领域转化实践的了解，也为中心后续围绕神经科学、精准药物研发和健康产业应用开展协同创新提供了新的思路。中心将继续发挥国际化人才和学科交叉优势，积极推动科研平台建设、成果转化和产学研合作，为学校生命健康领域高质量发展贡献力量。</p>
        </div>
        <aside class="news-article-side" aria-label="信息速览">
            <p class="news-article-side-kicker">信息速览</p>
            <div class="news-article-side-line">
                <span>发布时间</span>
                <strong>2026年6月25日</strong>
            </div>
            <div class="news-article-side-line">
                <span>报道类型</span>
                <strong>产学研交流</strong>
            </div>
            <div class="news-article-side-line">
                <span>图片</span>
                <strong>4 张图片</strong>
            </div>
        </aside>
    </div>

        <section class="news-article-gallery" aria-labelledby="industry-visit-gallery-title">
            <h2 class="news-article-gallery-title" id="industry-visit-gallery-title">现场图集</h2>
            <div class="news-gallery-grid">
                <figure class="news-figure">
                <img src="{{ '/assets/images/news/industry-products.jpg' | relative_url }}" alt="调研人员实地了解企业产品布局和研发转化情况" width="1600" height="1067" loading="lazy" decoding="async">
                <figcaption>调研人员实地了解企业产品布局和研发转化情况</figcaption>
            </figure>
<figure class="news-figure">
                <img src="{{ '/assets/images/news/industry-collaboration.jpg' | relative_url }}" alt="调研人员实地了解企业产品布局和研发转化情况" width="1600" height="1067" loading="lazy" decoding="async">
                <figcaption>调研人员实地了解企业产品布局和研发转化情况</figcaption>
            </figure>
<figure class="news-figure">
                <img src="{{ '/assets/images/news/industry-discussion.jpg' | relative_url }}" alt="双方围绕生命健康产业发展与产学研合作进行交流" width="1600" height="1067" loading="lazy" decoding="async">
                <figcaption>双方围绕生命健康产业发展与产学研合作进行交流</figcaption>
            </figure>
            </div>
        </section>
</div>
