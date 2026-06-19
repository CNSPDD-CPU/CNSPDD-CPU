---
layout: default
title: PI团队
permalink: /cn/pi/
---

<style>
.pi-page { max-width: 1200px; margin: 0 auto; padding: 0 2rem 4rem; }
.pi-hero { padding: 4rem 0 2.5rem; border-bottom: 1px solid #e1e8ed; }
.pi-eyebrow { margin: 0 0 .45rem; color: #735DA5; font-size: .82rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.pi-hero h1 { max-width: 820px; margin: 0 0 1rem; color: #1E2761; font-size: clamp(2.1rem, 4vw, 3.6rem); line-height: 1.1; text-align: left; background: none; -webkit-text-fill-color: currentColor; }
.pi-hero p, .pi-section-head p, .pi-card p { color: #526071; line-height: 1.75; }
.pi-section { margin: 2.8rem 0 0; }
.pi-section-head { display: grid; grid-template-columns: minmax(220px, .8fr) minmax(320px, 1.2fr); gap: 1.4rem; align-items: end; margin-bottom: 1.2rem; }
.pi-section-head h2 { margin: 0; color: #1E2761; font-size: 1.8rem; line-height: 1.2; text-align: left; }
.pi-section-head p:not(.pi-eyebrow) { margin: 0; }
.pi-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.pi-card { display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 1.1rem; padding: 1.25rem; border: 1px solid #e1e8ed; border-radius: 8px; background: #fff; box-shadow: 0 2px 12px rgba(30,39,97,.08); }
.pi-photo { width: 140px; aspect-ratio: 3 / 4; border-radius: 8px; background: linear-gradient(135deg, #f3f6f8 0%, #e7edf1 100%); border: 1px solid #e1e8ed; display: flex; align-items: center; justify-content: center; color: #735DA5; font-weight: 800; }
.pi-card h3 { margin: 0 0 .35rem; color: #1E2761; font-size: 1.12rem; line-height: 1.35; text-align: left; }
.pi-role { margin: 0 0 .7rem; color: #2C5F2D; font-weight: 800; }
.pi-card p { margin: 0 0 .65rem; }
.pi-meta { margin-top: .85rem; padding-top: .75rem; border-top: 1px solid #e1e8ed; color: #735DA5; font-size: .86rem; font-weight: 800; }
@media (max-width: 820px) { .pi-page { padding: 0 1rem 3rem; } .pi-section-head, .pi-grid { grid-template-columns: 1fr; } .pi-card { grid-template-columns: 96px minmax(0, 1fr); } .pi-photo { width: 96px; } }
</style>

<div class="pi-page">
    <section class="pi-hero">
        <p class="pi-eyebrow">PI Team</p>
        <h1>PI团队</h1>
        <p>本页用于展示中心 PI 团队、研究方向、平台职责、代表性成果与联系方式。</p>
    </section>

    <section class="pi-section">
        <div class="pi-section-head">
            <div>
                <p class="pi-eyebrow">Leadership</p>
                <h2>中心 PI 团队</h2>
            </div>
            <p>后续可在此添加 PI 简介，包括教育与工作经历、研究兴趣、代表性论文、平台职责和合作方向。</p>
        </div>

        <div class="pi-grid">
            <article class="pi-card">
                <div class="pi-photo">照片</div>
                <div>
                    <h3>PI姓名</h3>
                    <p class="pi-role">中心负责人</p>
                    <p>可添加简要个人简介、研究方向与转化研究重点。</p>
                    <div class="pi-meta">神经科学 · 精准药理 · 药物研发</div>
                </div>
            </article>
            <article class="pi-card">
                <div class="pi-photo">照片</div>
                <div>
                    <h3>平台 PI</h3>
                    <p class="pi-role">研究平台负责人</p>
                    <p>可添加平台职责、技术特色和合作支持范围。</p>
                    <div class="pi-meta">疾病模型 · 药效评价 · 数据平台</div>
                </div>
            </article>
        </div>
    </section>
</div>
