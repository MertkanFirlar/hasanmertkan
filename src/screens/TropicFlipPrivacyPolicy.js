import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const TropicFlipPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/tropic-flip" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>Gizlilik Politikası – Tropic Flip: Mind Game</h1>
        <p className="last-updated">📅 Son Güncelleme: 11 Nisan 2025</p>

        <section className="policy-section">
          <p>Tropic Flip uygulamasını kullanmanız, aşağıda belirtilen gizlilik şartlarını kabul ettiğiniz anlamına gelir.</p>
        </section>

        <section className="policy-section">
          <h2>1. Kişisel Veri Toplamıyoruz</h2>
          <p>Tropic Flip herhangi bir kişisel bilgi (isim, e-posta, konum, cihaz verisi vb.) toplamaz, işlemez veya üçüncü taraflarla paylaşmaz. Uygulama, sadece oyun deneyiminizi sağlamak amacıyla çalışır.</p>
        </section>

        <section className="policy-section">
          <h2>2. Reklamlar ve Üçüncü Taraf Kitaplıklar</h2>
          <p>Uygulama içinde Google AdMob gibi reklam hizmetleri kullanılabilir. Bu hizmetler, kullanıcı deneyimini iyileştirmek ve reklam sunmak için cihazınıza anonim veriler (örneğin reklam kimliği) gönderebilir. Bu işlemler üçüncü taraf politikalarına tabidir.</p>
          <p className="section-footer">🔗 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google AdMob Gizlilik Politikası</a></p>
        </section>

        <section className="policy-section">
          <h2>3. Sorumluluk Reddi</h2>
          <p>Uygulamanın kullanımı tamamen kullanıcının sorumluluğundadır. Geliştirici, uygulamanın kullanımından doğabilecek herhangi bir doğrudan veya dolaylı zarardan sorumlu tutulamaz.</p>
        </section>

        <section className="policy-section">
          <h2>4. Güncellemeler</h2>
          <p>Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfa üzerinden duyurulacaktır.</p>
        </section>

        <section className="policy-section">
          <h2>5. İletişim</h2>
          <p>Herhangi bir sorunuz olması durumunda bizimle şu e-posta adresinden iletişime geçebilirsiniz:</p>
          <p className="contact-email">📧 <strong>destek@gmail.com</strong></p>
        </section>

        <section className="policy-section">
          <h2>6. Çocukların Gizliliği</h2>
          <p>Tropic Flip, her yaş grubuna uygun bir uygulama olarak tasarlanmıştır. 13 yaş altı çocukların kullanımı ebeveyn gözetiminde önerilir. Uygulama hiçbir kişisel veri toplamadığı için, çocukların gizliliği korunmaktadır.</p>
        </section>

        <section className="policy-section">
          <h2>7. Veri Güvenliği</h2>
          <p>Uygulama kullanıcı verisi toplamadığı için, veri güvenliği riskleri minimumdur. Oyun içi ilerleme ve ayarlar cihazınızda yerel olarak saklanır ve sunucularımıza gönderilmez.</p>
        </section>

        <section className="policy-section">
          <h2>8. Reklam İçeriği</h2>
          <p>Uygulamada gösterilen reklamların içeriği reklam ağları tarafından kontrol edilir ve geliştirici bu içerikten doğrudan sorumlu değildir. Uygunsuz reklam içeriği bildirmeniz durumunda gerekli işlemler yapılacaktır.</p>
        </section>

        <div className="policy-footer">
          <p>Tropic Flip: Mind Game uygulamasını kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz.</p>
          <p>Son Güncelleme: 11 Nisan 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TropicFlipPrivacyPolicy;