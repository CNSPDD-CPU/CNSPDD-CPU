---
layout: default
title: PI Team
permalink: /pi/
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
        <h1>Principal Investigator Team</h1>
        <p>The PI Team page is prepared for center leadership profiles, research programs, platform responsibilities, and contact information.</p>
    </section>

    <section class="pi-section">
        <div class="pi-section-head">
            <div>
                <p class="pi-eyebrow">Leadership</p>
                <h2>Center Investigators</h2>
            </div>
            <p>Add principal investigator biographies here, including training background, research interests, representative publications, platform leadership, and collaboration areas.</p>
        </div>

        <div class="pi-grid">
            <article class="pi-card">
                <div class="pi-photo">Photo</div>
                <div>
                    <h3>Principal Investigator</h3>
                    <p class="pi-role">Center Leadership</p>
                    <p>Add a concise biography, research direction, and translational focus.</p>
                    <div class="pi-meta">Neuroscience · Precision Pharmacology · Drug Discovery</div>
                </div>
            </article>
            <article class="pi-card">
                <div class="pi-photo">Photo</div>
                <div>
                    <h3>Platform Principal Investigator</h3>
                    <p class="pi-role">Research Platform Leadership</p>
                    <p>Add platform responsibilities, technical strengths, and collaboration scope.</p>
                    <div class="pi-meta">Models · Assays · Data Platforms</div>
                </div>
            </article>
        </div>
    </section>
</div>
