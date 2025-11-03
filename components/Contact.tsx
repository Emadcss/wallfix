import React, { useState } from 'react';

interface FormState {
    name: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    message?: string;
}

const ContactInfo = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyPhone = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // We don't prevent default, so the 'tel:' link still works on mobile
        const phoneNumber = '02112345678';
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Hide message after 2 seconds
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };
    
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-xl font-bold text-secondary">اطلاعات تماس</h3>
                <p className="mt-2 text-slate-600">
                    می‌توانید از طریق راه‌های زیر نیز مستقیماً با ما در ارتباط باشید.
                </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                        <h4 className="font-semibold text-secondary">تلفن</h4>
                         <div className="flex items-center gap-3">
                             <a 
                                href="tel:02112345678" 
                                onClick={handleCopyPhone} 
                                className="text-slate-600 hover:text-primary ltr-text cursor-pointer" 
                                title="برای تماس کلیک کنید یا شماره را کپی کنید"
                             >
                                ۰۲۱-۱۲۳۴۵۶۷۸
                             </a>
                             {isCopied && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full whitespace-nowrap transition-opacity duration-300">
                                    کپی شد!
                                </span>
                             )}
                        </div>
                    </div>
                </div>
                <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 pt-1">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div>
                        <h4 className="font-semibold text-secondary">ایمیل</h4>
                        <a href="mailto:info@wallfix.com" className="text-slate-600 hover:text-primary ltr-text">info@wallfix.com</a>
                    </div>
                </div>
                 <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div>
                        <h4 className="font-semibold text-secondary">ساعات کاری</h4>
                        <p className="text-slate-600">شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Contact = () => {
    const [formData, setFormData] = useState<FormState>({ name: '', phone: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name) newErrors.name = "نام و نام خانوادگی الزامی است.";
        if (!formData.phone) newErrors.phone = "شماره تماس الزامی است.";
        else if (!/^(09\d{9})$/.test(formData.phone)) newErrors.phone = "لطفاً یک شماره موبایل معتبر وارد کنید (مثال: 09123456789).";
        if (!formData.message) newErrors.message = "لطفاً پیام خود را بنویسید.";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({...prev, [name]: undefined}));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            setSubmitStatus(null);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log("Form data submitted:", formData);
                setSubmitStatus('success');
                setFormData({ name: '', phone: '', message: '' });
            } catch (error) {
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-on-scroll">
                    <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
                        با ما در تماس باشید
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        برای دریافت مشاوره، استعلام قیمت یا ثبت سفارش، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-5xl animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <div className="grid grid-cols-1 gap-12 rounded-xl bg-white p-8 shadow-xl md:grid-cols-2 md:gap-16">
                        <ContactInfo />
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">نام و نام خانوادگی</label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        placeholder="نام و نام خانوادگی"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`block w-full rounded-md border-slate-300 bg-slate-50 py-3 pr-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${errors.name ? 'border-danger' : 'border-gray-300'}`}
                                    />
                                </div>
                                {errors.name && <p className="mt-1 text-sm text-danger">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="sr-only">شماره تماس</label>
                                 <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        placeholder="شماره تماس"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`block w-full rounded-md border-slate-300 bg-slate-50 py-3 pr-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${errors.phone ? 'border-danger' : 'border-gray-300'}`}
                                    />
                                </div>
                                {errors.phone && <p className="mt-1 text-sm text-danger">{errors.phone}</p>}
                            </div>

                            <div>
                               <label htmlFor="message" className="sr-only">پیام شما</label>
                                <div className="relative">
                                     <div className="pointer-events-none absolute top-3 right-0 flex items-center pr-3">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="پیام شما..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`block w-full rounded-md border-slate-300 bg-slate-50 py-3 pr-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${errors.message ? 'border-danger' : 'border-gray-300'}`}
                                    ></textarea>
                                </div>
                                {errors.message && <p className="mt-1 text-sm text-danger">{errors.message}</p>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex w-full justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                                </button>
                            </div>
                            {submitStatus === 'success' && (
                                <div className="rounded-md bg-green-50 p-4 text-center">
                                    <p className="text-sm font-medium text-green-800">پیام شما با موفقیت ارسال شد. سپاسگزاریم!</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="rounded-md bg-red-50 p-4 text-center">
                                    <p className="text-sm font-medium text-danger">خطایی در ارسال پیام رخ داد. لطفاً دوباره تلاش کنید.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;