# Donate.com Back-End With Express.js

Ini adalah proyek backend menggunakan Express.js untuk mengelola aplikasi donate.com. Proyek ini menyediakan server dan API untuk menampilkan data donasi yang sudah tersimpan di dalam database, menambahkan data donasi baru, dan menampilkan data detail events berdasarkan id data.

## Instalasi

1. Pastikan Node.js sudah terpasang di komputer Anda. Jika belum, Anda dapat mengunduh dan menginstalnya dari [nodejs.org](https://nodejs.org/).
2. Clone repositori ini ke dalam direktori lokal Anda:

   ```bash
   git clone https://github.com/Capstone-Project-DonateCom/Back-end-Side.git
   ```

3. Masuk ke direktori proyek:

   ```bash
   cd nama-proyek-backend
   ```

4. Install semua dependensi:

   ```bash
   npm install
   ```

## Penggunaan

1. Pastikan server MySQL telah berjalan atau sesuaikan pengaturan koneksi database pada file konfigurasi.
2. Jalankan server:

   ```bash
   npm run start
   ```

   Server akan berjalan di `Server sudah menyala pada port 8000`.

## API Endpoints

1. Mendapatkan Semua Data Donasi
   GET /

2. Menambahkan Data Donasi Baru
   POST /donates

3. Mendapatkan Detail Event Berdasarkan ID
   GET /events/:id

## Kontribusi

Silakan ajukan _pull request_ jika Anda ingin berkontribusi pada proyek ini. Silakan ikuti panduan [CONTRIBUTING.md](CONTRIBUTING.md).

## Kontak

Jika Anda memiliki pertanyaan atau masukan, silakan hubungi Reza Hakim melalui email [rezahakimalzami03@gmail.com] atau melalui akun instagram @rezaaahakim\_.
