import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Gem,
  Car,
  Zap,
  Crown,
  TrendingUp,
  LayoutList,
  MessageCircle,
} from 'lucide-react';

const benefits = [
  {
    icon: Gem,
    title: 'Valorize sua mão de obra',
    description:
      'Pare de disputar preço com o lava-rápido da esquina. Um site profissional mostra o verdadeiro valor do seu serviço e permite cobrar preços premium.',
  },
  {
    icon: Car,
    title: 'Atraia carros de alto padrão',
    description:
      'Clientes com carros de luxo procuram empresas que transmitam confiança, sofisticação e excelência desde o primeiro contato.',
  },
  {
    icon: Zap,
    title: 'Automatize o básico',
    description:
      'Seu site explica seus serviços automaticamente e faz você receber no WhatsApp apenas clientes realmente interessados.',
  },
  {
    icon: Crown,
    title: 'Autoridade máxima',
    description:
      'Seja visto como referência na sua região através de uma presença digital que gera confiança imediata.',
  },
  {
    icon: TrendingUp,
    title: 'Mais percepção de valor',
    description:
      'Um visual premium faz o cliente perceber que seu serviço entrega mais qualidade antes mesmo do contato.',
  },
  {
    icon: LayoutList,
    title: 'Clareza nos serviços',
    description:
      'Mostre polimento, vitrificação e higienização de forma clara, organizada e profissional.',
  },
  {
    icon: MessageCircle,
    title: 'Conversão via WhatsApp',
    description:
      'Botões estratégicos facilitam o contato e aumentam suas chances de fechar serviços.',
  },
];

export function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="beneficios" className="section-padding bg-diagonal-lines">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-4 leading-tight">
            A diferença entre ser só mais um e ser a autoridade da cidade
          </h2>
          <p className="font-montserrat font-normal text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Sua estética automotiva merece um posicionamento que atraia os melhores clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="card card-premium group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-montserrat font-semibold text-lg md:text-xl mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="font-montserrat font-normal text-sm md:text-base text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
