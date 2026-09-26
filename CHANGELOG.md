# Changelog

Loyihadagi barcha muhim o'zgarishlar ushbu faylda yozib boriladi.

## [Unreleased]
### Added
- Barcha og'ir png rasmlar webp formatiga konvertatsiya qilinib, preload yordamida LCP yaxshilandi.
- `Main.tsx` refaktor qilinib, background-image o'rniga standard `<img>` fetchPriority="high" va loading="eager" ulandi.
- `React.lazy` orqali `App.tsx` ga Code Splitting o'rnatildi, JS Bundle hajmi va TBT tezligi qisqartirildi.
- `Header.tsx` ga va barcha rasmlarga Accessibility (A11y) aria-teglar va alt matnlar ulandi, tiplar (`any`) to'g'rilandi.
- `PROJECT_CONTEXT.md`, `TASKS.md`, `CHANGELOG.md` hujjatlari yaratildi va loyiha holati ularga muhrlandi.
- SEO optimizatsiya (meta teglar, robots.txt, sitemap.xml).
- `react-helmet-async` yordamida dinamik til o'zgartirish `html lang` atributiga ulandi.

## [1.0.0] - Boshlang'ich commit'lar
### Added
- Boshlang'ich React + Vite + TypeScript loyiha tuzilmasi yaratildi.
- Tailwind CSS va Ant Design sozlangan.
- Bosh sahifa skeleti (Header, Main, About, Works, Services, Footer) yaratildi.
- `react-i18next` orqali ko'p tillilik (uz, ru) tizimi o'rnatildi.
- Slayderlar (`swiper`) va bitta sahifada harakatlanish (`react-scroll`) qo'shilgan.
