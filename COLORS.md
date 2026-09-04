# Color reference — LConnectiQ site

Every color the site uses, where it lives, and what it drives. Edit the value in the
"Defined in" file and it changes everywhere the token is used.

---

## 1. Brand tokens — the main knobs

Defined in **[`tailwind.config.js`](tailwind.config.js)** → `theme.extend.colors`.
Used as Tailwind classes: `bg-navy`, `text-gold-deep`, `border-navy/10`, etc.

Values below are the **max-contrast pass**: brightest possible white for every light
background, near-black text, darkened navy, richer/darker gold.

| Token | Current hex | Was | Used for | Class usages |
|---|---|---|---|---|
| `navy` (DEFAULT) | `#171a2d` | `#20233c` | Dark section backgrounds (Hero, CTA band, Contact, Problem "answer" bar), primary body headings (`text-navy`), button fills, borders | `text-navy` ×51, `bg-navy` ×13, `border-navy*` ×24 |
| `navy.deep` | `#0d0e1c` | `#14162a` | Footer background, VideoStrip background | `bg-navy-deep` ×2 |
| `navy.soft` | `#3a3f68` | — | (defined, not currently referenced — spare mid-navy) | 0 |
| `gold` (DEFAULT) | `#d4af37` | — | Bright metallic gold — eyebrow rules, bullet dots, stat left-borders, hairlines on light backgrounds | `bg-gold` ×3, `border-gold` ×2 |
| `gold.soft` | `#f2d98a` | `#f0d67e` | Champagne gold — gold text/headline accents **on navy**, primary button fills, eyebrow text on dark | `text-gold-soft` ×15, `bg-gold-soft` ×10, `border-gold-soft` ×4 |
| `gold.deep` | `#6d560f` | `#8a6d14` | Dark gold — gold text/links/eyebrow **on light backgrounds**. Now ~7.4:1 on white (was ~4.9) | `text-gold-deep` ×27, `bg-gold-deep` ×4, `border-gold-deep` ×3 |
| `mist` (DEFAULT) | `#ffffff` | `#fbfbf9` | Section backgrounds + PageHeader — **now identical to `bg-white`** (no more light/light alternation) | `bg-mist` ×6 |
| `mist.deep` | `#f4f5f8` | `#eef0f5` | (former image tray — trays are now `#07080d`; effectively unused) | 0 |
| `ink` (DEFAULT) | `#000000` | `#0b0d16` | Pure black — service-card bullet text | `text-ink` ×1 |
| `ink.soft` | `#282c38` | `#3c4152` | Cool near-black — all long-form body copy on light. Now ~13:1 on white (was ~10) | `text-ink-soft` ×34 |

Also in `tailwind.config.js`: an `opacity` scale `0–100` is generated so any `/NN`
opacity works on these (e.g. `border-navy/[0.07]`, `bg-navy/15`).

---

## 2. Plain white/black (Tailwind defaults, not tokens)

| Class | Where |
|---|---|
| `bg-white` ×29 (+ `bg-mist` now `#fff`) | Every light section, cards, header (scrolled), mobile menu, bottom tab bar |
| `text-white` (solid) ×20 → now ~28 | All headings **and body/sub-text** on navy — the `/70`–`/90` sub-text was all promoted to solid white in the max-contrast pass |
| `text-white/95` ×1 | Footer body text |
| `text-white/90` ×6 | Contact form field labels |
| `text-white/80` ×1 | Contact form privacy note |
| `text-white/70` ×2 | Input **placeholder** text only (kept below solid so placeholders ≠ typed values) |
| `border-white/24 /16 /15 /10` | Outline buttons, form field borders, dividers on navy |

---

## 3. Hard-coded colors (inline, not tokens) — edit per file

