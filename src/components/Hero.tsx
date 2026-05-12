import { Logo } from './Logo';
import { WHATSAPP_URL } from './constants';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-diagonal-lines overflow-hidden"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3802529/pexels-photo-3802529.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" aria-hidden="true" />
      {/* Premium illumination behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" aria-hidden="true" />

      <div className="section-container relative z-10 text-center py-20 md:py-section-y">
        <Logo className="mb-12 md:mb-16" />

        <h1 className="font-montserrat font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto mb-8">
          Seja a <span className="text-gold">estética nº 1</span> da cidade e lote sua agenda com serviços de <span className="text-gold">alto valor</span>. Desenvolvemos seu site primeiro, você decide se <span className="text-gold">paga depois</span>.
        </h1>

        <h2 className="font-montserrat font-semibold text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/90">
          Chega de depender só do Instagram. Atraia clientes de luxo com um site profissional feito por{' '}
          <span className="font-bold text-gold">especialistas em estética automotiva</span>.{' '}
          <span className="font-bold text-gold">Risco zero</span>: você só investe quando aprovar o resultado.
        </h2>

        <p className="font-montserrat font-normal text-lg md:text-xl text-gold mb-10 max-w-2xl mx-auto">
          Você entrega o brilho impecável; nós entregamos os clientes de alto padrão. Chega de marketing amador na sua estética
        </p>

        <ul className="flex flex-col gap-4 mb-12 max-w-lg mx-auto text-left">
          {[
            'Clientes te encontrando no Google mesmo nos dias em que a correria não deixa você postar nada',
            'Maior percepção de valor e autoridade para justificar com facilidade o preço de um polimento ou vitrificação',
            'Chega de curiosos: receba no WhatsApp apenas leads qualificados e prontos para agendar o serviço',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-montserrat font-normal text-base md:text-lg text-white/90">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-glow text-lg px-10 py-5"
        >
          Quero ver como ficaria para a minha estética
        </a>
        <p className="font-montserrat font-normal text-sm text-white/50 mt-4">
          Sem compromisso. Sem risco.
        </p>
      </div>
    </section>
  );
}
