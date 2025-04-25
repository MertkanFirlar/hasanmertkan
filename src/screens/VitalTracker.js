import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const VitalTracker = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#2C5A64' }}>
            VT
          </div>
        </div>
        <div className="app-header-info">
          <h1>Su ve Kilo Takip - VitalTracker</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>Su ve Kilo Takibi - VitalTracker ✨</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 8 Mart 2025</div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">💪</div>
              <h3>Sağlıklı bir yaşam için en iyi yardımcınız!</h3>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <div className="feature-text">
                <h4>Günlük Su Takibi</h4>
                <p>Su tüketiminizi kaydedin, hedeflerinize ulaşın ve su içmeyi bir alışkanlık haline getirin.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <div className="feature-text">
                <h4>Kilo Takibi</h4>
                <p>Kilo değişimlerinizi izleyin, ilerlemenizi takip edin ve hedeflerinize ulaşın.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-text">
                <h4>Vücut Kitle İndeksi (VKİ) ve Kalori Hesaplama</h4>
                <p>Günlük kalori ihtiyacınızı öğrenin ve kilonuzu sağlıklı bir şekilde yönetin.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <div className="feature-text">
                <h4>Hatırlatıcılar</h4>
                <p>Her gün su içmeyi unutmayın ve kilo takibinizi düzenli tutun.</p>
              </div>
            </div>
            
            <div className="app-promo">
              <p>Sağlıklı bir yaşam, düzenli su tüketimi ve kilo kontrolü gerektirir! <strong>VitalTracker</strong> ile bu süreci kolayca yönetin ve hedeflerinize ulaşın.</p>
            </div>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p><strong>Hemen indirin ve daha sağlıklı bir yaşama doğru adım atın!</strong></p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p>Herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin:</p>
              <p className="contact-email">📧 <strong>destekcikmis@gmail.com</strong></p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>VitalTracker uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/vital-tracker/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>🚀 Uygulama Özellikleri</h2>
          <div className="version-note">
            <div className="version-header">
              <div className="version-icon">✅</div>
              <h3>VitalTracker'ın Sunduğu Olanaklar</h3>
            </div>
            <ul className="version-features">
              <li>✨ Su tüketimini günlük olarak kaydetme ve takip etme</li>
              <li>✨ Kilo değişimlerini grafikler ile izleme</li>
              <li>✨ VKİ değerini hesaplama ve değerlendirme</li>
              <li>✨ Kişiselleştirilmiş hatırlatıcılar oluşturma</li>
              <li>✨ Günlük kalori ihtiyacını hesaplama</li>
              <li>✨ İlerleme raporları ve istatistikler</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VitalTracker;