import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300">
      <div className="container mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
            <span className="text-2xl font-bold text-white">وال فیکس</span>
          </div>

          {/* CTA Text */}
          <p className="mt-6 max-w-md text-lg text-slate-400">
            به جامعه ما بپیوندید! اخبار، تخفیف‌های ویژه و نکات نصب را در کانال تلگرام وال فیکس دنبال کنید.
          </p>
          
          {/* Telegram Button */}
          <div className="mt-8">
            <a 
              href="#" // TODO: Replace with your actual Telegram channel link
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-500 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              <span>عضویت در کانال تلگرام</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} شرکت وال فیکس. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;