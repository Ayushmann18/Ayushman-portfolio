# Ayushman Kumar Choudhary — Portfolio

A React + Vite personal developer portfolio, built for general SDE applications
(prioritized for the ResNet Solutions SDE Level 1 posting, without mentioning
ResNet anywhere on the site).

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL.

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## What's already wired up (no action needed)

- **Resume** — your latest resume PDF is at `public/resume.pdf`; the "Resume" button in the hero links to it.
- **Internship certificate** — your Skillbit Technologies certificate is at `public/internship-certificate.pdf`; the "View Internship Certificate" button in Experience links to it.
- **GitHub** — `https://github.com/Ayushmann18` (hero, projects, contact, footer).
- **LinkedIn** — `https://www.linkedin.com/in/ayushman-choudhary-x1` (hero, contact, footer).
- **LeetCode** — `https://leetcode.com/u/ayushmaanchoudhary12/` (DSA section, contact) — checked live.
- **Cine Nova repo** — `https://github.com/Ayushmann18/CineNova-AI-movie-prediction` — checked live.
- **Smart AI Resume Analyzer repo** — `https://github.com/Ayushmann18/smart-AI-resume-analyzer` — checked live.
- **DSA-Cpp repo** — linked as supporting evidence in the DSA section — checked live.
- **Certifications** — SAP, AWS, and Oracle "Verify Certificate" links all checked live and confirmed issued to Ayushman Choudhary.
- **Internship dates** — corrected to "June 2026 – August 2026 · Completed" based on your certificate (the certificate confirms the internship ended 11 Aug 2026), rather than the resume's "Present."

## One thing you need to decide: the ShopVerse GitHub link

I checked `github.com/Ayushmann18` and its 6 public repositories
(`BAJAJ-ASSESMENT`, `smart-AI-resume-analyzer`, `ai-based-crop-recommendation-system`,
`Ayushmann18` profile readme, `DSA-Cpp`, `CineNova-AI-movie-prediction`) — **there is
no ShopVerse repository there.** Since I was told not to invent a repo URL, the
featured ShopVerse project currently links its "GitHub" button to your main
profile instead of a specific repo.

Before you submit this, either:
1. Push the ShopVerse code to a new repo on your GitHub and send me (or edit yourself) the URL in `src/data/data.js` → `projects[0].github`, or
2. Leave it linking to your profile — recruiters can still see it's your account, just not a dedicated repo.

## Customizing content

Everything is in one file: `src/data/data.js`. Update project links, add new
certifications, or edit copy there — no other file needs touching for content changes.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repo.
3. Vercel auto-detects the Vite framework preset — no config needed.
4. Deploy. Your resume and certificate PDFs (in `public/`) will be served automatically at `/resume.pdf` and `/internship-certificate.pdf`.

(Netlify works the same way: build command `npm run build`, publish directory `dist`.)

## Final checklist before you submit to ResNet

- [ ] Decide on the ShopVerse GitHub link (see above) — profile link or a real repo URL.
- [ ] If you have real screenshots of ShopVerse, Cine Nova, or the Resume Analyzer running, they can replace the architecture-diagram strip in `src/components/Projects.jsx` — drop images in `public/` and reference them there. Nothing fake was used in their place.
- [ ] Skim `src/data/data.js` once yourself to confirm every line still matches your resume — this is the single source of truth for all content.
- [ ] Deploy, then click every button once (Resume, Certificate, GitHub, LinkedIn, LeetCode, all 3 project repos, all 3 certificate verify links) on the live URL to confirm nothing 404s after deployment.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   └── internship-certificate.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── icons.js              ← brand-icon lookup (react-icons)
    ├── hooks/
    │   └── useReveal.js       ← scroll-reveal animation hook
    ├── data/
    │   └── data.js            ← all resume/GitHub-sourced content
    └── components/
        ├── Navbar.jsx          ← sticky, scroll-spy active link
        ├── Hero.jsx            ← name, tagline, CTAs, achievement stats
        ├── About.jsx
        ├── Projects.jsx        ← ShopVerse featured + case-study diagram
        ├── Skills.jsx          ← tech logos, brand color on hover
        ├── DSA.jsx             ← LeetCode + DSA-Cpp links
        ├── Experience.jsx      ← internship + certificate button
        ├── Education.jsx
        ├── Certifications.jsx  ← verify-certificate links
        ├── Contact.jsx
        └── Footer.jsx
```
