# Monitoring dan Kontrol Suhu Menggunakan Komunikasi MQTT
## Tujuan Project
## Cara Kerja Perangkat Internet of Things
### 1. Data dari Sensor DHT-11 Dibaca oleh ESP32
### 2. Data Pengukuran Sensor DHT-11 Dikirimkan ke Website Monitoring 
### 3. Lampu LED Sebagai Indikator Kipas 

## Cara Kerja Website Monitoring dan Kontrol
### 1. Website Menggunakan CDN MQTT hivemq
Untuk menjalankankan MQTT pada javascript, terlebih dahulu untuk memanggil library javascript yaitu CDN mqtt.
### 2. Data Sensor Suhu Diambil dari ESP32
Data diambil dengan menggunakan method subscribe(...) sedangkan pada ESP32 akan menjalankan method Publish(...) untuk mengirimkan data ke website melalui mqtt,
subscribe(“esp32/bn/temperature”) untuk mengambil data nilai suhu, dan subscribe(“esp32/bn/humidity”) untuk mengambil data nilai kelembapan.
### 3. Data yang Didapatkan kemudian Ditampilkan menggunakan JavaScript DOM
JavaScript DOM digunakan untuk menampilkan data sensor suhu berupa suhu dan kelembapan yang didapat dari method subscribe(...)
### 4. Kontrol Kendali LED (Sebagai Indikator Kipas)
Untuk menghidupkan lampu LED merah dan kuning, digunakan method publish(...), dan di ESP32 akan melakukan subscribe(...) untuk menerima data status lampu LED tersebut.
Dimana jika lampu LED merah hidup = Kipas Dimisalkan mati, dan lampu LED kuning hidup = Kipas Dimisalkan Hidup.

## Hasil Akhir 
### 1. Sebelum ESP32 Hidup (Data Belum Dikirimkan)
![Screenshot_2025-06-14-17-44-22-936_com android chrome](https://github.com/user-attachments/assets/543c748e-435c-4d2c-bc94-8d71166184ad)

### 2. Setelah ESP32 Hidup (Data Sudah Dikirimkan)
![Screenshot_2025-06-13-21-34-11-974_com android chrome](https://github.com/user-attachments/assets/2f73d17b-639e-4543-af92-2d8dae32b25a)


