import { Cpu, Waves, Zap } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Technical Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00E5FF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="20%" cy="30%" r="80" fill="none" stroke="#00E5FF" strokeWidth="1" />
          <circle cx="80%" cy="70%" r="120" fill="none" stroke="#00E5FF" strokeWidth="1" />
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#00E5FF" strokeWidth="0.5" />
          <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="#00E5FF" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase">
                About Us
              </span>
              <div className="h-[2px] w-16 bg-[#00E5FF] mt-2" />
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              The Sound of{' '}
              <span className="text-[#00E5FF]">Engineering</span>
            </h2>

            <p className="text-[#F8F9FA]/70 text-lg leading-relaxed">
              At Resonance, we don't just build speakers—we engineer acoustic experiences. 
              Our team of audio engineers and AI specialists have spent years perfecting the 
              science of sound, creating products that adapt to your environment and preferences.
            </p>

            <p className="text-[#F8F9FA]/70 leading-relaxed">
              Every product in our ecosystem is designed with precision engineering, combining 
              cutting-edge technology with timeless design principles. From the materials we 
              choose to the algorithms that power our adaptive EQ, every detail matters.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center">
                  <Waves className="text-[#00E5FF]" size={24} />
                </div>
                <h3 className="font-semibold text-[#F8F9FA]">Acoustic Precision</h3>
                <p className="text-sm text-[#F8F9FA]/60">
                  Engineered for perfect sound reproduction
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center">
                  <Cpu className="text-[#00E5FF]" size={24} />
                </div>
                <h3 className="font-semibold text-[#F8F9FA]">AI-Powered</h3>
                <p className="text-sm text-[#F8F9FA]/60">
                  Smart algorithms that learn and adapt
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center">
                  <Zap className="text-[#00E5FF]" size={24} />
                </div>
                <h3 className="font-semibold text-[#F8F9FA]">Ultra-Low Latency</h3>
                <p className="text-sm text-[#F8F9FA]/60">
                  Instant response, zero lag
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-[#F8F9FA]/10">
              <div>
                <div className="text-3xl font-bold text-[#00E5FF]">10+</div>
                <div className="text-sm text-[#F8F9FA]/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00E5FF]">500K+</div>
                <div className="text-sm text-[#F8F9FA]/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00E5FF]">50+</div>
                <div className="text-sm text-[#F8F9FA]/60">Audio Patents</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            {/* Blueprint Style Graphic */}
            <div className="relative aspect-square bg-gradient-to-br from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/30 rounded-lg p-8">
              {/* Technical Drawing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-3/4 h-3/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Speaker Cone */}
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#00E5FF" strokeWidth="2" />
                  <circle cx="100" cy="100" r="45" fill="none" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" />
                  <circle cx="100" cy="100" r="15" fill="none" stroke="#00E5FF" strokeWidth="2" />
                  
                  {/* Measurement Lines */}
                  <line x1="40" y1="100" x2="30" y2="100" stroke="#00E5FF" strokeWidth="1" />
                  <line x1="160" y1="100" x2="170" y2="100" stroke="#00E5FF" strokeWidth="1" />
                  <line x1="100" y1="40" x2="100" y2="30" stroke="#00E5FF" strokeWidth="1" />
                  <line x1="100" y1="160" x2="100" y2="170" stroke="#00E5FF" strokeWidth="1" />
                  
                  {/* Corner Markers */}
                  <path d="M 20 20 L 30 20 L 30 30" fill="none" stroke="#00E5FF" strokeWidth="1" />
                  <path d="M 180 20 L 170 20 L 170 30" fill="none" stroke="#00E5FF" strokeWidth="1" />
                  <path d="M 20 180 L 30 180 L 30 170" fill="none" stroke="#00E5FF" strokeWidth="1" />
                  <path d="M 180 180 L 170 180 L 170 170" fill="none" stroke="#00E5FF" strokeWidth="1" />
                  
                  {/* Wave Lines */}
                  <path d="M 130 60 Q 140 55 150 60" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2,2" />
                  <path d="M 130 70 Q 140 65 150 70" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2,2" />
                  <path d="M 130 80 Q 140 75 150 80" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2,2" />
                </svg>
              </div>

              {/* Floating Specs */}
              <div className="absolute top-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/50 rounded px-3 py-2">
                <div className="text-xs text-[#00E5FF] font-mono">SPEC: AE-2024</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/50 rounded px-3 py-2">
                <div className="text-xs text-[#00E5FF] font-mono">FREQ: 20Hz-20kHz</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#00E5FF]/50 rounded px-3 py-2">
                <div className="text-xs text-[#00E5FF] font-mono">THD: &lt;0.01%</div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#00E5FF]/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
