import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "هر بسته چسب وال فیکس برای چه متراژی کافی است؟",
    answer: "هر بسته استاندارد چسب وال فیکس برای پوشش‌دهی حدود ۳۰ تا ۴۰ متر مربع کاغذ دیواری معمولی کافی است. این مقدار ممکن است بسته به ضخامت و جنس کاغذ دیواری متغیر باشد."
  },
  {
    question: "آیا این چسب برای کاغذ دیواری‌های قابل شستشو هم مناسب است؟",
    answer: "بله، فرمولاسیون وال فیکس با انواع کاغذ دیواری، از جمله مدل‌های قابل شستشو، وینیل و PVC سازگاری کامل دارد و چسبندگی مطمئنی را فراهم می‌کند."
  },
  {
    question: "زمان خشک شدن نهایی چسب چقدر است؟",
    answer: "چسب پس از ۲۴ تا ۴۸ ساعت به استحکام نهایی خود می‌رسد. در این مدت از دستکاری یا وارد کردن ضربه به دیوار خودداری کنید. البته زمان خشک شدن اولیه برای تنظیم کاغذ حدود ۱۵ تا ۲۰ دقیقه است."
  },
  {
    question: "چگونه چسب را برای استفاده آماده کنیم؟",
    answer: "محتویات بسته را به آرامی در مقدار آب مشخص شده روی بسته‌بندی (معمولاً ۴ تا ۵ لیتر) بریزید و همزمان به خوبی هم بزنید تا مایع یکدست و بدون گلوله شود. پس از ۱۰ دقیقه استراحت، چسب آماده استفاده است."
  },
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItem, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-slate-200">
            <button
                type="button"
                onClick={onClick}
                className="flex w-full items-center justify-between py-5 text-right text-lg font-semibold text-secondary"
            >
                <span>{item.question}</span>
                <svg
                    className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="pt-2 pb-5 text-slate-600">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-section-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-on-scroll">
                    <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
                        سوالات متداول
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        پاسخ سوالات پرتکرار شما را در اینجا گردآوری کرده‌ایم.
                    </p>
                </div>
                <div className="mx-auto mt-12 max-w-3xl animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
