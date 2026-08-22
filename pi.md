---
layout: default
title: PI Team
permalink: /pi/
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
    grid-template-columns: minmax(220px, .7fr) minmax(0, 1.3fr);
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
    min-height: 330px;
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
    padding: 2.1rem 2.3rem 2.25rem;
}

.pi-directory-label {
    color: var(--pi-accent);
}

.pi-directory-name {
    margin: 0;
    color: var(--pi-ink);
    font-size: clamp(2rem, 4vw, 3.1rem);
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
    margin-top: 1.6rem;
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
    <a class="pi-skip-link" href="#pi-directory-title">Skip to PI directory</a>
    <section class="pi-overview-hero" aria-labelledby="pi-overview-title">
        <div>
            <p class="pi-overview-kicker">PI Directory · Experimental Platform</p>
            <h1 id="pi-overview-title" tabindex="-1">Investigators behind the platform.</h1>
        </div>
        <div>
            <p class="pi-overview-intro">Explore the principal investigators who connect disease mechanisms, vascular biology, and translational drug development across the center.</p>
            <div class="pi-overview-ribbon">
                <span class="pi-overview-ribbon-mark" aria-hidden="true"></span>
                <div>
                    <strong>Research expertise, one profile at a time.</strong>
                    <span>Choose a profile to view research focus, representative publications, and patents.</span>
                </div>
            </div>
        </div>
    </section>

    <section class="pi-overview-section" aria-labelledby="pi-directory-title">
        <div class="pi-overview-section-head">
            <div>
                <p class="pi-overview-section-label">Directory</p>
                <h2 id="pi-directory-title" tabindex="-1">Principal investigators</h2>
            </div>
            <p class="pi-overview-count">7 profiles</p>
        </div>

        <div class="pi-directory-grid">
<a class="pi-directory-card" href="{{ '/pi/frank-kirchhoff/' | relative_url }}" aria-label="View Frank Kirchhoff profile">
                <div class="pi-directory-media pi-directory-media--kirchhoff">
                    <img src="{{ '/assets/images/pi/frank-kirchhoff.jpg' | relative_url }}" alt="Frank Kirchhoff, Chief Scientist at China Pharmaceutical University" width="901" height="1200" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Frank Kirchhoff</h3>
                    <p class="pi-directory-subname">弗兰克·基尔霍夫</p>
                    <p class="pi-directory-role">Chief Scientist · Center Director<br>China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Neuron–glia communication, glial neuromodulation, and advanced models of brain function and disease.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Glial biology</span>
                        <span>Neuron–glia communication</span>
                        <span>Brain injury</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/pi/xianshu-bai/' | relative_url }}" aria-label="View Xianshu Bai profile">
                <div class="pi-directory-media pi-directory-media--bai">
                    <img src="{{ '/assets/images/pi/xianshu-bai.jpg' | relative_url }}" alt="Xianshu Bai, Professor at China Pharmaceutical University" width="1602" height="2163" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Xianshu Bai</h3>
                    <p class="pi-directory-subname">白贤淑</p>
                    <p class="pi-directory-role">Professor · Doctoral Supervisor<br>China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Neuroglial control of neural networks, with a focus on oligodendrocyte biology, brain injury, and translational neurobiology.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Neuroglial biology</span>
                        <span>Neural circuits</span>
                        <span>Brain injury &amp; repair</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/pi/yuanqing-feng/' | relative_url }}" aria-label="View Yuanqing Feng profile">
                <div class="pi-directory-media pi-directory-media--feng">
                    <img src="{{ '/assets/images/pi/yuanqing-feng.png' | relative_url }}" alt="Yuanqing Feng, Professor at China Pharmaceutical University" width="940" height="1088" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Yuanqing Feng</h3>
                    <p class="pi-directory-subname">冯园庆</p>
                    <p class="pi-directory-role">Professor · Doctoral Supervisor<br>China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Human genetic variation, functional genomics, and non-coding pharmacogenomics for complex disease and precision medicine.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Human genetics</span>
                        <span>Functional genomics</span>
                        <span>Precision medicine</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/pi/pin-li/' | relative_url }}" aria-label="View Pin Li profile">
                <div class="pi-directory-media">
                    <img src="{{ '/assets/images/pi/pin-li.jpg' | relative_url }}" alt="Pin Li, Professor at China Pharmaceutical University" width="640" height="800" loading="eager" fetchpriority="high" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Pin Li</h3>
                    <p class="pi-directory-subname">李品</p>
                    <p class="pi-directory-role">Professor · Doctoral Supervisor<br>China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Vascular homeostasis, remodeling, regeneration, and therapeutic discovery for vascular injury diseases and tumor vascular microenvironments.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Vascular biology</span>
                        <span>Stroke therapeutics</span>
                        <span>Drug target discovery</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/pi/lei-ma/' | relative_url }}" aria-label="View Lei Ma profile">
                <div class="pi-directory-media pi-directory-media--lei">
                    <img src="{{ '/assets/images/pi/lei-ma.png' | relative_url }}" alt="Lei Ma, Professor at China Pharmaceutical University" width="1280" height="1768" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Lei Ma</h3>
                    <p class="pi-directory-subname">马磊</p>
                    <p class="pi-directory-role">Professor<br>China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Neuromodulator mechanisms in depression, anxiety, and Parkinson’s disease, with a focus on dopamine, adenosine, and acetylcholine.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Neuromodulators</span>
                        <span>Neuropsychiatric disease</span>
                        <span>Neural circuits</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/pi/yifei-zhou/' | relative_url }}" aria-label="View Yifei Zhou profile">
                <div class="pi-directory-media pi-directory-media--yifei">
                    <img src="{{ '/assets/images/pi/yifei-zhou.jpg' | relative_url }}" alt="Yifei Zhou, Principal Investigator at China Pharmaceutical University" width="1114" height="1392" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Yifei Zhou</h3>
                    <p class="pi-directory-subname">周一飞</p>
                    <p class="pi-directory-role">Principal Investigator<br>School of Pharmacy · China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Molecular mechanisms of aging, blood–cerebrospinal fluid barrier dysfunction, and therapeutic targets for age-related disease.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Aging biology</span>
                        <span>Blood-CSF barrier</span>
                        <span>Therapeutic targets</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>

<a class="pi-directory-card" href="{{ '/pi/ziyang-zhang/' | relative_url }}" aria-label="View Ziyang Zhang profile">
                <div class="pi-directory-media pi-directory-media--ziyang">
                    <img src="{{ '/assets/images/pi/ziyang-zhang.jpg' | relative_url }}" alt="Ziyang Zhang, Professor at China Pharmaceutical University" width="1220" height="1460" loading="lazy" decoding="async">
                    <span class="pi-directory-stamp">PI Profile</span>
                </div>
                <div class="pi-directory-body">
                    <p class="pi-directory-label">Principal Investigator</p>
                    <h3 class="pi-directory-name">Ziyang Zhang</h3>
                    <p class="pi-directory-subname">张子洋</p>
                    <p class="pi-directory-role">Professor · Doctoral Supervisor<br>School of Pharmacy · China Pharmaceutical University</p>
                    <p class="pi-directory-summary">Neurodegenerative disease mechanisms, protein quality control, and targeted drug discovery for aberrant protein aggregation and clearance.</p>
                    <div class="pi-directory-tags" aria-label="Research focus">
                        <span>Protein quality control</span>
                        <span>Neurodegeneration</span>
                        <span>Drug discovery</span>
                    </div>
                    <span class="pi-directory-cta">View full profile <span aria-hidden="true">→</span></span>
                </div>
            </a>
        </div>
    </section>
</div>
