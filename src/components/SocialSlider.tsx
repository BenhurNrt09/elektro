'use client';

import { useEffect } from 'react';

export default function SocialSlider() {
    useEffect(() => {
        // Initialize Swiper correctly on mount
        const initSwiper = async () => {
            // Assuming Swiper is loaded globally via layout script, or we can fallback to window.Swiper
            // We will try to re-run the initialization logic from function.js for this specific slider
            if (typeof window !== 'undefined' && (window as any).Swiper) {
                new (window as any).Swiper('.social-app-slider .swiper', {
                    slidesPerView: 4,
                    speed: 2000,
                    spaceBetween: 40,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 6,
                        },
                        991: {
                            slidesPerView: 9,
                        },
                    }
                });
            }
        };

        // Small delay to ensure global scripts are ready or DOM is painted
        setTimeout(initSwiper, 500);
    }, []);

    return (
        <div className="our-social-apps bg-section dark-section" style={{ backgroundColor: '#005B52' }}>
            <div className="container-fluid">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp" style={{ color: '#fff' }}>Sosyal Uygulamalar</h3>
                            <h2 className="text-anime-style-3 text-white" data-cursor="-opaque" style={{ color: '#fff' }}>Sorunsuz entegrasyon desteği ile verimliliği artırın</h2>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-12">
                        <div className="social-app-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4].map((n, i) => (
                                        <div className="swiper-slide" key={i}>
                                            <div className="social-app-item">
                                                <div className="icon-box">
                                                    <img src={`images/icon-social-app-${n}.svg`} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="social-app-footer">
                            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                                <p style={{ color: '#fff' }}>ESAPP ile yeniliği, kaliteyi ve başarıyı dünya çapında birlikte dokuyun.</p>
                                <ul style={{ color: '#fff' }}>
                                    <li><span className="counter" style={{ color: '#fff' }}>4.9</span>/5</li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li style={{ color: '#fff' }}>4200+ Değerlendirme</li>
                                </ul>
                            </div>

                            <div className="app-download-buttons wow fadeInUp" data-wow-delay="0.4s">
                                <div className="app-download-btn">
                                    <a href="#"><img src="images/icon-app-store.svg" alt="" /></a>
                                </div>
                                <div className="app-download-btn">
                                    <a href="#"><img src="images/icon-play-store.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
