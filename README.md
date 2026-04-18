# IoTEdu App

## Deskripsi Project
IoTEdu App adalah platform edukasi interaktif yang dirancang untuk membantu pelajar dan pemula dalam memahami konsep dasar Internet of Things (IoT), sensor, konektivitas, dan *cloud computing*. Aplikasi ini dilengkapi dengan Asisten AI pintar (Chatbot) yang didukung oleh AI untuk berdiskusi layaknya dengan mentor ahli, memberikan rekomendasi proyek secara dinamis, serta membantu mencari solusi atau memecahkan kendala (*error code*) kapan saja selama 24/7.

## Tech Stack
- **Frontend:** HTML5, CSS (Tailwind CSS via CDN), Vanilla JavaScript
- **Backend / AI Integration:** Node.js, Google Gemini 2.5 Flash

## Cara Menjalankan Project
1. Buka folder project ini di terminal Anda.
2. Install seluruh *dependencies* menggunakan npm:
   ```bash
   npm install
   ```
3. Buat file `.env` di root direktori project dan masukkan API Key Google Gemini Anda:
   ```env
   GEMINI_API_KEY=masukkan_api_key_gemini_anda_disini
   ```
4. Jalankan server aplikasi:
   ```bash
   npm start
   ```
5. Buka browser Anda dan akses aplikasi pada `http://localhost:3000` (atau port lain yang sudah dikonfigurasi).

## Endpoint API
- **`GET /status`** : Mengecek status dari API Chatbot (mengembalikan pesan aktif dan *uptime* server).
- **`POST /api/...`** : Endpoint chatbot untuk memproses interaksi AI. Endpoint ini menerima input JSON berupa array `conversation` dan mengembalikan teks balasan dari model Gemini. *(Catatan: Path lengkap seperti `/api/chat` bergantung pada pengaturan di file router `src/routes/index.js`)*.

## Hasil Project
Silakan lihat demo dan dokumentasi video dari hasil project IoTEdu App melalui tautan Google Drive di bawah ini:

[🎥 Tonton Demo Hasil Project IoTEdu App](https://drive.google.com/file/d/11Ks1z1YSvY-lb-eeh12xkVO19WAR7iBz/view?usp=sharing)

---
*Final Project Hacktiv8 - Danandjaya Saputra*