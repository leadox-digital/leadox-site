import { Logo } from './Logo';
import { WHATSAPP_URL } from './constants';
import { MessageCircle, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-dark border-t border-gold/10 py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col items-center text-center gap-8">
          <Logo />

          <div className="flex items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200"
              aria-label="Contato via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-montserrat font-normal text-sm">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/leadoxdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200"
              aria-label="Instagram da LeadoX Digital"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-montserrat font-normal text-sm">@leadoxdigital</span>
            </a>
          </div>

          <p className="font-montserrat font-semibold text-sm md:text-base text-gold">
            Sites estratégicos para quem não aceita ser apenas mais um
          </p>

          <div className="flex items-center gap-4 text-white/30">
            <a href="#" className="font-montserrat font-normal text-xs hover:text-white/60 transition-colors duration-200">
              Política de Privacidade
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="font-montserrat font-normal text-xs hover:text-white/60 transition-colors duration-200">
              Termos de Uso
            </a>
          </div>

          <p className="font-montserrat font-normal text-xs text-white/20">
            &copy; {new Date().getFullYear()} LeadoX Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
