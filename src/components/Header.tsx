import { Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = ['Products', 'Technology', 'About', 'Support'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20">
      <div 
        className="h-full backdrop-blur-[12px] bg-[#0A0A0A]/80 border-b border-[#F8F9FA]/10"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-[1140px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="text-[#00E5FF] font-bold text-2xl tracking-tight">
            RESONANCE
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#F8F9FA] text-sm relative py-1 transition-colors hover:text-[#00E5FF]"
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#00E5FF] transition-all duration-300 ${
                    hoveredLink === link ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center gap-6">
            <button className="text-[#F8F9FA] hover:text-[#00E5FF] transition-colors">
              <Search size={20} />
            </button>
            <button className="text-[#F8F9FA] hover:text-[#00E5FF] transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="text-[#F8F9FA] hover:text-[#00E5FF] transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
