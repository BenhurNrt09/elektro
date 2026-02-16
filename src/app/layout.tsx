import type { Metadata } from "next";
import Script from "next/script";

/* Note: Global CSS is disabled to allow bootstrap/custom CSS to take precedence */
import "./globals.css";

export const metadata: Metadata = {
  title: "ESAPP - Elektronikspor Süper Uygulaması",
  description: "Espor ekosistemini tek bir süper uygulamada birleştiriyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/esapp_logo.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        {/* CSS Libraries */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>

        {/* Preloader Removed */}

        {children}

        {/* Javascript Libraries */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/circle-progress.min.js" strategy="afterInteractive" />

        {/* Main Function Initialization - Deferred to run after other scripts */}
        <Script src="/js/function.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
