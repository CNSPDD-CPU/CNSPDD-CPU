---
layout: default
title: PI团队
permalink: /cn/pi/
---

<style>
.pi-page {
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

.pi-hero {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(320px, 1.1fr);
    gap: 2rem;
    align-items: end;
    padding: 4.3rem 0 2.8rem;
    border-bottom: 1px solid var(--pi-line);
}

.pi-eyebrow,
.pi-section-label,
.pi-person-label,
.pi-evidence-label {
    margin: 0 0 .55rem;
    color: var(--pi-teal);
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
    text-align: left;
    background: none;
    -webkit-text-fill-color: currentColor;
}

.pi-hero-copy {
    margin: 0;
    color: var(--pi-muted);
    font-size: 1.06rem;
    line-height: 1.8;
}

.pi-signal {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem;
    margin-top: 1.15rem;
}

.pi-signal span,
.pi-tag {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: .35rem .7rem;
    border: 1px solid var(--pi-line);
    border-radius: 999px;
    color: var(--pi-ink);
    background: var(--pi-mist);
    font-size: .82rem;
    font-weight: 800;
}

.pi-feature {
    display: grid;
    grid-template-columns: minmax(230px, .72fr) minmax(0, 1.28fr);
    margin-top: 2.5rem;
    overflow: hidden;
    border: 1px solid var(--pi-line);
    border-radius: 26px;
    background: #fff;
    box-shadow: 0 18px 50px rgba(24, 48, 71, .12);
}

.pi-person {
    position: relative;
    overflow: hidden;
    padding: 2rem;
    color: #fff;
    background:
        radial-gradient(circle at 88% 14%, rgba(199, 109, 78, .75) 0, rgba(199, 109, 78, 0) 34%),
        linear-gradient(155deg, #183047 0%, #0f5d60 100%);
}

.pi-person::after {
    position: absolute;
    right: -7rem;
    bottom: 11rem;
    width: 22rem;
    height: 8rem;
    border-top: 1px solid rgba(255,255,255,.35);
    border-radius: 50%;
    content: "";
    transform: rotate(-17deg);
}

.pi-photo-frame {
    position: relative;
    z-index: 1;
    width: min(100%, 240px);
    aspect-ratio: 4 / 5;
    margin-bottom: 1.7rem;
    overflow: hidden;
    border: 8px solid rgba(255,255,255,.12);
    border-radius: 18px;
    background: #dfe8e5;
    box-shadow: 0 16px 30px rgba(0,0,0,.18);
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

.pi-badge {
    display: inline-flex;
    margin-top: 1.35rem;
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
    padding: 2.2rem 2.3rem 2.5rem;
    background: linear-gradient(145deg, #fff 0%, #f7faf9 100%);
}

.pi-detail h3,
.pi-detail h4 {
    margin: 0;
    color: var(--pi-ink);
    text-align: left;
}

.pi-lede {
    max-width: 720px;
    margin: 0;
    color: var(--pi-ink);
    font-size: 1.07rem;
    line-height: 1.85;
}

.pi-evidence {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .85rem;
    margin: 1.6rem 0 1.85rem;
}

.pi-evidence-item {
    padding: 1rem;
    border-left: 3px solid var(--pi-coral);
    background: var(--pi-mist);
}

.pi-evidence-label {
    margin-bottom: .25rem;
    color: var(--pi-coral);
    font-size: .68rem;
}

.pi-evidence-value {
    margin: 0;
    color: var(--pi-ink);
    font-weight: 800;
    line-height: 1.5;
}

.pi-focus {
    padding: 1.15rem 0 1.35rem;
    border-top: 1px solid var(--pi-line);
    border-bottom: 1px solid var(--pi-line);
}

.pi-focus .pi-section-label {
    margin-bottom: .75rem;
}

.pi-tags {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem;
}

.pi-tag {
    border-color: rgba(15,118,110,.18);
    color: var(--pi-teal);
    background: #fff;
}

.pi-publications {
    padding-top: 1.65rem;
}

.pi-list {
    display: grid;
    gap: .8rem;
    margin: .9rem 0 0;
    padding: 0;
    list-style: none;
    counter-reset: pi-reference;
}

.pi-list li {
    position: relative;
    padding-left: 2rem;
    color: var(--pi-muted);
    line-height: 1.65;
}

.pi-list li::before {
    position: absolute;
    top: .05rem;
    left: 0;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 50%;
    color: #fff;
    background: var(--pi-teal);
    content: counter(pi-reference);
    counter-increment: pi-reference;
    font-size: .7rem;
    font-weight: 900;
    line-height: 1.35rem;
    text-align: center;
}

.pi-list strong {
    color: var(--pi-ink);
}

.pi-patents {
    margin-top: 1.65rem;
    padding-top: 1.35rem;
    border-top: 1px solid var(--pi-line);
}

.pi-patents .pi-list li::before {
    background: var(--pi-coral);
}

@media (max-width: 820px) {
    .pi-page {
        padding: 0 1rem 3.5rem;
    }

    .pi-hero {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding-top: 3rem;
    }

    .pi-feature {
        grid-template-columns: 1fr;
        border-radius: 20px;
    }

    .pi-person {
        display: grid;
        grid-template-columns: 180px minmax(0, 1fr);
        gap: 1.4rem;
        align-items: end;
    }

    .pi-photo-frame {
        width: 180px;
        margin: 0;
    }

    .pi-badge {
        margin-top: 1rem;
    }
}

@media (max-width: 560px) {
    .pi-hero h1 {
        font-size: 2.45rem;
    }

    .pi-person {
        display: block;
    }

    .pi-photo-frame {
        width: min(68vw, 240px);
        margin-bottom: 1.4rem;
    }

    .pi-detail {
        padding: 1.5rem 1.15rem 1.8rem;
    }

    .pi-evidence {
        grid-template-columns: 1fr;
    }

    .pi-list li {
        padding-left: 1.8rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pi-feature,
    .pi-photo {
        transition: none;
    }
}
</style>

<div class="pi-page">
    <section class="pi-hero" aria-labelledby="pi-page-title">
        <div>
            <p class="pi-eyebrow">PI团队 · 实验平台</p>
            <h1 id="pi-page-title">PI团队</h1>
        </div>
        <div>
            <p class="pi-hero-copy">汇聚连接血管生物学、疾病机制与转化药物研发的研究力量，展示实验平台 PI 的研究方向与代表性成果。</p>
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
                <img class="pi-photo" src="{{ '/assets/images/pi/pin-li.jpg' | relative_url }}" alt="李品教授照片" loading="lazy" decoding="async">
            </div>
            <div class="pi-person-meta">
                <p class="pi-person-label">实验平台 PI</p>
                <h2 id="pin-li-name">李品</h2>
                <p class="pi-person-cn">Pin Li</p>
                <p class="pi-affiliation">教授 · 博士生导师<br>基础医学与临床药学学院<br>中国药科大学</p>
                <div class="pi-badge">入选国家高层次青年人才项目</div>
            </div>
        </div>

        <div class="pi-detail">
            <p class="pi-section-label">个人简介</p>
            <p class="pi-lede">李品教授长期从事血管稳态维持、重构与再生机制研究，并围绕血管损伤相关疾病开展药物靶点发现与开发。研究聚焦代谢异常导致的血管损伤，包括糖尿病眼底病变、脑卒中、血栓与凝血异常，以及肿瘤血管微环境特征鉴定和新靶点发现，致力于推动血管损伤疾病的早期干预与药物开发。</p>

            <div class="pi-evidence" aria-label="个人信息亮点">
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
            </div>

            <section class="pi-focus" aria-labelledby="pin-li-focus">
                <p class="pi-section-label" id="pin-li-focus">研究方向</p>
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
                <p class="pi-section-label" id="pin-li-publications">代表性论文</p>
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
                <p class="pi-section-label" id="pin-li-patents">专利</p>
                <ul class="pi-list">
                    <li>Napoleone Ferrara; <strong>Pin Li</strong>。<strong>Glycosylation inhibitors as therapeutics for stroke.</strong> PCT/US2023/18909，2023 年 4 月 18 日。</li>
                    <li>Napoleone Ferrara; Qin Li; <strong>Pin Li</strong>。<strong>Compositions and methods for promoting angiogenesis in the eye.</strong> WO 2020/142349 A1，2020 年 7 月 9 日。</li>
                </ul>
            </section>
        </div>
    </article>
</div>
