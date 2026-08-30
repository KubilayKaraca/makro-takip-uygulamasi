# 🏋️‍♂️ Makro ve Su Takip Uygulaması

Sağlıklı yaşam hedeflerine ulaşmak isteyen kullanıcıların günlük su tüketimini ve besin değerlerini (Karbonhidrat, Yağ, Protein, Kalori) pratik bir şekilde takip edebilmesi için geliştirilmiş modern ve bağımsız bir web uygulamasıdır. 

Uygulama, Amerikan Tarım Bakanlığı'nın (USDA) veritabanına anlık olarak bağlanarak tüketilen besinlerin kalori ve makro değerlerini gramaj bazında hesaplar.

🔗 **[Canlı Demo: Uygulamayı Denemek İçin Tıklayın](https://kubilaykaraca.github.io/makro-takip-uygulamasi/)**

## ✨ Temel Özellikler

- **Canlı API Entegrasyonu:** Tüketilen besinlerin besin değerleri, `fetch` API kullanılarak USDA FoodData Central üzerinden asenkron olarak (anlık) çekilir.
- **Kalıcı Veri Yönetimi (State):** Veri tabanı maliyeti yaratmamak için `localStorage` entegrasyonu kullanılmıştır. Tarayıcı yenilense veya kapansa dahi girilen besinler, su miktarı ve hedefler kaybolmaz.
- **Dinamik Veri Görselleştirme:** Alınan kaloriler ve içilen su miktarı, **Chart.js** kütüphanesi kullanılarak OOP (Nesne Yönelimli) mimarisiyle anlık simit (doughnut/pie) grafiklerine dökülür.
- **Esnek Veri Manipülasyonu:** Listeye eklenen besinler silindiğinde, toplam kaloriden ve makrolardan (karb/yağ/protein) ilgili gramajın değerleri algoritmik olarak geri düşülür ve arayüz `update()` metodu ile yenilenir.
- **Responsive Tasarım:** Flexbox mimarisiyle mobil ve masaüstü cihazlara tam uyumlu arayüz.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **API:** USDA FoodData Central API
- **Kütüphaneler:** Chart.js (Veri görselleştirme)
- **Veri Saklama:** Web Storage API (LocalStorage)

## 💻 Algoritmik Yaklaşım ve Karşılaşılan Zorluklar

Projenin geliştirme aşamasında en çok odaklanılan nokta **Asenkron Veri Akışı** oldu. Listeye birden fazla besin art arda eklendiğinde API isteklerinin (fetch) birbirine karışmasını ve bellek sızıntısı yaratmasını engellemek için, standart döngüler yerine `for...of` bloğu içinde `await` kullanılarak veri işleme sırası kontrol altına alındı.

## 🚀 Kurulum ve Kullanım

Herhangi bir sunucu kurulumuna gerek yoktur. Tarayıcı üzerinde doğrudan çalışır:
1. Depoyu bilgisayarınıza klonlayın: `git clone https://github.com/kullanici_adiniz/makro-takip-app.git`
2. Klasör içindeki `index.html` dosyasını tarayıcınızda açın.
3. *Not: USDA API kullanıldığı için besin girişleri İngilizce (Örn: "raw apple", "chicken breast") yapılmalıdır.*

---
*Geliştirici: Kubilay Karaca - Bahçeşehir Üniversitesi, Bilgisayar Mühendisliği*
