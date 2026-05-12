import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Vale a pena investir em um site profissional para minha estética automotiva?',
    answer:
      'Com absoluta certeza. Um site profissional não é apenas uma vitrine; é o cartão de visitas digital premium do seu negócio. Enquanto plataformas como o Instagram são excelentes para mostrar o "antes e depois" e o dia a dia, o site é o ambiente onde seu cliente em potencial encontra a prova definitiva de sua seriedade e profissionalismo. É ali que ele pode explorar seus serviços em detalhes, entender sua metodologia, conferir depoimentos e, finalmente, sentir a confiança necessária para entregar o bem mais precioso dele — o carro — em suas mãos. Ter um site é a diferença crucial entre ser apenas mais um lavador e se posicionar como o especialista e referência em estética automotiva da sua região.',
  },
  {
    question: 'Eu pago antes ou depois de visualizar e aprovar meu site?',
    answer:
      'Na LeadoX Digital, nossa proposta é de risco zero para você. O pagamento é realizado somente após a visualização e aprovação completa do seu site. Isso significa que você terá a tranquilidade de ver seu projeto pronto, funcionando e exatamente como imaginou — ou até melhor — antes de qualquer compromisso financeiro. Nossa confiança na qualidade do nosso trabalho é a sua garantia de satisfação.',
  },
  {
    question: 'O site terá botão de WhatsApp e formulário de agendamento?',
    answer:
      'Sim, e com foco total na sua conversão! Seu site será equipado com um botão de WhatsApp de fácil acesso e destaque, permitindo que seus clientes entrem em contato com apenas um clique. Além disso, podemos integrar um formulário de agendamento intuitivo, otimizando o processo para que você receba solicitações de serviço de forma organizada e eficiente. Nosso objetivo é transformar visitantes em agendamentos reais, simplificando a vida do seu cliente e a sua.',
  },
  {
    question: 'Em quanto tempo meu site profissional fica pronto?',
    answer:
      'Entendemos a sua urgência em ter uma presença digital forte. Por isso, nossa entrega é incrivelmente rápida: seu site profissional estará pronto entre 24h e 72h após o envio das informações iniciais. Não queremos que você perca nem mais um dia de vendas e oportunidades. Em até 3 dias, sua estética automotiva terá um site moderno, otimizado para aparecer no Google e perfeitamente configurado para converter visitantes em agendamentos reais.',
  },
  {
    question: 'O que preciso enviar para iniciar a criação do meu site?',
    answer:
      'Simplificamos ao máximo o processo para você focar no que faz de melhor: cuidar dos carros. A LeadoX Digital pede apenas o nome da sua estética e o logotipo — e se você ainda não tiver um logotipo profissional, não se preocupe, nós o criamos como brinde para você! Todo o restante, como textos persuasivos, estrutura de navegação e layout de alta conversão, fica por nossa conta. Você cuida dos carros, a gente cuida do seu sucesso online.',
  },
  {
    question: 'Posso personalizar o site com meu logotipo e as cores da minha marca?',
    answer:
      'Absolutamente! A identidade visual da sua marca é fundamental. Seu site será totalmente personalizado para refletir a essência da sua estética automotiva, utilizando seu logotipo e a paleta de cores da sua marca. Garantimos que o design será coeso, profissional e alinhado com a imagem que você deseja transmitir aos seus clientes, reforçando sua marca e sua autoridade no mercado.',
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="objecoes" className="section-padding bg-gray-dark">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-10 text-center leading-tight">
            Perguntas Frequentes
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="card cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(openIndex === index ? null : index);
                  }
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-montserrat font-semibold text-base md:text-lg text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-montserrat font-normal text-sm md:text-base text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
