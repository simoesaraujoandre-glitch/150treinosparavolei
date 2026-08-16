import React from 'react';

export const Bonuses: React.FC = () => {
  const bonuses = [
    {
      badge: 'BÔNUS 01',
      title: 'PLANO DE EVOLUÇÃO 30 DIAS',
      desc: 'Organize seus treinos durante 4 semanas e tenha uma direção mais clara do que trabalhar ao longo do mês.',
      priceOld: 'R$59',
    },
    {
      badge: 'BÔNUS 02',
      title: 'ROTINA DE AQUECIMENTO PARA JOGADORES DE VÔLEI',
      desc: 'Prepare o corpo antes dos treinos de quadra ou academia com rotinas práticas de aquecimento.',
      priceOld: 'R$49',
    },
    {
      badge: 'BÔNUS 03',
      title: '50 EXERCÍCIOS EXTRAS DE VÔLEI',
      desc: 'Mais opções para variar seus treinos e trabalhar diferentes fundamentos sem ficar repetindo sempre os mesmos exercícios.',
      priceOld: 'R$39',
    },
  ];

  return (
    <section className="bg-[#F8F9FB] py-14 sm:py-20 md:py-24 border-b border-[#DCE3EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-3xl mx-auto">
            E VOCÊ AINDA RECEBE <span className="text-[#1247D6]">3 BÔNUS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#596273] font-body max-w-2xl mx-auto leading-relaxed">
            Além do material principal, o Plano Premium inclui conteúdos extras para organizar melhor seus treinos, preparar o corpo e aumentar ainda mais seu repertório.
          </p>
        </div>

        {/* 3 Unified Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-10">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DCE3EF] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#1247D6]/40 transition-all"
            >
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#FFF8E6] border border-[#F5B800]/40 text-[#B88700] text-xs font-bold uppercase tracking-wider font-body mb-4">
                  {bonus.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#111827] mb-2.5 leading-snug tracking-wide">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#596273] font-body leading-relaxed mb-6">
                  {bonus.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE3EF] flex flex-col gap-1.5">
                <span className="text-xs text-[#596273] font-medium font-body">
                  Valor normal <span className="line-through text-red-500 font-semibold">{bonus.priceOld}</span>
                </span>
                <span className="text-xs font-bold text-[#1247D6] bg-[#EAF1FF] px-2.5 py-1.5 rounded-lg inline-block uppercase font-body">
                  HOJE GRÁTIS NO PLANO PREMIUM
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Total Summary Footer */}
        <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 text-white text-center shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs uppercase tracking-widest text-[#EAF1FF] font-semibold font-body">VALOR TOTAL DOS BÔNUS</p>
            <p className="text-2xl sm:text-3xl font-heading font-normal line-through text-white/60 tracking-wider">R$147</p>
          </div>
          <div className="bg-[#F5B800] text-[#111827] px-6 py-2.5 rounded-xl font-heading font-normal text-lg sm:text-xl tracking-wider uppercase">
            INCLUSOS NO PLANO PREMIUM
          </div>
        </div>

      </div>
    </section>
  );
};
