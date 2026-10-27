Nama : Raina Qinthara Rahmani 
Nim : 2430511030
# 📖 DiaryCard App

Aplikasi Buku Harian Digital (*Diary App*) berbasis **React Native** dan **Expo** dengan antarmuka yang bersih, modern, dan interaktif.

---

## ✨ Fitur Utama

* **Daftar Entri Harian:** Menampilkan catatan harian lengkap dengan judul, tanggal, deskripsi singkat, dan gambar *mood*.
* **Pencarian Real-time:** Memudahkan pencarian catatan berdasarkan judul, isi preview, maupun tanggal.
* **Tambah Catatan Baru:** Formulir interaktif untuk membuat entri buku harian baru.
* **Detail Catatan (Modal):** Menampilkan detail lengkap entri harian melalui tampilan pop-up modal.
* **Sistem Fitur Suka (Like):** Fitur untuk menyukai catatan harian secara independen.
* **Dukungan Platform Web & Mobile:** Dapat dijalankan di browser (Web) maupun perangkat seluler (Android/iOS via Expo Go).

---

## 📁 Struktur Proyek

```text
DiaryCard_Raina/
├── assets/
│   └── moods/             # Aset gambar mood untuk entri diary
├── src/
│   ├── components/        # Komponen UI modular
│   │   ├── DiaryCard.js
│   │   ├── DiaryDetailModal.js
│   │   ├── EntryForm.js
│   │   └── SearchBar.js
│   ├── screens/           # Halaman utama aplikasi
│   │   └── DiaryListScreen.js
│   └── styles/            # Token desain (warna, spasi, tipografi)
│       └── token.js
├── App.js                 # Root component
├── app.json               # Konfigurasi Expo
└── package.json           # Dependensi proyek
