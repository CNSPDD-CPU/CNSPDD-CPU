---
layout: default
title: 冯园庆
permalink: /cn/pi/yuanqing-feng/
---

<style>
.pi-page {
    --pi-ink: #1E2761;
    --pi-primary: #2C5F2D;
    --pi-accent: #735DA5;
    --pi-mist: #f0f4f8;
    --pi-paper: #fbfcfd;
    --pi-line: #dce5ee;
    --pi-muted: #526071;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
    box-sizing: border-box;
    overflow-x: clip;
}

.pi-page *,
.pi-page *::before,
.pi-page *::after {
    box-sizing: border-box;
}

.pi-skip-link {
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
    background: var(--pi-ink);
    box-shadow: 0 8px 20px rgba(30,39,97,.2);
    text-decoration: none;
    transform: translateY(-160%);
    transition: transform .2s ease;
}

.pi-skip-link::after,
.pi-back-link::after {
    display: none;
}

.pi-skip-link:focus-visible {
    outline: 3px solid var(--pi-accent);
    outline-offset: 3px;
    transform: translateY(0);
}

.pi-page [id] {
    scroll-margin-top: 7rem;
}

.pi-back-link {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    margin-top: .9rem;
    min-height: 44px;
    padding: .55rem .1rem;
    color: var(--pi-primary);
    touch-action: manipulation;
    transition: color .2s ease, transform .2s ease;
    font-size: .88rem;
    font-weight: 900;
}

.pi-back-link:hover {
    color: var(--pi-ink);
    transform: translateX(-3px);
}

.pi-page a:focus-visible {
    outline: 3px solid var(--pi-accent);
    outline-offset: 4px;
    border-radius: 8px;
}

.pi-hero {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(320px, 1.1fr);
    gap: 2rem;
    align-items: end;
    padding: 2.05rem 0 2.35rem;
    border-bottom: 1px solid var(--pi-line);
}

.pi-hero-heading {
    position: relative;
    padding-left: 1.15rem;
}

.pi-hero-heading::before {
    position: absolute;
    top: .2rem;
    bottom: .2rem;
    left: 0;
    width: 4px;
    border-radius: 4px;
    background: linear-gradient(180deg, var(--pi-accent), var(--pi-primary));
    content: "";
}

.pi-eyebrow,
.pi-section-label,
.pi-person-label,
.pi-evidence-label {
    margin: 0 0 .55rem;
    color: var(--pi-primary);
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.pi-hero h1 {
    max-width: 760px;
    margin: 0;
    color: var(--pi-ink);
    font-size: clamp(2.3rem, 5vw, 4.4rem);
    line-height: 1.02;
    letter-spacing: -.045em;
    text-wrap: balance;
    text-align: left;
    background: none;
    -webkit-text-fill-color: currentColor;
}

.pi-hero-summary {
    max-width: 600px;
    padding: 1.15rem 1.25rem 1.25rem;
    border: 1px solid var(--pi-line);
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(240,244,248,.78), rgba(255,255,255,.9));
    box-shadow: 0 10px 24px rgba(24,48,71,.04);
}

.pi-hero-copy {
    margin: 0;
    color: var(--pi-muted);
    font-size: 1.04rem;
    line-height: 1.8;
}

.pi-signal {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: 1rem;
}

.pi-signal span {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: .35rem .65rem;
    border: 1px solid var(--pi-line);
    border-radius: 8px;
    color: var(--pi-ink);
    background: #fff;
    font-size: .79rem;
    font-weight: 800;
}

.pi-feature {
    display: grid;
    grid-template-columns: minmax(250px, .76fr) minmax(0, 1.24fr);
    margin-top: 1.8rem;
    overflow: hidden;
    border: 1px solid var(--pi-line);
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 22px 56px rgba(24,48,71,.12);
}

