---
layout: default
title: PI团队
permalink: /cn/pi/
---

<style>

.pi-overview-page {
    --pi-ink: #183047;
    --pi-teal: #0f766e;
    --pi-coral: #c76d4e;
    --pi-mist: #f1f5f4;
    --pi-line: #d8e5e5;
    --pi-muted: #5e6d78;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
}

.pi-overview-hero {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(320px, 1.1fr);
    gap: 2rem;
    align-items: end;
    padding: 4.3rem 0 2.8rem;
    border-bottom: 1px solid var(--pi-line);
}

.pi-overview-kicker,
.pi-overview-section-label,
.pi-directory-label {
    margin: 0 0 .55rem;
    color: var(--pi-teal);
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.pi-overview-hero h1 {
    max-width: 760px;
    margin: 0;
    color: var(--pi-ink);
    font-size: clamp(2.4rem, 5vw, 4.7rem);
    line-height: 1.02;
    letter-spacing: -.05em;
    text-align: left;
    background: none;
    -webkit-text-fill-color: currentColor;
}

.pi-overview-intro {
    margin: 0;
    color: var(--pi-muted);
    font-size: 1.06rem;
    line-height: 1.8;
}

.pi-overview-ribbon {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: .9rem;
    align-items: center;
    margin-top: 1.2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--pi-line);
}

.pi-overview-ribbon-mark {
    width: .55rem;
    height: 3.1rem;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--pi-coral), var(--pi-teal));
}

.pi-overview-ribbon strong {
    display: block;
    color: var(--pi-ink);
    font-size: .9rem;
    letter-spacing: .04em;
}

.pi-overview-ribbon span {
    display: block;
    margin-top: .2rem;
    color: var(--pi-muted);
    font-size: .88rem;
    line-height: 1.5;
}

.pi-overview-section {
    margin-top: 2.7rem;
}

.pi-overview-section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1.25rem;
    margin-bottom: 1.1rem;
}

.pi-overview-section-head h2 {
    margin: 0;
    color: var(--pi-ink);
    font-size: 1.7rem;
    line-height: 1.2;
    text-align: left;
}

