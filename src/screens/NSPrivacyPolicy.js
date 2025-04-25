import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const NSPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/numbers-sequence" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>NumbersSequence - Gizlilik Politikası</h1>
        <p className="last-updated">Son Güncelleme: 6 Mart 2025</p>

        <section className="policy-section">
          <h2>1. Genel Bakış</h2>
          <p><strong>NumbersSequence</strong> oyununu kullanan kullanıcıların gizliliğini koruma taahhüdümüzü açıklar. Hangi verilerin toplandığı, nasıl kullanıldığı ve nasıl korunduğu hakkında bilgi sağlar. <strong>Kullanıcı gizliliği önceliğimizdir</strong> ve tüm yasal gerekliliklere uymayı taahhüt ediyoruz.</p>
        </section>

        <section className="policy-section">
          <h2>2. Toplanan Veriler</h2>
          <p>Oyunumuz, kullanıcı deneyimini geliştirmek için aşağıdaki verileri toplayabilir:</p>
          <ul className="policy-list">
            <li><strong>Reklam Verileri:</strong> Uygulama içi reklam amaçları için anonim reklam tanımlayıcıları ve cihaz bilgileri toplanabilir.</li>
            <li><strong>Kullanım Verileri:</strong> Oyunun ne sıklıkla oynandığı ve hangi özelliklerin kullanıldığına dair genel istatistikler.</li>
            <li><strong>Oyun Verileri:</strong> Oyun, oyuncu ilerlemesi, puanları ve başarıları ile ilgili yerel verileri saklayabilir.</li>
          </ul>
          <p className="section-footer">🚀 <strong>Kişisel olarak tanımlanabilir bilgiler (isim, e-posta veya adres gibi) gerekli değildir ve toplanmaz.</strong></p>
        </section>

        <section className="policy-section">
          <h2>3. Verilerin Kullanımı</h2>
          <p>Toplanan veriler aşağıdaki amaçlar için kullanılır:</p>
          <ul className="policy-list">
            <li>Reklamları görüntülemek ve reklam performansını ölçmek</li>
            <li>Oyun işlevselliğini ve kullanıcı deneyimini geliştirmek</li>
            <li>Hataları düzeltmek ve performans analizi yapmak</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Veri Paylaşımı</h2>
          <p>Toplanan verileri yalnızca aşağıdaki durumlarda paylaşıyoruz:</p>
          <ul className="policy-list">
            <li><strong>Reklam Ağları:</strong> Veriler, reklam gösterimi amaçları için <strong>Google AdMob</strong> gibi üçüncü taraf reklam sağlayıcılarıyla paylaşılabilir. Paylaşılan tüm veriler anonimleştirilir.</li>
            <li><strong>Yasal Gereklilikler:</strong> Yasa veya düzenleyici otoriteler tarafından gerekli görülürse veriler açıklanabilir.</li>
          </ul>
          <p className="section-footer">Daha fazla ayrıntı için <strong>Google AdMob'un Gizlilik Politikasını</strong> inceleyebilirsiniz: https://policies.google.com/privacy</p>
        </section>

        <section className="policy-section">
          <h2>5. Veri Güvenliği</h2>
          <p>Kullanıcı verilerini korumak için uygun teknik ve idari önlemler uygulanmaktadır. Ancak, internet üzerinden veri iletimi için tam güvenlik garanti edemeyiz.</p>
        </section>

        <section className="policy-section">
          <h2>6. Kullanıcı Hakları</h2>
          <p>Kullanıcılar şu haklara sahiptir:</p>
          <ul className="policy-list">
            <li>Verilerine erişim talep etme</li>
            <li>Verilerinin düzeltilmesini veya silinmesini talep etme</li>
            <li>Veri işlemeye itiraz etme</li>
          </ul>
          <p className="section-footer">Bu haklardan herhangi birini kullanmak için lütfen e-posta yoluyla bizimle iletişime geçin.</p>
        </section>

        <section className="policy-section">
          <h2>7. Oyun Feragatnamesi</h2>
          <p><strong>NumbersSequence</strong> oyunu yalnızca eğlence ve bilişsel eğitim amaçlı tasarlanmıştır. Profesyonel akıl sağlığı veya tıbbi tavsiye sağlamaz.</p>
          <p><strong>Oyuncular kendi oyun sonuçları ve deneyimlerinden sorumludur.</strong></p>
        </section>

        <section className="policy-section">
          <h2>8. Çocukların Gizliliği</h2>
          <p><strong>NumbersSequence</strong> oyunu <strong>13 yaşın altındaki çocuklar için tasarlanmamıştır</strong>. 13 yaşın altındaki çocuklardan bilinçli olarak kişisel veri toplamıyoruz. Bu tür verilerin toplandığı fark edilirse, derhal silinecektir.</p>
        </section>

        <section className="policy-section">
          <h2>9. Sorumluluk Reddi</h2>
          <ul className="policy-list">
            <li><strong>Üçüncü Taraf Hizmetleri:</strong> Reklamlar ve üçüncü taraf hizmetleri (örn. Google AdMob) kendi gizlilik politikalarına tabidir ve veri toplama uygulamalarından sorumlu değiliz.</li>
            <li><strong>Veri Kaybı ve Hatalar:</strong> Veri kaybı, yanlış veri işleme veya güvenlik ihlalleri için sorumluluk kabul etmiyoruz.</li>
            <li><strong>Yasal Sorumluluklar:</strong> Oyunun kullanılmasından kaynaklanan doğrudan, dolaylı, tesadüfi veya özel zararlardan sorumlu değiliz.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. İletişim Bilgileri</h2>
          <p>Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, bizimle şu adresten iletişime geçebilirsiniz:</p>
          <p>📧 <strong>E-posta:</strong> <strong>destekcikmis@gmail.com</strong></p>
        </section>

        <section className="policy-section">
          <h2>11. Politika Değişiklikleri</h2>
          <p>Bu Gizlilik Politikası periyodik olarak güncellenebilir. Herhangi bir değişiklik bu sayfada yayınlanacak ve kullanıcıların politikayı düzenli olarak gözden geçirmeleri teşvik edilir.</p>
        </section>

        <div className="policy-footer">
          🚀 <strong>NumbersSequence oyununu oynayarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Oyunun keyfini çıkarın ve hafızanıza meydan okuyun!</strong> 🎮
        </div>
      </div>
    </div>
  );
};

export default NSPrivacyPolicy;