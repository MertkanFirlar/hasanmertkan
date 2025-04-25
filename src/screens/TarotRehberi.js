import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const TarotRehberi = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#8E44AD' }}>
            TR
          </div>
        </div>
        <div className="app-header-info">
          <h1>Tarot Rehberi</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>🌟 Tarot Rehberi</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 21 Nisan 2025</div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🔮</div>
              <h3>Günün Enerjisini Hisset – Kartını Seç – Rehberini Bul</h3>
            </div>
            
            <p>
              <strong>Her gün yalnızca bir kart, ama sana özel bir yolculuk.</strong>
            </p>
            
            <p>
              Tarot Rehberi, günlük yaşamın akışında durup bir nefes almanı ve iç sesini dinlemeni sağlayan bir farkındalık uygulamasıdır.
              Geleceği söylemez, seni sana hatırlatır.
            </p>
            
            <div className="app-heading-banner">
              <div className="heading-icon">✨</div>
              <h3>Neler Sunuyoruz?</h3>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <div className="feature-text">
                <h4>Günlük Tek Kart</h4>
                <p>Her gün yalnızca bir kart çek. Bu kart, sana o günün ruhunu yansıtan rehberlik sunar.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <div className="feature-text">
                <h4>Farklı Yorumlar</h4>
                <p>Kartların anlamları; <strong>genel</strong>, <strong>aşk</strong> ve <strong>kariyer</strong> gibi alanlarda kısa ama etkili yorumlarla sunulur.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <div className="feature-text">
                <h4>Kendine Dönmeni Sağlayan Sorular</h4>
                <p>Her kartın sonunda, seni düşünmeye sevk eden bir kişisel farkındalık sorusu bekler.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <div className="feature-text">
                <h4>Bildirim Hatırlatmaları</h4>
                <p>Kartını çekmeyi unutursan, biz seni nazikçe hatırlatırız.</p>
              </div>
            </div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🌟</div>
              <h3>Neden Tarot Rehberi?</h3>
            </div>
            
            <ul className="version-features">
              <li>Fal değil, <strong>farkındalık</strong>.</li>
              <li>Karmaşık değil, <strong>sade</strong>.</li>
              <li>Günlük bir alışkanlık değil, <strong>günlük bir içsel keşif</strong>.</li>
            </ul>
            
            <div className="download-banner">
              <div className="banner-icon">📲</div>
              <div className="banner-text">
                <p><strong>Uygulamayı hemen indir, ilk kartını bugün çek!</strong></p>
                <p>Her yeni gün, yeni bir içsel rehberlik fırsatı…</p>
              </div>
            </div>
            
            <div className="app-info">
              <p><strong>Güncellenme Tarihi:</strong> 21 Nisan 2025</p>
              <p><strong>Uygulama Adı:</strong> Tarot Rehberi</p>
              <p><strong>Geliştirici:</strong> Hasan Mertkan Fırlar</p>
            </div>
            
            <div className="contact-info">
              <h3>📬 İletişim</h3>
              <p>Herhangi bir sorunuz veya talebiniz için bizimle iletişime geçebilirsiniz:</p>
              <p className="contact-email">📧 <strong>destekcikmis@gmail.com</strong></p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>Tarot Rehberi uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/tarot-rehberi/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>⚠️ Sorumluluk Reddi</h2>
          <p>
            Tarot Rehberi uygulaması, kullanıcıya yalnızca <strong>günlük motivasyon ve farkındalık amaçlı içerik</strong> sunar.
            Uygulamadaki kart yorumları herhangi bir profesyonel, tıbbi, hukuki veya psikolojik tavsiye olarak değerlendirilmemelidir.
          </p>
          <p>
            Uygulama geliştiricisi, bu içeriklere dayanarak alınan hiçbir karar veya sonuçtan <strong>sorumlu değildir</strong>.
            Tüm kullanım, kullanıcının kendi sorumluluğundadır.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TarotRehberi;