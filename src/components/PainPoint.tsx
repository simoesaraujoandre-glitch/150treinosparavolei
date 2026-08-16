import React from 'react';

export const PainPoint: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-14 sm:py-20 md:py-24 border-b border-[#DCE3EF] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-2xl mx-auto">
            VOCÊ TREINA MAS SENTE QUE PODERIA <span className="text-[#1247D6]">EVOLUIR MUITO MAIS</span>
          </h2>
        </div>

        {/* Editorial Single Clean Surface */}
        <div className="bg-white rounded-2xl border border-[#DCE3EF] p-6 sm:p-10 md:p-12 shadow-xs">
          
          {/* Highlight Message with Blue Vertical Accent */}
          <div className="border-l-3 border-[#1247D6] pl-4 sm:pl-5 py-0.5 mb-7">
            <p className="text-[#111827] font-semibold text-base sm:text-lg font-body leading-snug">
              Nem sempre o treino coletivo consegue trabalhar exatamente aquilo que você precisa melhorar.
            </p>
          </div>

          {/* Clean Editorial List with Blue Dots */}
          <ul className="space-y-3.5 my-7 text-[#111827] font-body text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1247D6] mt-2 shrink-0" />
              <span>Talvez hoje você precise desenvolver mais o seu ataque.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1247D6] mt-2 shrink-0" />
              <span>Ou melhorar a recepção.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1247D6] mt-2 shrink-0" />
              <span>Ganhar mais impulsão.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1247D6] mt-2 shrink-0" />
              <span>Aumentar sua força.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1247D6] mt-2 shrink-0" />
              <span>Ser mais rápido dentro de quadra.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1247D6] mt-2 shrink-0" />
              <span>Ou simplesmente ter exercícios específicos para trabalhar seus pontos fracos.</span>
            </li>
          </ul>

          {/* Editorial Conclusion */}
          <div className="pt-6 border-t border-[#DCE3EF] space-y-1.5">
            <p className="text-[#596273] text-sm sm:text-base font-body">
              E muitas vezes o problema não é falta de vontade para treinar.
            </p>
            <p className="text-[#111827] font-bold text-base sm:text-lg font-body leading-snug">
              É não saber exatamente o que fazer para desenvolver cada parte do seu jogo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

