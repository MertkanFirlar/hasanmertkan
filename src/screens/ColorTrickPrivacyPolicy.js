import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const ColorTrickPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/color-trick" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>Gizlilik Politikası</h1>
        <p className="last-updated">📅 Son Güncelleme: 10 Nisan 2025</p>

        <section className="policy-section">
          <h2>1. Genel Bilgilendirme</h2>
          <p>Color Trick uygulaması, kullanıcı gizliliğine büyük önem verir. Bu gizlilik politikası, uygulama tarafından hangi bilgilerin toplandığını, nasıl kullanıldığını ve hangi koşullarda paylaşıldığını açıklar.</p>
        </section>

        <section className="policy-section">
          <h2>2. Toplanan Veriler</h2>
          <p>Color Trick, doğrudan kişisel bilgi toplamaz. Uygulama içeriği ve işleyişi tamamen cihaz üzerinde çalışır. Ancak reklam gösterimi için aşağıdaki <strong>anonim</strong> veriler toplanabilir:</p>
          <ul className="policy-list">
            <li><strong>Reklam Kimliği (IDFA / AAID)</strong></li>
            <li><strong>Cihaz Tipi ve İşletim Sistemi Bilgisi</strong></li>
            <li><strong>Reklam Etkileşim Verileri</strong></li>
          </ul>
          <p className="section-footer">👉 Uygulama içinde kullanıcı adı, e-posta, telefon numarası gibi <strong>kişisel bilgiler kesinlikle toplanmaz</strong> ve saklanmaz.</p>
        </section>

        <section className="policy-section">
          <h2>3. Verilerin Kullanımı</h2>
          <p>Toplanan anonim veriler yalnızca aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul className="policy-list">
            <li>Google AdMob reklamlarını göstermek ve optimize etmek</li>
            <li>Uygulamanın performansını değerlendirmek</li>
            <li>Kullanıcı deneyimini geliştirmek</li>
            <li>Hataları tespit etmek ve düzeltmek</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Üçüncü Taraf Paylaşımı</h2>
          <p>Veriler yalnızca aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:</p>
          <ul className="policy-list">
            <li><strong>Google AdMob</strong> (reklam hizmetleri için anonim bilgiler)</li>
            <li><strong>Yasal Gereklilik</strong> (resmi makamlarca talep edilmesi halinde)</li>
          </ul>
          <p className="section-footer">🔗 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google AdMob Gizlilik Politikası</a></p>
        </section>

        <section className="policy-section">
          <h2>5. Verilerin Saklanması ve Güvenliği</h2>
          <p>Veriler cihazda saklanır ve bulut sunuculara gönderilmez.</p>
          <p>Uygulama güvenlik açısından gerekli teknik önlemleri alır, ancak internet üzerinden iletilen verilerin %100 güvenliği garanti edilemez.</p>
        </section>

        <section className="policy-section">
          <h2>6. Kullanıcı Hakları</h2>
          <p>Uygulama kişisel veri toplamadığı için, kullanıcıların doğrudan veri silme veya düzenleme talebi gerekli değildir. Ancak, reklam kimliğini sıfırlamak isteyen kullanıcılar cihaz ayarlarından <strong>Reklam Tanımlayıcısı</strong> sıfırlayabilir.</p>
        </section>

        <section className="policy-section">
          <h2>7. Çocukların Gizliliği</h2>
          <p>Color Trick, 13 yaş altı çocuklara yönelik bir uygulama değildir. Eğer bir çocuğun uygulamayı kullandığı tespit edilirse, toplanan tüm anonim veriler silinir.</p>
        </section>

        <section className="policy-section">
          <h2>8. Sorumluluk Reddi</h2>
          <ul className="policy-list">
            <li><strong>Reklam İçerikleri</strong>: Uygulamada gösterilen reklamlar Google AdMob'a aittir ve içerikleri geliştirici tarafından kontrol edilemez.</li>
            <li><strong>Veri Kaybı</strong>: Kullanıcı tarafından cihazda yaşanabilecek veri kayıplarından geliştirici sorumlu tutulamaz.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Politikada Değişiklikler</h2>
          <p>Gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler bu sayfada yayımlanır. Kullanıcıların düzenli olarak kontrol etmesi önerilir.</p>
        </section>

        <section className="policy-section">
          <h2>10. İletişim</h2>
          <p>Gizlilik politikası hakkında sorularınız varsa bize ulaşabilirsiniz:</p>
          <p className="contact-email">📧 <strong>destekcikmis@gmail.com</strong></p>
        </section>

        <div className="policy-footer">
          <p>Color Trick uygulamasını kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz.</p>
        </div>
      </div>
    </div>
  );
};

export default ColorTrickPrivacyPolicy;