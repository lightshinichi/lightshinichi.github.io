# Naveen Prakash R | Portfolio

Personal portfolio site for **Naveen Prakash R**, a Machine Learning & Computer Vision engineer
working in robotics, vision-language models, edge AI and agentic LLM systems.

**Live:** https://lightshinichi.github.io

## Highlights

- **Research Assistant, University of Galway:** TerraBase, real-time autonomous navigation for a
  Unitree Go2 quadruped using a self-supervised DINOv2 traversability model on a Jetson Orin NX.
- **ML Engineer, SiPra:** deep-learning gait pipeline for early Alzheimer's risk (YOLO + OpenPose
  + ViT + LSTM).
- **ML Engineer, MulticoreWare:** radar activity-recognition pipelines and AWS SageMaker/MLOps.
- Projects in agentic LLM systems (Anthropic Claude API) and LLaMA 3.2 LoRA fine-tuning for Text-to-SQL.
- AWS Certified Data Engineer · 2 patents filed · IEEE publication.

## Tech

Plain, dependency-free static site: `HTML`, `CSS`, and vanilla `JavaScript`. No build step.

```
index.html               Markup & content
styles.css               Theme, layout, responsive design (light/dark)
script.js                Theme toggle, mobile nav, scroll-spy, reveal animations
public/NaveenPrakash.pdf Résumé (linked from the site)
public/logo.svg          NP monogram logo
.github/workflows        GitHub Actions Pages deploy workflow
```

## Run locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

Deployment is handled by GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):
every push to `main` builds and publishes the site to https://lightshinichi.github.io.

One-time setup: in **Settings → Pages**, set **Source** to **GitHub Actions** (instead of
*Deploy from a branch*). After that, each push deploys automatically and you can also trigger a run
manually from the **Actions** tab.

---

**Contact:** rnaveenprakash25@gmail.com · [LinkedIn](https://linkedin.com/in/np25) · [GitHub](https://github.com/lightshinichi)