.pi-person {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 2rem 1.7rem 1.95rem;
    color: #fff;
    background:
        radial-gradient(circle at 96% 8%, rgba(115,93,165,.56) 0, rgba(115,93,165,0) 34%),
        radial-gradient(circle at 4% 96%, rgba(44,95,45,.58) 0, rgba(44,95,45,0) 38%),
        linear-gradient(155deg, #1E2761 0%, #2C5F2D 100%);
}

.pi-person::before {
    position: absolute;
    top: -1rem;
    right: -6rem;
    z-index: -1;
    width: 16rem;
    height: 23rem;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 48%;
    content: "";
    opacity: .8;
    transform: rotate(24deg);
}

.pi-person::after {
    position: absolute;
    right: -6.5rem;
    bottom: 9.5rem;
    width: 18rem;
    height: 7rem;
    border-top: 1px solid rgba(255,255,255,.32);
    border-radius: 50%;
    content: "";
    opacity: .75;
    transform: rotate(-17deg);
}

.pi-photo-frame {
    position: relative;
    z-index: 1;
    width: min(100%, 220px);
    aspect-ratio: 4 / 5;
    margin-bottom: 1.7rem;
    overflow: hidden;
    border: 0;
    border-radius: 14px;
    background: #dfe8e5;
    box-shadow: 0 16px 30px rgba(0,0,0,.2);
}

.pi-photo-frame::after {
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(255,255,255,.48);
    border-radius: 9px;
    content: "";
    pointer-events: none;
}

.pi-photo {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 40%;
}

.pi-person-meta {
    position: relative;
    z-index: 1;
}

.pi-person-label {
    color: rgba(255,255,255,.72);
}

.pi-person h2 {
    margin: 0;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1;
    letter-spacing: -.04em;
    text-align: left;
}

.pi-person-cn {
    margin: .45rem 0 1rem;
    color: rgba(255,255,255,.78);
    font-size: 1.05rem;
    letter-spacing: .08em;
}

.pi-affiliation {
    margin: 0;
    color: rgba(255,255,255,.88);
    line-height: 1.7;
}

.pi-person-note {
    margin: 1.2rem 0 0;
    padding-top: .9rem;
    border-top: 1px solid rgba(255,255,255,.2);
    color: rgba(255,255,255,.78);
    font-size: .76rem;
    font-weight: 900;
    letter-spacing: .1em;
    line-height: 1.55;
    text-transform: uppercase;
}

.pi-badge {
    display: inline-flex;
    margin-top: 1.25rem;
    padding: .65rem .8rem;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 10px;
    color: #fff;
    background: rgba(255,255,255,.1);
    font-size: .8rem;
    font-weight: 800;
    line-height: 1.4;
}

.pi-detail {
    min-width: 0;
    padding: 1.85rem 2rem 2.35rem;
    background: linear-gradient(145deg, #fff 0%, #f7faf9 100%);
}

.pi-detail .pi-section-label {
    margin: 0 0 .55rem;
    color: var(--pi-primary);
    font-size: .74rem;
    line-height: 1.3;
    letter-spacing: .13em;
    text-align: left;
    text-transform: uppercase;
}

.pi-detail-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--pi-line);
}

.pi-detail-head .pi-section-label {
    margin-bottom: .35rem;
}

.pi-detail-title {
    margin: 0;
    color: var(--pi-ink);
    font-size: 1.35rem;
    line-height: 1.2;
    letter-spacing: -.02em;
    text-align: left;
}

.pi-detail-aside {
    flex: 0 0 auto;
    margin: 0;
    color: var(--pi-primary);
    font-size: .7rem;
    font-weight: 900;
    letter-spacing: .11em;
    text-align: right;
    text-transform: uppercase;
    white-space: nowrap;
}

.pi-lede {
    max-width: 700px;
    margin: 1.35rem 0 0;
    color: var(--pi-ink);
    font-size: 1.04rem;
    line-height: 1.86;
}

.pi-evidence {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .8rem;
    margin: 1.5rem 0 2rem;
}

.pi-evidence-item {
    position: relative;
    min-width: 0;
    padding: 1rem 1.05rem 1.05rem;
    border: 1px solid var(--pi-line);
    border-top: 3px solid var(--pi-accent);
    border-radius: 12px;
    background: #f8fafc;
    box-shadow: 0 8px 20px rgba(24,48,71,.04);
}

