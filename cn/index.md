---
layout: default
title: 首页
---

<style>
    .home-page {
        --ink: #172033;
        --muted: #526071;
        --line: #dce5ee;
        --green: #2C5F2D;
        --navy: #1E2761;
        --purple: #735DA5;
        color: var(--ink);
    }

    .hero-section {
        min-height: clamp(520px, 72vh, 720px);
        display: grid;
        align-items: center;
        color: #fff;
        background:
            linear-gradient(90deg, rgba(18, 30, 52, 0.9) 0%, rgba(18, 30, 52, 0.74) 48%, rgba(18, 30, 52, 0.34) 100%),
            url('{{ "/assets/images/cnspdd-neuroscience-hero.jpg" | relative_url }}') center 44% / cover no-repeat;
    }

    .home-shell,
    .hero-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        box-sizing: border-box;
    }

    .hero-content {
        width: 100%;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .hero-kicker,
    .section-eyebrow {
        margin: 0 0 0.6rem;
        color: var(--purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .hero-kicker {
        display: inline-flex;
        padding: 0.45rem 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.32);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
    }

    .hero-title {
        max-width: 840px;
        margin: 1.25rem 0 1rem;
        color: #fff;
        font-size: clamp(2.55rem, 5.2vw, 4.8rem);
        line-height: 1.08;
        letter-spacing: 0;
        text-align: left;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .hero-subtitle {
        max-width: 760px;
        margin: 0 0 1.8rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.18rem;
        line-height: 1.85;
        font-weight: 600;
    }

    .hero-actions,
    .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem;
    }

    .home-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        min-height: 46px;
        padding: 0.8rem 1.1rem;
        border-radius: 999px;
        font-weight: 800;
        text-decoration: none;
    }

    .home-btn::after { display: none; }
    .home-btn.primary { color: #fff; background: var(--green); }
    .home-btn.secondary { color: #fff; border: 1px solid rgba(255,255,255,0.42); background: rgba(255,255,255,0.08); }

    .hero-tags { max-width: 840px; margin-top: 2rem; }
    .hero-tag {
        padding: 0.75rem 0.85rem;
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 8px;
        color: rgba(255,255,255,0.92);
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(12px);
        font-weight: 700;
        line-height: 1.45;
    }

    .home-section { margin: 3rem 0; }
    .section-head { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 1.5rem; align-items: end; margin-bottom: 1.4rem; }
    .section-title { margin: 0; color: var(--navy); font-size: clamp(1.75rem, 3vw, 2.45rem); line-height: 1.2; text-align: left; background: none; -webkit-text-fill-color: currentColor; }
    .section-copy { margin: 0; color: var(--muted); line-height: 1.8; }
    .card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
    .home-card { padding: 1.35rem; border: 1px solid var(--line); border-radius: 8px; background: #fff; box-shadow: 0 10px 28px rgba(23,32,51,0.07); }
    .home-card::before { content: ""; display: block; width: 42px; height: 4px; margin-bottom: 1rem; border-radius: 999px; background: var(--green); }
    .home-card:nth-child(2)::before { background: var(--navy); }
    .home-card:nth-child(3)::before { background: var(--purple); }
    .home-card h3 { margin: 0 0 0.7rem; color: var(--navy); font-size: 1.08rem; text-align: left; }
    .home-card p { margin: 0; color: var(--muted); line-height: 1.75; }

    @media (max-width: 768px) {
        .home-shell, .hero-content { padding-left: 1rem; padding-right: 1rem; }
        .section-head, .card-grid { grid-template-columns: 1fr; }
        .hero-title { font-size: 2.3rem; }
    }
</style>

<div class="home-page">
    <section class="hero-section" aria-labelledby="home-title">
        <div class="hero-content">
            <div class="hero-kicker">China Pharmaceutical University</div>
            <h1 class="hero-title" id="home-title">神经科学与精准药物发现中心</h1>
            <p class="hero-subtitle">中心面向神经与精神疾病，围绕神经元-胶质细胞通讯、性别特异性疾病易感性和药物作用机制，发展机制驱动、兼顾性别差异的精准治疗策略。</p>
            <div class="hero-actions">
                <a class="home-btn primary" href="{{ '/cn/research/' | relative_url }}"><i class="fas fa-microscope"></i> 研究与平台</a>
                <a class="home-btn secondary" href="{{ '/cn/jobs/' | relative_url }}"><i class="fas fa-user-plus"></i> 加入我们</a>
            </div>
            <div class="hero-tags" aria-label="研究主题">
                <span class="hero-tag">兼顾性别差异的精准药物发现</span>
                <span class="hero-tag">动态神经元-胶质细胞通讯</span>
                <span class="hero-tag">早期疾病修饰与预防窗口</span>
                <span class="hero-tag">细胞特异性递送与调控</span>
            </div>
        </div>
    </section>

    <section class="home-section home-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">Center Mission</p>
                <h2 class="section-title">从脑功能机制到化合物验证的连续创新路径</h2>
            </div>
            <p class="section-copy">中心围绕三个互补方向开展工作：面向机制问题的基础研究、组织化推进的精准药物开发，以及服务于新型化合物评价的脑功能调控验证平台。</p>
        </div>
        <div class="card-grid">
            <article class="home-card">
                <h3>基础研究</h3>
                <p>通过独立课题解析健康与疾病状态下的脑功能机制，重点关注性别特异性神经元-胶质细胞互作和早期多细胞疾病过程。</p>
            </article>
            <article class="home-card">
                <h3>药物开发</h3>
                <p>通过组织化课题发展细胞特异性策略，精准靶向特定神经元和胶质细胞群体的细胞内信号与细胞间通讯。</p>
            </article>
            <article class="home-card">
                <h3>化合物验证</h3>
                <p>建设服务型验证平台，系统测试新型化合物对脑功能、环路活动和疾病相关细胞通讯的调控能力。</p>
            </article>
        </div>
    </section>
</div>
