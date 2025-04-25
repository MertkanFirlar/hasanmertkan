import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const NumbersSequence = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Şimdilik placeholder logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#39424E' }}>
            NS
          </div>
        </div>
        <div className="app-header-info">
          <h1>NumbersSequence - Zihin Oyunu</h1>
          
        </div>
      </div>

      <div className="app-content">
        <section className="app-section app-description">
          <h2>Uygulama Açıklaması</h2>
          <p className="release-date">Mart 06, 2025</p>
          
          <p className="app-tagline"><strong>Hafıza Antrenmanınız için En İyi Yardımcınız!</strong></p>

          <ul className="feature-list">
            <li>🧠 <strong>Hafıza Güçlendirme</strong> – İlgi çekici sayı dizisi mücadeleleriyle hafızanızı güçlendirin.</li>
            <li>🎮 <strong>Tek Kişilik ve Karşılıklı Mod</strong> – Becerilerinizi geliştirmek için tek başınıza oynayın veya rekabetçi modda bir arkadaşınıza meydan okuyun!</li>
            <li>⚡ <strong>Hızlı Beyin Egzersizi</strong> – Odaklanma ve tepki hızınızı artırmak için dizileri hızla çözün.</li>
            <li>🏆 <strong>İlerlemenizi Takip Edin</strong> – Gelişimlerinizi görerek kendi rekorlarınızı kırın.</li>
            <li>🔔 <strong>Zinde Kalın</strong> – Düzenli olarak antrenman yapmak ve her gün hafızanızı keskinleştirmek için hatırlatıcılar ayarlayın.</li>
          </ul>

          <p className="app-promo">Hafıza ve zihinsel çevikliği geliştirmek çok önemlidir! <strong>NumbersSequence</strong> ile beyninizi çalıştırabilir, eğlenebilir ve kendinize kolayca meydan okuyabilirsiniz.</p>

          <div className="support-contact">
            <h3>📩 <strong>Destek ve İletişim</strong></h3>
            <p>Herhangi bir soru veya geri bildirim için bizimle iletişime geçmekten çekinmeyin:</p>
            <p>📧 <strong>destekcikmis@gmail.com</strong></p>
          </div>

          <p className="download-cta">🚀 <strong>Şimdi indirin ve hafıza becerilerinizi bir sonraki seviyeye taşıyın!</strong></p>
        </section>

        <section className="app-section">
          <h2>Gizlilik Politikası</h2>
          <p>NumbersSequence uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/numbers-sequence/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

       
      </div>
    </div>
  );
};

export default NumbersSequence;