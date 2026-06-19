---
layout: default
title: 联系方式
permalink: /cn/contact/
---

<style>
    .template-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .template-hero {
        padding: 4rem 0 2.5rem;
        border-bottom: 1px solid #e1e8ed;
    }

    .template-eyebrow {
        margin: 0 0 0.45rem;
        color: #735DA5;
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .template-hero h1 {
        max-width: 820px;
        margin: 0 0 1rem;
        color: #1E2761;
        font-size: clamp(2.1rem, 4vw, 3.6rem);
        line-height: 1.1;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .template-hero p,
    .template-section-head p,
    .template-card p {
        color: #526071;
        line-height: 1.75;
    }

    .template-section {
        margin: 2.8rem 0 0;
    }

    .template-section-head {
        display: grid;
        grid-template-columns: minmax(220px, 0.8fr) minmax(320px, 1.2fr);
        gap: 1.4rem;
        align-items: end;
        margin-bottom: 1.2rem;
    }

    .template-section-head h2 {
        margin: 0;
        color: #1E2761;
        font-size: 1.8rem;
        line-height: 1.2;
        text-align: left;
    }

    .template-section-head p:not(.template-eyebrow) {
        margin: 0;
    }

    .template-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .template-card {
        padding: 1.25rem;
        border: 1px solid #e1e8ed;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 2px 12px rgba(30, 39, 97, 0.08);
    }

    .template-card h3 {
        margin: 0 0 0.55rem;
        color: #1E2761;
        font-size: 1.05rem;
        line-height: 1.35;
        text-align: left;
    }

    .template-card p {
        margin: 0;
    }

    .template-meta {
        margin-top: 0.9rem;
        padding-top: 0.75rem;
        border-top: 1px solid #e1e8ed;
        color: #2C5F2D;
        font-size: 0.86rem;
        font-weight: 800;
    }

    @media (max-width: 768px) {
        .template-page {
            padding: 0 1rem 3rem;
        }

        .template-section-head,
        .template-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="template-page">
    <section class="template-hero">
        <p class="template-eyebrow">Contact</p>
        <h1>联系我们</h1>
        <p>欢迎就科研合作、人才招聘、平台使用和中心相关事务与我们联系。</p>
    </section>

    <section class="template-section">
        <div class="template-section-head">
            <div>
                <p class="template-eyebrow">Inquiries</p>
                <h2>联系渠道</h2>
            </div>
            <p>建议保持联系方式清晰、稳定。后续如不同平台有专门联系人，可在此添加。</p>
        </div>
        <div class="template-grid">
            <article class="template-card">
                <h3>联系邮箱</h3>
                <p><a href="mailto:hangao@cpu.edu.cn">hangao@cpu.edu.cn</a></p>
                <div class="template-meta">科研合作 | 招聘 | 平台咨询</div>
            </article>
            <article class="template-card">
                <h3>地址</h3>
                <p>中国药科大学江宁校区：南京市江宁区龙眠大道639号 211198</p>
                <div class="template-meta">中国药科大学</div>
            </article>
            <article class="template-card">
                <h3>合作</h3>
                <p>可补充医院、企业、学术机构和国际合作的联系说明。</p>
                <div class="template-meta">合作交流</div>
            </article>
        </div>
    </section>
</div>
