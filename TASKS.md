# Tasks (Vazifalar)

## Navbatdagi (Kutib turgan) vazifalar
- [ ] Tarjima fayllarini (`public/locales/uz/translation.json`, `public/locales/ru/translation.json`) to'liq tekshirish va kamchiliklarni to'ldirish.
- [ ] `About` (Biz haqimizda) bo'limini UI/UX va ma'lumotlar bilan boyitish.
- [ ] `Works` (Bajarilgan ishlar/Portfolio) komponentini to'liq ishlash va mos rasmlarni joylash.
- [ ] `Services` (Xizmatlar) bo'limini tugatish.
- [ ] Mijozlar bog'lanishi uchun `Contacts` yoki `Footer` bo'limini mukammallashtirish (xaritada manzilni ko'rsatish va h.k).

## Bajarilgan vazifalar
- [x] Matnlarni statik kodga biriktirish (`i18next-http-backend` olib tashlandi). Googlebot endi barcha matnlarni kutmasdan ko'ra oladi.
- [x] `App.tsx` da dinamik SEO meta teglarini (Title va Description) ulash. Sahifa tili o'zgarganda SEO teglari ham o'zgaradi.
- [x] Asosiy sahifaga `<H1>` tegini kiritish.
- [x] LCP va FCP ni "yashil" zonaga ko'tarish uchun barcha rasmlarni `.webp` ga konvertatsiya qilish, qahramon(hero) rasmni to'g'ri (preload, eager) yuklash.
- [x] Sahifani tezroq yuklash uchun `App.tsx` ichidagi pastki sahifa bo'limlariga dinamik `React.lazy` ni qo'llash (Code Splitting).
- [x] Kod sifatini oshirish uchun TypeScript Strict Mode muammolari, `any` tiplari va ko'zi ojizlar uchun maxsus A11y aria-label teglari to'g'rilandi.
- [x] Butun loyiha bo'ylab SEO optimizatsiyasini o'rnatish (`index.html` ga Open Graph, Schema.org va meta teglar qo'shish, `robots.txt` va `sitemap.xml` yaratish).
- [x] Sahifa tillari o'zgarishini qamrab oluvchi `react-helmet-async` kutubxonasini o'rnatish va `App.tsx` ga ulash.
- [x] Loyiha hujjatlarini (`PROJECT_CONTEXT.md`, `TASKS.md`, `CHANGELOG.md`) yaratish va saqlash.
- [x] Loyihaning asosiy muhitini (React + Vite + TypeScript) sozlash.
- [x] Tailwind CSS, Ant Design va boshqa kerakli kutubxonalarni o'rnatish.
- [x] Slayderlar (Swiper) va silliq harakatlanish (react-scroll) integratsiyasi.
- [x] `Header` va `Main` komponentlarini boshlang'ich holatda tayyorlash.
- [x] Ko'p tillilik (`react-i18next`) strukturasini qurish.
