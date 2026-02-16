"use client";

import { useEffect } from "react";
import SocialSlider from '@/components/SocialSlider';

export default function Home() {

  // Initialize WOW.js and other scripts manually if needed after hydration
  useEffect(() => {
    // Most scripts are handled by function.js on 'load', but for client-side nav we might need this.
    // However, since we're using standard <a> tags with hrefs (not Link component), 
    // it will likely cause a full reload which is actually BETTER for these jQuery templates.
    // I will use standard <a> tags for navigation to ensure JS re-initializes correctly.
  }, []);

  return (
    <>
      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky bg-section">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <a className="navbar-brand" href="/">
                <img src="/esapp_logo.png" alt="ESAPP Logo" style={{ maxHeight: '50px', width: 'auto' }} />
              </a>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item"><a className="nav-link" href="/">Ana Sayfa</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">Hakkımızda</a></li>
                    <li className="nav-item"><a className="nav-link" href="#features">Özellikler</a></li>
                    <li className="nav-item"><a className="nav-link" href="#pricing">Fiyatlar</a></li>
                    <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">İletişim</a></li>
                  </ul>
                </div>

                {/* Header Btn Start */}
                <div className="header-btn">
                  <a href="#download" className="btn-default btn-highlighted">Uygulamayı İndir</a>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <div className="hero bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp text-white">ESAPP</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Elektronikspor Süper Uygulaması</h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">E-spor ekosistemini tek bir erişilebilir süper uygulamada birleştiriyoruz.</p>
                </div>
                {/* Section Title End */}

                {/* App Download Buttons Start */}
                <div className="app-download-buttons wow fadeInUp" data-wow-delay="0.4s" id="download">
                  <div className="app-download-btn">
                    <a href="#"><img src="images/icon-app-store.svg" alt="" /></a>
                  </div>
                  <div className="app-download-btn">
                    <a href="#"><img src="images/icon-play-store.svg" alt="" /></a>
                  </div>
                </div>
                {/* App Download Buttons End */}

                {/* Hero Icon Boxes Start */}
                <div className="hero-icon-boxes">
                  <div className="hero-icon-box-1">
                    <div className="hero-icon hero-icon-1">
                      <img src="images/icon-hero-1.svg" alt="" />
                    </div>
                    <div className="hero-icon hero-icon-2">
                      <img src="images/icon-hero-2.svg" alt="" />
                    </div>
                  </div>

                  <div className="hero-icon-box-2">
                    <div className="hero-icon hero-icon-3">
                      <img src="images/icon-hero-3.svg" alt="" />
                    </div>
                    <div className="hero-icon hero-icon-4">
                      <img src="images/icon-hero-4.svg" alt="" />
                    </div>
                  </div>
                </div>
                {/* Hero Icon Boxes End */}

                {/* Hero Image Box Start */}
                <div className="hero-image-box">
                  <div className="hero-rating-box">
                    <div className="hero-rating-star">
                      <i className="fa fa-solid fa-star"></i>
                      <i className="fa fa-solid fa-star"></i>
                      <i className="fa fa-solid fa-star"></i>
                      <i className="fa fa-solid fa-star"></i>
                      <i className="fa fa-solid fa-star"></i>
                    </div>
                    <div className="hero-rating-counter">
                      <h2><span className="counter">4.8</span> <sub>Uygulama Puanı</sub></h2>
                    </div>
                  </div>

                  <div className="satisfied-client-box">
                    <div className="satisfied-client-header">
                      <p>Toplam İndirme</p>
                      <h2><span className="counter">1.5</span>m+</h2>
                    </div>
                    <div className="satisfied-client-body">
                      <div className="satisfy-client-images">
                        {[1, 2, 3, 4].map(i => (
                          <div className="satisfy-client-image" key={i}>
                            <figure className="image-anime">
                              <img src={`images/author-${i}.jpg`} alt="" />
                            </figure>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hero-img">
                    <figure>
                      <img src="images/hero-image.png" alt="" />
                    </figure>
                  </div>
                </div>
                {/* Hero Image Box End */}
              </div>
              {/* Hero Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* About Us Section Start */}
      <div className="about-us" id="about">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-image-box">
                <div className="about-us-image">
                  <figure>
                    <img src="images/about-us-image.jpg" alt="" />
                  </figure>
                </div>

                <div className="customer-support-box wow fadeInUp">
                  <div className="customer-support-content">
                    <div className="icon-box">
                      <img src="images/icon-headset.svg" alt="" />
                    </div>
                    <div className="customer-support-title">
                      <h3 className="text-white" style={{ color: '#fff' }}>ESAPP<br />Topluluk Odaklı</h3>
                    </div>
                  </div>
                </div>

                <div className="app-download-circle-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="app-download-circle">
                    <a href="#">
                      <img src="images/app-download-circle.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Marka Temeli</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Vizyon & Misyon</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    <strong>Vizyon:</strong> Bölgedeki e-spor toplulukları için önde gelen dijital merkez haline gelmek.<br /><br />
                    <strong>Misyon:</strong> Oyuncuları, hayranları, organizatörleri ve markaları tek bir platformda bir araya getirmek.
                  </p>
                </div>

                <div className="about-us-body">
                  <div className="about-us-body-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="images/icon-about-body-item-1.svg" alt="" />
                    </div>
                    <div className="about-us-body-item-content">
                      <h3>Temel Değerler</h3>
                      <p>Topluluk Odaklılık, Şeffaflık, Rekabetçi Ruh, İnovasyon</p>
                    </div>
                  </div>

                  <div className="about-us-body-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="images/icon-about-body-item-2.svg" alt="" />
                    </div>
                    <div className="about-us-body-item-content">
                      <h3>Platform Desteği</h3>
                      <p>Mobil (iOS & Android) platformlarında karanlık ve aydınlık tema desteği.</p>
                    </div>
                  </div>
                </div>

                <div className="about-us-footer wow fadeInUp" data-wow-delay="0.8s">
                  <div className="app-download-btn">
                    <a href="#"><img src="images/icon-play-store.svg" alt="" /></a>
                  </div>
                  <div className="about-btn">
                    <a href="#" className="btn-default">Daha Fazla Bilgi</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Key Features Section Start */}
      <div className="key-features bg-section" id="features">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">Temel Özellikler</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Vizyonunuza göre özelleştirilmiş kapsamlı uygulama özellikleri</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Benzersiz hedeflerinize ve fikirlerinize uygun uçtan uca uygulama geliştirme hizmetleri sunuyoruz.</p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { icon: 1, title: 'ESAPP Mağaza', desc: 'Resmi ürünler, takım ürünleri ve ortak ürünler için özel ticaret ortamı.' },
              { icon: 2, title: 'Reels Akışı', desc: 'Dinamik etkileşim için kısa biçimli dikey video içerikleri (9:16).' },
              { icon: 3, title: 'Banner Sistemi', desc: 'Ana sayfa ve mağaza ekranlarında stratejik tanıtım alanları (16:9).' },
              { icon: 4, title: 'Reklam Çözümleri', desc: 'Markalar için yaratıcı ve esnek reklam banner formatları (1:1, 16:5).' },
              { icon: 5, title: 'Medya Standartları', desc: 'Tutarlı deneyim için 16:9, 4:3 ve 1:1 gibi optimize edilmiş görsel oranları.' },
              { icon: 6, title: 'Espor Merkezi', desc: 'Turnuvalar, takımlar ve oyuncular için kapsamlı ekosistem.' },
              { icon: 7, title: 'Topluluk & Sosyal', desc: 'Oyuncular ve hayranlar için etkileşimli sosyal özellikler.' },
              { icon: 8, title: 'Premium Üyelik', desc: 'Silver ve Platinum üyelik seçenekleriyle ayrıcalıklı deneyim.' },
            ].map((feature, i) => (
              <div className="col-xl-3 col-md-6" key={i}>
                <div className="key-features-item wow fadeInUp" data-wow-delay={`${0.2 + (i * 0.1)}s`}>
                  <div className="icon-box">
                    <img src={`images/icon-features-${(i % 4) + 1}.svg`} alt="" />
                  </div>
                  <div className="key-features-item-content">
                    <div className="key-features-item-title">
                      <h3>{feature.title}</h3>
                      <p style={{ marginTop: '10px' }}>{feature.desc}</p>
                    </div>
                    <div className="key-features-item-btn">
                      <a href="#" className="readmore-btn">İncele</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
            <p><span>Ücretsiz</span> Birlikte harika işler yapalım. <a href="#">Ücretsiz Teklif Al</a> </p>
          </div>
        </div>
      </div>
      {/* Key Features Section End */}

      {/* Platform Features Section Start */}
      <div className="our-benefits bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp text-white">ESAPP Ekosistemi</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Kapsamlı ve entegre dijital çözümler</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="benefits-item-list">
                {[
                  { title: 'Akıllı Banner Sistemi', desc: 'Ana sayfa ve mağaza için %70 güvenli alan kuralıyla tasarlanmış, 16:9 formatında stratejik tanıtım alanları.' },
                  { title: 'Gelişmiş Mağaza Altyapısı', desc: '4:3 listeleme ve 1:1 detay görselleriyle optimize edilmiş, resmi ve ortak ürünler için özel ticaret ortamı.' },
                  { title: 'Profesyonel İçerik Akışı', desc: 'Kurumsal dil ve 16:9 görsel standartlarıyla sunulan resmi haberler, duyurular ve güncellemeler.' }
                ].map((feature, i) => (
                  <div className="benefits-item wow fadeInUp" data-wow-delay={`${0.2 * (i + 1)}s`} key={i}>
                    <div className="benefits-item-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                    <div className="benefits-item-image">
                      <figure>
                        <img src={`images/benefits-item-image-${(i % 3) + 1}.png`} alt="" />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
            <p>ESAPP, e-spor dünyasının tüm ihtiyaçlarını tek bir süper uygulamada birleştirir.</p>
          </div>
        </div>
      </div>
      {/* Platform Features Section End */}

      {/* Why Choose Us Section Start */}
      <div className="why-choose-us bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Neden Biz?</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Sorunsuz uygulama deneyimleri için güvenilir ortağınız</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-us-content wow fadeInUp" data-wow-delay="0.2s">
                <div className="why-choose-us-btn">
                  <a href="#" className="btn-default btn-highlighted">Yolculuğa Başla</a>
                </div>
                <div className="why-choose-us-image">
                  <img src="images/why-choose-us-image.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* How It Work Section Start */}
      <div className="how-it-work">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="how-it-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Nasıl Çalışır</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Üç kolay adımda yeniliği deneyimleyin</h2>
                </div>

                <div className="how-it-work-body">
                  {[
                    { num: '01', title: 'Uygulamayı İndir', desc: 'App Store veya Google Play\'den indirin - kurulum sadece birkaç saniye sürer.' },
                    { num: '02', title: 'Hesabınızı Oluşturun', desc: 'Hızlıca kaydolun ve profilinizi oluşturun - sadece birkaç adımda hazırsınız.' },
                    { num: '03', title: 'Keşfet ve Keyfini Çıkar', desc: 'Uygulamanın sunduğu tüm özellikleri keşfetmeye ve deneyimlemeye başlayın.' },
                    { num: '04', title: 'Daha Akıllıca Çalış', desc: 'Akıllı özelliklerle verimliliğinizi artırın ve iş akışınızı optimize edin.' }
                  ].map((step, i) => (
                    <div className="how-work-item wow fadeInUp" data-wow-delay={`${0.2 * (i + 1)}s`} key={i}>
                      <div className="how-it-work-number">
                        <h3>{step.num}</h3>
                      </div>
                      <div className="how-work-item-content">
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="how-it-work-image-box">
                <div className="how-it-work-image box-1">
                  <figure className="image-anime">
                    <img src="images/how-it-work-image-1.png" alt="" />
                  </figure>
                </div>
                <div className="how-it-work-image box-2">
                  <figure className="image-anime">
                    <img src="images/how-it-work-image-2.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Work Section End */}

      {/* Our Key Fact Section Start */}
      <div className="our-key-fact bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Temel Gerçeklerimiz</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Binlerce kişinin güvendiği, akıllı yeniliklerle desteklenen</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { img: 1, val: '2500+', title: 'Entegre Araç & Platform', desc: 'Uygulamanızın her ay sorunsuz çalışmasını sağlıyoruz.' },
              { img: 2, val: '%99.9', title: 'Aylık Çalışma Süresi Garantisi', desc: 'Uygulamanızın her zaman erişilebilir olmasını garanti ediyoruz.' },
              { img: 3, val: '7/24', title: 'Müşteri Desteği Erişilebilirliği', desc: 'İhtiyacınız olduğunda bize her zaman ulaşabilirsiniz.' }
            ].map((fact, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="key-fact-item wow fadeInUp" data-wow-delay={`${0.2 * (i + 1)}s`}>
                  <div className="key-fact-item-image">
                    <figure className="image-anime">
                      <img src={`images/key-fact-item-${fact.img}.jpg`} alt="" />
                    </figure>
                  </div>
                  <div className="key-fact-item-body">
                    <div className="key-fact-item-counter">
                      <h2>{fact.val}</h2>
                    </div>
                    <div className="key-fact-item-content">
                      <h3>{fact.title}</h3>
                      <p>{fact.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
            <p><span>Ücretsiz</span> Birlikte harika işler yapalım. <a href="#">Ücretsiz Teklif Al</a> </p>
          </div>
        </div>
      </div>
      {/* Our Key Fact Section End */}

      {/* Our Pricing Section Start */}
      <div className="our-pricing" id="pricing">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Fiyat Planı</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Güçlü uygulama özellikleriyle dolu basit planlar</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                icon: 1,
                name: 'Temel Plan',
                tag: 'Bireysel ve başlangıç için',
                price: '₺199',
                benefit: '30 gün ücretsiz deneme',
                benefitIcon: 'fa-regular fa-calendar-check'
              },
              {
                icon: 2,
                name: 'Pro Plan',
                tag: 'Profesyoneller için',
                price: '₺499',
                benefit: 'Gizli ücret yok kurulum ücreti yok',
                benefitIcon: 'fa-solid fa-wallet'
              },
              {
                icon: 3,
                name: 'Kurumsal Plan',
                tag: 'Ekipler ve şirketler için',
                price: '₺999',
                benefit: 'İstediğiniz zaman iptal edin',
                benefitIcon: 'fa-regular fa-circle-xmark'
              }
            ].map((plan, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="pricing-item wow fadeInUp" data-wow-delay={`${0.2 * (i + 1)}s`}>
                  <div className="pricing-item-header">
                    <div className="pricing-item-header-box">
                      <div className="icon-box">
                        <img src={`images/icon-pricing-${plan.icon}.svg`} alt="" />
                      </div>
                      <div className="pricing-item-content">
                        <h3>{plan.name}</h3>
                        <p>{plan.tag}</p>
                      </div>
                    </div>
                    <div className="pricing-item-price">
                      <h2>{plan.price}<sub>/aylık</sub></h2>
                    </div>
                  </div>

                  <div className="pricing-item-body">
                    <div className="pricing-item-list">
                      <h3>Dahil Olan Özellikler:</h3>
                      <ul>
                        <li>Temel uygulama özelliklerine erişim</li>
                        <li>Düzenli güncellemeler ve iyileştirmeler</li>
                        <li>Özelleştirilebilir ayarlar</li>
                        <li>API & gelişmiş entegrasyon desteği</li>
                      </ul>
                    </div>
                    <div className="pricing-item-btn">
                      <a href="#" className="btn-default">Hemen Başla</a>
                    </div>
                  </div>
                </div>
                {/* Benefit under the box */}
                <div className="pricing-footer-item mt-4 wow fadeInUp" data-wow-delay={`${0.3 * (i + 1)}s`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <div className="icon-box" style={{ color: 'var(--primary-color)', fontSize: '24px' }}>
                    <i className={plan.benefitIcon}></i>
                  </div>
                  <div className="pricing-footer-content">
                    <p style={{ margin: 0, fontWeight: 500 }}>{plan.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Pricing Section End */}

      {/* Social App Slider Section Start */}
      <SocialSlider />
      {/* Social App Slider Section End */}

      {/* Our Interface Section Start */}
      <div className="our-interface">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Harika Arayüz</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Uygulamayı ayrıntılı ekran görüntüleriyle önizleyin</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="our-interface-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {[1, 2, 3, 4, 5, 1, 2].map((n, i) => (
                      <div className="swiper-slide" key={i}>
                        <div className="interface-item">
                          <div className="interface-image">
                            <figure className="image-anime">
                              <img src={`images/interface-slider-image-${n}.jpg`} alt="" />
                            </figure>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="interface-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Interface Section End */}

      {/* Testimonial Section Start */}
      <div className="our-testimonial bg-section">
        <div className="container">
          <div className="row">
            {/* Left Column: Title & Image (Dark Green Card) */}
            <div className="col-lg-5">
              <div className="testimonial-image-box" style={{ backgroundColor: '#005B52', padding: '40px', borderRadius: '20px', height: '100%', color: '#fff' }}>
                <div className="section-title">
                  <h3 className="wow fadeInUp" style={{ color: '#FF9F43' }}>Referanslar</h3>
                  <h2 className="text-anime-style-3 text-white" data-cursor="-opaque" style={{ color: '#fff' }}>Memnun kullanıcılarımızın hakkımızda söyledikleri</h2>
                  <p className="wow fadeInUp text-white" data-wow-delay="0.2s" style={{ color: 'rgba(255,255,255,0.8)' }}>Uygulamanın dünya çapındaki kullanıcılar için nasıl bir fark yarattığını keşfedin - gerçek hikayeler, gerçek sonuçlar.</p>
                </div>

                <div className="testimonial-image mt-4">
                  <figure className="image-anime">
                    <img src="images/testimonial-image.png" alt="" style={{ borderRadius: '15px' }} />
                  </figure>
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Slider */}
            <div className="col-lg-7">
              <div className="row mb-4">
                {/* Stats Box 1: Rating */}
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="testimonial-rating-box" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
                    <div className="testimonial-rating-star" style={{ color: '#FF9F43', marginBottom: '10px' }}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}>4.8</h2>
                    <p style={{ color: '#666' }}>Kullanıcı Puanı</p>
                    <div className="google-logo mt-3">
                      <img src="images/google-logo.svg" alt="" style={{ height: '30px' }} />
                    </div>
                  </div>
                </div>

                {/* Stats Box 2: Downloads */}
                <div className="col-md-6">
                  <div className="testimonial-rating-box" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="satisfy-client-images mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #fff', marginLeft: i > 1 ? '-15px' : 0 }}>
                          <img src={`images/author-${i}.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}>1.5m</h2>
                    <p style={{ color: '#666' }}>Bu Uygulamayı Yükleyenler</p>
                    <div className="store-icons mt-3" style={{ display: 'flex', gap: '10px' }}>
                      <a href="#" style={{ color: '#333', fontSize: '24px' }}><i className="fa-brands fa-google-play"></i></a>
                      <a href="#" style={{ color: '#333', fontSize: '24px' }}><i className="fa-brands fa-app-store-ios"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Row */}
              <div className="row">
                <div className="col-12">
                  <div className="testimonial-slider-box" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div className="testimonial-slider">
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          {[1, 2].map((n, i) => (
                            <div className="swiper-slide" key={i}>
                              <div className="testimonial-item">
                                <div className="testimonial-item-header mb-3">
                                  <div className="testimonial-item-rating" style={{ color: '#FF9F43' }}>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                  </div>
                                </div>
                                <div className="testimonial-item-content">
                                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', fontWeight: 600 }}>"Dünya standartlarında destek, kullanıcı dostu uygulama."</h3>
                                  <p style={{ fontStyle: 'italic', color: '#555' }}>"[Uygulama Adı] hakkında en iyi şey, başlamanın ne kadar kolay olduğu. Dakikalar içinde ihtiyacım olan tüm özelliklerle çalışmaya başladım. Desteğe iki kez ulaştım ve her iki seferde de yanıt anında ve yardımcı oldu."</p>
                                </div>
                                <div className="testimonial-item-author mt-4 d-flex align-items-center">
                                  <div className="testimonial-author-image" style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginRight: '15px' }}>
                                    <img src="images/author-3.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                  </div>
                                  <div className="testimonial-author-content">
                                    <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Gizem Y.</h3>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Dijital Pazarlamacı</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Navigation Buttons could go here if needed, but styling allows drag */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section End */}

      {/* Our Blog Section Start */}
      <div className="our-blog" id="blog">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Son Blog Yazıları</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Uzmanlarımızdan görüşler, güncellemeler ve yenilikler</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { title: 'Kullanıcıların Gerçekten Sevdiği Uygulamalar Oluşturmak', img: 1 },
              { title: '2025\'te Uygulama İnovasyonunun Geleceği', img: 2 },
              { title: 'ESAPP Günlük Verimliliği Nasıl Artırıyor', img: 3 }
            ].map((post, i) => (
              <div className="col-xl-4 col-md-6" key={i}>
                <div className="post-item wow fadeInUp" data-wow-delay={`${0.2 * i}s`}>
                  <div className="post-featured-image">
                    <a href="#" data-cursor-text="İncele">
                      <figure className="image-anime">
                        <img src={`images/post-${post.img}.jpg`} alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-content">
                      <h2><a href="#">{post.title}</a></h2>
                      <p>Tasarım ve geliştirme ekibimizle perde arkasına geçin.</p>
                    </div>
                    <div className="post-item-btn">
                      <a href="#" className="readmore-btn">daha fazla oku</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Blog Section End */}

      {/* Footer Start */}
      <footer className="main-footer bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-header">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Uygulamayı bugün indirin!</h2>
                  <p>Sorunsuz performans, akıllı özellikler için uygulamayı bugün indirin.</p>
                </div>

                <div className="app-download-buttons">
                  <div className="app-download-btn">
                    <a href="#"><img src="images/icon-app-store.svg" alt="" /></a>
                  </div>
                  <div className="app-download-btn">
                    <a href="#"><img src="images/icon-play-store.svg" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about-footer">
                <div className="footer-logo">
                  <img src="/esapp_logo.png" alt="ESAPP Logo" style={{ maxHeight: '60px', width: 'auto' }} />
                </div>
                <div className="about-footer-content">
                  <p>Günlük yaşamı daha akıllı, daha basit hale getirmek için tasarlanmış yenilikçi, kullanıcı dostu çözümlerle dijital yolculuğunuzu güçlendirin.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="footer-links-box">
                <div className="footer-links">
                  <h3>Hızlı Bağlantılar</h3>
                  <ul>
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="#about">Hakkımızda</a></li>
                    <li><a href="#features">Özellikler</a></li>
                    <li><a href="#blog">Son Blog</a></li>
                    <li><a href="#contact">İletişim</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Destek</h3>
                  <ul>
                    <li><a href="#">Yardım Merkezi</a></li>
                    <li><a href="#">S.S.S</a></li>
                    <li><a href="#">Şartlar & Koşullar</a></li>
                    <li><a href="#">Gizlilik Politikası</a></li>
                    <li><a href="#">İade Politikası</a></li>
                  </ul>
                </div>
                <div className="footer-links footer-contact-links">
                  <h3>İletişim</h3>
                  <ul>
                    <li><img src="images/icon-location-accent.svg" alt="" /> Maslak, İstanbul, Türkiye</li>
                    <li><img src="images/icon-phone-accent.svg" alt="" /><a href="tel:123456789">+90 (212) 123 45 67</a></li>
                    <li><img src="images/icon-mail-accent.svg" alt="" /><a href="mailto:info@domain.com">info@esapp.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-copyright-box">
                  <div className="footer-copyright-text">
                    <p>Telif Hakkı © 2026 Tüm Hakları Saklıdır.</p>
                  </div>
                  <div className="footer-social-list">
                    <ul>
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">Instagram</a></li>
                      <li><a href="#">LinkedIn</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

    </>
  );
}
