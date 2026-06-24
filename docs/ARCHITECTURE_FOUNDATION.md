# Frontend Architecture Foundation — Langit Global Nusantara

Dokumen ini mendefinisikan arsitektur frontend dasar (foundation) untuk proyek **Langit Global Nusantara (LGN)** menggunakan **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, dan **Inter Tight**.

---

## 1. Design Tokens Architecture

Arsitektur token membagi data desain menjadi tiga tingkatan hirarki (*Three-Tier Token Architecture*):

1.  **Primitives / Reference Tokens (`ref-*`):** 
    Menyimpan nilai dasar statis (seperti warna heksadesimal mentah, nilai piksel absolut). Token primitif tidak boleh digunakan langsung pada komponen UI untuk menjaga fleksibilitas.
2.  **Semantic Tokens (`sys-*` atau variabel global):** 
    Menyatakan makna atau kegunaan elemen UI (misalnya `color-bg-canvas`, `color-text-primary`, `radius-md`). Nilainya mereferensikan primitive token dan akan berganti sesuai dengan state tema (Light/Dark mode).
3.  **Component Tokens (Opsional - `comp-*`):** 
    Token yang didefinisikan khusus untuk komponen spesifik (seperti `comp-btn-primary-bg`). Digunakan jika komponen memiliki kebutuhan styling yang sangat spesifik dan di luar standar semantik global.

### Klasifikasi & Naming Convention Token
Format penamaan yang digunakan adalah:
`--[Tier]-[Category]-[Type]-[Item]-[State]`

*   **Tier:** `pr` (Primitive), `sys` (Semantic System).
*   **Category:** `color`, `font`, `space`, `radius`, `shadow`, `z`, `motion`.
*   **Type:** `bg`, `text`, `border`, `size`, `height`, `ease`, `duration`.
*   **Item:** Target elemen (misalnya `canvas`, `primary`, `body-md`, `xs`, `header`).
*   **State:** Status interaktif (misalnya `hover`, `active`, `focus`, `disabled`).

---

## 2. globals.css Architecture

