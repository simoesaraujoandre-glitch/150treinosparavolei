import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-10 sm:py-14 md:py-16 border-b border-[#DCE3EF] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-[#DCE3EF] p-8 sm:p-12 shadow-xs text-center relative">
          
          {/* Subtle Shield Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EAF1FF] border border-[#1247D6]/20 text-[#1247D6] mb-5 shadow-xs">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-2xl mx-auto mb-4">
              EXPERIMENTE O MATERIAL POR <span className="text-[#1247D6]">7 DIAS</span>
            </h2>
            <p className="text-[#596273] text-sm sm:text-base font-body leading-relaxed max-w-2xl mx-auto mb-6">
              Acesse o material, veja os treinos, aplique na sua rotina. Se dentro de 7 dias você achar que o conteúdo não faz sentido para você, basta pedir o reembolso.
            </p>
            <div className="pt-5 border-t border-[#DCE3EF] inline-block">
              <p className="text-xs sm:text-sm font-bold text-[#111827] font-body tracking-wider uppercase">
                Simples, direto e sem burocracia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

