import React from 'react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "سال‌هاست که در کار نصب کاغذ دیواری هستم و چسب‌های مختلفی رو امتحان کردم. وال فیکس واقعاً یه چیز دیگه‌ست. چسبندگیش عالیه و کار باهاش خیلی راحته.",
    author: "رضا احمدی",
    role: "نصاب حرفه‌ای",
    rating: 5
  },
  {
    text: "برای خونه خودم از این چسب استفاده کردم. با اینکه تجربه زیادی نداشتم، نتیجه کار عالی شد. خیلی راحت توی آب حل شد و هیچ لکه‌ای هم روی دیوار نموند.",
    author: "مریم حسینی",
    role: "مشتری خانگی",
    rating: 5
  },
  {
    text: "بهترین ویژگی وال فیکس به نظرم زمان خشک شدن مناسبشه. به اندازه کافی وقت داری که کاغذ رو روی دیوار تنظیم کنی. به همه همکارام پیشنهادش کردم.",
    author: "علی کریمی",
    role: "مدیر پروژه ساختمانی",
    rating: 4
  }
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.445a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.367-2.445a1 1 0 00-1.175 0l-3.367 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard = ({ text, author, role, rating }: Testimonial) => (
    <div className="flex flex-col h-full bg-white p-8 rounded-xl shadow-lg">
        <StarRating rating={rating} />
        <p className="mt-4 text-slate-600 flex-grow">"{text}"</p>
        <div className="mt-6 flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-slate-500">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="mr-4">
                <p className="font-semibold text-secondary">{author}</p>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            صدای مشتریان راضی ما
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            اعتماد شما بزرگترین سرمایه ماست. نظرات برخی از مشتریان وال فیکس را بخوانید.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;