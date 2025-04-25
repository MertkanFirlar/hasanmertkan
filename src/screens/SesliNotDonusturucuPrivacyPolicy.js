import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const SesliNotDonusturucuPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/sesli-not-donusturucu" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>VoiceNote – Sesli Notlar Uygulaması: Gizlilik Politikası</h1>
        <p className="last-updated">📅 Son Güncelleme: 24 Nisan 2025</p>
        <p><strong>İletişim:</strong> destekcikmis@gmail.com</p>

        <section className="policy-section">
          <h2>1. Genel Bilgilendirme</h2>
          <p>VoiceNote, kullanıcılarının sesli notlarını hızlı, güvenli ve kolayca oluşturmasını sağlamak amacıyla geliştirilmiş bir mobil uygulamadır. Gizliliğiniz bizim için önemlidir. Bu politika, uygulamayı kullanırken hangi verilerin toplandığını, nasıl korunduğunu ve ne şekilde kullanıldığını açıklar.</p>
        </section>

        <section className="policy-section">
          <h2>2. Toplanan Veriler</h2>
          <p>Uygulama, aşağıdaki türde verileri cihaz üzerinde işleyebilir:</p>
          <ul className="policy-list">
            <li><strong>Ses Verisi:</strong> Uygulama mikrofon izni ile kullanıcıdan ses alır ve cihaza kaydeder. Ses verileri yalnızca kullanıcı cihazında saklanır.</li>
            <li><strong>Tanınan Metin:</strong> Ses tanıma özelliği ile yazıya dönüştürülen metin, kullanıcı notları olarak saklanır.</li>
            <li><strong>Başlık ve Not İçeriği:</strong> Kullanıcının manuel olarak girdiği bilgiler yerel depolamada tutulur.</li>
          </ul>
          <p className="section-footer">📌 <strong>Toplanan hiçbir veri sunucularımıza gönderilmez veya üçüncü taraflarla paylaşılmaz.</strong></p>
        </section>

        <section className="policy-section">
          <h2>3. İzinler</h2>
          <p>Uygulama şu izinleri talep eder:</p>
          <ul className="policy-list">
            <li><strong>Mikrofon Erişimi:</strong> Sesli kayıt almak ve konuşmaları metne dönüştürmek için.</li>
            <li><strong>Yerel Depolama Erişimi:</strong> Notların cihazda saklanması amacıyla.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Verilerin Kullanımı</h2>
          <p>Toplanan veriler aşağıdaki amaçlarla kullanılır:</p>
          <ul className="policy-list">
            <li>Kullanıcının not oluşturmasını sağlamak</li>
            <li>Notlara başlık ve tarih eklemek</li>
            <li>Sesli komutlarla not alma deneyimini kolaylaştırmak</li>
          </ul>
          <p>Uygulama, bu verileri analiz etmez, paylaşmaz ve dış kaynaklara aktarmaz.</p>
        </section>

        <section className="policy-section">
          <h2>5. Verilerin Paylaşımı</h2>
          <p>VoiceNote, hiçbir kullanıcı verisini üçüncü taraflarla <strong>paylaşmaz</strong>.</p>
          <p>Reklam veya analiz hizmeti <strong>kullanılmamaktadır.</strong></p>
        </section>

        <section className="policy-section">
          <h2>6. Verilerin Güvenliği</h2>
          <p>Uygulama içi veriler sadece cihazınızda saklanır.</p>
          <p>Herhangi bir çevrimdışı/çevrimiçi sunucuya aktarım yapılmaz.</p>
          <p>Ancak kullanıcı cihazının güvenliğinden doğan açıklar, geliştiricinin sorumluluğunda değildir.</p>
        </section>

        <section className="policy-section">
          <h2>7. Kullanıcı Hakları</h2>
          <p>Kullanıcılar aşağıdaki haklara sahiptir:</p>
          <ul className="policy-list">
            <li>Verilerine erişme, silme ve düzenleme</li>
            <li>Uygulamanın cihazdan tamamen silinmesi ile tüm verilerin kaldırılması</li>
            <li>Gizlilik politikası hakkında bilgi isteme</li>
          </ul>
          <p>Bu haklar için iletişim adresimiz: <strong>destekcikmis@gmail.com</strong></p>
        </section>

        <section className="policy-section">
          <h2>8. Sorumluluk Reddi</h2>
          <ul className="policy-list">
            <li>Uygulama yalnızca kişisel kullanım amaçlıdır.</li>
            <li>Kaydedilen notların içeriği, doğruluğu veya paylaşımı tamamen kullanıcı sorumluluğundadır.</li>
            <li>Uygulama geliştiricisi, <strong>hiçbir veri kaybı, güvenlik açığı, hatalı kullanım ya da dolaylı zarardan sorumlu değildir.</strong></li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Çocukların Gizliliği</h2>
          <p>VoiceNote, 13 yaş altı bireyleri hedeflemez.</p>
          <p>Eğer yanlışlıkla bir çocuğa ait veri kaydı tespit edilirse, kullanıcı talebiyle silinir.</p>
        </section>

        <section className="policy-section">
          <h2>10. Politika Güncellemeleri</h2>
          <p>Bu politika, ihtiyaçlara göre güncellenebilir.</p>
          <p>Güncellemeler bu sayfada yayımlanır.</p>
          <p>Kullanıcıların düzenli kontrol etmesi tavsiye edilir.</p>
        </section>

        <div className="policy-footer">
          <p><strong>VoiceNote'u kullanarak bu Gizlilik Politikası'nı kabul etmiş sayılırsınız.</strong></p>
          <p>Her türlü soru, öneri ve destek talebiniz için:</p>
          <p>📧 <strong>destekcikmis@gmail.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default SesliNotDonusturucuPrivacyPolicy;