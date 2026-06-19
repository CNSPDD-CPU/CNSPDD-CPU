---
layout: default
title: 研究与平台
permalink: /cn/research/
---

<style>
    .rp-page {
        --rp-ink: #172033;
        --rp-muted: #526071;
        --rp-line: #dce5ee;
        --rp-green: #2C5F2D;
        --rp-navy: #1E2761;
        --rp-purple: #735DA5;
        --rp-red: #962E2A;
        color: var(--rp-ink);
    }

    .rp-shell {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 2rem;
        box-sizing: border-box;
    }

    .rp-hero {
        margin: 0 auto 2.8rem;
        padding: 4rem 0;
        background: linear-gradient(135deg, #eef5f2 0%, #f7f9fc 48%, #eef0f7 100%);
        border-bottom: 1px solid var(--rp-line);
    }

    .rp-kicker {
        margin: 0 0 0.5rem;
        color: var(--rp-purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-align: center;
    }

    .rp-title {
        max-width: 850px;
        margin: 0 auto 1rem;
        color: var(--rp-navy);
        font-size: clamp(2.2rem, 4.5vw, 4rem);
        line-height: 1.1;
        text-align: center;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .rp-lead {
        max-width: 820px;
        margin: 0 auto;
        color: var(--rp-muted);
        font-size: 1.12rem;
        line-height: 1.85;
        text-align: center;
    }

    .rp-section {
        margin: 4rem auto;
    }

    .section-head {
        max-width: 900px;
        margin: 0 auto 2rem;
        text-align: center;
    }

    .section-eyebrow {
        margin: 0 0 0.35rem;
        color: var(--rp-purple);
        font-size: 0.82rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-align: center;
    }

    .section-title {
        margin: 0;
        color: var(--rp-navy);
        font-size: clamp(1.75rem, 3vw, 2.45rem);
        line-height: 1.2;
        text-align: center;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .section-copy {
        max-width: 760px;
        margin: 0.9rem auto 0;
        color: var(--rp-muted);
        line-height: 1.8;
    }

    .rp-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
        max-width: 980px;
        margin: 0 auto;
    }

    .platform-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
        max-width: 1040px;
        margin: 0 auto;
    }

    .rp-card {
        min-height: 100%;
        padding: 1.45rem;
        border: 1px solid var(--rp-line);
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 10px 28px rgba(23, 32, 51, 0.07);
        box-sizing: border-box;
        text-align: center;
    }

    .rp-card::before {
        content: "";
        display: block;
        width: 42px;
        height: 4px;
        margin: 0 auto 1rem;
        border-radius: 999px;
        background: var(--rp-green);
    }

    .rp-card:nth-child(2)::before {
        background: var(--rp-navy);
    }

    .rp-card:nth-child(3)::before {
        background: var(--rp-purple);
    }

    .rp-card:nth-child(4)::before {
        background: var(--rp-red);
    }

    .card-title {
        margin: 0 0 0.7rem;
        color: var(--rp-navy);
        font-size: 1.08rem;
        line-height: 1.4;
        text-align: center;
    }

    .card-copy {
        margin: 0;
        color: var(--rp-muted);
        line-height: 1.75;
        font-size: 0.98rem;
    }

    .program-band {
        padding: 2.2rem 0;
        background: linear-gradient(180deg, #f7fafc 0%, #eef4f8 100%);
        border-top: 1px solid var(--rp-line);
        border-bottom: 1px solid var(--rp-line);
    }

    @media (max-width: 900px) {
        .rp-grid,
        .platform-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 640px) {
        .rp-shell {
            padding: 0 1rem;
        }

        .rp-grid,
        .platform-grid {
            grid-template-columns: 1fr;
        }

        .section-head { text-align: center; }
    }
</style>

<div class="rp-page">
    <section class="rp-hero">
        <div class="rp-shell">
            <p class="rp-kicker">Research and Platforms</p>
            <h1 class="rp-title">面向精准药物发现的机制神经科学研究</h1>
            <p class="rp-lead">中心整合独立基础研究、组织化药物开发课题和化合物验证服务，解析健康与疾病状态下的脑功能机制，并将机制认知转化为细胞特异性、兼顾性别差异的治疗策略。</p>
        </div>
    </section>

    <section class="rp-section rp-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">Program Architecture</p>
                <h2 class="section-title">三个相互衔接的研究方向</h2>
            </div>
            <p class="section-copy">中心将发现科学与转化验证贯通，形成从疾病机制解析到化合物评价的连续研究管线。</p>
        </div>
        <div class="platform-grid">
            <article class="rp-card">
                <h3 class="card-title">基础研究</h3>
                <p class="card-copy">通过独立课题解析健康与疾病状态下的脑功能机制，重点关注性别特异性神经元-胶质细胞互作和早期多细胞疾病过程。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">药物开发</h3>
                <p class="card-copy">通过组织化课题发展细胞特异性策略，精准靶向特定神经元和胶质细胞群体的细胞内信号与细胞间通讯。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">化合物验证</h3>
                <p class="card-copy">建设服务型验证平台，系统测试新型化合物对脑功能、环路活动和疾病相关细胞通讯的调控能力。</p>
            </article>
        </div>
    </section>

    <section class="program-band">
        <div class="rp-shell">
            <div class="section-head">
                <div>
                    <p class="section-eyebrow">Research Focus</p>
                    <h2 class="section-title">从神经元-胶质机制到性别特异性精准治疗</h2>
                </div>
                <p class="section-copy">中心将大脑视为高度互作的多细胞网络，把“性别作为生物学变量”贯穿疾病机制、药理评价和治疗设计全过程。</p>
            </div>
            <div class="rp-grid">
                <article class="rp-card">
                    <h3 class="card-title">神经元-胶质细胞通讯</h3>
                    <p class="card-copy">解析神经元、星形胶质细胞、小胶质细胞、少突胶质细胞及特定神经元亚型在健康、易感和疾病状态下的相互作用。</p>
                </article>
                <article class="rp-card">
                    <h3 class="card-title">性别特异性疾病生物学</h3>
                    <p class="card-copy">研究雌雄个体在受体表达、细胞内信号、网络整合和疾病进程中的差异。</p>
                </article>
                <article class="rp-card">
                    <h3 class="card-title">早期干预窗口</h3>
                    <p class="card-copy">聚焦神经退行性改变或临床症状出现前的早期多细胞通讯事件，推动疾病修饰和预防性干预。</p>
                </article>
                <article class="rp-card">
                    <h3 class="card-title">精准治疗策略</h3>
                    <p class="card-copy">发展细胞特异性递送与调控方法，优化剂量、给药途径、制剂形式、标志物和伴随诊断。</p>
                </article>
            </div>
        </div>
    </section>

    <section class="rp-section rp-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">Platforms</p>
                <h2 class="section-title">支撑机制驱动药物发现的技术平台</h2>
            </div>
            <p class="section-copy">中心将分子与细胞机制、环路动态、行为学、药理学和人源相关模型贯通，并在雌雄系统中系统量化性别差异。</p>
        </div>
        <div class="platform-grid">
            <article class="rp-card">
                <h3 class="card-title">先进显微成像</h3>
                <p class="card-copy">共聚焦、超分辨、双光子、头戴式双光子、全切片扫描和荧光寿命光纤记录等平台。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">环路生理学</h3>
                <p class="card-copy">光遗传学、Neuropixels 群体记录、多电极阵列和膜片钳电生理技术。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">人源相关模型</h3>
                <p class="card-copy">脑类器官、诱导多能干细胞来源培养体系、离体制备和雌雄动物体内研究。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">精准药理学</h3>
                <p class="card-copy">整合靶点发现、药物化学、制剂科学以及性别依赖的药代和药效学分析。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">标志物与伴随诊断</h3>
                <p class="card-copy">建立能够反映性别特异性疾病机制和治疗反应的诊断与疗效读出。</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">计算生物学</h3>
                <p class="card-copy">对性别特异性疾病通路进行定量建模，并整合细胞、环路、行为和药理数据。</p>
            </article>
        </div>
    </section>
</div>