| Value | File / line | Purpose |
|---|---|---|
| `radial-gradient(120% 120% at 75% 8%, rgba(20,22,42,.32) → .55 → rgba(12,14,26,.82))` | [`Hero.jsx:11`](src/components/home/Hero.jsx) | **Hero video darkening overlay.** Lower the alphas = brighter video / less text contrast |
| `rgba(212,175,55,.14)` grid lines | [`Hero.jsx:52`](src/components/home/Hero.jsx) | Gold grid pattern over hero |
| `#000` mask stops | [`Hero.jsx:54-55`](src/components/home/Hero.jsx) | Fade-out mask for the grid (not a visible color) |
| `rgba(240,214,126,0.55)` / `rgba(255,255,255,0.5)` | [`Hero.jsx:99`](src/components/home/Hero.jsx) | Glow shadow under the "Explore services" button |
| `rgba(212,175,55,.16)` grid lines | [`CTABand.jsx:13`](src/components/shared/CTABand.jsx), [`Contact.jsx:12`](src/pages/Contact.jsx) | Vertical gold grid on CTA band & Contact hero |
| `rgba(240,214,126,0.5)` / `rgba(255,255,255,0.45)` | [`CTABand.jsx:32`](src/components/shared/CTABand.jsx) | Glow shadow under CTA button |
| `rgba(35,37,56,.05)` grid lines | [`PageHeader.jsx:11`](src/components/shared/PageHeader.jsx) | Faint navy grid on inner-page headers (About/Services/Portfolio/legal) |
| `#000000` → `#ffffff` | [`IntroSplash.jsx:31`](src/components/layout/IntroSplash.jsx) | Splash background: animates black → white |
| `rgba(255,236,180,0.7) → rgba(240,214,126,0.35) → transparent` | [`IntroSplash.jsx:57`](src/components/layout/IntroSplash.jsx) | Warm gold halo behind the splash logo |
| `brightness(1.25) drop-shadow(…rgba(255,240,200,0.9)) drop-shadow(…rgba(240,214,126,0.6))` | [`IntroSplash.jsx:62`](src/components/layout/IntroSplash.jsx) | Splash logo brightness + glow (light phase) |
| `drop-shadow(0 0 20px rgba(212,175,55,0.4))` | [`IntroSplash.jsx:67`](src/components/layout/IntroSplash.jsx) | Splash logo glow (dark/white phase) |
| `rgba(35,37,56,0.08)` / `rgba(35,37,56,0.06)` | [`SiteHeader.jsx:34`](src/components/layout/SiteHeader.jsx) | Shadow under the header once scrolled |
| `radial-gradient(…transparent 55%, rgba(0,0,0,0.45) 100%)` | [`VideoStrip.jsx`](src/components/shared/VideoStrip.jsx) | Edge vignette over the inline video (keeps blacks black) |
| `#07080d` (near-OLED black) | [`PortfolioCard.jsx`](src/components/portfolio/PortfolioCard.jsx), [`ProjectDetail.jsx`](src/pages/ProjectDetail.jsx) | Tray behind portfolio renders |
| `contrast(1.08) saturate(1.12) brightness(1.02)` | [`Hero.jsx`](src/components/home/Hero.jsx), [`VideoStrip.jsx`](src/components/shared/VideoStrip.jsx) | CSS "punch" filter on both videos |
| `saturate(1.08) contrast(1.04)` | [`PortfolioCard.jsx`](src/components/portfolio/PortfolioCard.jsx), [`ProjectDetail.jsx`](src/pages/ProjectDetail.jsx) | CSS "punch" filter on portfolio images |
| `#4285F4 #34A853 #FBBC05 #EA4335` | [`GoogleIcon.jsx`](src/components/GoogleIcon.jsx) | Google's brand colors in the "Sign in with Google" icon (auth pages, currently unrouted) — do not change |

---

## 4. shadcn/ui theme variables (mostly dormant)

Defined in **[`src/index.css`](src/index.css)** as HSL triples on `:root` (light) and
`.dark`. The site styles almost everything with the brand tokens above, so these only
affect stray shadcn primitives (form controls, toasts, dialogs). `.dark` is defined but
never activated (`darkMode: ["class"]`, class never set).

