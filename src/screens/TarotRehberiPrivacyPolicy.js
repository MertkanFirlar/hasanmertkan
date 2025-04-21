import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const TarotRehberiPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/tarot-rehberi" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>Gizlilik Politikası</h1>
        <p className="last-updated">📅 Son Güncelleme: 21 Nisan 2025</p>

        <section className="policy-section">
          <h2>1. Toplanan Veriler</h2>
          <p>Tarot Rehberi uygulaması, kullanıcıdan <strong>herhangi bir kişisel veri toplamaz</strong>.</p>
          <ul className="policy-list">
            <li>Uygulama içi kullanım tamamen cihaz üzerinde gerçekleşir.</li>
            <li>Uygulama dışı hiçbir sunucuya veri gönderilmez.</li>
            <li>Kamera, mikrofon, konum gibi erişimler <strong>kullanılmaz</strong>.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. Analiz ve Takip</h2>
          <p>Tarot Rehberi, kullanıcı davranışlarını izlemek için herhangi bir analiz aracı (Google Analytics, Firebase Analytics, vb.) <strong>kullanmaz</strong>.</p>
        </section>

        <section className="policy-section">
          <h2>3. Üçüncü Taraflarla Paylaşım</h2>
          <p>Uygulama içerisinde elde edilen herhangi bir bilgi <strong>üçüncü taraflarla paylaşılmaz</strong> çünkü hiçbir kişisel bilgi toplanmamaktadır.</p>
        </section>

        <section className="policy-section">
          <h2>4. Reklamlar</h2>
          <p>Uygulamada yalnızca <strong>Google AdMob reklamları</strong> gösterilebilir. Bu reklamlar, Google'ın kendi gizlilik politikalarına tabidir.</p>
          <p className="section-footer">🔗 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Gizlilik Politikası</a></p>
        </section>

        <section className="policy-section">
          <h2>5. Güvenlik</h2>
          <p>Uygulama cihazda yerel olarak çalışır ve herhangi bir kullanıcı verisi depolanmaz. Bu nedenle, veri güvenliği riski <strong>söz konusu değildir</strong>.</p>
        </section>

        <section className="policy-section">
          <h2>6. Kullanıcı Hakları</h2>
          <p>Uygulama herhangi bir kişisel veri işlemediğinden dolayı, kullanıcıların veri silme, düzeltme veya taşıma gibi haklarını kullanmasına gerek kalmaz.</p>
        </section>

        <section className="policy-section">
          <h2>7. İletişim</h2>
          <p>Herhangi bir sorunuz veya talebiniz için bizimle iletişime geçebilirsiniz:</p>
          <p className="contact-email">📧 <strong>destek@gmail.com</strong></p>
        </section>
        
        <section className="policy-section">
          <h2>8. Sorumluluk Reddi</h2>
          <p>
            Tarot Rehberi uygulaması, kullanıcıya yalnızca <strong>günlük motivasyon ve farkındalık amaçlı içerik</strong> sunar.
            Uygulamadaki kart yorumları herhangi bir profesyonel, tıbbi, hukuki veya psikolojik tavsiye olarak değerlendirilmemelidir.
          </p>
          <p>
            Uygulama geliştiricisi, bu içeriklere dayanarak alınan hiçbir karar veya sonuçtan <strong>sorumlu değildir</strong>.
            Tüm kullanım, kullanıcının kendi sorumluluğundadır.
          </p>
        </section>

        <div className="policy-footer">
          <p>Tarot Rehberi uygulamasını kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz.</p>
        </div>
      </div>
    </div>
  );
};

export default TarotRehberiPrivacyPolicy;