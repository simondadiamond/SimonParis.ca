import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-[#333333]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="WorkflowLeaf logo"
                className="h-8 w-auto mr-2"
              />
              <div className="text-2xl font-bold text-[#EAEAEA] font-inter">
                WorkflowLeaf
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center text-sm text-[#B4B4B4]">
                <Globe className="w-4 h-4 mr-2" />
                <span>EN/FR</span>
              </div>
              <button className="btn-primary text-sm px-6 py-3">
                Book Demo
              </button>
            </div>

            <button 
              className="md:hidden text-[#EAEAEA]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-[#0f0f0f]/70 backdrop-blur-sm" 
             onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-80 bg-[#0f0f0f] border-l border-[#333333] shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-6">
              <div className="flex items-center text-[#B4B4B4]">
                <Globe className="w-4 h-4 mr-2" />
                <span>EN/FR</span>
              </div>
              <button className="btn-primary w-full">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