Struktur file [globals.css](file:///home/pixy/Projects/lgn-compro/app/globals.css) dirancang menggunakan pendekatan modern Tailwind CSS v4. Tailwind v4 beralih dari konfigurasi file `tailwind.config.js` JavaScript ke konfigurasi berbasis CSS (*CSS-first configuration*) menggunakan direktif `@theme`.

File `globals.css` dibagi menjadi 6 bagian utama dengan tanggung jawab sebagai berikut:

1.  **Impor Tailwind Core (`@import "tailwindcss";`):**
    Mengimpor mesin utilitas Tailwind CSS v4 beserta semua kelas defaultnya di baris paling atas.
2.  **CSS Variable Strategy (`:root`):**
    Mendeklarasikan semua Primitive Tokens (`--pr-*`) dan Semantic Tokens (`--bg-*`, `--brand-*`, `--text-*`, `--border-*`). Sistem ini menggunakan tema Light Mode statis yang stabil untuk memberikan visual yang clean dan konsisten sesuai brand guideline Langit Global Nusantara.
3.  **Tailwind CSS v4 Theme Extension (`@theme`):**
    Menghubungkan variabel CSS semantik ke kelas utilitas Tailwind. Di dalam blok ini, kita mendefinisikan font utama (`--font-sans`), memetakan token warna, radius kustom, shadow kustom, easing transition, dan z-index stack.
4.  **CSS Reset Strategy:**
    Normalisasi elemen HTML (seperti `box-sizing: border-box`, meniadakan margin body default, dan mengaktifkan `scroll-behavior: smooth`). Reset ini memastikan performa rendering yang konsisten antar peramban (browser).
5.  **Accessibility Defaults & Reduced Motion:**
    Mengatur default aksesibilitas. Termasuk di dalamnya adalah pengaturan kelas bantuan pembaca layar (`.sr-only`), aturan cincin fokus keyboard (`:focus-visible`), serta pembatasan durasi animasi hingga `0.01ms` jika pengguna mengaktifkan preferensi *Reduced Motion* pada sistem operasi mereka.
6.  **Typography Defaults & Scrollbars:**
    Menerapkan default tipografi global untuk heading (`h1` sampai `h6`), paragraf (`p`), tautan (`a`), serta menerapkan gaya scrollbar premium berbasis warna netral yang tipis.

---

## 3. Typography System

Sistem tipografi menggunakan font utama **Inter Tight**. Dengan sifatnya yang memiliki kerning ter-kondensasi secara alami, berikut adalah spesifikasi 14 kelas tipografi untuk desktop dan mobile:

### A. Desktop Scale (Screen Width ≥ 1024px)

| Token Class | Font Size (rem / px) | Weight | Line Height | Letter Spacing | Ideal Use Cases |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Display` | `3.125rem` / `50px` | `300` (Light) | `1.15` | `-0.02em` | Display statis besar, visual angka hero |
| `H1` | `2.5rem` / `40px` | `600` (Semibold) | `1.2` | `-0.015em` | Judul utama halaman / Section utama |
| `H2` | `1.875rem` / `30px` | `600` (Semibold) | `1.25` | `-0.01em` | Sub-section utama |
| `H3` | `1.375rem` / `22px` | `600` (Semibold) | `1.3` | `-0.005em` | Judul kartu besar / fitur grup |
| `H4` | `1.125rem` / `18px` | `600` (Semibold) | `1.3` | `-0.005em` | Judul item grid / kartu kecil |
| `H5` | `1.0rem` / `16px` | `600` (Semibold) | `1.35` | `0` | Sub-heading mikro |
| `H6` | `0.875rem` / `14px` | `600` (Semibold) | `1.4` | `0.01em` | Header bagian paling kecil / overline |
| `Lead` | `1.25rem` / `20px` | `400` (Regular) | `1.5` | `0` | Paragraf pengantar / sub-hero deskripsi |
| `Body Large` | `1.125rem` / `18px` | `400` (Regular) | `1.5` | `0` | Body utama untuk artikel atau bacaan longgar |
| `Body` | `1.0rem` / `16px` | `400` (Regular) | `1.5` | `0` | Default body copy, form input, paragraf |
| `Body Small` | `0.875rem` / `14px` | `400` (Regular) | `1.45` | `0.01em` | Deskripsi form, info sekunder |
| `Caption` | `0.75rem` / `12px` | `400` (Regular) | `1.4` | `0.02em` | Catatan kaki, meta-tag, legenda diagram |
| `Label` | `0.875rem` / `14px` | `500` (Medium) | `1.2` | `0.01em` | Label kolom formulir, nama menu |
| `Button` | `0.9375rem` / `15px` | `500` (Medium) | `1.2` | `0.01em` | Teks tombol CTA interaktif |

### B. Mobile Scale (Screen Width < 1024px)

| Token Class | Font Size (rem / px) | Weight | Line Height | Letter Spacing | Ideal Use Cases |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Display` | `2.25rem` / `36px` | `300` (Light) | `1.2` | `-0.015em` | Display statis mobile |
| `H1` | `1.75rem` / `28px` | `600` (Semibold) | `1.25` | `-0.01em` | Judul utama mobile |
| `H2` | `1.5rem` / `24px` | `600` (Semibold) | `1.25` | `-0.005em` | Sub-section mobile |
| `H3` | `1.25rem` / `20px` | `600` (Semibold) | `1.3` | `0` | Judul kartu mobile |
| `H4` | `1.125rem` / `18px` | `600` (Semibold) | `1.3` | `0` | Judul item grid mobile |
| `H5` | `1.0rem` / `16px` | `600` (Semibold) | `1.35` | `0` | Sub-heading mikro mobile |
| `H6` | `0.875rem` / `14px` | `600` (Semibold) | `1.4` | `0.01em` | Header bagian kecil mobile |
| `Lead` | `1.125rem` / `18px` | `400` (Regular) | `1.45` | `0` | Paragraf pengantar mobile |
| `Body Large` | `1.0625rem` / `17px` | `400` (Regular) | `1.5` | `0` | Body utama mobile |
| `Body` | `1.0rem` / `16px` | `400` (Regular) | `1.5` | `0` | Default body mobile |
| `Body Small` | `0.875rem` / `14px` | `400` (Regular) | `1.4` | `0.01em` | Deskripsi form mobile |
| `Caption` | `0.75rem` / `12px` | `400` (Regular) | `1.4` | `0.02em` | Catatan kaki mobile |
| `Label` | `0.875rem` / `14px` | `500` (Medium) | `1.2` | `0.01em` | Label formulir mobile |
| `Button` | `0.9375rem` / `15px` | `500` (Medium) | `1.2` | `0.01em` | Tombol mobile |

---

## 4. Layout System

Sistem tata letak dirancang responsif, modern, dan memberikan sirkulasi udara (*white space*) yang lapang untuk menonjolkan visual *premium SaaS*.

### Spesifikasi Layout Berdasarkan Breakpoint

| Device Class | Breakpoint | Container Max Width | Content/Reading Max Width | Section Spacing (Y) | Grid Gutter / Spacing | Component Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile** | `< 640px` | `100%` (fluid) | `540px` (55ch) | `48px` (`space-12`) | `16px` (`space-4`) | `12px` / `16px` |
| **Tablet** | `≥ 640px` | `720px` | `680px` (70ch) | `64px` (`space-16`) | `20px` (`space-5`) | `16px` / `20px` |
| **Laptop** | `≥ 1024px` | `960px` | `720px` (80ch) | `96px` (`space-24`) | `24px` (`space-6`) | `24px` / `32px` |
| **Desktop** | `≥ 1280px` | `1200px` | `800px` (85ch) | `96px` (`space-24`) | `32px` (`space-8`) | `32px` / `40px` |
| **Ultra-Wide**| `≥ 1536px` | `1440px` | `800px` (85ch) | `128px` (`space-32`)| `32px` (`space-8`) | `32px` / `48px` |

---

## 5. Next.js 16 Foundation

Konfigurasi file utama Next.js 16 harus dipisahkan berdasarkan tanggung jawabnya untuk menjamin efisiensi server-side rendering (SSR), efisiensi caching, dan SEO.

### A. app/layout.tsx
Bertanggung jawab sebagai entry-point visual global. File ini harus:
*   Mengekspor data `metadata` dan `viewport`.
*   Menginisialisasi `Inter_Tight` font via `next/font/google` dengan variabel `--font-inter-tight`.
*   Menerapkan variabel font pada tag `html` menggunakan atribut `className`.
*   Menyediakan pembungkus dasar (`html` dan `body`) dengan reset tinggi minimum (`h-full`, `min-h-full`, `flex`, `flex-col`) agar footer selalu menempel di bagian bawah halaman jika konten sedang sedikit (*sticky footer*).

### B. Metadata Object
Mengatur SEO statis global seperti basis URL (`metadataBase`), pola judul (`title.template`), deskripsi default, meta robot untuk perayap (*crawler*), integrasi OpenGraph (*locale*, *type*, *siteName*), serta format Twitter Card.

### C. Viewport Object (Next.js 16 standard)
Sejak Next.js 14/15/16, pengaturan viewport dideklarasikan di luar objek metadata untuk optimalisasi rendering performa pada mobile. Mengatur properti `themeColor` (adaptif terhadap mode light/dark menggunakan media query), properti lebar viewport (`width: "device-width"`), skala inisiasi (`initialScale: 1`), dan skala maksimal (`maximumScale: 5`) guna mendukung kepatuhan aksesibilitas perbesaran layar.

### D. Fonts Setup
Menggunakan `next/font/google` untuk mengunduh font otomatis saat build time, menyimpannya secara lokal secara internal (*self-host*), dan mengeliminasi masalah pergeseran layout akibat pemuatan font (*Cumulative Layout Shift*).

### E. Theme Setup (Single Theme Layout)
Aplikasi dikonfigurasi untuk hanya menggunakan satu skema tema Light Mode statis berkejelasan tinggi guna mengedepankan efisiensi visual dan performa rendering optimal.

---

## 6. Flaticon UIcons Strategy

Flaticon UIcons menyediakan ribuan ikon minimalis dalam berbagai format. Berikut adalah perbandingan strategi penyimpanan dan integrasi ikon pada Next.js 16:

### Analisis Opsi Integrasi Ikon

| Kriteria | Opsi A: `public/icons/` (Static Asset SVG) | Opsi B: `src/assets/icons/` (Webpack/SVGR Imports) | Opsi C: Package Imports (`@flaticon/uicons`) |
| :--- | :--- | :--- | :--- |
| **Pemuatan** | Dimuat melalui tag `<img src="/icons/name.svg">` secara on-demand. | Diimpor sebagai komponen React via SVGR (inline SVG). | Mengimpor seluruh paket CSS/Webfont ke dalam bundle. |
| **Kelebihan** | Mengurangi ukuran berkas JS utama, caching peramban bekerja secara maksimal. | Mempermudah manipulasi warna (`fill-current`, `stroke-current`) langsung via Tailwind. | Kemudahan penulisan class (mis. `<i class="fi fi-rr-user"></i>`). |
| **Kekurangan** | Ikon tidak bisa diganti warnanya secara dinamis melalui CSS variabel tanpa SVG injektor kustom. | Meningkatkan ukuran bundel JavaScript jika terlalu banyak mengimpor ikon statis. | Menyebabkan *bloat* CSS yang sangat besar karena memuat ribuan font ikon yang tidak dipakai (*unused icons*). |
| **Performa** | **Sangat Baik** (Zero JS Overhead). | **Baik** (Ter-bundel dengan JS). | **Buruk** (Besar & menghalangi FCP). |

### Rekomendasi Strategi: Opsi B dengan Custom Wrapper
Rekomendasi terbaik adalah menggunakan **Opsi B (Penyimpanan di `src/assets/icons/` dan diimpor sebagai SVG React Components)** karena:
1.  Memungkinkan kita melakukan manipulasi warna SVG secara dinamis menggunakan utilitas CSS Tailwind (misal: `text-text-secondary hover:text-brand-primary`).
2.  Mendukung *Tree-shaking* penuh saat proses kompilasi bundel produksi, sehingga ikon yang tidak digunakan tidak akan dimuat ke browser pengguna.

### Standar Ukuran Ikon
Ikon harus dibungkus dengan kontainer persegi 1:1 untuk mencegah pergeseran layout.
*   `icon-xs`: `12px × 12px` (Teks mikro / status)
*   `icon-sm`: `16px × 16px` (Inline dengan teks body)
*   `icon-md`: `20px × 20px` (Default tombol, input field)
*   `icon-lg`: `24px × 24px` (Header card, menu samping)
*   `icon-xl`: `32px × 32px` (Fitur highlight sekunder)
*   `icon-2xl`: `48px × 48px` (Fitur utama di halaman landing)

---

## 7. Metadata Foundation

Berikut adalah cetak biru konfigurasi metadata SEO global untuk **Langit Global Nusantara**:

```typescript
// Tempatkan konfigurasi ini di app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://lgn.co.id"),
  title: {
    template: "%s | Langit Global Nusantara",
    default: "Langit Global Nusantara (LGN) | Autonomous Systems & Mission-Ready Solutions",
  },
  description: "LGN (Langit Global Nusantara) delivers integrated autonomous systems, robotics, AI, and mission-critical engineering solutions for government and industrial operations across air, land, and sea.",
  
  // OpenGraph SEO (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "Langit Global Nusantara (LGN)",
    description: "LGN delivers integrated autonomous systems, robotics, AI, and mission-critical engineering solutions across air, land, and sea.",
    url: "https://lgn.co.id",
    siteName: "Langit Global Nusantara",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Gambar 1200x630px di folder public
        width: 1200,
        height: 630,
        alt: "Langit Global Nusantara (LGN) - Autonomous Systems",
      },
    ],
  },

  // Twitter SEO (X)
  twitter: {
    card: "summary_large_image",
    title: "Langit Global Nusantara (LGN)",
    description: "LGN delivers integrated autonomous systems, robotics, AI, and mission-critical engineering solutions across air, land, and sea.",
    images: ["/og-image.jpg"],
    creator: "@lgn_co_id",
  },

  // Crawling Rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Alternates (mencegah isu duplikasi konten URL)
  alternates: {
    canonical: "./",
  },

  // Favicon & Assets Manifest
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};
```

---

## 8. CSS Variable Strategy

Sistem warna memisahkan pemetaan nilai hex mentah (*primitives*) dengan penamaan fungsional (*semantic/theme*).

### Struktur Pemetaan CSS Variabel di `:root`
*   **Primitive Variables (`--pr-*`):** Dideklarasikan sebagai kamus warna tetap. Angka skala (50-900) mewakili kecerahan warna secara konsisten.
*   **Semantic Variables (`--bg-*`, `--text-*`, `--border-*`):** Dideklarasikan di tingkat `:root` tanpa memuat kode warna heksadesimal langsung, melainkan merujuk ke Primitive Variables (misalnya `--brand-primary: var(--pr-primary-500);`).

Hal ini menjamin arsitektur CSS yang bersih, modular, dan meminimalkan beban kompilasi utilitas Tailwind CSS v4.
