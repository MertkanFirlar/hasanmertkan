import React from 'react';
import { Link } from 'react-router-dom';
import './AppPage.css';

const IFTracker = () => {
  return (
    <div className="app-page-container">
      <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
      
      <div className="app-header">
        <div className="app-logo-large">
          {/* Logo */}
          <div className="placeholder-logo-large" style={{ backgroundColor: '#313E4F' }}>
            IF
          </div>
        </div>
        <div className="app-header-info">
          <h1>IF Tracker - Aralıklı Oruç</h1>
          
        </div>
      </div>

      <div className="app-content">
        <section className="app-section">
          <h2>Aralıklı Oruç ile Sağlıklı Yaşama Adım Atın!</h2>
          
          <div className="app-description">
            <div className="app-update-date">Son Güncelleme: 16 Mart 2025</div>
            
            <div className="app-tagline">🚀 <strong>Aralıklı oruç ile sağlıklı yaşam yolculuğunuzu başlatmaya hazır mısınız?</strong></div>
            
            <p>Sağlıklı yaşam ve kilo yönetimi söz konusu olduğunda <strong>aralıklı oruç</strong> son yılların en popüler beslenme yöntemlerinden biri haline geldi. Ancak, birçok kişi için <strong>oruç süresini takip etmek, VKİ hesaplamak ve beslenme düzenini kontrol etmek</strong> zor olabiliyor. İşte tam bu noktada <strong>IF Tracker - Aralıklı Oruç</strong> uygulaması devreye giriyor! 🚀</p>
            
            <div className="info-card">
              <h3>Aralıklı Oruç Nedir ve Neden Popüler?</h3>
              <p>Aralıklı oruç (Intermittent Fasting - IF), belirli saatler boyunca yemek yememek ve vücudu doğal bir metabolik dönüşüme sokmak anlamına gelir. Çeşitli araştırmalar, <strong>aralıklı oruç sayesinde kilo kontrolü sağlanabileceğini, insülin seviyelerinin dengeleneceğini ve hücresel yenilenme sürecinin destekleneceğini</strong> göstermektedir.</p>
              
              <p>Popüler aralıklı oruç yöntemleri şunlardır:</p>
              <ul className="methods-list">
                <li><span className="check-mark">✅</span> <strong>16/8 Metodu:</strong> 16 saat aç kalıp, 8 saatlik zaman diliminde yemek yeme.</li>
                <li><span className="check-mark">✅</span> <strong>18/6 Metodu:</strong> 18 saat aç kalıp, 6 saat içinde yemek yeme.</li>
                <li><span className="check-mark">✅</span> <strong>20/4 Metodu:</strong> 20 saat açlık ve 4 saat yemek yeme süresi.</li>
              </ul>
              
              <p>Her bireyin farklı bir metabolizması olduğu için en uygun yöntemi bulmak büyük önem taşır.</p>
            </div>
            
            <div className="features-section">
              <h3>IF Tracker - Aralıklı Oruç ile Neler Yapabilirsiniz?</h3>
              <p><strong>IF Tracker</strong>, aralıklı orucu kolaylaştıran ve yaşam tarzınıza en uygun planı oluşturmanıza yardımcı olan bir mobil uygulamadır.</p>
              
              <p className="feature-title">📌 <strong>İşte sunduğumuz bazı özellikler:</strong></p>
              
              <div className="feature-card">
                <div className="feature-icon">🔹</div>
                <div className="feature-text">
                  <h4>Kişiselleştirilmiş Oruç Süreleri:</h4>
                  <p>Kendi oruç saatlerinizi belirleyin veya <strong>16, 18, 20 saatlik popüler metotlardan birini</strong> seçin.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔹</div>
                <div className="feature-text">
                  <h4>Otomatik VKİ (Vücut Kitle İndeksi) Hesaplama:</h4>
                  <p>Kilonuzu ve boyunuzu girerek <strong>VKİ'nizi hesaplayın</strong> ve gelişiminizi takip edin.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔹</div>
                <div className="feature-text">
                  <h4>Günlük Kalori Takibi:</h4>
                  <p>Günlük aldığınız kalorileri kaydederek <strong>beslenme alışkanlıklarınızı analiz edin</strong>.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔹</div>
                <div className="feature-text">
                  <h4>Profil ve Kişiselleştirme Seçenekleri:</h4>
                  <p>Hedeflerinizi belirleyin, ilerlemenizi kaydedin ve <strong>kendinize özel bir takip sistemi oluşturun</strong>.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔹</div>
                <div className="feature-text">
                  <h4>Kullanıcı Dostu Arayüz:</h4>
                  <p>Basit ve minimalist tasarımıyla, <strong>hızlı ve kolay bir kullanım sunar</strong>.</p>
                </div>
              </div>
            </div>
            
            <div className="info-card warning">
              <h3>Aralıklı Oruç Size Uygun mu?</h3>
              <p>Aralıklı oruç, birçok insan için etkili bir yöntem olsa da herkes için uygun olmayabilir. Eğer <strong>diyabet, düşük kan şekeri veya başka bir sağlık sorununuz</strong> varsa, <strong>öncelikle doktorunuza danışmanız önerilir</strong>.</p>
              
              <p>Ancak sağlıklı bireyler için <strong>IF Tracker</strong> gibi bir uygulama ile oruç sürelerini takip etmek ve beslenme düzenini kontrol altına almak <strong>daha kolay ve sürdürülebilir hale gelebilir</strong>.</p>
            </div>
            
            <div className="why-section">
              <h3>Neden IF Tracker?</h3>
              <ul className="why-list">
                <li><span className="check-mark">✅</span> <strong>Oruç sürecinizi kontrol altına alır</strong></li>
                <li><span className="check-mark">✅</span> <strong>Metabolizmanıza uygun en iyi yöntemi seçmenize yardımcı olur</strong></li>
                <li><span className="check-mark">✅</span> <strong>Sağlıklı alışkanlıklar geliştirmenizi destekler</strong></li>
                <li><span className="check-mark">✅</span> <strong>Reklam destekli ve tamamen ücretsizdir</strong></li>
              </ul>
            </div>
            
            <div className="download-banner">
              <div className="banner-icon">⬇️</div>
              <div className="banner-text">
                <p>Aralıklı oruç ile sağlıklı yaşam yolculuğunuzu başlatmaya hazır mısınız? <strong>IF Tracker - Aralıklı Oruç</strong> uygulamasını hemen indirerek <strong>oruç sürenizi yönetmeye başlayın!</strong></p>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>📬 Destek ve İletişim</h3>
              <p>Eğer uygulama ile ilgili bir sorunuz olursa, bize <strong>destekcikmis@gmail.com</strong> adresinden ulaşabilirsiniz.</p>
              <p className="slogan"><strong>Sağlıklı ve dengeli bir yaşam için IF Tracker yanınızda!</strong> 🚀</p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>Gizlilik Politikası</h2>
          <p>IF Tracker uygulamasının gizlilik politikası ile ilgili ayrıntılı bilgilere aşağıdaki bağlantıdan ulaşabilirsiniz.</p>
          <Link to="/if-tracker/privacy-policy" className="policy-link">Gizlilik Politikasını Görüntüle →</Link>
        </section>

      
      </div>
    </div>
  );
};

export default IFTracker;