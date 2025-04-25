import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const SesliNotDonusturucu = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#FF5722' }}>
            VN
          </div>
        </div>
        <div className="app-header-info">
          <h1>VoiceNote – Sesli Not Dönüştürücü</h1>
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>🎙️ VoiceNote – Sesli Düşün, Kaydet, Hatırla!</h2>
          
          <div className="app-description">
            <div className="app-update-date">📅 Son Güncelleme: 24 Nisan 2025</div>
            
            <p>
              <strong>VoiceNote</strong>, yoğun hayat temposunda fikirlerinizi, planlarınızı ya da ilham anlarınızı unutmamanız için geliştirilen sade ama güçlü bir sesli not uygulamasıdır.
            </p>
            
            <p>
              Artık yazmakla vakit kaybetmeyin. Konuşun, kaydedin, notlarınızı başlıklandırın ve dilediğiniz zaman tekrar dinleyin.
            </p>
            
            <div className="app-heading-banner">
              <div className="heading-icon">🚀</div>
              <h3>Neden VoiceNote?</h3>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h4>Hızlı ve Zahmetsiz</h4>
                <p>Uygulamayı açın, mikrofon simgesine dokunun ve konuşmaya başlayın. VoiceNote konuşmanızı metne çevirir ve kayıt altına alır.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <div className="feature-text">
                <h4>Yerel Depolama, Güvende Kalın</h4>
                <p>Tüm kayıtlar yalnızca cihazınızda saklanır. Hiçbir veri buluta gönderilmez. Gizliliğiniz %100 korunur.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📂</div>
              <div className="feature-text">
                <h4>Düzenli ve Erişilebilir</h4>
                <p>Notlarınıza başlık vererek kolayca kategorilere ayırabilir, dilediğiniz zaman geri dönebilirsiniz.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <div className="feature-text">
                <h4>Modern ve Kullanıcı Dostu Tasarım</h4>
                <p>Göz yormayan arayüzüyle, teknolojiyle arası iyi olmayan kullanıcılar için bile anlaşılır bir deneyim sunar.</p>
              </div>
            </div>
            
            <div className="app-heading-banner">
              <div className="heading-icon">✨</div>
              <h3>Öne Çıkan Özellikler</h3>
            </div>
            
            <ul className="version-features">
              <li>🎤 Tek dokunuşla sesli not alma</li>
              <li>🔄 Otomatik ses-metin dönüşümü</li>
              <li>🏷️ Notları etiketleme ve kategorilendirme</li>
              <li>🔍 Hızlı arama özelliği</li>
              <li>📝 Manuel düzenleme imkanı</li>
              <li>🌙 Gece modu desteği</li>
            </ul>
            
            <div className="download-banner">
              <div className="banner-icon">📱</div>
              <div className="banner-text">
                <p><strong>Şimdi indir, fikirlerini kaybetmeyi bırak!</strong></p>
                <p>VoiceNote ile düşünceleriniz her zaman yanınızda.
                <br />App Store'dan ücretsiz indir ve sesli not almaya başla! 🎙️</p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p>Her türlü soru, öneri ve destek talebiniz için:</p>
              <p className="contact-email">📧 <strong>destekcikmis@gmail.com</strong></p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>✨ Gizlilik Politikası</h2>
          <p>VoiceNote uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/sesli-not-donusturucu/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

        <section className="app-section">
          <h2>🚀 Uygulama Özellikleri</h2>
          <div className="version-note">
            <div className="version-header">
              <div className="version-icon">✅</div>
              <h3>VoiceNote'un Sunduğu Olanaklar</h3>
            </div>
            <ul className="version-features">
              <li>✨ Gerçek zamanlı ses-metin dönüştürme teknolojisi</li>
              <li>✨ Çevrimdışı çalışma özelliği</li>
              <li>✨ Notlarınızı kategorilere ayırma imkanı</li>
            
              <li>✨ Çoklu dil desteği</li>
              <li>✨ Güvenli ve özel veri saklama</li>
              <li>✨ Siri ve Widget entegrasyonu</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SesliNotDonusturucu;