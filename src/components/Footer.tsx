import { Facebook, Twitter, Instagram, Youtube, Mail, CheckCircle, Shield, Award, Truck } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  const footerLinks = {
    products: [
      { name: 'Smart Speakers', href: '#' },
      { name: 'Headphones', href: '#' },
      { name: 'Earbuds', href: '#' },
      { name: 'Soundbars', href: '#' },
      { name: 'Accessories', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Product Manuals', href: '#' },
      { name: 'Warranty', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Patents', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure Checkout' },
    { icon: Award, text: '2-Year Warranty' },
    { icon: Truck, text: 'Free Shipping' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A0A0A] to-[#000000] border-t border-[#F8F9FA]/10">
      {/* Trust Badges */}
      <div className="border-b border-[#F8F9FA]/10">
        <div className="max-w-[1140px] mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center">
                    <Icon size={20} className="text-[#00E5FF]" />
                  </div>
                  <span className="text-[#F8F9FA] font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-[#00E5FF] font-bold text-2xl tracking-tight mb-4">
                RESONANCE
              </div>
              <p className="text-[#F8F9FA]/60 max-w-sm">
                Elevating audio experiences with cutting-edge technology and precision engineering.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h3 className="text-[#F8F9FA] font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-[#F8F9FA]/60">
                Get the latest updates on new products and exclusive offers.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-[#F8F9FA]/5 border rounded-lg text-[#F8F9FA] placeholder-[#F8F9FA]/40 focus:outline-none focus:border-[#00E5FF] transition-colors ${
                      emailError 
                        ? 'border-red-500' 
                        : isSubscribed 
                        ? 'border-green-500' 
                        : 'border-[#F8F9FA]/20'
                    }`}
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F8F9FA]/40" size={18} />
                </div>

                {emailError && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    {emailError}
                  </p>
                )}

                {isSubscribed && (
                  <p className="text-sm text-green-500 flex items-center gap-1">
                    <CheckCircle size={16} />
                    Successfully subscribed!
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isSubscribed}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    isSubmitting || isSubscribed
                      ? 'bg-[#F8F9FA]/10 text-[#F8F9FA]/40 cursor-not-allowed'
                      : 'bg-[#00E5FF] text-[#0A0A0A] hover:bg-[#00E5FF]/90 hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-[#F8F9FA] font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F8F9FA]/60 hover:text-[#00E5FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-[#F8F9FA] font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F8F9FA]/60 hover:text-[#00E5FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#F8F9FA] font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F8F9FA]/60 hover:text-[#00E5FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F8F9FA]/10">
        <div className="max-w-[1140px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-[#F8F9FA]/50 text-sm">
              © 2026 Resonance Audio. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#F8F9FA]/50 hover:text-[#00E5FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#F8F9FA]/50 hover:text-[#00E5FF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#F8F9FA]/50 hover:text-[#00E5FF] transition-colors">
                Cookies
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 flex items-center justify-center text-[#F8F9FA]/60 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
