import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const YOKDILWords = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#94C47D' }}>
            YD
          </div>
        </div>
        <div className="app-header-info">
          <h1>Çıkmış Kelimeler: YÖKDİL</h1>
       
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>YÖKDİL Sınavında Başarıya Giden Yol: Çıkmış Kelimelerle Hazırlanın!</h2>
          
          <div className="app-description">
            <div className="app-tagline">🚀 <strong>YÖKDİL sınavında başarı için en etkili kelime hazırlık uygulaması!</strong></div>
            
            <p>📚 YÖKDİL sınavına hazırlananlar için harika bir haberimiz var! <strong>"Çıkmış Kelimeler: YÖKDİL"</strong> uygulamasıyla sınavda çıkmış kelimeleri öğrenerek bilgilerinizi geliştirebilir, sınava daha etkili bir şekilde hazırlanabilirsiniz.</p>
            
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <div className="feature-text">
                <h3>Kullanıcı Dostu Arayüz</h3>
                <p>Uygulama, Türkçe ve İngilizce kelime anlamlarıyla donatılmış kullanıcı dostu bir arayüze sahiptir. Sağlık, Sosyal ve Fen bilimleri gibi farklı alanlarda hazırlanmış kapsamlı kelime listeleriyle sınava tam donanımlı olarak girebilirsiniz.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔤</div>
              <div className="feature-text">
                <h3>Alfabetik Düzen</h3>
                <p>Fen bilimleri alanında A'dan Z'ye sıralanmış kelimelerle eksiklerinizi hızla kapatabilirsiniz. Aradığınız kelimelere anında ulaşın!</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <div className="feature-text">
                <h3>Her Yerde Çalışın</h3>
                <p>Bu uygulama, sınav başarınızı artırmaya yönelik pratik ve etkili bir araç olarak tasarlandı. Artık zorluk çekmeden YÖKDİL sınavında başarılı olabilirsiniz!</p>
              </div>
            </div>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p>Şimdi indirin ve sınava hazırlık sürecinizi bir adım öteye taşıyın. <strong>Başarıya giden yol burada başlıyor!</strong></p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p><strong>✉️ E-posta:</strong> destek@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>Gizlilik Politikası</h2>
          <p>YÖKDİL Kelimeler uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/yokdil-words/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

       
      </div>
    </div>
  );
};

export default YOKDILWords;