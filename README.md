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
Data diambil dengan menggunakan method subscribe(...) 
subscribe(“esp32/bn/temperature”) untuk mengambil data nilai suhu, dan subscribe(“esp32/bn/humidity”) untuk mengambil data nilai kelembapan.
### 3. 
### 4.
