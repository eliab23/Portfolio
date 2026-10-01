import { portfolioData } from "@/data/portfolio-data";
import {
  Code,
  Globe,
  Database,
  Smartphone,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Sparkles
} from "lucide-react";

export default function About() {
  const { personal, services } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-cyan-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-violet-400" />,
    Database: <Database className="w-6 h-6 text-emerald-400" />,
    Code2: <Code className="w-6 h-6 text-blue-400" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & What Drives Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A software engineering student dedicated to turning complex problems into intuitive, high-impact web and mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>The Engineering Journey</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                {personal.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Guiding Principles */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider font-mono">
                  My Core Engineering Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Clean, modular, and self-documenting code</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Responsive, mobile-first design principles</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>User-centered accessibility and ergonomics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>Relentless curiosity & rapid hands-on learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote / Motivation Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-indigo-950/40 border border-cyan-500/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-200 italic font-medium">
                  "I believe software is most powerful when it bridges real human needs with elegant engineering."
                </p>
                <p className="text-xs text-cyan-400 mt-1 font-mono">— Gezehagn Lema</p>
              </div>
            </div>
          </div>

          {/* Right Column: Services & Capabilities Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2 mb-2">
              <span>What I Bring to the Table</span>
            </h3>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900/80 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {iconMap[service.icon] || <Code className="w-6 h-6 text-cyan-400" />}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
