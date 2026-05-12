import { useScrollReveal } from '../hooks/useScrollReveal';
import { WHATSAPP_URL } from './constants';
import { ArrowUpRight } from 'lucide-react';

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta-final" className="section-padding bg-diagonal-lines relative overflow-hidden">
      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gold/[0.02] to-black" aria-hidden="true" />
      {/* Premium glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/[0.04] rounded-full blur-[100px]" aria-hidden="true" />

      <div ref={ref} className={`section-container relative z-10 reveal ${isVisible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-6 leading-tight">
            O próximo nível da sua estética começa com um clique
          </h2>
          <p className="font-montserrat font-normal text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            Não deixe sua empresa ser invisível para os melhores clientes da sua cidade. Tenha uma estrutura de elite que trabalha por você 24h por dia. Risco zero, entrega em até 72h e pagamento só após sua aprovação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-glow text-lg px-12 py-5 inline-flex items-center gap-2"
          >
            Quero ver como ficaria para a minha estética
            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
          </a>
          <p className="font-montserrat font-normal text-sm text-white/40 mt-4">
            Fale conosco pelo WhatsApp. Sem taxas antecipadas.
          </p>
        </div>
      </div>
    </section>
  );
}
