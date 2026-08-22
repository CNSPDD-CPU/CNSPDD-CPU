---
layout: default
title: PI团队
permalink: /cn/pi/
---

<style>

.pi-overview-page {
    --pi-ink: #1E2761;
    --pi-primary: #2C5F2D;
    --pi-accent: #735DA5;
    --pi-mist: #f0f4f8;
    --pi-line: #dce5ee;
    --pi-muted: #526071;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
    box-sizing: border-box;
    overflow-x: clip;
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

.pi-skip-link::after {
    display: none;
}

.pi-skip-link:focus-visible {
    outline: 3px solid var(--pi-accent);
    outline-offset: 3px;
    transform: translateY(0);
}

.pi-overview-page [id] {
    scroll-margin-top: 7rem;
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
    color: var(--pi-primary);
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
    text-wrap: balance;
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
    background: linear-gradient(180deg, var(--pi-accent), var(--pi-primary));
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
    text-wrap: balance;
    text-align: left;
}

.pi-overview-count {
    margin: 0;
    color: var(--pi-primary);
    font-size: .82rem;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.pi-directory-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
}

.pi-directory-card {
    display: grid;
    grid-template-columns: minmax(200px, .64fr) minmax(0, 1.36fr);
    overflow: hidden;
    border: 1px solid var(--pi-line);
    border-radius: 24px;
    color: inherit;
    background: #fff;
    box-shadow: 0 16px 42px rgba(24, 48, 71, .1);
    text-decoration: none;
    cursor: pointer;
    touch-action: manipulation;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.pi-directory-card::after {
    display: none;
}

.pi-directory-card:hover {
    border-color: rgba(44,95,45,.42);
    box-shadow: 0 22px 52px rgba(24, 48, 71, .15);
    color: inherit;
    transform: translateY(-4px);
}

.pi-directory-card:focus-visible {
    outline: 3px solid rgba(115,93,165,.55);
    outline-offset: 4px;
}

.pi-directory-media {
    position: relative;
    min-height: 300px;
    overflow: hidden;
    background: linear-gradient(155deg, #1E2761 0%, #2C5F2D 100%);
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
    min-height: 300px;
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
    background: rgba(30,39,97,.55);
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
    padding: 1.7rem 1.8rem 1.85rem;
}

.pi-directory-label {
    color: var(--pi-accent);
}

.pi-directory-name {
    margin: 0;
    color: var(--pi-ink);
    font-size: clamp(1.85rem, 3.4vw, 2.8rem);
    line-height: 1;
    letter-spacing: -.04em;
    text-wrap: balance;
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
    color: var(--pi-primary);
    font-weight: 900;
    line-height: 1.5;
}

.pi-directory-summary {
    max-width: 650px;
    margin: .85rem 0 1rem;
    color: var(--pi-muted);
    line-height: 1.7;
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
    border: 1px solid rgba(44,95,45,.18);
    border-radius: 999px;
    color: var(--pi-primary);
    background: var(--pi-mist);
    font-size: .78rem;
    font-weight: 800;
}

.pi-directory-cta {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    margin-top: 1.25rem;
    color: var(--pi-ink);
    font-size: .9rem;
    font-weight: 900;
}

.pi-directory-cta span {
    color: var(--pi-accent);
    font-size: 1.25rem;
    line-height: 1;
    transition: transform .25s ease;
}

.pi-directory-card:hover .pi-directory-cta span,
.pi-directory-card:focus-visible .pi-directory-cta span {
    transform: translateX(4px);
}

.pi-directory-media--ziyang img {
    object-position: 50% 42%;
}
.pi-directory-media--yifei img {
    object-position: 50% 42%;
}
.pi-directory-media--lei img {
    object-position: 50% 42%;
}
.pi-directory-media--feng img {
    object-position: 50% 45%;
}
.pi-directory-media--kirchhoff img {
    object-position: 50% 45%;
}

.pi-directory-media--bai img {
    object-position: 50% 68%;
    transform: scale(1.1);
    transform-origin: 50% 100%;
}

@media (max-width: 980px) {
    .pi-directory-grid {
        grid-template-columns: 1fr;
    }
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
    .pi-directory-cta span,
    .pi-skip-link {
        transition: none;
    }
}

</style>

<div class="pi-overview-page">
    <a class="pi-skip-link" href="#pi-directory-title">跳转到 PI 目录</a>
    <section class="pi-overview-hero" aria-labelledby="pi-overview-title">
        <div>
            <p class="pi-overview-kicker">PI团队 · 实验平台</p>
            <h1 id="pi-overview-title" tabindex="-1">PI团队总览</h1>
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
                <h2 id="pi-directory-title" tabindex="-1">实验平台 PI</h2>
            </div>
            <p class="pi-overview-count">7 位 PI</p>
        </div>

        <div class="pi-directory-grid">
<a class="pi-directory-card" href="{{ '/cn/pi/frank-kirchhoff/' | relative_url }}" aria-label="查看弗兰克·基尔霍夫个人主页">
                <div class="pi-directory-media pi-directory-media--kirchhoff">
                    <img src="{{ '/assets/images/pi/frank-kirchhoff.jpg' | relative_url }}" alt="弗兰克·基尔霍夫教授照片" width="901" height="1200" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">弗兰克·基尔霍夫</h3>
                    <p class="pi-directory-subname">Frank Kirchhoff</p>
                    <p class="pi-directory-role">首席科学家 · 中心主任<br>中国药科大学</p>
                    <p class="pi-directory-summary">聚焦胶质细胞神经调控、神经元–胶质细胞通信与脑功能及脑疾病机制。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>胶质细胞生物学</span>
                        <span>神经元–胶质通信</span>
                        <span>脑损伤</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/cn/pi/xianshu-bai/' | relative_url }}" aria-label="查看白贤淑教授详细资料">
                <div class="pi-directory-media pi-directory-media--bai">
                    <img src="{{ '/assets/images/pi/xianshu-bai.jpg' | relative_url }}" alt="白贤淑教授照片" width="1602" height="2163" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">白贤淑</h3>
                    <p class="pi-directory-subname">Xianshu Bai</p>
                    <p class="pi-directory-role">教授 · 博士生导师<br>中国药科大学</p>
                    <p class="pi-directory-summary">聚焦神经胶质细胞对神经网络的调控机制，重点研究少突胶质细胞、脑损伤与转化神经生物学。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>神经胶质细胞</span>
                        <span>神经环路</span>
                        <span>脑损伤与修复</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/cn/pi/yuanqing-feng/' | relative_url }}" aria-label="查看冯园庆个人主页">
                <div class="pi-directory-media pi-directory-media--feng">
                    <img src="{{ '/assets/images/pi/yuanqing-feng.png' | relative_url }}" alt="冯园庆教授照片" width="940" height="1088" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">冯园庆</h3>
                    <p class="pi-directory-subname">Yuanqing Feng</p>
                    <p class="pi-directory-role">教授 · 博士生导师<br>中国药科大学</p>
                    <p class="pi-directory-summary">聚焦人类遗传变异、功能基因组学与非编码药物基因组学，解析复杂疾病机制并推动精准医疗。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>人类遗传学</span>
                        <span>功能基因组学</span>
                        <span>精准医疗</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/cn/pi/pin-li/' | relative_url }}" aria-label="查看李品教授详细资料">
                <div class="pi-directory-media">
                    <img src="{{ '/assets/images/pi/pin-li.jpg' | relative_url }}" alt="李品教授照片" width="640" height="800" loading="eager" fetchpriority="high" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
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

<a class="pi-directory-card" href="{{ '/cn/pi/lei-ma/' | relative_url }}" aria-label="查看马磊个人主页">
                <div class="pi-directory-media pi-directory-media--lei">
                    <img src="{{ '/assets/images/pi/lei-ma.png' | relative_url }}" alt="马磊教授照片" width="1280" height="1768" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">马磊</h3>
                    <p class="pi-directory-subname">Lei Ma</p>
                    <p class="pi-directory-role">教授<br>中国药科大学</p>
                    <p class="pi-directory-summary">聚焦多巴胺、腺苷和乙酰胆碱等神经调质在抑郁症、焦虑症与帕金森病中的作用机制。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>神经调质</span>
                        <span>神经精神疾病</span>
                        <span>神经环路</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/cn/pi/yifei-zhou/' | relative_url }}" aria-label="查看周一飞个人主页">
                <div class="pi-directory-media pi-directory-media--yifei">
                    <img src="{{ '/assets/images/pi/yifei-zhou.jpg' | relative_url }}" alt="周一飞特聘研究员照片" width="1114" height="1392" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">周一飞</h3>
                    <p class="pi-directory-subname">Yifei Zhou</p>
                    <p class="pi-directory-role">特聘研究员 · 博士生导师<br>药学院 · 中国药科大学</p>
                    <p class="pi-directory-summary">聚焦衰老分子机制、血–脑脊液屏障失衡与老年相关疾病干预靶点。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>衰老机制</span>
                        <span>血–脑脊液屏障</span>
                        <span>老年疾病靶点</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/cn/pi/ziyang-zhang/' | relative_url }}" aria-label="查看张子洋教授详细资料">
                <div class="pi-directory-media pi-directory-media--ziyang">
                    <img src="{{ '/assets/images/pi/ziyang-zhang.jpg' | relative_url }}" alt="张子洋教授照片" width="1220" height="1460" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI 个人主页</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">实验平台 PI</p>
                    <h3 class="pi-directory-name">张子洋</h3>
                    <p class="pi-directory-subname">Ziyang Zhang</p>
                    <p class="pi-directory-role">教授 · 博士生导师<br>药学院 · 中国药科大学</p>
                    <p class="pi-directory-summary">聚焦神经退行性疾病机制、蛋白质量控制与异常蛋白聚集/清除失衡相关的靶向药物研发。</p>
                    <div class="pi-directory-tags" aria-label="研究方向">
                        <span>蛋白质量控制</span>
                        <span>神经退行性疾病</span>
                        <span>靶向药物研发</span>
                    </div>
                    <span class="pi-directory-cta">查看完整资料 <span aria-hidden="true">→</span></span>
                </div>
            </a>
        </div>
    </section>
</div>
