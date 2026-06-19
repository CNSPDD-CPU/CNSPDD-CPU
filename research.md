---
layout: default
title: Research and Platforms
permalink: /research/
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
        line-height: 1.05;
        text-align: center;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .rp-lead {
        max-width: 820px;
        margin: 0 auto;
        color: var(--rp-muted);
        font-size: 1.12rem;
        line-height: 1.75;
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
        line-height: 1.15;
        text-align: center;
        background: none;
        -webkit-text-fill-color: currentColor;
    }

    .section-copy {
        max-width: 760px;
        margin: 0.9rem auto 0;
        color: var(--rp-muted);
        line-height: 1.7;
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
        line-height: 1.35;
        text-align: center;
    }

    .card-copy {
        margin: 0;
        color: var(--rp-muted);
        line-height: 1.65;
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
            <h1 class="rp-title">Mechanism-based neuroscience for precision drug discovery</h1>
            <p class="rp-lead">CNSPDD integrates individual basic research, organized drug-development projects, and compound-validation services to understand brain function in health and disease and translate that understanding into cell-specific, sex-informed therapeutic strategies.</p>
        </div>
    </section>

    <section class="rp-section rp-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">Program Architecture</p>
                <h2 class="section-title">Three connected directions</h2>
            </div>
            <p class="section-copy">The Center links discovery science to translational testing, creating a pipeline from disease mechanism to compound evaluation.</p>
        </div>
        <div class="platform-grid">
            <article class="rp-card">
                <h3 class="card-title">Basic Research</h3>
                <p class="card-copy">Individual projects define mechanisms of brain function in health and disease, with emphasis on sex-specific neuron-glia interactions and early multicellular disease processes.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Drug Development</h3>
                <p class="card-copy">Organized projects develop cell-specific strategies to target intracellular signaling and intercellular communication in defined neuronal and glial populations.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Compound Validation</h3>
                <p class="card-copy">A service-oriented platform tests novel compounds for their ability to modulate brain function, circuit activity, and disease-relevant cellular communication.</p>
            </article>
        </div>
    </section>

    <section class="program-band">
        <div class="rp-shell">
            <div class="section-head">
                <div>
                    <p class="section-eyebrow">Research Focus</p>
                    <h2 class="section-title">From neuron-glia mechanisms to sex-informed therapies</h2>
                </div>
                <p class="section-copy">The Center treats the brain as a highly interactive multicellular network and places sex as a biological variable at the center of disease mechanism, pharmacology, and therapeutic design.</p>
            </div>
            <div class="rp-grid">
                <article class="rp-card">
                    <h3 class="card-title">Neuron-Glia Communication</h3>
                    <p class="card-copy">Uncovering how neurons, astrocytes, microglia, oligodendrocytes, and defined neuronal subtypes communicate in health, vulnerability, and disease.</p>
                </article>
                <article class="rp-card">
                    <h3 class="card-title">Sex-Specific Disease Biology</h3>
                    <p class="card-copy">Dissecting how female and male brains differ in receptor expression, intracellular signaling, network integration, and disease trajectories.</p>
                </article>
                <article class="rp-card">
                    <h3 class="card-title">Early Intervention Windows</h3>
                    <p class="card-copy">Focusing on multicellular communication events that arise before overt neurodegeneration or clinical symptom onset.</p>
                </article>
                <article class="rp-card">
                    <h3 class="card-title">Precision Therapeutics</h3>
                    <p class="card-copy">Developing cell-specific delivery and modulation strategies with optimized dose, route, formulation, biomarkers, and companion diagnostics.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="rp-section rp-shell">
        <div class="section-head">
            <div>
                <p class="section-eyebrow">Platforms</p>
                <h2 class="section-title">Technology platforms for mechanism-based discovery</h2>
            </div>
            <p class="section-copy">CNSPDD connects molecular and cellular mechanisms to circuit dynamics, behavior, pharmacology, and human-relevant models in female and male systems.</p>
        </div>
        <div class="platform-grid">
            <article class="rp-card">
                <h3 class="card-title">Advanced Microscopy</h3>
                <p class="card-copy">Confocal, super-resolution, two-photon, head-mounted two-photon, whole-slide scanning, and fluorescence lifetime fiber photometry.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Circuit Physiology</h3>
                <p class="card-copy">Optogenetics, Neuropixels population recordings, multielectrode arrays, and patch-clamp electrophysiology.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Human-Relevant Models</h3>
                <p class="card-copy">Brain organoids, iPSC-derived cultures, ex vivo preparations, and in vivo female and male animal studies.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Precision Pharmacology</h3>
                <p class="card-copy">Target discovery, medicinal chemistry, formulation science, and sex-dependent pharmacokinetic and pharmacodynamic profiling.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Biomarkers and Diagnostics</h3>
                <p class="card-copy">Developing readouts that reflect sex-specific disease mechanisms and treatment responses.</p>
            </article>
            <article class="rp-card">
                <h3 class="card-title">Computational Biology</h3>
                <p class="card-copy">Quantitative modeling of sex-specific disease pathways and integration of cellular, circuit, behavioral, and pharmacological data.</p>
            </article>
        </div>
    </section>
</div>
