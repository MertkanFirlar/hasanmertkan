import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Logo görsellerini import ediyoruz
import numbersequenceLogo from '../assets/numbersequence.png';
import birikimlyLogo from '../assets/birikimly.png';
import iftrackerLogo from '../assets/iftracker.png';
import suvekiLoLogo from '../assets/suvekilo.png';
import ydsLogo from '../assets/yds.png';
import yokdilLogo from '../assets/yokdil.png';
import colorTrickLogo from '../assets/colortrick.png';
import tropicFlipLogo from '../assets/tropicflip.png';
import tarotRehberiLogo from '../assets/tarotrehberi.png';
import sesliNotDonusturucuLogo from '../assets/seslinotdonusturucu.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const apps = [
    {
      id: 'numbers-sequence',
      name: 'NumbersSequence - Zihin Oyunu',
      logo: numbersequenceLogo, 
      status: 'iOS 1.2 In Review',
      path: '/numbers-sequence',
      screenshot: numbersequenceLogo,
      color: '#39424E'
    },
    {
      id: 'birikimly',
      name: 'Birikimly- Birikim Takip',
      logo: birikimlyLogo,
      status: 'iOS 1.0 In Review',
      path: '/birikimly',
      screenshot: birikimlyLogo,
      color: '#2C4668'
    },
    {
      id: 'if-tracker',
      name: 'IF Tracker - Aralıklı Oruç',
      logo: iftrackerLogo,
      status: 'iOS 1.0 Ready for Distribution',
      path: '/if-tracker',
      screenshot: iftrackerLogo,
      color: '#313E4F'
    },
    {
      id: 'vital-tracker',
      name: 'Su ve Kilo Takip -VitalTracker',
      logo: suvekiLoLogo,
      status: 'iOS 1.3 Ready for Distribution',
      path: '/vital-tracker',
      screenshot: suvekiLoLogo,
      color: '#2C5A64'
    },
    {
      id: 'yds-words',
      name: 'Çıkmış Kelimeler: YDS',
      logo: ydsLogo,
      status: 'iOS 1.2 Ready for Distribution',
      path: '/yds-words',
      screenshot: ydsLogo,
      color: '#637CAF'
    },
    {
      id: 'yokdil-words',
      name: 'Çıkmış Kelimeler: YÖKDİL',
      logo: yokdilLogo,
      status: 'iOS 1.6 Ready for Distribution',
      path: '/yokdil-words',
      screenshot: yokdilLogo,
      color: '#94C47D'
    },
    {
      id: 'color-trick',
      name: 'ColorTrick - Renk Paleti',
      logo: colorTrickLogo,
      status: 'iOS 1.0 In Development',
      path: '/color-trick',
      screenshot: colorTrickLogo,
      color: '#5E35B1'
    },
    {
      id: 'tropic-flip',
      name: 'Tropic Flip: Mind Game',
      logo: tropicFlipLogo,
      status: 'iOS 1.0 In Development',
      path: '/tropic-flip',
      screenshot: tropicFlipLogo,
      color: '#FF8A3D'
    },
    {
      id: 'tarot-rehberi',
      name: 'Günlük Tarot Rehberi',
      logo: tarotRehberiLogo,
      status: 'iOS 1.0 In Development',
      path: '/tarot-rehberi',
      screenshot: tarotRehberiLogo,
      color: '#8E44AD'
    },
    {
      id: 'sesli-not-donusturucu',
      name: 'VoiceNote - Sesli Not',
      logo: sesliNotDonusturucuLogo,
      status: 'iOS 1.0 In Development',
      path: '/sesli-not-donusturucu',
      screenshot: sesliNotDonusturucuLogo,
      color: '#FF5722'
    }
  ];

  // Karüsel için ref
  const carouselRef = useRef(null);
  const isTransitioning = useRef(false);

  // useEffect ile ekran boyutuna göre düzenlemeler
  useEffect(() => {
    const handleResize = () => {
      const phoneItems = document.querySelectorAll('.phone-item');
      const phonesContainer = document.querySelector('.phones-container');
      
      if (window.innerWidth <= 900) {
        // Mobil görünüm
        phonesContainer.classList.add('mobile-view');
        phoneItems.forEach((item, index) => {
          if (index === 1) {
            item.style.display = 'block';
            // Orta telefonun içeriğini güncelle
            const screenshot = item.querySelector('.phone-screenshot');
            const screen = item.querySelector('.phone-screen');
            screenshot.src = apps[currentSlide].screenshot;
            screen.style.backgroundColor = apps[currentSlide].color;
          } else {
            item.style.display = 'none';
          }
        });
      } else {
        // Masaüstü görünüm
        phonesContainer.classList.remove('mobile-view');
        phoneItems.forEach((item) => {
          item.style.display = 'block';
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide, apps.length]);

  const handlePrevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    
    setCurrentSlide(prev => (prev === 0 ? apps.length - 1 : prev - 1));
    
    // Geçiş bittikten sonra geçiş durumunu sıfırla
    setTimeout(() => {
      isTransitioning.current = false;
    }, 300);
  };

  const handleNextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    
    setCurrentSlide(prev => (prev === apps.length - 1 ? 0 : prev + 1));
    
    // Geçiş bittikten sonra geçiş durumunu sıfırla
    setTimeout(() => {
      isTransitioning.current = false;
    }, 300);
  };

  // Gösterilecek uygulamaları belirleme - ortadaki uygulama her zaman aktif olandır
  const visibleApps = [];
  const totalApps = apps.length;
  
  // Önceki, mevcut ve sonraki uygulamaları alıyoruz
  const prevIndex = (currentSlide - 1 + totalApps) % totalApps;
  const nextIndex = (currentSlide + 1) % totalApps;
  
  visibleApps.push(apps[prevIndex]);  // Sol telefon
  visibleApps.push(apps[currentSlide]); // Orta telefon (vurgulanmış)
  visibleApps.push(apps[nextIndex]);  // Sağ telefon

  return (
    <div className="home-container">
      <header className="header">
        <div className="select-app-instruction">Lütfen incelemek istediğiniz uygulamayı seçin</div>
      </header>

      <div className="phones-showcase" ref={carouselRef}>
        <div className="phones-container">
          {visibleApps.map((app, index) => (
            <Link 
              key={app.id} 
              to={app.path} 
              className="phone-item"
              draggable="false"
              data-app-id={app.id}
            >
              <div className="phone-frame">
               
                <div className="phone-screen" style={{ backgroundColor: app.color }}>
                  <img 
                    src={app.screenshot} 
                    alt={app.name} 
                    className="phone-screenshot"
                    draggable="false"
                  />
                </div>
                <div className="phone-home-indicator"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow prev" onClick={handlePrevSlide}>&lt;</button>
          <div className="carousel-indicators">
            {apps.map((app, index) => (
              <div 
                key={index} 
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
          <button className="carousel-arrow next" onClick={handleNextSlide}>&gt;</button>
        </div>
      </div>

      <div className="app-list-section">
        <h2>Tüm Uygulamalar</h2>
        <div className="app-cards">
          {apps.map(app => (
            <Link 
              to={app.path} 
              key={app.id} 
              className={`app-card ${app.id === apps[currentSlide].id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(apps.findIndex(a => a.id === app.id));
              }}
            >
              <div className="app-card-logo">
                <img src={app.logo} alt={app.name} />
              </div>
              <div className="app-card-details">
                <h3>{app.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;