import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:bg-gold-dark transition-all duration-200 hover:scale-110"
      style={{ animation: 'floatPulse 2s ease-in-out infinite' }}
      aria-label="Falar no WhatsApp"
      onClick={() => (window as any).rastrearWhatsapp?.()}
    >
      <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
    </a>
  );
}
