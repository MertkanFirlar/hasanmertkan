import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const VitalTrackerPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/vital-tracker" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>Su ve Kilo Takip - VitalTracker: Gizlilik Politikası</h1>
        <p className="last-updated">📅 Son Güncelleme: 4 Mart 2025</p>

        <section className="policy-section">
          <h2>1. Genel Bakış</h2>
          <p>Bu Gizlilik Politikası, Su ve Kilo Takip - VitalTracker uygulamasını kullanan kullanıcıların gizliliğini koruma taahhüdümüzü açıklar. Uygulamamızın kullanımı sırasında hangi verilerin toplandığı, bu verilerin nasıl kullanıldığı ve korunduğu hakkında bilgi verir. Kullanıcı gizliliği bizim için önceliklidir ve tüm yasal gerekliliklere uymayı taahhüt ediyoruz.</p>
        </section>

        <section className="policy-section">
          <h2>2. Toplanan Veriler</h2>
          <p>Uygulamamız, kullanıcı deneyimini geliştirmek amacıyla aşağıdaki verileri toplayabilir:</p>
          <ul className="policy-list">
            <li><strong>Reklam Verileri:</strong> Uygulama içerisinde gösterilen reklamlar için anonim reklam kimlikleri ve cihaz bilgileri gibi veriler toplanabilir.</li>
            <li><strong>Kullanım Verileri:</strong> Uygulamanın hangi özelliklerinin ne sıklıkta kullanıldığına dair genel istatistikler toplanır.</li>
            <li><strong>Sağlık ve Aktivite Verileri:</strong> Uygulama, su tüketimi ve kilo değişimlerini takip etmenize yardımcı olacak şekilde bazı verileri lokal olarak saklayabilir.</li>
          </ul>
          <p className="section-footer">Bu veriler, kullanıcıları doğrudan tanımlamak için kullanılmaz ve hiçbir kişisel bilgi (isim, e-posta, adres vb.) talep edilmez.</p>
        </section>

        <section className="policy-section">
          <h2>3. Verilerin Kullanımı</h2>
          <p>Toplanan veriler şu amaçlarla kullanılmaktadır:</p>
          <ul className="policy-list">
            <li>Reklam gösterimi ve performans ölçümü için</li>
            <li>Uygulamanın işlevselliğini geliştirmek ve kullanıcı deneyimini iyileştirmek için</li>
            <li>Hataları gidermek ve performans analizi yapmak için</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Verilerin Paylaşımı</h2>
          <p>Uygulama tarafından toplanan veriler yalnızca aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:</p>
          <ul className="policy-list">
            <li><strong>Reklam Sağlayıcıları:</strong> Google AdMob ve benzeri reklam ağları ile. Paylaşılan veriler anonim hale getirilmiştir.</li>
            <li><strong>Yasal Gereklilikler:</strong> Kanunen gerekli durumlarda yetkili makamlarla paylaşılabilir.</li>
          </ul>
          <p className="section-footer">Uygulamanız, üçüncü taraf hizmet sağlayıcılarının kendi gizlilik politikalarına tabidir. Google AdMob'un gizlilik politikasına <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">buradan</a> ulaşabilirsiniz.</p>
        </section>

        <section className="policy-section">
          <h2>5. Verilerin Güvenliği</h2>
          <p>Kullanıcı verilerini korumak için uygun teknik ve idari önlemler uygulanmaktadır. Ancak, internet üzerinden yapılan veri iletiminin tamamen güvenli olduğunu garanti edemeyiz.</p>
        </section>

        <section className="policy-section">
          <h2>6. Kullanıcı Hakları</h2>
          <p>Kullanıcılar aşağıdaki haklara sahiptir:</p>
          <ul className="policy-list">
            <li>Kendi verilerine erişim talep etme</li>
            <li>Verilerinin düzeltilmesini veya silinmesini talep etme</li>
            <li>Verilerin işlenmesine itiraz etme</li>
          </ul>
          <p>Bu haklardan herhangi birini kullanmak için bizimle iletişime geçebilirsiniz.</p>
        </section>

        <section className="policy-section">
          <h2>7. Sağlık Uyarısı ve Yasal Sorumluluk</h2>
          <p>Su ve Kilo Takip - VitalTracker uygulaması, yalnızca bilgilendirme ve takip amaçlıdır. Tıbbi veya profesyonel sağlık hizmetlerinin yerine geçmez. Uygulamada sunulan değerler yalnızca referans niteliğindedir. Herhangi bir sağlık durumu hakkında karar vermeden önce mutlaka doktorunuza veya uzmanınıza danışınız.</p>
          <p>Uygulamanın sağladığı bilgiler doğrultusunda alınan herhangi bir karar veya uygulanan herhangi bir yöntemden kaynaklanan sonuçlardan kullanıcı sorumludur.</p>
        </section>

        <section className="policy-section">
          <h2>8. Çocukların Gizliliği</h2>
          <p>Su ve Kilo Takip - VitalTracker uygulaması, 13 yaş altındaki çocuklar için tasarlanmamıştır. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Eğer böyle bir veri toplandığını fark edersek, bu veriler derhal silinir.</p>
        </section>

        <section className="policy-section">
          <h2>9. Sorumluluk Reddi</h2>
          <ul className="policy-list">
            <li><strong>Üçüncü Taraf Hizmetler:</strong> Uygulamada gösterilen reklamlar ve üçüncü taraf hizmetleri (örneğin, Google AdMob) kendi gizlilik politikalarına tabidir ve bu hizmetlerin topladığı verilerden uygulama sorumlu değildir.</li>
            <li><strong>Veri Kaybı veya Hatalar:</strong> Kullanıcıların verilerinin kaybolması, yanlış işlenmesi veya güvenlik ihlallerinden kaynaklanan sorunlardan dolayı hiçbir sorumluluk kabul edilmez.</li>
            <li><strong>Hukuki Yükümlülükler:</strong> Uygulamanın kullanımı sırasında ortaya çıkabilecek herhangi bir doğrudan, dolaylı, tesadüfi veya özel zarar için sorumluluk kabul edilmez.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. İletişim Bilgileri</h2>
          <p>Bu Gizlilik Politikası hakkında sorularınız varsa, aşağıdaki e-posta adresinden bizimle iletişime geçebilirsiniz:</p>
          <p className="contact-email">📧 <strong>E-posta:</strong> destekcikmis@gmail.com</p>
        </section>

        <section className="policy-section">
          <h2>11. Değişiklikler</h2>
          <p>Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır. Kullanıcılar, politikayı düzenli olarak gözden geçirmelidir.</p>
        </section>

        <div className="policy-footer">
          💧 <strong>Su ve Kilo Takip - VitalTracker uygulamasını kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Sağlıklı günler dileriz!</strong> ⚖️
        </div>
      </div>
    </div>
  );
};

export default VitalTrackerPrivacyPolicy;