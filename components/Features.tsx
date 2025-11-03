import React from 'react';

// A new, more detailed feature structure for the alternating layout
interface DetailedFeature {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string; // URL for a relevant image
}

// Using 4 key features to showcase in a detailed manner
const detailedFeatures: DetailedFeature[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-2.4-4.2-4.8-4.8-.9-.3-1.8-.5-2.7-.5-1.9 0-3.6.8-4.9 2.1l-6.2 6.2c-1.4 1.4-2.2 3.3-2.2 5.3v.1c0 2.2 1.8 4 4 4 1.8 0 3.3-1.2 3.8-2.8l.5-1.8c.3-1 .2-2.1-.4-3z"></path><path d="m11.1 1.9-1.2 2.2"></path><path d="M14.6 1.1 14 3.4"></path><path d="m3.1 8.9-2.2.3"></path><path d="M3.4 5.4 1.1 5"></path><path d="m7.4 2.2-1.3 2"></path></svg>,
    title: 'قدرت چسبندگی فوق‌العاده',
    description: 'فرمولاسیون پیشرفته وال فیکس با ایجاد پیوندهای مولکولی قوی، چسبندگی عمیقی بین کاغذ دیواری و سطح دیوار ایجاد می‌کند. این ویژگی باعث می‌شود تا در برابر رطوبت، تغییرات دما و کشش‌های سطحی مقاوم بوده و از جدا شدن لبه‌ها یا ایجاد حباب در طول زمان جلوگیری کند.',
    image: '/images/feature-1.jpg',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
    title: 'قابلیت اصلاح و جابجایی',
    description: 'چسب وال فیکس طوری طراحی شده که زمان گیرایی اولیه آن بهینه باشد. این به آن معناست که شما پس از چسباندن کاغذ، زمان کافی (حدود ۱۵ تا ۲۰ دقیقه) برای جابجایی، تراز کردن و حذف حباب‌های احتمالی را در اختیار دارید. این ویژگی کار را برای افراد مبتدی آسان‌تر و برای حرفه‌ای‌ها دقیق‌تر می‌کند.',
    image: '/images/feature-2.jpg',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m8 12 2 2 4-4"></path></g></svg>,
    title: 'ضد قارچ و کپک',
    description: 'سلامت محیط زندگی اهمیت بالایی دارد. چسب وال فیکس حاوی ترکیبات آنتی‌باکتریال و ضد قارچ است که از رشد هرگونه کپک و قارچ در لایه‌های زیرین کاغذ دیواری جلوگیری می‌کند. این ویژگی آن را برای استفاده در فضاهای مرطوب مانند مناطق شمالی کشور یا آشپزخانه‌ها ایده‌آل می‌سازد.',
    image: '/images/feature-3.jpg',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>,
    title: 'شفاف و بی‌رنگ پس از خشک شدن',
    description: 'یکی از دغدغه‌های اصلی هنگام نصب، باقی ماندن اثر چسب روی سطح کار است. چسب وال فیکس پس از رسیدن به خشکی کامل، کاملاً بی‌رنگ و شفاف می‌شود. این ویژگی به خصوص برای کاغذ دیواری‌های نازک و رنگ روشن اهمیت دارد و زیبایی نهایی کار را تضمین می‌کند.',
    image: '/images/feature-4.jpg',
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            چرا وال فیکس انتخاب اول حرفه‌ای‌هاست؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            ما بر روی ویژگی‌هایی تمرکز کرده‌ایم که نصب کاغذ دیواری را برای شما به یک تجربه لذت‌بخش و بی‌نقص تبدیل می‌کند.
          </p>
        </div>
        
        <div className="mt-20 space-y-24">
          {detailedFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 animate-on-scroll ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-3 space-x-reverse">
                   <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-secondary">{feature.title}</h3>
                </div>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Image Content */}
              <div className="w-full lg:w-1/2">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-video lg:aspect-[4/3]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
