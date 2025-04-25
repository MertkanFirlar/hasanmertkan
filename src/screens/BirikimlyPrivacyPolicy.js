import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const BirikimlyPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/birikimly" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>Birikimly - Birikim Takip: Gizlilik Politikası</h1>
        <p className="last-updated">📅 Son Güncelleme: 23 Mart 2025</p>

        <section className="policy-section">
          <h2>1. Genel Bakış</h2>
          <p><strong>Birikimly – Birikim Takip</strong> uygulaması, kullanıcılarının gizliliğini korumayı taahhüt eder. Bu politika, uygulamanın kullanımı sırasında hangi verilerin toplandığı, nasıl işlendiği ve hangi durumlarda üçüncü taraflarla paylaşıldığını açıklamaktadır.</p>
        </section>

        <section className="policy-section">
          <h2>2. Toplanan Veriler</h2>
          <p>Uygulama, kullanıcı deneyimini iyileştirmek amacıyla aşağıdaki türde verileri toplayabilir:</p>
          <ul className="policy-list">
            <li><strong>Reklam Verileri:</strong> Google AdMob üzerinden gösterilen reklamlar için anonim reklam kimliği (IDFA) ve cihaz bilgileri kullanılabilir.</li>
            <li><strong>Kullanım Verileri:</strong> Uygulamanın hangi özelliklerinin ne sıklıkla kullanıldığına ilişkin anonim istatistiksel bilgiler toplanabilir.</li>
            <li><strong>Kayıt Verileri:</strong> Gelir, gider ve cüzdan bilgileri yalnızca cihazda yerel olarak saklanır. Bu veriler sunuculara gönderilmez.</li>
          </ul>
          <p className="section-footer">🚫 <strong>Kişisel bilgiler (ad, e-posta, adres vb.) kesinlikle toplanmaz.</strong></p>
        </section>

        <section className="policy-section">
          <h2>3. Verilerin Kullanımı</h2>
          <p>Toplanan veriler yalnızca aşağıdaki amaçlarla kullanılır:</p>
          <ul className="policy-list">
            <li>Uygulamanın işlevselliğini geliştirmek</li>
            <li>Kullanıcı deneyimini iyileştirmek</li>
            <li>Reklam gösterimini optimize etmek</li>
            <li>Hata takibi ve analiz yapmak</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Verilerin Paylaşımı</h2>
          <p>Veriler, sadece aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:</p>
          <ul className="policy-list">
            <li><strong>Reklam Servisleri:</strong> Google AdMob ile, reklam gösterimi amacıyla anonim veriler paylaşılabilir.</li>
            <li><strong>Yasal Zorunluluklar:</strong> Yürürlükteki yasalar çerçevesinde, resmi makamlardan gelen geçerli talepler doğrultusunda paylaşım yapılabilir.</li>
          </ul>
          <p className="section-footer">🔗 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google AdMob Gizlilik Politikası</a></p>
        </section>

        <section className="policy-section">
          <h2>5. Verilerin Güvenliği</h2>
          <p>Veriler, cihazda saklanır ve kullanıcıdan izinsiz olarak dışa aktarılmaz. Uygulama, güvenlik açısından makul teknik önlemleri alır ancak internet üzerinden yapılan veri iletimlerinin %100 güvenli olduğunu garanti edemez.</p>
        </section>

        <section className="policy-section">
          <h2>6. Kullanıcı Hakları</h2>
          <p>Kullanıcılar, aşağıdaki haklara sahiptir:</p>
          <ul className="policy-list">
            <li>Kendi verilerine erişme</li>
            <li>Verilerinin silinmesini veya düzeltilmesini talep etme</li>
            <li>Verilerinin işlenmesine itiraz etme</li>
          </ul>
          <p>Bu hakların kullanımı için bizimle iletişime geçebilirsiniz:</p>
          <p className="contact-email">📧 <strong>E-posta:</strong> destekcikmis@gmail.com</p>
        </section>

        <section className="policy-section">
          <h2>7. Sorumluluk Reddi</h2>
          <ul className="policy-list">
            <li><strong>Üçüncü Taraf Servisler:</strong> Uygulamada gösterilen reklamlar ve AdMob hizmetleri kendi gizlilik politikalarına tabidir. Bu hizmetlerin veri toplamasından <strong>uygulama geliştiricisi sorumlu değildir.</strong></li>
            <li><strong>Veri Kaybı & Hatalar:</strong> Cihazda saklanan kullanıcı verilerinin kaybolması, yanlış işlenmesi veya güvenlik açıklarından doğabilecek zararlardan dolayı <strong>hiçbir şekilde sorumluluk kabul edilmez.</strong></li>
            <li><strong>Hukuki Sonuçlar:</strong> Uygulamanın kullanımı sonucu oluşabilecek doğrudan, dolaylı ya da dolaylı olmayan zararlardan dolayı geliştirici hukuki sorumluluk altında değildir.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Çocukların Gizliliği</h2>
          <p>Bu uygulama 13 yaş altı bireyleri hedeflemez. 13 yaşından küçük bireylerden bilerek herhangi bir bilgi toplanmaz. Tespit edilmesi durumunda veriler silinir.</p>
        </section>

        <section className="policy-section">
          <h2>9. Politika Güncellemeleri</h2>
          <p>Gizlilik politikası zaman zaman güncellenebilir. Güncellemeler bu sayfada yayımlanır. Kullanıcıların düzenli olarak kontrol etmesi önerilir.</p>
        </section>

        <section className="policy-section">
          <h2>10. Kabul</h2>
          <p><strong>Birikimly – Birikim Takip</strong> uygulamasını kullanarak bu Gizlilik Politikası'nı kabul etmiş sayılırsınız.</p>
        </section>

        <div className="policy-footer">
          💰 <strong>Birikimly uygulamasını kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. İyi birikimler dileriz!</strong> 📊
        </div>
      </div>
    </div>
  );
};

export default BirikimlyPrivacyPolicy;