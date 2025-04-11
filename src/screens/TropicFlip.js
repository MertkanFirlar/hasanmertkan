import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const TropicFlip = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#FF8A3D' }}>
            TF
          </div>
        </div>
        <div className="app-header-info">
          <h1>Tropic Flip: Mind Game</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>🏝️ Tropik Adada Hafıza Mücadelesi!</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 11 Nisan 2025</div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🎮</div>
              <h3>Tropic Flip: Hafıza ve Hız Oyunu!</h3>
            </div>
            
            <p>
              Tropik adada geçen bu eğlenceli hafıza oyununda reflekslerin ve dikkat gücün sınanıyor! 
              Kartları çevir, aynı olanları eşleştir ve süre bitmeden hepsini bul!
            </p>
            
            <div className="feature-card">
              <div className="feature-icon">❓</div>
              <div className="feature-text">
                <h4>Tropic Flip Nedir?</h4>
                <p>
                  <strong>Tropic Flip</strong>, hafıza ve hız becerilerinizi test eden sürükleyici bir mobil oyundur. 
                  Egzotik tropik ada temasıyla hazırlanan bu oyunda, kartları çevirerek eşleştirmeniz ve tüm setleri 
                  süre bitmeden tamamlamanız gerekiyor.
                </p>
                <p>
                  Renkli grafikleri, eğlenceli ses efektleri ve keyifli müzikleriyle her yaş grubundan oyunculara 
                  hitap eden bir deneyim sunar.
                </p>
              </div>
            </div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🤔</div>
              <h3>Neden Tropic Flip?</h3>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>3 Farklı Zorluk Seviyesi</h4>
                <p>Kolay, Orta ve Zor modlarıyla her seviyedeki oyuncuya uygun zorluk sunar.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>Renkli ve Minimal Tasarım</h4>
                <p>Göz yormayan, canlı renkli ve ferah bir arayüz ile uzun saatler oynayabilirsiniz.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>Tropik Ada Teması</h4>
                <p>Egzotik hayvanlar, renkli meyveler ve ada simgeleriyle dolu kartları eşleştirirken keyfine bak!</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔹</div>
              <div className="feature-text">
                <h4>Süreye Karşı Yarış Modu</h4>
                <p>Zaman baskısı altında kart eşleştirme ile hafızanı ve hızını test et!</p>
              </div>
            </div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">👥</div>
              <h3>Kimler İçin?</h3>
            </div>
            
            <ul className="version-features">
              <li>🧠 Hafızasını geliştirmek isteyenler</li>
              <li>⏱️ Hızlı düşünme becerisini arttırmak isteyenler</li>
              <li>🏝️ Eğlenceli ve keyifli vakit geçirmek isteyenler</li>
              <li>📱 Her yaş grubundan oyun severler!</li>
            </ul>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p><strong>Hazırsan Kartları Çevir!</strong></p>
                <p>Kısa bir mola mı verdin? Beynini çalıştırmak mı istiyorsun? Tropic Flip tam sana göre.
                <br />Hazırsan kartları çevir, hafızanı zorla ve adanın en iyisi sen ol!
                <br />App Store ve Google Play'den şimdi ücretsiz indir! 🌴</p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p>Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz.</p>
              <p className="contact-email">📧 <strong>destek@gmail.com</strong> adresinden ulaşabilirsin.</p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>Tropic Flip uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/tropic-flip/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>🚀 Uygulama Özellikleri</h2>
          <div className="version-note">
            <div className="version-header">
              <div className="version-icon">✅</div>
              <h3>Tropic Flip'in Sunduğu Olanaklar</h3>
            </div>
            <ul className="version-features">
              <li>✨ 3 farklı zorluk seviyesinde (Kolay, Orta, Zor) hafıza oyunları</li>
              <li>✨ Renkli ve minimal tasarım ile göz yormayan arayüz</li>
              <li>✨ Tropik ada teması ve eğlenceli görseller</li>
              <li>✨ Süreye karşı yarış modu</li>
              <li>✨ Hafıza ve refleksleri geliştirme imkanı</li>
              <li>✨ Her yaş için uygun oyun deneyimi</li>
              <li>✨ Kullanıcı dostu kontroller</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TropicFlip;