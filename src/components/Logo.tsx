interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-black';
  const goldColor = '#D4AF37';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-2">
        {/* LL Symbol - two stylized overlapping arrows */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 8L18 20L8 32" stroke={goldColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 8L28 20L18 32" stroke={goldColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </svg>
        <span className={`font-montserrat font-bold text-2xl md:text-3xl tracking-wider ${textColor}`}>
          LEADOX
        </span>
      </div>
      <span
        className="font-montserrat font-normal text-[10px] md:text-xs tracking-[3px] uppercase mt-1"
        style={{ color: goldColor }}
      >
        Crescimento Digital. Resultados Reais.
      </span>
    </div>
  );
}
