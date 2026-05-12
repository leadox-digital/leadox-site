import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, PenTool, Clock, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    title: 'Criação Estratégica',
    description: 'Iniciamos seu projeto com foco total na identidade e nos serviços da sua marca.',
  },
  {
    icon: Clock,
    title: 'Entrega em até 72h',
    description: 'Você recebe o link para revisar cada detalhe do seu novo site profissional.',
  },
  {
    icon: ThumbsUp,
    title: 'Sua Decisão Final',
    description: 'Se você amar o resultado, seguimos com a publicação. Se não, você não paga nada.',
  },
];

export function RiskFree() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="risco-zero" className="section-padding bg-geometric">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Guarantee seal */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold/40 flex items-center justify-center bg-gold/5">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-gold" strokeWidth={1.5} />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black px-3 py-1 rounded-full border border-gold/30">
                <span className="font-montserrat font-bold text-[9px] md:text-[10px] text-gold whitespace-nowrap tracking-wide uppercase">
                  Garantido
                </span>
              </div>
            </div>
          </div>

          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-4 leading-tight">
            Sua satisfação é o nosso único contrato
          </h2>
          <p className="font-montserrat font-bold text-xl md:text-2xl text-gold mb-4">
            Nós assumimos 100% do risco porque confiamos no impacto que vamos gerar na sua estética.
          </p>
          <p className="font-montserrat font-normal text-base md:text-lg text-white/70 leading-relaxed mb-10">
            Diferente de agências comuns, não cobramos taxas antecipadas. Desenvolvemos seu projeto de forma personalizada e você só investe se o resultado superar suas expectativas.
          </p>

          {/* Guarantee badge text */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-10">
            <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
            <span className="font-montserrat font-semibold text-sm text-gold">
              Satisfação Garantida ou Zero Custo
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="font-montserrat font-semibold text-sm md:text-base text-white">{step.title}</p>
                    <p className="font-montserrat font-normal text-xs md:text-sm text-white/60 max-w-[200px]">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-12 h-px bg-gold/30 ml-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