.pi-overview-count {
    margin: 0;
    color: var(--pi-teal);
    font-size: .82rem;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.pi-directory-grid {
    display: grid;
    gap: 1.2rem;
}

.pi-directory-card {
    display: grid;
    grid-template-columns: minmax(220px, .7fr) minmax(0, 1.3fr);
    overflow: hidden;
    border: 1px solid var(--pi-line);
    border-radius: 24px;
    color: inherit;
    background: #fff;
    box-shadow: 0 16px 42px rgba(24, 48, 71, .1);
    text-decoration: none;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.pi-directory-card::after {
    display: none;
}

.pi-directory-card:hover {
    border-color: rgba(15,118,110,.42);
    box-shadow: 0 22px 52px rgba(24, 48, 71, .15);
    color: inherit;
    transform: translateY(-4px);
}

.pi-directory-card:focus-visible {
    outline: 3px solid rgba(199,109,78,.55);
    outline-offset: 4px;
}

.pi-directory-media {
    position: relative;
    min-height: 330px;
    overflow: hidden;
    background: linear-gradient(155deg, #183047 0%, #0f5d60 100%);
}

.pi-directory-media::after {
    position: absolute;
    right: -6rem;
    bottom: 4.2rem;
    width: 20rem;
    height: 7rem;
    border-top: 1px solid rgba(255,255,255,.35);
    border-radius: 50%;
    content: "";
    transform: rotate(-17deg);
}

.pi-directory-media img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 330px;
    object-fit: cover;
    object-position: 50% 40%;
}

.pi-directory-stamp {
    position: absolute;
    left: 1.2rem;
    bottom: 1.15rem;
    z-index: 1;
    padding: .45rem .65rem;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 999px;
    color: #fff;
    background: rgba(24,48,71,.55);
    font-size: .72rem;
    font-weight: 900;
    letter-spacing: .1em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
}

.pi-directory-body {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    padding: 2.1rem 2.3rem 2.25rem;
}

.pi-directory-label {
    color: var(--pi-coral);
}

.pi-directory-name {
    margin: 0;
    color: var(--pi-ink);
    font-size: clamp(2rem, 4vw, 3.1rem);
    line-height: 1;
    letter-spacing: -.04em;
    text-align: left;
}

.pi-directory-subname {
    margin: .45rem 0 1rem;
    color: var(--pi-muted);
    font-size: 1rem;
    letter-spacing: .1em;
}

.pi-directory-role {
    margin: 0;
    color: var(--pi-teal);
    font-weight: 900;
    line-height: 1.5;
}

.pi-directory-summary {
    max-width: 650px;
    margin: 1.05rem 0 1.15rem;
    color: var(--pi-muted);
    line-height: 1.78;
}

.pi-directory-tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}

.pi-directory-tags span {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: .35rem .65rem;
    border: 1px solid rgba(15,118,110,.18);
    border-radius: 999px;
    color: var(--pi-teal);
    background: var(--pi-mist);
    font-size: .78rem;
    font-weight: 800;
}

.pi-directory-cta {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    margin-top: 1.6rem;
    color: var(--pi-ink);
    font-size: .9rem;
    font-weight: 900;
}

.pi-directory-cta span {
    color: var(--pi-coral);
    font-size: 1.25rem;
    line-height: 1;
    transition: transform .25s ease;
}

.pi-directory-card:hover .pi-directory-cta span {
    transform: translateX(4px);
}

@media (max-width: 820px) {
    .pi-overview-page {
        padding: 0 1rem 3.5rem;
    }

    .pi-overview-hero {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding-top: 3rem;
    }

    .pi-directory-card {
        grid-template-columns: 180px minmax(0, 1fr);
    }

    .pi-directory-media,
    .pi-directory-media img {
        min-height: 280px;
    }

    .pi-directory-body {
        padding: 1.5rem;
    }
}

@media (max-width: 640px) {
    .pi-overview-hero h1 {
        font-size: 2.55rem;
    }

    .pi-overview-section-head {
        align-items: start;
        flex-direction: column;
        gap: .35rem;
    }

    .pi-directory-card {
        display: block;
    }

    .pi-directory-media,
    .pi-directory-media img {
        min-height: 360px;
        max-height: 480px;
    }

    .pi-directory-body {
        padding: 1.45rem 1.25rem 1.6rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pi-directory-card,
    .pi-directory-cta span {
        transition: none;
    }
}

</style>

<div class="pi-overview-page">
    <section class="pi-overview-hero" aria-labelledby="pi-overview-title">
        <div>
            <p class="pi-overview-kicker">PI团队 · 实验平台</p>
            <h1 id="pi-overview-title">PI团队总览</h1>
        </div>
        <div>
            <p class="pi-overview-intro">浏览连接疾病机制、血管生物学与转化药物研发的实验平台 PI，点击卡片进入个人研究资料。</p>
            <div class="pi-overview-ribbon">
                <span class="pi-overview-ribbon-mark" aria-hidden="true"></span>
                <div>
                    <strong>先看研究地图，再深入个人资料。</strong>
                    <span>选择一位 PI，可进一步查看研究方向、代表性论文与专利成果。</span>
                </div>
            </div>
        </div>
    </section>

    <section class="pi-overview-section" aria-labelledby="pi-directory-title">
        <div class="pi-overview-section-head">
            <div>
                <p class="pi-overview-section-label">PI Directory</p>
                <h2 id="pi-directory-title">实验平台 PI</h2>
            </div>
            <p class="pi-overview-count">1 位 PI</p>
        </div>

        <div class="pi-directory-grid">
            <a class="pi-directory-card" href="{{ '/cn/pi/pin-li/' | relative_url }}" aria-label="查看李品教授详细资料">
                <div class="pi-directory-media">
                    <img src="{{ '/assets/images/pi/pin-li.jpg' | relative_url }}" alt="李品教授照片" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">Featured PI</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">李品</h3>
                    <p class="pi-directory-subname">Pin Li</p>
                    <p class="pi-directory-role">教授 · 博士生导师<br>中国药科大学</p>
                    <p class="pi-directory-summary">聚焦血管稳态、血管重构与再生，以及血管损伤相关疾病和肿瘤血管微环境中的药物靶点发现与开发。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>血管生物学</span>
                        <span>脑卒中药物开发</span>
                        <span>药物靶点发现</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>
        </div>
    </section>
</div>
