# Project Context

## Loyiha Maqsadi
Loyiha "KONL CANNY" (yoki loyiha nomlanishiga ko'ra "Toshiba") deb nomlangan, lift (elevator) o'rnatish va texnik xizmat ko'rsatishga ixtisoslashgan kompaniya uchun zamonaviy, ko'p tilli korporativ veb-sayt (Landing Page) yaratishni maqsad qilgan. Sayt orqali kompaniya haqida ma'lumot berish, bajarilgan ishlarni ko'rsatish, taqdim etilayotgan xizmatlarni yoritish va mijozlar bilan aloqa o'rnatish imkoniyatini taqdim etish mo'ljallangan. Barcha bo'limlar bitta sahifada (`react-scroll` orqali silliq o'tish bilan) joylashadi.

## Texnologik Stack
- **Framework/Library:** React 18, Vite
- **Tillar:** TypeScript, CSS (Tailwind CSS)
- **Komponentlar:** Ant Design (`antd`)
- **Holatni boshqarish va marshrutizatsiya:** `react-router-dom`
- **Ilovalar va animatsiyalar:** `swiper` (slayderlar uchun), `react-scroll` (sahifa bo'ylab silliq harakatlanish)
- **Ko'p tillilik:** `react-i18next`, `i18next-http-backend` (Hozircha: O'zbek va Rus tillari)
- **Ikonalar:** `react-icons`
- **Linter va Formatter:** ESLint

## Joriy Holati
Hozirgi vaqtda loyihaning boshlang'ich skeleti va layout'i (Header, Main, About, Works, Services, Footer) yaratilgan. 
- `Header` komponenti to'liq ishlangan (Responsive: mobile versiyada Antd `Drawer` ishlatilgan).
- `Main` komponentida `swiper` yordamida lift rasmlari ("elevator-bg") aylanuvchi slayderi qo'shilgan. Dangasa yuklanish (Lazy load) qo'llanilgan.
- `i18n` (tarjima) mexanizmi o'rnatilgan bo'lib, `locales/{{lng}}/translation.json` orqali matnlarni tortib oladi.

## Arxitektura va Rivojlantirish Qoidalari
- **TypeScript Strict Mode:** Qat'iy amal qilinadi. `any` tipidan faqat juda zarur holatlardagina foydalaniladi.
- **Kodni Qayta Foydalanish:** Komponentlar (masalan, hook'lar) modulli, DRY (Don't Repeat Yourself) qoidasi asosida yozilishi kerak.
- **Performance:** `lazy` va `Suspense` kabi texnikalardan o'rinli foydalanib, ortiqcha re-render'larning oldini olish lozim. Production darajasidagi optimizatsiya birinchi o'rinda.
