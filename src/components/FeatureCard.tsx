import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  specs: string[];
}

const hotspots: Hotspot[] = [
  {
    id: 'eq',
    x: 30,
    y: 40,
    title: 'Adaptive EQ',
    description: 'Machine learning algorithms that analyze your room acoustics and automatically adjust the sound profile for optimal performance.',
    specs: ['AI-Powered Tuning', 'Room Calibration', 'Real-time Adjustments']
  },
  {
    id: 'spatial',
    x: 70,
    y: 35,
    title: '360° Spatial Audio',
    description: 'Immersive sound technology that creates a three-dimensional audio experience, placing you at the center of your music.',
    specs: ['Dolby Atmos Support', '8-Driver Array', 'Beamforming Technology']
  },
  {
    id: 'latency',
    x: 50,
    y: 70,
    title: 'Ultra-Low Latency',
    description: 'Advanced wireless technology ensures zero delay between your device and speaker, perfect for gaming and video streaming.',
    specs: ['<10ms Latency', 'Bluetooth 5.3', 'Multi-device Sync']
  }
];

export function FeatureCard() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const handleHotspotClick = (id: string) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  const activeHotspotData = hotspots.find(h => h.id === activeHotspot);

  return (
    <section id="technology" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Deep <span className="text-[#00E5FF]">Dive</span>
          </h2>
          <p className="text-[#F8F9FA]/70 text-lg max-w-2xl mx-auto">
            Explore the cutting-edge technology that powers our smart speaker ecosystem
          </p>
        </div>

        {/* Interactive Feature Card */}
        <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#0A0A0A]/90 border border-[#00E5FF]/30 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - 3D Speaker with Hotspots */}
              <div className="relative aspect-square max-w-md mx-auto w-full">
                {/* Speaker Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1548617335-c1b176388c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="3D Speaker"
                    className="w-full h-full object-contain"
                  />

                  {/* Interactive Hotspots */}
                  {hotspots.map((hotspot) => (
                    <button
                      key={hotspot.id}
                      onClick={() => handleHotspotClick(hotspot.id)}
                      className="absolute group"
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Hotspot Pulse Effect */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        activeHotspot === hotspot.id
                          ? 'bg-[#00E5FF]/30 scale-150'
                          : 'bg-[#00E5FF]/20 scale-100'
                      } animate-pulse`} />
                      
                      {/* Hotspot Icon */}
                      <div className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        activeHotspot === hotspot.id
                          ? 'bg-[#00E5FF] border-[#00E5FF] text-[#0A0A0A] scale-110'
                          : 'bg-[#0A0A0A]/90 border-[#00E5FF] text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#0A0A0A] group-hover:scale-110'
                      }`}>
                        <Plus size={20} className={`transition-transform duration-300 ${
                          activeHotspot === hotspot.id ? 'rotate-45' : 'rotate-0'
                        }`} />
                      </div>

                      {/* Connecting Line (when active) */}
                      {activeHotspot === hotspot.id && (
                        <svg
                          className="absolute top-1/2 left-1/2 pointer-events-none"
                          style={{
                            width: '200px',
                            height: '200px',
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <circle
                            cx="100"
                            cy="100"
                            r="60"
                            fill="none"
                            stroke="#00E5FF"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            opacity="0.3"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>

                {/* Instruction Text */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-sm text-[#F8F9FA]/50 text-center">
                    Click the <Plus size={14} className="inline" /> icons to explore features
                  </p>
                </div>
              </div>

              {/* Right Side - Feature Details */}
              <div className="min-h-[400px] flex items-center">
                {activeHotspotData ? (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="float-right text-[#F8F9FA]/50 hover:text-[#00E5FF] transition-colors"
                    >
                      <X size={24} />
                    </button>

                    <div>
                      <div className="inline-block mb-4">
                        <span className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase">
                          Feature Spotlight
                        </span>
                        <div className="h-[2px] w-16 bg-[#00E5FF] mt-2" />
                      </div>

                      <h3 className="text-3xl font-bold mb-4">
                        {activeHotspotData.title}
                      </h3>
                      
                      <p className="text-[#F8F9FA]/70 text-lg leading-relaxed mb-6">
                        {activeHotspotData.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-[#00E5FF] uppercase tracking-wider">
                        Key Specifications
                      </h4>
                      <div className="space-y-2">
                        {activeHotspotData.specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 bg-[#F8F9FA]/5 border border-[#00E5FF]/20 rounded-lg px-4 py-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                            <span className="text-[#F8F9FA]">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4 py-12">
                    <div className="w-20 h-20 rounded-full border-2 border-[#00E5FF]/30 border-dashed flex items-center justify-center mx-auto mb-6">
                      <Plus size={32} className="text-[#00E5FF]/50" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F8F9FA]/70">
                      Select a Feature
                    </h3>
                    <p className="text-[#F8F9FA]/50 max-w-sm mx-auto">
                      Click on any hotspot to learn more about our advanced audio technologies
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
