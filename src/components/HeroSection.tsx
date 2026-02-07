import { ArrowRight, Mic, Wifi, Volume2 } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 
              className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontSize: '64px' }}
            >
              Resonance of the{' '}
              <span className="text-[#00E5FF]">Future</span>
            </h1>
            
            <p className="text-[#F8F9FA]/70 text-lg max-w-xl">
              Experience audio engineered for the future. Our smart speaker ecosystem 
              delivers crystal-clear sound with adaptive AI technology that learns your preferences.
            </p>

            <button
              className="group relative px-8 py-4 bg-[#00E5FF] text-[#0A0A0A] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span 
                className={`absolute inset-0 bg-[#00E5FF] transition-all duration-300 ${
                  isHovering ? 'blur-xl opacity-50' : 'blur-none opacity-0'
                }`}
                style={{ filter: isHovering ? 'blur(20px)' : 'blur(0px)' }}
              />
              <span className="relative flex items-center gap-2">
                Explore the Collection
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#00E5FF]">360°</div>
                <div className="text-sm text-[#F8F9FA]/60">Spatial Audio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00E5FF]">24h</div>
                <div className="text-sm text-[#F8F9FA]/60">Battery Life</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00E5FF]">AI</div>
                <div className="text-sm text-[#F8F9FA]/60">Powered</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Speaker Visual */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Main Speaker Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  <img
                    src="https://images.unsplash.com/photo-1548617335-c1b176388c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Smart Speaker"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#00E5FF]/20 blur-3xl rounded-full scale-75" />
                </div>
              </div>

              {/* Floating UI Indicators */}
              <div className="absolute top-1/4 left-0 animate-float">
                <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/50 rounded-lg px-4 py-2 flex items-center gap-2">
                  <Mic size={16} className="text-[#00E5FF]" />
                  <span className="text-sm">Voice Commands</span>
                </div>
              </div>

              <div className="absolute top-1/3 right-0 animate-float-delayed">
                <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/50 rounded-lg px-4 py-2 flex items-center gap-2">
                  <Wifi size={16} className="text-[#00E5FF]" />
                  <span className="text-sm">Smart Connect</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-1/4 animate-float">
                <div className="bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/50 rounded-lg px-4 py-2 flex items-center gap-2">
                  <Volume2 size={16} className="text-[#00E5FF]" />
                  <span className="text-sm">Adaptive EQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}
