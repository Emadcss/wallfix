import React, { useState, useEffect } from 'react';

const Logo = () => (
  <a href="#" className="flex items-center space-x-2 space-x-reverse">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
    <span className="text-2xl font-bold text-secondary">وال فیکس</span>
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'ویژگی‌ها' },
    { href: '#testimonials', label: 'نظرات مشتریان' },
    { href: '#faq', label: 'سوالات متداول' },
    { href: '#contact', label: 'تماس با ما' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu on any link click
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-base font-medium text-secondary transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={handleNavClick} className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            دریافت مشاوره
          </a>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-slate-100"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">باز کردن منو</span>
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-slate-200' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pt-2 pb-4 bg-background">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={handleNavClick} 
                className="block rounded-md px-3 py-2 text-base font-medium text-secondary hover:bg-slate-100 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={handleNavClick} 
              className="mt-2 block w-full rounded-md px-3 py-3 text-base font-bold text-white bg-primary text-center hover:bg-accent transition-colors"
            >
              دریافت مشاوره
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;