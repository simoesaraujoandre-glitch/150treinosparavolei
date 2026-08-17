import React from 'react';
import { Check } from 'lucide-react';

export const WhatYouGet: React.FC = () => {
  const itemsCol1 = [
    'Treinos técnicos',
    'Treinos de ataque',
    'Treinos de defesa',
    'Treinos de recepção',
    'Treinos de saque',
    'Exercícios de precisão',
    'Exercícios de movimentação',
    'Treinos de impulsão',
    'Treinos de potência',
  ];

  const itemsCol2 = [
    'Treinos de força',
    'Treinos de academia',
    'Treinos de velocidade',
    'Treinos de condicionamento',
    'Situações mais próximas do jogo',
    'Diferentes níveis de dificuldade',
    'Material digital',
    'Acesso imediato',
  ];

  return (
    <section className="bg-[#F8F9FB] py-10 sm:py-14 md:py-16 border-b border-[#DCE3EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-3xl mx-auto">
            UM REPERTÓRIO COMPLETO PARA <span className="text-[#1247D6]">TRABALHAR O SEU JOGO</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#596273] font-body max-w-2xl mx-auto leading-relaxed">
            Ao acessar o material você terá diferentes tipos de treino para utilizar de acordo com aquilo que deseja desenvolver.
          </p>
        </div>

        {/* Dual Area Composition */}
        <div className="bg-white rounded-2xl border border-[#DCE3EF] p-6 sm:p-10 md:p-12 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DCE3EF]">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-[#111827] tracking-wide">
                +150 TREINOS DE VÔLEI
              </h3>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#596273] bg-[#F8F9FB] px-3.5 py-1.5 rounded-lg border border-[#DCE3EF] self-start sm:self-auto font-body">
              Acesso vitalício &amp; atualização contínua
            </div>
          </div>

          {/* Checklist: 2 Columns of clean items */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-3.5 max-w-4xl mx-auto">
              <div className="space-y-3.5">
                {itemsCol1.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#111827] font-medium text-sm sm:text-base font-body bg-[#F8F9FB] border border-[#DCE3EF] rounded-xl px-4 py-3 hover:border-[#1247D6]/30 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#EAF1FF] text-[#1247D6] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3.5">
                {itemsCol2.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#111827] font-medium text-sm sm:text-base font-body bg-[#F8F9FB] border border-[#DCE3EF] rounded-xl px-4 py-3 hover:border-[#1247D6]/30 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#EAF1FF] text-[#1247D6] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#DCE3EF] text-center">
            <p className="text-sm sm:text-base font-medium text-[#111827] font-body max-w-3xl mx-auto leading-relaxed">
              Tudo organizado em um único lugar para você consultar sempre que quiser trabalhar uma parte específica do seu desempenho.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

