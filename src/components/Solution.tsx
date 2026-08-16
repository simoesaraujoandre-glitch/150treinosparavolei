import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  const capabilities = [
    { icon: '🏐', name: 'Técnica dentro de quadra' },
    { icon: '💪', name: 'Força na academia' },
    { icon: '⚡', name: 'Impulsão e potência' },
    { icon: '🏃', name: 'Velocidade e deslocamento' },
    { icon: '🎯', name: 'Precisão e controle' },
    { icon: '🔥', name: 'Condicionamento' },
  ];

  return (
    <section className="bg-[#F8F9FB] py-14 sm:py-20 md:py-24 border-b border-[#DCE3EF] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-3xl mx-auto">
            TENHA UM TREINO PARA CADA <span className="text-[#1247D6]">PARTE DA SUA EVOLUÇÃO</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#596273] font-body max-w-2xl mx-auto leading-relaxed">
            Em vez de depender de exercícios aleatórios ou ficar procurando o que fazer toda vez que quiser treinar, tenha um repertório organizado para consultar sempre que precisar.
          </p>
        </div>

        {/* 6 Capabilities - Compact Clean Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 mb-10 sm:mb-14">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#DCE3EF] flex items-center gap-3 shadow-xs hover:border-[#1247D6]/40 transition-colors"
            >
              <span className="text-lg sm:text-xl select-none shrink-0">{cap.icon}</span>
              <span className="font-semibold text-[#111827] text-xs sm:text-sm font-body leading-snug">
                {cap.name}
              </span>
            </div>
          ))}
        </div>

        {/* Treine -> Repita -> Evolua Visual Element */}
        <div className="flex items-center justify-center pt-2">
          <div className="inline-flex items-center gap-3 sm:gap-5 px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-white border border-[#DCE3EF] shadow-xs">
            <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1247D6] tracking-wider">
              TREINE
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#596273]" />
            <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#111827] tracking-wider">
              REPITA
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#596273]" />
            <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1247D6] tracking-wider">
              EVOLUA
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

