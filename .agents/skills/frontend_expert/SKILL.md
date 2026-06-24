---
name: frontend-architect
description: Professional frontend standards for Next.js, React, responsive design, clean code, and modular component development.
version: 1.0.0
---

# Frontend Architect Skill

Skill ini memandu AI untuk menghasilkan kode frontend kelas dunia dengan mengutamakan praktik terbaik Next.js 16/React 19, desain responsif berbasis Mobile-First, kode bersih (*clean code*), serta arsitektur komponen yang modular dan dapat digunakan kembali (*reusable*).

---

## 1. Next.js 16 & React 19 Best Practices

*   **Server vs. Client Components:**
    *   Secara default, buat semua komponen sebagai **React Server Components (RSC)** untuk mengurangi ukuran bundel JavaScript di sisi client.
    *   Gunakan direktif `'use client'` hanya pada tingkat daun (*leaf components*) yang membutuhkan interaksi pengguna (misal: state, effects, event listener, browser APIs).
*   **Colocation Principle:**
    *   Tempatkan file penunjang seperti unit test, sub-komponen mikro, types lokal, atau utilitas khusus sedekat mungkin dengan komponen utama yang menggunakannya. Hindari mengelompokkan semua file di folder global jika hanya dipakai oleh satu komponen.
*   **Strict Types & Interfaces:**
    *   Gunakan TypeScript secara ketat. Hindari tipe data `any`.
    *   Selalu definisikan tipe data untuk `props` komponen menggunakan `interface` atau `type` dengan deskripsi opsional yang jelas.

---

## 2. Clean Code, Modularity, & Reusability

*   **Single Responsibility Principle (SRP):**
    *   Sebuah komponen UI hanya boleh bertanggung jawab atas satu fungsionalitas visual atau logis. Jika sebuah file komponen melebihi 150-200 baris kode, pecah menjadi sub-komponen yang lebih kecil.
*   **Decouple Logic from Presentation:**
    *   Pisahkan logika bisnis (*data fetching*, manipulasi state kompleks) dari komponen presentasi visual. Manfaatkan *Custom Hooks* untuk membungkus logika stateful tersebut.
*   **Descriptive Props API:**
    *   Buat penamaan props yang intuitif dan deklaratif. Gunakan boolean props untuk state (misal: `isLoading`, `isDisabled`) daripada passing raw state setter.
*   **DRY (Don't Repeat Yourself) via Composition:**
    *   Hindari duplikasi markup. Manfaatkan pola `children` prop atau slot rendering untuk membangun komponen kontainer yang fleksibel (misal: Card, Modal, Dropdown).

---

## 3. Professional Responsive Design (Mobile-First)

*   **Strict Mobile-First Workflow:**
    *   Tulis gaya dasar untuk layar terkecil terlebih dahulu tanpa menggunakan awalan breakpoint media query.
    *   Terapkan penyesuaian untuk layar yang lebih lebar secara bertahap menggunakan breakpoint Tailwind (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
*   **Fluid & Scalable Layouts:**
    *   Hindari penggunaan tinggi (*height*) dan lebar (*width*) piksel statis pada kontainer utama. Gunakan persentase, `vw`, `vh`, `min-h-screen`, `w-full`, atau fungsi CSS seperti `clamp()`, `min()`, dan `max()`.
*   **Grid vs. Flexbox:**
    *   Gunakan **CSS Grid** untuk tata letak halaman dua dimensi (baris dan kolom secara bersamaan).
    *   Gunakan **Flexbox** untuk komponen satu dimensi (sejajar horizontal atau vertikal saja) dan manfaatkan properti `gap` daripada margin untuk pemisah antar elemen.
*   **Aspect Ratio Preservation:**
    *   Gunakan properti `aspect-*` untuk menjaga rasio gambar dan video tetap proporsional saat ukuran layar menyusut.

## 4. Tailwind CSS v4 & Design Token Compliance (Zero Random Colors)

*   **Strict Design Token & Color Compliance:**
    *   **Sangat Dilarang** menggunakan kode warna HEX acak (*arbitrary hex codes*) seperti `bg-[#b08a6b]`, `text-[#111315]`, atau menggunakan inline styles (`style={{ color: '#...' }}`).
    *   Semua warna yang diimplementasikan harus menggunakan kelas utilitas warna semantik yang sudah dipetakan di [globals.css](file:///home/pixy/Projects/lgn-compro/app/globals.css):
        *   *Backgrounds:* `bg-bg-canvas`, `bg-bg-default`, `bg-bg-surface`, `bg-bg-subtle`, `bg-bg-accent`
        *   *Brand:* `bg-brand-primary`, `bg-brand-primary-hover`, `bg-brand-primary-active`, `bg-brand-secondary`, `bg-brand-secondary-hover`
        *   *Text:* `text-text-primary`, `text-text-secondary`, `text-text-tertiary`, `text-text-brand`, `text-text-inverse`
        *   *Borders:* `border-border-default`, `border-border-subtle`, `border-border-accent`
    *   Pelanggaran terhadap kepatuhan warna ini (menggunakan warna di luar token) dianggap sebagai kegagalan arsitektur fatal.
*   **Spacing, Radii, & Shadow Tokens:**
    *   Gunakan skala border-radius yang ditentukan (`rounded-xs`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`). Jangan menulis nilai piksel acak pada class (seperti `rounded-[14px]`).
    *   Selalu rujuk skala spacing Tailwind (`p-4`, `m-2`, `gap-6` dst.) yang terikat pada skala kelipatan 4px/8px di dalam design system, hindari nilai kustom seperti `p-[17px]`.
*   **Semantic Border & Outlines:**
    *   Selalu gunakan warna border semantik (`border-border-default`) daripada border warna abu-abu keras bawaan browser.
    *   Untuk semua elemen interaktif yang menerima fokus, gunakan utility ring fokus (`focus-visible:ring-2 focus-visible:ring-border-accent`).

