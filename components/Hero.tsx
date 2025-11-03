import React from 'react';

const Hero = () => {

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
    <section id="hero" className="bg-background pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-right animate-on-scroll">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              فرمولاسیون پیشرفته آلمانی
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
              چسبندگی بی‌نظیر، نصب آسان و سریع
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              با چسب کاغذ دیواری وال فیکس، زیبایی و دوام را به دیوارهای خود هدیه دهید. بهترین انتخاب برای حرفه‌ای‌ها و مصارف خانگی.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact" onClick={handleScrollClick} className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                سفارش و مشاوره رایگان
              </a>
              <a href="#features" onClick={handleScrollClick} className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-slate-100 px-8 py-3.5 text-base font-bold text-secondary shadow-lg transition-transform hover:scale-105 hover:bg-slate-200">
                آشنایی با ویژگی‌ها
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <img 
              className="w-full max-w-sm rounded-2xl shadow-2xl"
              src="/images/hero-image.jpg"
              alt="بسته بندی چسب کاغذ دیواری وال فیکس"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
