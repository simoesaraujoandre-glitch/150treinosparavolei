import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#F8F9FB] border-b border-[#DCE3EF] overflow-hidden">
      {/* Faixa azul destacada no topo (não fixa, some ao rolar) */}
      <div className="w-full bg-[#1247D6] text-white py-2.5 sm:py-3 px-4 text-center shadow-xs">
        <p className="text-xs sm:text-sm md:text-base font-heading font-normal uppercase tracking-wider text-white">
          EXCLUSIVO PARA ATLETAS DE VÔLEI QUE QUEREM EVOLUIR DE VERDADE
        </p>
      </div>

      {/* Subtle athletic background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#EAF1FF] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFF8E6] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-heading font-normal text-[#111827] leading-[0.95] tracking-wide mb-6 max-w-4xl mx-auto">
            <span className="text-[#1247D6]">+150 TREINOS</span> PARA VOCÊ <span className="text-[#1247D6]">EVOLUIR</span> DENTRO E FORA DA QUADRA
          </h1>

          {/* Product Mockup Centered */}
          <div className="relative w-full max-w-2xl flex justify-center mx-auto mb-6 sm:mb-8">
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/imagem/mockup.webp"
                alt="Mockup do Material +150 Treinos para Atletas de Vôlei"
                className="w-full h-auto max-h-[460px] sm:max-h-[500px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.01]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#596273] font-body font-normal leading-relaxed mb-7 max-w-2xl mx-auto">
            Treinos práticos para desenvolver fundamentos técnicos, força, impulsão, velocidade, condicionamento e outras capacidades importantes para o seu jogo.
          </p>

          {/* 4 Compact Benefits */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#DCE3EF] text-[#111827] shadow-xs">
              <span className="text-sm select-none">🏐</span>
              <span className="text-xs sm:text-sm font-medium font-body whitespace-nowrap">
                Treinos de quadra
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#DCE3EF] text-[#111827] shadow-xs">
              <span className="text-sm select-none">💪</span>
              <span className="text-xs sm:text-sm font-medium font-body whitespace-nowrap">
                Treinos de academia
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#DCE3EF] text-[#111827] shadow-xs">
              <span className="text-sm select-none">⚡</span>
              <span className="text-xs sm:text-sm font-medium font-body whitespace-nowrap">
                Impulsão e potência
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#DCE3EF] text-[#111827] shadow-xs">
              <span className="text-sm select-none">🎯</span>
              <span className="text-xs sm:text-sm font-medium font-body whitespace-nowrap">
                Precisão e controle
              </span>
            </div>
          </div>

          {/* CTA & Trust indicators */}
          <div className="w-full sm:w-auto flex flex-col items-center justify-center gap-3">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto min-h-[52px] px-9 py-3.5 rounded-[10px] bg-[#1247D6] hover:bg-[#0B2F8F] text-white font-heading text-xl sm:text-2xl tracking-wider transition-all duration-200 transform active:scale-[0.99] cursor-pointer shadow-md hover:shadow-lg text-center"
            >
              QUERO ACESSAR OS TREINOS
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#596273] font-body pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1247D6]" />
                Acesso imediato
              </span>
              <span className="text-[#DCE3EF]">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1247D6]" />
                Material digital
              </span>
              <span className="text-[#DCE3EF]">•</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#1247D6]" />
                Garantia de 7 dias
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


