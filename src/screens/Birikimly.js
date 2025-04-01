import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const Birikimly = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#2C4668' }}>
            BR
          </div>
        </div>
        <div className="app-header-info">
          <h1>Birikimly - Birikim Takip</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>Daha İyi Birikimler İçin Akıllı Asistanınız! ✨</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 22 Mart 2025</div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">💸</div>
              <h3>Finansal hedeflerinize ulaşmanın en akıllı yolu!</h3>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-text">
                <h4>Gelir ve Giderlerinizi Takip Edin</h4>
                <p>Tüm gelir ve giderlerinizi kolayca kaydedin. Detaylı özetler görün ve finansal durumunuzu kontrol altında tutun.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <div className="feature-text">
                <h4>Cüzdanlar Oluşturun ve Birikim Hedefleri Belirleyin</h4>
                <p>Farklı amaçlar için birden fazla cüzdan açın. Hedefler belirleyin, ilerlemenizi takip edin ve birikimlerinizi görselleştirin.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <div className="feature-text">
                <h4>Tüm Finansal Durumunuzu Tek Bakışta Görün</h4>
                <p>Toplam bakiyenizi, aylık gelirinizi, harcamalarınızı ve birikim oranınızı tek bir ekranda izleyin.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📉</div>
              <div className="feature-text">
                <h4>Akıllı İstatistikler</h4>
                <p>Görsel grafiklerle içgörüler elde edin. Alışkanlıklarınızı anlayın ve birikim stratejinizi geliştirin.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <div className="feature-text">
                <h4>Çoklu Dil Desteği</h4>
                <p>Uygulamayı <strong>Türkçe veya İngilizce</strong> olarak kullanın ve finanslarınızı rahatça yönetin.</p>
              </div>
            </div>
            
            <div className="app-promo">
              <p>Daha iyi bir finansal yaşam, farkındalık ve tutarlılıkla başlar. <strong>Birikimly</strong> ile finanslarınızı akıllıca takip edin ve birikim hedeflerinize ulaşın!</p>
            </div>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p><strong>Hemen indirin ve finansal kontrolü elinize alın!</strong></p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p>Geri bildiriminiz mi var veya yardıma mı ihtiyacınız var?</p>
              <p className="contact-email">📧 <strong>destek@gmail.com</strong></p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>Birikimly uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/birikimly/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>🚀 Uygulama Özellikleri</h2>
          <div className="version-note">
            <div className="version-header">
              <div className="version-icon">✅</div>
              <h3>Birikimly'nin Avantajları</h3>
            </div>
            <ul className="version-features">
              <li>✨ Kolay ve sezgisel kullanıcı arayüzü</li>
              <li>✨ Çoklu cüzdan ve kategori yönetimi</li>
              <li>✨ Gelir ve gider takibi</li>
              <li>✨ Birikim hedefleri ve ilerleme görselleştirme</li>
              <li>✨ Detaylı istatistikler ve raporlar</li>
              <li>✨ Türkçe ve İngilizce dil desteği</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Birikimly;