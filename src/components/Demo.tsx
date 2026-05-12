import { useScrollReveal } from '../hooks/useScrollReveal';
import { WHATSAPP_URL } from './constants';
import { Monitor, X, Check, PhoneOff, CalendarCheck, Star } from 'lucide-react';

export function Demo() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="demo" className="section-padding bg-gray-dark">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Monitor className="w-8 h-8 text-gold" strokeWidth={1.5} />
          </div>
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-4 leading-tight">
            Sua empresa pode parecer muito maior do que é
          </h2>
          <p className="font-montserrat font-normal text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Seu cliente encontra sua empresa, entende seus serviços e entra em contato em segundos.
          </p>

          {/* Comparison: Amateur vs Professional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Left: Amateur */}
            <div className="rounded-xl border border-white/10 bg-black p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/40" />
              <div className="flex items-center gap-2 mb-4">
                <X className="w-5 h-5 text-red-400/70" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-base md:text-lg text-white/50">Empresa Amadora</h3>
              </div>
              <div className="space-y-4">
                {/* Phone mockup - empty agenda */}
                <div className="bg-gray-dark/50 rounded-lg p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <PhoneOff className="w-4 h-4 text-white/30" strokeWidth={1.5} />
                    <span className="font-montserrat font-normal text-xs text-white/30">Só Instagram</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <span className="font-montserrat font-normal text-xs text-white/20 line-through">Segunda — vago</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <span className="font-montserrat font-normal text-xs text-white/20 line-through">Terça — vago</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <span className="font-montserrat font-normal text-xs text-white/20 line-through">Quarta — vago</span>
                    </div>
                  </div>
                </div>
                <p className="font-montserrat font-normal text-xs text-white/30 text-center">
                  Nenhum site. Nenhuma credibilidade. Clientes em dúvida.
                </p>
              </div>
            </div>

            {/* Right: Professional */}
            <div className="rounded-xl border border-gold/20 bg-black p-6 md:p-8 relative overflow-hidden group card-premium">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-base md:text-lg text-gold">Empresa Profissional</h3>
              </div>
              <div className="space-y-4">
                {/* Site mockup - full agenda */}
                <div className="bg-gray-dark/50 rounded-lg p-4 border border-gold/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    <span className="font-montserrat font-semibold text-xs text-gold">Site Profissional</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-3 h-3 text-gold" strokeWidth={1.5} />
                      <span className="font-montserrat font-normal text-xs text-white/70">Segunda — Polimento Premium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-3 h-3 text-gold" strokeWidth={1.5} />
                      <span className="font-montserrat font-normal text-xs text-white/70">Terça — Vitrificação Cerâmica</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-3 h-3 text-gold" strokeWidth={1.5} />
                      <span className="font-montserrat font-normal text-xs text-white/70">Quarta — Higienização Completa</span>
                    </div>
                  </div>
                </div>
                <p className="font-montserrat font-normal text-xs text-gold/60 text-center">
                  Site no ar. Confiança instantânea. Agenda cheia.
                </p>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-glow text-lg"
          >
            Quero dar esse próximo passo
          </a>
        </div>
      </div>
    </section>
  );
}