Key ones: `--background 0 0% 100%`, `--foreground 0 0% 3.9%`, `--primary 0 0% 9%`,
`--border 0 0% 89.8%`, `--ring 0 0% 3.9%`, `--radius 0.5rem`, plus `--chart-1..5` and
`--sidebar-*`. Full list in `index.css` lines 7–79.

---

## 5. Images & media (external, on Base44's CDN)

| Asset | URL | Where |
|---|---|---|
| Logo (3840px transparent PNG) | `media.base44.com/images/public/6a97…/2db942727_LCQ-BRA-015LConnectiQlogo…png` | [`Logo.jsx:7`](src/components/shared/Logo.jsx) — header, footer, splash |
| Hero / VideoStrip drone video (mp4) | `media.base44.com/videos/public/user_69ef…/6f829cd56_ElevenLabs_video…mp4` | [`Hero.jsx:8`](src/components/home/Hero.jsx), [`VideoStrip.jsx:6`](src/components/shared/VideoStrip.jsx) |
| 7 portfolio renders (PNG) | `media.base44.com/images/public/6a97…/` + per-item filename | [`portfolioData.js`](src/components/portfolio/portfolioData.js) |
| Image fallback | `static.wixstatic.com/media/12d367_…mv2.png` | [`image.jsx:15`](src/components/ui/image.jsx) — shown only if a source 404s |

To replace any image, host the new file and swap the URL string. The logo tints to
white via CSS `invert` wherever `inverted` is passed (hero, footer, splash light phase).

**Image quality pipeline** ([`image-helpers.js`](src/components/ui/image-helpers.js),
[`image.jsx`](src/components/ui/image.jsx)): transforms now request `q_95` by default
(`quality` prop — portfolio cards 95, project-detail 97), stronger unsharp mask
`usm_0.80_1.20_0.02`, WebP, **no** `quality_auto` (which let the CDN drop quality),
srcSet at 1×/2×/3× DPR, fallback width 1600px. The **video** files are served as-is —
their resolution/bitrate is fixed at the source `.mp4`; only re-encoding/replacing the
file raises it. The CSS punch filters and true-black (`#000` / `#07080d`) surrounds are
what give the "OLED" look on the current files.

Ranges: image `quality` 88–100 (100 = near-lossless, larger files); punch filters
`contrast`/`saturate` 1.0–1.15 each (past ~1.15 highlights clip and colors posterize).

---

## 6. Safe adjustment ranges

"Min" = as dark / rich / muted as you'd want to go. "Max" = as bright / light as you'd
want to go. Past either end the noted thing breaks. Contrast ratios are WCAG (AA normal
text needs ≥ 4.5:1, AA large/bold ≥ 3:1).

### Brand tokens

| Token | Min | Current | Max | What limits the ends |
|---|---|---|---|---|
| `navy` (dark bg + `text-navy` on light) | `#101223` | **`#171a2d`** | `#2e3358` | Min: sections near-black, heavy. Max: `text-navy` on white ~14:1 → ~8:1 (fine); white on `bg-navy` ≥ 7:1 up to ~`#3a3f68` |
| `navy.deep` (footer, VideoStrip) | `#080914` | **`#0d0e1c`** | `#1a1d33` | Must stay visibly darker than `navy` |
| `navy.soft` (spare mid-navy) | `#33375c` | `#3a3f68` | `#4a5085` | Above `#50` white text on it falls below AA |
| `gold` (rules/dots on light — decorative) | `#b8902a` | **`#d4af37`** | `#e8c657` | Min: muddy. Max: washes out on white |
| `gold.soft` (gold text/buttons **on navy**) | `#c9a94e` | **`#f2d98a`** | `#f8e8ad` | Min ≈ 4.5:1 on navy. Current ≈ 11:1. Max: bleached cream |
| `gold.deep` (gold text/links **on white**) | `#5c4809` (~9.7:1) | **`#6d560f`** (~7.4:1) | `#8a6d14` (~4.9:1) | **Tightest token.** Max is the old value; past `#957619` fails AA for normal text |
| `mist` (section bg) | `#f4f4f0` | **`#ffffff`** | `#ffffff` | Already maxed. Drop to `#f7f7f4` if you want faint section separation back |
| `mist.deep` (unused) | — | `#f4f5f8` | — | Not referenced anymore |
| `ink` (bullet text on white) | `#000000` | **`#000000`** | `#1a1d26` | Already maxed |
| `ink.soft` (all body copy on light) | `#1f2230` (~15:1) | **`#282c38`** (~13:1) | `#4a4f5e` (~7:1) | Min: near-black body text. Max still comfortable; past `#63687a` drops toward AA floor |