.pi-evidence-item:nth-child(even) {
    border-top-color: var(--pi-primary);
    background: #f6faf7;
}

.pi-evidence-label {
    margin-bottom: .3rem;
    color: var(--pi-accent);
    font-size: .68rem;
}

.pi-evidence-item:nth-child(even) .pi-evidence-label {
    color: var(--pi-primary);
}

.pi-evidence-value {
    margin: 0;
    color: var(--pi-ink);
    font-weight: 800;
    line-height: 1.5;
    overflow-wrap: anywhere;
}

.pi-focus {
    margin-top: 0;
    padding: 1.25rem 0 1.45rem;
    border-top: 1px solid var(--pi-line);
    border-bottom: 1px solid var(--pi-line);
}

.pi-focus .pi-section-label {
    margin-bottom: .45rem;
}

.pi-section-note {
    max-width: 620px;
    margin: 0 0 .9rem;
    color: var(--pi-muted);
    font-size: .88rem;
    line-height: 1.6;
}

.pi-tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}

.pi-tag {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    min-height: 2.25rem;
    padding: .45rem .7rem;
    border: 1px solid rgba(44,95,45,.2);
    border-radius: 8px;
    color: var(--pi-primary);
    background: #fff;
    font-size: .8rem;
    font-weight: 800;
    line-height: 1.3;
}

.pi-tag::before {
    width: 5px;
    height: 5px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--pi-primary);
    content: "";
}

.pi-publications {
    padding-top: 1.75rem;
}

.pi-list {
    display: grid;
    gap: 0;
    margin: .95rem 0 0 .65rem;
    padding: 0;
    list-style: none;
    counter-reset: pi-reference;
}

.pi-list li {
    position: relative;
    min-width: 0;
    padding: 0 0 1rem 2rem;
    border-left: 1px solid var(--pi-line);
    color: var(--pi-muted);
    line-height: 1.68;
}

.pi-list li:last-child {
    padding-bottom: 0;
}

.pi-list li::before {
    position: absolute;
    top: 0;
    left: -.68rem;
    width: 1.3rem;
    height: 1.3rem;
    border: 3px solid #fff;
    border-radius: 50%;
    color: #fff;
    background: var(--pi-primary);
    box-shadow: 0 0 0 1px var(--pi-line);
    content: counter(pi-reference);
    counter-increment: pi-reference;
    font-size: .68rem;
    font-weight: 900;
    line-height: 1.05rem;
    text-align: center;
}

.pi-list strong {
    color: var(--pi-ink);
}

.pi-list em {
    color: var(--pi-ink);
}

.pi-patents {
    margin-top: 1.8rem;
    padding-top: 1.45rem;
    border-top: 1px solid var(--pi-line);
}

.pi-patents .pi-list li::before {
    background: var(--pi-accent);
}

@media (max-width: 900px) {
    .pi-page {
        padding: 0 1.25rem 4rem;
    }

    .pi-hero {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        padding-top: 1.9rem;
    }

    .pi-hero-summary {
        max-width: none;
    }

    .pi-feature {
        grid-template-columns: 1fr;
    }

    .pi-person {
        display: grid;
        grid-template-columns: 164px minmax(0, 1fr);
        gap: 1.25rem;
        align-items: end;
    }

    .pi-photo-frame {
        width: 164px;
        margin: 0;
    }

    .pi-person-note {
        margin-top: 1rem;
    }
}

