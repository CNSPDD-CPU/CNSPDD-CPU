---
layout: default
title: 李品
permalink: /cn/pi/pin-li/
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
    max-width: 1180px;
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
    grid-template-columns: minmax(280px, .78fr) minmax(0, 1.22fr);
    margin-top: 2rem;
    overflow: hidden;
    border: 1px solid var(--pi-line);
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 22px 56px rgba(24,48,71,.12);
}

.pi-person {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 2.2rem 2rem 2.15rem;
    color: #fff;
    background:
        radial-gradient(circle at 96% 8%, rgba(115,93,165,.56) 0, rgba(115,93,165,0) 34%),
        radial-gradient(circle at 4% 96%, rgba(44,95,45,.58) 0, rgba(44,95,45,0) 38%),
        linear-gradient(155deg, #1E2761 0%, #2C5F2D 100%);
}

.pi-person::before {
    position: absolute;
    top: -1rem;
    right: -5rem;
    z-index: -1;
    width: 19rem;
    height: 28rem;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 48%;
    content: "";
    opacity: .8;
    transform: rotate(24deg);
}

.pi-person::after {
    position: absolute;
    right: -7rem;
    bottom: 10rem;
    width: 22rem;
    height: 8rem;
    border-top: 1px solid rgba(255,255,255,.32);
    border-radius: 50%;
    content: "";
    opacity: .75;
    transform: rotate(-17deg);
}

.pi-photo-frame {
    position: relative;
    z-index: 1;
    width: min(100%, 238px);
    aspect-ratio: 4 / 5;
    margin-bottom: 1.7rem;
    overflow: hidden;
    border: 0;
    border-radius: 16px;
    background: #dfe8e5;
    box-shadow: 0 18px 34px rgba(0,0,0,.22);
}

.pi-photo-frame::after {
    position: absolute;
    inset: 10px;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 10px;
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
    padding: 2rem 2.25rem 2.55rem;
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
        grid-template-columns: 180px minmax(0, 1fr);
        gap: 1.5rem;
        align-items: end;
    }

    .pi-photo-frame {
        width: 180px;
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
        margin-top: 1.5rem;
        border-radius: 18px;
    }

    .pi-person {
        display: block;
        padding: 1.55rem 1.25rem 1.7rem;
    }

    .pi-photo-frame {
        width: min(68vw, 230px);
        margin-bottom: 1.35rem;
    }

    .pi-detail {
        padding: 1.5rem 1.15rem 1.9rem;
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
</style>

<div class="pi-page">
    <a class="pi-skip-link" href="#pi-page-title">跳转到个人资料</a>
    <a class="pi-back-link" href="{{ '/cn/pi/' | relative_url }}">← 返回 PI团队总览</a>
    <section class="pi-hero" aria-labelledby="pi-page-title">
        <div class="pi-hero-heading">
            <p class="pi-eyebrow">PI个人主页 · 实验平台</p>
            <h1 id="pi-page-title" tabindex="-1">李品</h1>
        </div>
        <div class="pi-hero-summary">
            <p class="pi-hero-copy">查看李品教授的研究方向、代表性成果与转化研究重点。</p>
            <div class="pi-signal" aria-label="研究主题">
                <span>血管稳态</span>
                <span>损伤与再生</span>
                <span>转化治疗</span>
            </div>
        </div>
    </section>

    <article class="pi-feature" aria-labelledby="pin-li-name">
        <div class="pi-person">
            <div class="pi-photo-frame">
                <img class="pi-photo" src="{{ '/assets/images/pi/pin-li.jpg' | relative_url }}" alt="李品教授照片" width="640" height="800" loading="eager" fetchpriority="high" decoding="async">
            </div>
            <div class="pi-person-meta">
                <p class="pi-person-label">实验平台 PI</p>
                <h2 id="pin-li-name">李品</h2>
                <p class="pi-person-cn">Pin Li</p>
                <p class="pi-affiliation">教授 · 博士生导师<br>基础医学与临床药学学院<br>中国药科大学</p>
                <p class="pi-person-note">血管生物学 · 转化治疗</p>
                <div class="pi-badge">入选国家高层次青年人才项目</div>
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
            <p class="pi-lede">李品教授长期从事血管稳态维持、重构与再生机制研究，并围绕血管损伤相关疾病开展药物靶点发现与开发。研究聚焦代谢异常导致的血管损伤，包括糖尿病眼底病变、脑卒中、血栓与凝血异常，以及肿瘤血管微环境特征鉴定和新靶点发现，致力于推动血管损伤疾病的早期干预与药物开发。</p>

            <section class="pi-evidence" aria-label="个人信息亮点">
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">学术职务</p>
                    <p class="pi-evidence-value">中国药科大学教授、博士生导师</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">学术服务</p>
                    <p class="pi-evidence-value">中国生理学会相关专业委员会委员</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">论文成果</p>
                    <p class="pi-evidence-value">发表高水平论文 10 余篇</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">知识产权</p>
                    <p class="pi-evidence-value">获批授权国际专利 2 项</p>
                </div>
            </section>

            <section class="pi-focus" aria-labelledby="pin-li-focus">
                <h3 class="pi-section-label" id="pin-li-focus">研究方向</h3>
                <p class="pi-section-note">围绕血管稳态、损伤机制与药物转化展开。</p>
                <div class="pi-tags">
                    <span class="pi-tag">血管稳态</span>
                    <span class="pi-tag">血管重构与再生</span>
                    <span class="pi-tag">糖尿病视网膜病变</span>
                    <span class="pi-tag">脑卒中药物开发</span>
                    <span class="pi-tag">肿瘤血管新生</span>
                    <span class="pi-tag">药物靶点发现</span>
                </div>
            </section>

            <section class="pi-publications" aria-labelledby="pin-li-publications">
                <h3 class="pi-section-label" id="pin-li-publications">代表性论文</h3>
                <ul class="pi-list">
                    <li>Qiao Ziqi, …, <strong>Pin Li</strong>. <strong>Clusterin maintains hemostatic equilibrium by stabilizing VWF multimers in plasma.</strong> <em>Blood</em>, 2026.</li>
                    <li><strong>Pin Li</strong>; Napoleone Ferrara. <strong>Vascular heterogeneity: VEGF receptors make blood vessels special.</strong> <em>Journal of Experimental Medicine</em>, 2022, 219(3): e20212539。</li>
                    <li><strong>Pin Li</strong>; Qin Li; Nilima Biswas; Hong Xin; et al. <strong>LIF is a mitogen for choroidal EC and protects the choriocapillaris from oxidative injury: implication for AMD.</strong> <em>EMBO Molecular Medicine</em>, 2021, 14: e14511。</li>
                    <li><strong>Pin Li</strong>; Guoqin Wei; Yang Cao; et al. <strong>Myosin IIa is critical for cAMP-mediated endothelial secretion of von Willebrand factor.</strong> <em>Blood</em>, 2018, 131(06): 686–698。</li>
                    <li>Cuiling Zhong<sup>#</sup>; <strong>Pin Li<sup>#</sup></strong>; Sulabha Argade; et al. <strong>Inhibition of protein glycosylation is a novel pro-angiogenic strategy that acts via activation of stress pathways.</strong> <em>Nature Communications</em>, 2020, 11: 6330。</li>
                    <li><strong>Pin Li</strong>; Adekunle T. Bademosi et al. <strong>Actin Remodeling in Regulated Exocytosis: Toward a Mesoscopic View.</strong> <em>Trends in Cell Biology</em>, 2018, 28(9): 685–697。</li>
                </ul>
            </section>

            <section class="pi-patents" aria-labelledby="pin-li-patents">
                <h3 class="pi-section-label" id="pin-li-patents">专利</h3>
                <ul class="pi-list">
                    <li>Napoleone Ferrara; <strong>Pin Li</strong>。<strong>Glycosylation inhibitors as therapeutics for stroke.</strong> PCT/US2023/18909，2023 年 4 月 18 日。</li>
                    <li>Napoleone Ferrara; Qin Li; <strong>Pin Li</strong>。<strong>Compositions and methods for promoting angiogenesis in the eye.</strong> WO 2020/142349 A1，2020 年 7 月 9 日。</li>
                </ul>
            </section>
        </div>
    </article>
</div>