### Opacity utilities on dark sections

| Use | Class now | Min (dim) | Recommended | Max (bright) |
|---|---|---|---|---|
| Body / sub-text on navy | **solid `text-white`** | `/80` | solid | solid |
| Footer body text | `text-white/95` | `/85` | `/95` | solid |
| Contact form field **labels** | `text-white/90` | `/75` | `/90` | solid |
| Contact form privacy note | `text-white/80` | `/70` | `/80` | `/95` |
| Input **placeholder** text | `text-white/70` | `/60` | `/70` | `/80` (keep below solid so it ≠ typed text) |
| Hairline borders on navy | `border-white/10`–`/24` | `/08` | `/15`–`/25` | `/45` |
| Borders on light (`border-navy/*`) | `/5`–`/15` | `/04` | `/08`–`/12` | `/20` |

### Hard-coded values

| Value | Min | Current | Max | Limit |
|---|---|---|---|---|
| Hero overlay stop 1 (top) alpha | `.15` | `.32` | `.55` | Min: bright frames blow out behind the logo/nav |
| Hero overlay stop 2 (mid) alpha | `.35` | `.55` | `.72` | — |
| Hero overlay stop 3 (bottom) alpha | `.65` | `.82` | `.92` | Min: white headline + paragraph lose contrast over pale video frames |
| Gold grid lines — Hero | `.06` | `.14` | `.22` | Max: reads as a spreadsheet |
| Gold grid lines — CTA / Contact | `.06` | `.16` | `.24` | " |
| Navy grid lines — PageHeader | `.03` | `.05` | `.10` | " |
| Button glow alpha `rgba(240,214,126, x)` | `.30` | `.50`–`.55` | `.70` | Max: halo looks like a bug |
| Splash halo center alpha | `.45` | `.70` | `.90` | Max: whites out the mark |
| Splash logo `brightness()` | `1.0` | `1.25` | `1.6` | Max: mark goes flat/blown, edges bloom |
| Header scroll shadow alpha | `.04` | `.06`–`.08` | `.12` | Max: heavy drop-shadow, dated look |

Current shadcn vars after the max-contrast pass: `--foreground` / `--card-foreground` /
`--popover-foreground` = `0 0% 0%` (pure black), `--muted-foreground` = `0 0% 28%`
(was 45%), `--primary` = `0 0% 4%`, `--primary-foreground` = `0 0% 100%`.

### shadcn `--*` variables ([index.css](src/index.css))

Leave as-is unless a specific form control / toast / dialog looks wrong — they don't
affect the marketing pages. If you do touch them, keep `--background` and `--foreground`
at max contrast (`0 0% 100%` / `0 0% ~4%`) and only nudge `--muted-foreground`
(`0 0% 45.1%` → range `40%`–`50%`) and `--border` (`0 0% 89.8%` → `86%`–`93%`).

---

## Quick "make it brighter" levers, in order of impact

1. `gold.deep` → lighter (e.g. `#a8851c`) brightens 27 text spots on light pages — watch contrast on white.
2. Hero overlay alphas in `Hero.jsx:11` — biggest single visual change.
3. `navy` DEFAULT → lighter (e.g. `#282c4a`) lifts every dark section at once.
4. `text-white/60` → `/75` in the Contact form ([`ContactForm.jsx`](src/components/contact/ContactForm.jsx)) fixes the dimmest text.
5. `mist` is already near-white; going pure `#ffffff` removes the light-section alternation entirely.
