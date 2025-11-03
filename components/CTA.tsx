import React from 'react';

const CTA = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="cta" className="bg-section-bg">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-12 text-center shadow-xl sm:px-12 animate-on-scroll">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            آماده‌اید دیوارهایتان را متحول کنید؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            همین امروز با کارشناسان ما تماس بگیرید و برای پروژه بعدی خود از مشاوره رایگان و قیمت‌های ویژه بهره‌مند شوید.
          </p>
          <a
            href="#contact"
            onClick={handleScrollClick}
            className="mt-8 inline-flex items-center justify-center rounded-lg border border-transparent bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            شروع کنید
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