@media (max-width: 620px) {
    .pi-page {
        padding: 0 1rem 3.5rem;
    }

    .pi-hero {
        padding-bottom: 1.9rem;
    }

    .pi-hero h1 {
        font-size: 2.55rem;
    }

    .pi-hero-summary {
        padding: 1rem;
    }

    .pi-feature {
        margin-top: 1.35rem;
        border-radius: 16px;
    }

    .pi-person {
        display: block;
        padding: 1.35rem 1.1rem 1.55rem;
    }

    .pi-photo-frame {
        width: min(62vw, 215px);
        margin-bottom: 1.35rem;
    }

    .pi-detail {
        padding: 1.4rem 1.05rem 1.8rem;
    }

    .pi-detail-head {
        display: block;
    }

    .pi-detail-aside {
        display: block;
        margin-top: .55rem;
        text-align: left;
        white-space: normal;
    }

    .pi-evidence {
        grid-template-columns: 1fr;
        margin-bottom: 1.7rem;
    }

    .pi-list {
        margin-left: .6rem;
    }

    .pi-list li {
        padding-left: 1.75rem;
    }
}

@media (max-width: 380px) {
    .pi-hero h1 {
        font-size: 2.25rem;
    }

    .pi-person h2 {
        font-size: 2.2rem;
    }

    .pi-list li {
        padding-left: 1.55rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pi-page *,
    .pi-page *::before,
    .pi-page *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
    }
}
.pi-photo--bai {
    object-position: 50% 48%;
}

.pi-photo--ziyang {
    object-position: 50% 42%;
}


.pi-photo--feng {
    object-position: 50% 45%;
}

.pi-lab-link {
    margin: 1rem 0 0;
    color: var(--pi-muted);
    font-size: .88rem;
    line-height: 1.6;
}

.pi-lab-link a {
    color: var(--pi-primary);
    font-weight: 800;
}

</style>

