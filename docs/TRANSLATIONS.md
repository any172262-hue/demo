# Bilingual Translation Architecture (English & Assamese)

## 1. Architecture Overview

The bilingual system supports **English (EN)** as the default language and **Assamese (অসমীয়া - AS)**. The translation architecture is built on structured JSON dictionaries loaded via a reactive React Context (`src/context/LanguageContext.tsx`).

```
src/locales/
  ├── en/
  │   ├── common.json      # Navigation, action buttons, footer, workshop hours
  │   ├── contact.json     # Form labels, validation notices, success messages
  │   ├── home.json        # Hero, overview, why choose us, how it works copy
  │   ├── pages.json       # About, products, gallery, videos, legal copy
  │   └── services.json    # Service headings and consultation callouts
  └── as/
      ├── common.json      # Assamese translation
      ├── contact.json     # Assamese translation
      ├── home.json        # Assamese translation
      ├── pages.json       # Assamese translation
      └── services.json    # Assamese translation
```

---

## 2. Key Language Features

- **State Persistence:** The user's chosen language is saved in `localStorage.getItem('cars_energy_lang')`. The preference persists as the user navigates between pages or refreshes the website.
- **Document Lang Attribute:** The root `<html>` element dynamically switches between `<html lang="en">` and `<html lang="as">`, ensuring screen readers and search engines recognize the active language.
- **Assamese Unicode Rendering:** Full support for Assamese Unicode characters (specifically the distinctive Assamese `ৰ` [U+09F0] and `ৱ` [U+09F1] glyphs) via Google Fonts Noto Sans Bengali/Assamese and clean system font fallbacks.
- **Natural, Human-Written Text:** All Assamese strings are crafted in natural, grammatically fluent Assamese without machine translation placeholders.

---

## 3. How to Update or Add Translations

1. Locate the relevant domain file in `src/locales/en/<file>.json`.
2. Add or update the key-value pair in English.
3. Add the exact matching key with the corresponding Assamese translation in `src/locales/as/<file>.json`.
4. Access the translated value in any component via the `useLanguage()` hook:
   ```tsx
   import { useLanguage } from '../context/LanguageContext';

   export const MyComponent = () => {
     const { common, language } = useLanguage();
     return <button>{common.buttons.bookNow}</button>;
   };
   ```
