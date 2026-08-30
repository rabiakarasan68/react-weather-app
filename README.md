# 🌤️ Weather App

React ve TypeScript kullanılarak geliştirilmiş, şehir adına göre güncel hava durumu bilgilerini gösteren responsive bir web uygulamasıdır.

Uygulama, kullanıcının girdiği şehir adını Open-Meteo Geocoding API üzerinden arar ve elde edilen koordinatlar ile güncel hava durumu verilerini Open-Meteo Weather API üzerinden getirir.

## 🚀 Özellikler
🔎 Şehir adına göre hava durumu arama
🌡️ Güncel sıcaklık bilgisi
🌡️ Hissedilen sıcaklık
💧 Nem oranı
💨 Rüzgar hızı
☀️ Hava durumu açıklaması ve ikonu
⏳ API isteği sırasında loading göstergesi
⚠️ Hata durumunda kullanıcıya mesaj gösterme
📱 Responsive tasarım
🎨 Gradient arka plan
💳 Modern hava durumu kartı

## 🛠️ Kullanılan Teknolojiler
React
TypeScript
Vite
CSS
Fetch API
Open-Meteo API

## 📡 API Kullanımı

Projede Open-Meteo'nun iki farklı servisi kullanılmaktadır.

### Geocoding API

Kullanıcının girdiği şehir adını aramak ve şehrin koordinatlarını almak için kullanılır.

### Weather API

Bulunan enlem ve boylam bilgileri kullanılarak güncel hava durumu verileri alınır.

Alınan bilgiler:

Sıcaklık
Hissedilen sıcaklık
Nem
Rüzgar hızı
Hava durumu kodu

## 🧠 Çalışma Mantığı
Şehir adı
    ↓
Geocoding API
    ↓
Latitude + Longitude
    ↓
Weather API
    ↓
Hava durumu verileri
    ↓
React State
    ↓
Kullanıcı arayüzü

## 📂 Proje Yapısı
weather-app/
│
├── public/
│   └── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

## 💻 Kurulum

Projeyi bilgisayarınıza klonlayın:

git clone https://github.com/kullanici-adiniz/weather-app.git

Proje klasörüne girin:

cd weather-app

Gerekli paketleri yükleyin:

npm install

Uygulamayı başlatın:

npm run dev

Terminalde gösterilen localhost adresini tarayıcıda açarak uygulamayı kullanabilirsiniz.

## 📱 Kullanım
Arama kutusuna bir şehir adı girin.
Ara butonuna tıklayın.
Uygulama şehir koordinatlarını bulur.
Güncel hava durumu bilgilerini API üzerinden getirir.
Sonuçlar ekranda hava durumu kartı içerisinde gösterilir.

## 📚 Öğrenilen Konular

Bu proje geliştirilirken aşağıdaki konularda pratik yapılmıştır:

React useState
TypeScript ile state tiplerinin tanımlanması
async/await
fetch() kullanımı
REST API kullanımı
JSON verileriyle çalışma
API'den veri çekme
Conditional Rendering
React event handling
Loading state yönetimi
Error state yönetimi
CSS ile responsive tasarım
CSS animasyonları
API verilerinin kullanıcı arayüzünde gösterilmesi

## 🎯 Projenin Amacı

Bu proje, React ve TypeScript kullanarak bir web uygulamasının geliştirilmesi, harici API'lerden veri alınması ve alınan verilerin kullanıcı arayüzünde gösterilmesi amacıyla geliştirilmiştir.

## 📄 Lisans

Bu proje eğitim ve portföy amacıyla geliştirilmiştir.