<div class="pi-page">
    <a class="pi-skip-link" href="#pi-page-title">跳转到个人资料</a>
    <a class="pi-back-link" href="{{ '/cn/pi/' | relative_url }}">← 返回 PI团队总览</a>
    <section class="pi-hero" aria-labelledby="pi-page-title">
        <div class="pi-hero-heading">
            <p class="pi-eyebrow">PI个人主页 · 实验平台</p>
            <h1 id="pi-page-title" tabindex="-1">冯园庆</h1>
        </div>
        <div class="pi-hero-summary">
            <p class="pi-hero-copy">查看冯园庆教授的研究方向、代表性成果与功能基因组学及精准医疗重点。</p>
            <div class="pi-signal" aria-label="研究主题">
                <span>人类遗传学</span>
                <span>功能基因组学</span>
                <span>精准医疗</span>
            </div>
        </div>
    </section>

    <article class="pi-feature" aria-labelledby="yuanqing-feng-name">
        <div class="pi-person">
            <div class="pi-photo-frame">
                <img class="pi-photo pi-photo--feng" src="{{ '/assets/images/pi/yuanqing-feng.png' | relative_url }}" alt="冯园庆教授照片" width="940" height="1088" loading="eager" fetchpriority="high" decoding="async">
            </div>
            <div class="pi-person-meta">
                <p class="pi-person-label">实验平台 PI</p>
                <h2 id="yuanqing-feng-name">冯园庆</h2>
                <p class="pi-person-cn">Yuanqing Feng</p>
                <p class="pi-affiliation">教授 · 博士生导师<br>中国药科大学</p>
                <p class="pi-person-note">人类遗传学 · 功能基因组学</p>
                <div class="pi-badge">国家海外高层次青年人才引进计划入选者</div>
            </div>
        </div>

        <div class="pi-detail">
            <div class="pi-detail-head">
                <div>
                    <p class="pi-section-label">个人简介</p>
                    <h3 class="pi-detail-title">研究档案</h3>
                </div>
                <p class="pi-detail-aside">成果与代表性工作</p>
            </div>
            <p class="pi-lede">冯园庆为中国药科大学教授、博士生导师，国家海外高层次青年人才引进计划入选者、中国药科大学兴药领军学者 A 类。长期从事人类遗传学与功能基因组学研究，致力于解析人类遗传变异及其在人类表型差异与疾病发生中的作用。在 <em>Nature Genetics</em>、<em>Circulation</em>、<em>Molecular Biology and Evolution</em>、<em>PNAS</em> 等权威期刊发表多篇研究论文，受邀担任 <em>Science</em>、<em>Nature Communications</em>、<em>PNAS</em>、<em>AJHG</em> 等期刊审稿人。课题组综合运用群体遗传学、全基因组关联分析（GWAS）、大规模并行报告基因实验（MPRA）、三维基因组学、CRISPR 基因编辑和单细胞多组学，高效鉴定功能突变及其靶基因，阐明复杂疾病的遗传机制，并从中挖掘潜在新药靶点，推动个体化精准医疗。主要研究方向包括高通量功能基因组学技术开发与应用、复杂疾病和表型的遗传机制研究、非编码药物基因组学。</p>
            <p class="pi-lab-link">课题组网站：<a href="https://www.fenglab-cpu.cn">www.fenglab-cpu.cn</a></p>

            <section class="pi-evidence" aria-label="个人信息亮点">
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">学术职务</p>
                    <p class="pi-evidence-value">中国药科大学教授、博士生导师</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">研究领域</p>
                    <p class="pi-evidence-value">人类遗传学与功能基因组学</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">论文成果</p>
                    <p class="pi-evidence-value">发表于 Nature Genetics、PNAS、Circulation 等</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">人才支持</p>
                    <p class="pi-evidence-value">国家海外高层次青年人才引进计划入选者</p>
                </div>
            </section>

            <section class="pi-focus" aria-labelledby="yuanqing-feng-focus">
                <h3 class="pi-section-label" id="yuanqing-feng-focus">研究方向</h3>
                <p class="pi-section-note">围绕功能突变、基因调控与复杂疾病精准医疗展开。</p>
                <div class="pi-tags">
                    <span class="pi-tag">人类遗传变异</span>
                    <span class="pi-tag">群体遗传学</span>
                    <span class="pi-tag">全基因组关联分析（GWAS）</span>
                    <span class="pi-tag">大规模并行报告基因实验（MPRA）</span>
                    <span class="pi-tag">CRISPR 基因编辑</span>
                    <span class="pi-tag">非编码药物基因组学</span>
                </div>
            </section>

            <section class="pi-publications" aria-labelledby="yuanqing-feng-publications">
                <h3 class="pi-section-label" id="yuanqing-feng-publications">代表性论文</h3>
                <ul class="pi-list">
                    <li><strong>Feng Y</strong>，Xie N，Inoue F，Fan S，等。<strong>Integrative functional genomic analyses identify genetic variants influencing skin pigmentation in Africans.</strong> <em>Nature Genetics</em>，2024，56: 258–272。<em>封面文章。</em></li>
                    <li>Fan S，Spence JP，<strong>Feng Y</strong>，等。<strong>Whole-genome sequencing reveals a complex African population demographic history and signatures of local adaptation.</strong> <em>Cell</em>，2023，186: 923–939.e14。</li>
                    <li>Zhang C，Verma A，<strong>Feng Y*</strong>，等。<strong>Impact of natural selection on global patterns of genetic variation and association with clinical phenotypes at genes involved in SARS-CoV-2 infection.</strong> <em>Proceedings of the National Academy of Sciences</em>，2022，119: e2123000119。</li>
                    <li><strong>Feng Y</strong>，McQuillan MA，Tishkoff SA。<strong>Evolutionary genetics of skin pigmentation in African populations.</strong> <em>Human Molecular Genetics</em>，2021，30(R1): R88–R97。<em>特邀综述。</em></li>
                    <li><strong>Feng Y</strong>，Xu H，Liu J，等。<strong>Functional and adaptive significance of promoter mutations that affect divergent myocardial expressions of TRIM72 in primates.</strong> <em>Molecular Biology and Evolution</em>，2021，38: 2930–2945。</li>
                    <li>Liu F，Song R，<strong>Feng Y*</strong>，等。<strong>Upregulation of MG53 induces diabetic cardiomyopathy through transcriptional activation of peroxisome proliferator-activated receptor α.</strong> <em>Circulation</em>，2015，131: 795–804。</li>
                </ul>
            </section>
        </div>
    </article>
</div>
