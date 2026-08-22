---
layout: default
title: 弗兰克·基尔霍夫
permalink: /cn/pi/frank-kirchhoff/
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


.pi-photo--kirchhoff {
    object-position: 50% 45%;
}

</style>

<div class="pi-page">
    <a class="pi-skip-link" href="#pi-page-title">跳转到个人资料</a>
    <a class="pi-back-link" href="{{ '/cn/pi/' | relative_url }}">← 返回 PI团队总览</a>
    <section class="pi-hero" aria-labelledby="pi-page-title">
        <div class="pi-hero-heading">
            <p class="pi-eyebrow">PI个人主页 · 实验平台</p>
            <h1 id="pi-page-title" tabindex="-1">弗兰克·基尔霍夫</h1>
        </div>
        <div class="pi-hero-summary">
            <p class="pi-hero-copy">查看弗兰克·基尔霍夫教授的研究方向、代表性成果与胶质细胞神经调控重点。</p>
            <div class="pi-signal" aria-label="研究主题">
                <span>胶质细胞生物学</span>
                <span>神经元–胶质通信</span>
                <span>脑损伤</span>
            </div>
        </div>
    </section>

    <article class="pi-feature" aria-labelledby="frank-kirchhoff-name">
        <div class="pi-person">
            <div class="pi-photo-frame">
                <img class="pi-photo pi-photo--kirchhoff" src="{{ '/assets/images/pi/frank-kirchhoff.jpg' | relative_url }}" alt="弗兰克·基尔霍夫教授照片" width="901" height="1200" loading="eager" fetchpriority="high" decoding="async">
            </div>
            <div class="pi-person-meta">
                <p class="pi-person-label">实验平台 PI</p>
                <h2 id="frank-kirchhoff-name">弗兰克·基尔霍夫</h2>
                <p class="pi-person-cn">Frank Kirchhoff</p>
                <p class="pi-affiliation">首席科学家 · 中心主任<br>神经科学与原创药物研发中心<br>中国药科大学</p>
                <p class="pi-person-note">胶质细胞生物学 · 神经元–胶质通信</p>
                <div class="pi-badge">欧洲科学院院士</div>
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
            <p class="pi-lede">弗兰克·基尔霍夫为欧洲科学院院士、德国脑科学理事会委员、国际脑组织研究组织（IBRO）泛欧区域委员会核心成员，曾担任德国神经科学学会主席，也是全球性别特异性生物与医学（CGBM）创始人。2026 年 1 月，他入职中国药科大学，担任学校神经科学与原创药物研发中心首席科学家、中心主任，并入选国家级高层次人才项目。他深耕神经科学领域，开创性聚焦胶质细胞神经调控作用，推动了体内神经胶质细胞动态功能可视化，揭示了小胶质细胞在活体小鼠健康大脑中的高度运动性，进一步阐明神经元–胶质细胞通信的分子机制及其对整体动物行为的影响。迄今累计发表论文 160 余篇，总引用超 3 万次，H 指数 71，主持欧盟及德国国家级重点项目，累计获资助约 1.8 亿元。</p>

            <section class="pi-evidence" aria-label="个人信息亮点">
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">学术职务</p>
                    <p class="pi-evidence-value">神经科学与原创药物研发中心首席科学家、主任</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">研究领域</p>
                    <p class="pi-evidence-value">胶质细胞神经调控与神经元–胶质通信</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">学术影响</p>
                    <p class="pi-evidence-value">发表论文 160 余篇，H 指数 71</p>
                </div>
                <div class="pi-evidence-item">
                    <p class="pi-evidence-label">国际任职</p>
                    <p class="pi-evidence-value">欧洲科学院、德国脑科学理事会、IBRO</p>
                </div>
            </section>

            <section class="pi-focus" aria-labelledby="frank-kirchhoff-focus">
                <h3 class="pi-section-label" id="frank-kirchhoff-focus">研究方向</h3>
                <p class="pi-section-note">围绕胶质细胞神经调控、神经元–胶质细胞通信与脑功能疾病机制展开。</p>
                <div class="pi-tags">
                    <span class="pi-tag">胶质细胞生物学</span>
                    <span class="pi-tag">神经元–胶质细胞通信</span>
                    <span class="pi-tag">星形胶质细胞信号</span>
                    <span class="pi-tag">小胶质细胞动态</span>
                    <span class="pi-tag">脑损伤</span>
                    <span class="pi-tag">精准医疗</span>
                </div>
            </section>

            <section class="pi-publications" aria-labelledby="frank-kirchhoff-publications">
                <h3 class="pi-section-label" id="frank-kirchhoff-publications">代表性论文</h3>
                <ul class="pi-list">
                    <li>Fang LP，Lin CH，Medlej Y，等，<strong>Kirchhoff F*</strong>、Bai X*。<strong>Oligodendrocyte precursor cells facilitate neuronal lysosome release.</strong> <em>Nature Communications</em>，2025，16: 1175。</li>
                    <li>Fang LP，Zhao N，Caudal LC，等，<strong>Kirchhoff F*</strong>、Bai X*。<strong>Impaired bidirectional communication between interneurons and oligodendrocyte precursor cells affects social cognitive behavior.</strong> <em>Nature Communications</em>，2022，13: 1394。</li>
                    <li>Guo Q，Gobbo D，Zhao N，等，<strong>Kirchhoff F*</strong>、Huang W*。<strong>Adenosine triggers early astrocyte reactivity that provokes microglial responses and drives the pathogenesis of sepsis-associated encephalopathy in mice.</strong> <em>Nature Communications</em>，2024，15: 6340。</li>
                    <li>Saab AS，Tzvetavona ID，Trevisiol A，等，<strong>Kirchhoff F*</strong>、Nave KA*。<strong>Oligodendroglial NMDA receptors regulate glucose import and axonal energy metabolism.</strong> <em>Neuron</em>，2016，91: 119–132。</li>
                    <li>Saab AS，Neumeyer A，Jahn HM，等，<strong>Kirchhoff F</strong>。<strong>Bergmann glial AMPA receptors are required for fine motor coordination.</strong> <em>Science</em>，2012，337: 749–753。<em>doi: 10.1126/science.1221140。</em></li>
                </ul>
            </section>
        </div>
    </article>
</div>
