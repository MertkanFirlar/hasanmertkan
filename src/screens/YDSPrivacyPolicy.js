import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const YDSPrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Link to="/yds-words" className="back-link">← Uygulama Sayfasına Dön</Link>
      
      <div className="privacy-policy-content">
        <h1>Çıkmış Kelimeler: YDS - Gizlilik Politikası</h1>
        <p className="last-updated">📅 Son Güncelleme: 21 Aralık 2024</p>

        <section className="policy-section">
          <h2>🔒 Genel Bakış</h2>
          <p>Bu Gizlilik Politikası, "Çıkmış Kelimeler: YDS" uygulamasının kullanıcılarından topladığı kişisel verilerin işlenmesiyle ilgili bilgi sağlamaktadır. Kullanıcıların, uygulama üzerinden sağladıkları kişisel bilgilerin nasıl toplandığı, kullanıldığı, saklandığı ve korunduğu ile ilgili detaylar burada belirtilmiştir. Gizliliğiniz bizim için önemlidir ve kişisel bilgilerinizi gizlilikle işlemeyi taahhüt ederiz.</p>
        </section>

        <section className="policy-section">
          <h2>📊 Hangi Veriler Toplanır</h2>
          <ul className="policy-list">
            <li><strong>Reklam Verileri:</strong> Uygulama içinde gösterilen reklamlardan dolayı, reklam verileri toplanmaktadır. Bu veriler yalnızca reklam amaçlı kullanılır ve üçüncü taraf reklam şirketleriyle paylaşılır.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>🔄 Veri Paylaşımı</h2>
          <p>Reklam verileri, yalnızca reklam gösterimi ve ölçümü için üçüncü taraflarla paylaşılır. Bu paylaşılan veriler, kullanıcının kimliğiyle ilişkilendirilemez. Reklam verileri yalnızca anonim hale getirilmiş olarak kullanılmakta ve bu veriler üzerinden kişisel takip yapılmaz.</p>
        </section>

        <section className="policy-section">
          <h2>📱 Verilerin Kullanımı</h2>
          <p>Toplanan veriler, yalnızca uygulamanın işlevselliğini sağlamak, kullanıcı deneyimini geliştirmek ve daha iyi hizmet sunmak amacıyla kullanılacaktır.</p>
        </section>

        <section className="policy-section">
          <h2>🛡️ Gizlilik ve Güvenlik</h2>
          <p>Toplanan verilerin güvenliği büyük bir titizlikle korunmaktadır. Ancak, internet üzerinden veri iletimi her zaman %100 güvenli olmayabilir ve bu nedenle, verilerinizi iletirken dikkatli olmanız önemlidir.</p>
        </section>

        <section className="policy-section">
          <h2>⚖️ Veri Koruma Haklarınız</h2>
          <p>Kişisel verilerinizle ilgili haklarınızı her zaman kullanabilirsiniz. Verilerinizi görmek, düzeltmek veya silmek için bizimle iletişime geçebilirsiniz.</p>
        </section>

        <section className="policy-section">
          <h2>🎯 Veri Toplama Amacı ve Kullanıcı Seçimi</h2>
          <p>Uygulama yalnızca belirli amaçlarla veri toplar. Kullanıcılar, uygulama içindeki belirli özellikleri kullanmaya başladıklarında, toplama işlemi başlamaktadır. Kullanıcılar, verilerinin toplanmasını engelleyebilir veya sınırlayabilir, ancak bu bazı özelliklerin çalışmamasına yol açabilir.</p>
        </section>

        <section className="policy-section">
          <h2>⚠️ Sorumluluk Kabul Edilmemektedir</h2>
          <p>Bu Gizlilik Politikası, yalnızca "Çıkmış Kelimeler: YDS" uygulaması için geçerlidir. Uygulama dışındaki herhangi bir üçüncü tarafın topladığı verilerden "Çıkmış Kelimeler: YDS" uygulaması sorumlu değildir. Ayrıca, uygulama üzerinden reklam gösterimi yapan üçüncü taraflar, kendi gizlilik politikalarına sahiptir ve bu politikalardan "Çıkmış Kelimeler: YDS" uygulaması sorumlu tutulamaz.</p>
        </section>

        <section className="policy-section">
          <h2>📬 İletişim</h2>
          <p>Bu Gizlilik Politikası hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle iletişime geçin:</p>
          <p className="contact-email"><strong>✉️ Destek:</strong> destekcikmis@gmail.com</p>
        </section>

        <div className="policy-footer">
          📚 <strong>Çıkmış Kelimeler: YDS uygulamasını kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Başarılı bir YDS hazırlığı dileriz!</strong> ✨
        </div>
      </div>
    </div>
  );
};

export default YDSPrivacyPolicy;