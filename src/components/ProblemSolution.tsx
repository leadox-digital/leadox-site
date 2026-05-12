import { useScrollReveal } from '../hooks/useScrollReveal';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problema" className="section-padding bg-geometric">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-gold" strokeWidth={1.5} />
          </div>
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-6 leading-tight">
            Você pode estar perdendo clientes todos os dias — <span className="text-gold">(sem nem perceber)</span>
          </h2>
          <p className="font-montserrat font-normal text-base md:text-lg text-white/80 leading-relaxed mb-4">
            Quando alguém procura por uma estética automotiva na sua cidade, ela toma uma decisão em segundos.
          </p>
          <p className="font-montserrat font-normal text-base md:text-lg text-white/80 leading-relaxed mb-4">
            E nesse momento, a pergunta é simples:
          </p>
          <p className="font-montserrat font-semibold text-base md:text-lg text-white leading-relaxed mb-2">
            Sua empresa transmite confiança…
          </p>
          <p className="font-montserrat font-semibold text-base md:text-lg text-gold leading-relaxed mb-6">
            ou parece só mais uma?
          </p>
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="h-px w-12 bg-gold/30" />
            <ArrowRight className="w-5 h-5 text-gold" />
            <p className="font-montserrat font-semibold text-lg md:text-xl text-gold">
              É exatamente aqui que sua empresa começa a se destacar
            </p>
            <ArrowRight className="w-5 h-5 text-gold" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
