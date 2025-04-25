import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const YDSWords = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#637CAF' }}>
            YD
          </div>
        </div>
        <div className="app-header-info">
          <h1>Çıkmış Kelimeler: YDS</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>Çıkmış Kelimeler: YDS Uygulaması ile Sınavda Başarıyı Yakala! ✨</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 21 Aralık 2024</div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🏆</div>
              <h3>YDS sınavında başarının anahtarı burada! 🔑</h3>
            </div>
            
            <p>✨ YDS sınavına hazırlananlar için özel bir fırsat! <strong>"Çıkmış Kelimeler: YDS"</strong> uygulamasıyla sınavda çıkmış kelimeleri öğrenerek, kelime bilginizi geliştirebilir ve sınava daha etkili bir şekilde hazırlanabilirsiniz.</p>
            
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <div className="feature-text">
                <h4>Kapsamlı İçerik 🌟</h4>
                <p>Uygulama, <strong>Türkçe ve İngilizce kelime anlamlarıyla donatılmış kullanıcı dostu bir arayüze</strong> sahiptir. Sağlık, Sosyal ve Fen bilimleri gibi farklı alanlarda hazırlanmış kapsamlı kelime listeleriyle sınav hazırlığınızda eksiksiz bir destek sunar.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔤</div>
              <div className="feature-text">
                <h4>Kolay Erişim 💫</h4>
                <p>Ayrıca, Fen bilimleri alanında A'dan Z'ye sıralanmış kelimelerle bilginizi hızla tamamlayabilirsiniz.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <div className="feature-text">
                <h4>Başarıya Odaklanın 🎯</h4>
                <p>Bu uygulama, <strong>kelime bilginizi geliştirmek ve sınav başarınızı artırmak</strong> için tasarlandı. Artık zorluk çekmeden YDS sınavında başarılı olabilirsiniz!</p>
              </div>
            </div>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p>✨ <strong>Şimdi indirin</strong> ve sınava hazırlık sürecinizde fark yaratın. Hedefinize bir adım daha yakın olun! 🎓</p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek</h3>
              <p>Herhangi bir sorunuz ya da öneriniz için bizimle iletişime geçmekten çekinmeyin:</p>
              <p className="contact-email">📧 <strong>destekcikmis@gmail.com</strong></p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>YDS Words uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/yds-words/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>🚀 Sürüm Bilgileri</h2>
          <div className="version-note">
            <div className="version-header">
              <div className="version-icon">🔄</div>
              <h3>En Son Güncellemeler</h3>
            </div>
            <ul className="version-features">
              <li>✅ Yeni kelimeler ve anlamlar eklendi</li>
              <li>✅ Arayüz geliştirmeleri yapıldı</li>
              <li>✅ Performans iyileştirildi</li>
              <li>✅ Kullanıcı deneyimi güçlendirildi</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YDSWords;