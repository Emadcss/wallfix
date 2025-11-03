import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [copyStatus, setCopyStatus] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setFormStatus('پیام شما با موفقیت ارسال شد!');
        setFormData({ name: '', phone: '', message: '' });
      })
      .catch(error => {
        setFormStatus('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
        console.error(error);
      })
      .finally(() => {
         setTimeout(() => setFormStatus(''), 3000);
      });
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text.replace(/[- ]/g, ''));
    setCopyStatus('کپی شد!');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            ارتباط با ما و مشاوره رایگان
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            برای دریافت مشاوره، استعلام قیمت و یا ثبت سفارش، می‌توانید از طریق فرم زیر با ما در ارتباط باشید یا با شماره تلفن ما تماس بگیرید.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col justify-center animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">شماره تماس</h3>
                  <p className="text-slate-600">پشتیبانی و فروش:</p>
                  <a href="tel:+989910413781" onClick={() => handleCopy('09910413781')} className="text-lg font-bold text-primary hover:underline relative" dir="ltr">
                    ۰۹۹۱-۰۴۱۳۷۸۱
                    {copyStatus && <span className="absolute -top-7 right-0 text-xs bg-secondary text-white px-2 py-1 rounded">{copyStatus}</span>}
                  </a>
                </div>
              </div>
               <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">ساعات کاری</h3>
                  <p className="text-slate-600">شنبه تا پنج‌شنبه</p>
                  <p className="text-lg font-bold text-slate-800">۱۰ صبح الی ۸ شب</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
            <form 
              name="contact"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl bg-white p-8 shadow-lg"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary">نام شما</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3"
                    placeholder="مثال: علی محمدی"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary">شماره تماس</label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3"
                    placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary">پیام شما</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3"
                    placeholder="درخواست مشاوره یا سوال خود را اینجا بنویسید..."
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  ارسال درخواست
                </button>
              </div>
              {formStatus && (
                <p className="text-center font-semibold text-green-600">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
