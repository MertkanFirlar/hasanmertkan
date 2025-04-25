import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const ColorTrick = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#4A6FFF' }}>
            CT
          </div>
        </div>
        <div className="app-header-info">
          <h1>Color Trick – Renkleri Eşleştir</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>🎨 Renklerle Dolu Bir Dünyaya Hazır Mısın?</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 10 Nisan 2025</div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🎯</div>
              <h3>Renkleri Eşleştir, Ustalığını Göster!</h3>
            </div>
            
            <p>
              Mobil oyunlar artık sadece boş zamanlarımızı doldurmakla kalmıyor; aynı zamanda reflekslerimizi geliştiriyor, 
              beynimizi çalıştırıyor ve eğlenceli vakit geçirmemizi sağlıyor. Bu noktada karşınızda: <strong>Color Trick</strong>
            </p>
            
            <div className="feature-card">
              <div className="feature-icon">❓</div>
              <div className="feature-text">
                <h4>Color Trick Nedir?</h4>
                <p>
                  <strong>Color Trick</strong>, renkleri hızlı şekilde eşleştirerek en yüksek puanı hedeflediğiniz, 
                  reflekslere dayalı bir mobil bulmaca oyunudur. Her seviyede artan zorlukla birlikte hem eğlenecek 
                  hem de dikkat seviyenizi sınayacaksınız.
                </p>
                <p>
                  Sade tasarımı ve renkli animasyonlarıyla göz yormaz, kullanıcı dostu yapısıyla her yaştan oyuncuya hitap eder.
                </p>
              </div>
            </div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🤔</div>
              <h3>Neden Color Trick?</h3>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>3 Zorluk Seviyesi</h4>
                <p>Kolay, Orta ve Zor modlarıyla herkes kendi seviyesine uygun oyun deneyimi yaşayabilir.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>Süreye Karşı Yarış</h4>
                <p>Belirli süre içinde renkleri eşleştir, seviye atla ve rekor puanlara ulaş!</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>Canlı Renk Paleti ve Hızlı Oynanış</h4>
                <p>Göz alıcı renklerle hazırlanmış minimal grafikler, sade ama bağımlılık yaratan bir deneyim sunar.</p>
              </div>
            </div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">👥</div>
              <h3>Kimler Oynamalı?</h3>
            </div>
            
            <ul className="version-features">
              <li>🧠 Reflekslerini geliştirmek isteyenler</li>
              <li>🎯 Zihinsel egzersiz arayanlar</li>
              <li>🎨 Renklerle eğlenmek isteyen çocuklar ve yetişkinler</li>
              <li>📱 Boş vakitlerini kaliteli geçirmek isteyen herkes!</li>
            </ul>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p><strong>Şimdi İndir, Renkleri Fethet!</strong></p>
                <p>Renkleri eşleştir, reflekslerini test et, rekorları alt üst et.
                <br /><strong>Color Trick</strong> seni bekliyor!
                <br />App Store'dan şimdi ücretsiz indir ve hemen oynamaya başla! 🎉</p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p>Herhangi bir sorunuz veya öneriniz mi var?</p>
              <p className="contact-email">📧 <strong>destekcikmis@gmail.com</strong> adresinden ulaşabilirsin.</p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>Color Trick uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/color-trick/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>🚀 Uygulama Özellikleri</h2>
          <div className="version-note">
            <div className="version-header">
              <div className="version-icon">✅</div>
              <h3>Color Trick'in Sunduğu Olanaklar</h3>
            </div>
            <ul className="version-features">
              <li>✨ 3 farklı zorluk seviyesinde renkli bulmaca oyunları</li>
              <li>✨ Süreye karşı yarış ve rekortmenlere karşı mücadele</li>
              <li>✨ Canlı renk paleti ve minimal, göz yormayan tasarım</li>
              <li>✨ Zihinsel refleksleri geliştirme imkanı</li>
              <li>✨ Kullanıcı dostu arayüz</li>
              <li>✨ Her yaşa uygun eğlenceli oyun deneyimi</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorTrick;