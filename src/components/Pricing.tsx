import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="planos" className="bg-[#F8F9FB] py-10 sm:py-14 md:py-16 border-b border-[#DCE3EF] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-3xl mx-auto">
            ESCOLHA COMO VOCÊ QUER <span className="text-[#1247D6]">COMEÇAR</span>
          </h2>
        </div>

        {/* Pricing Cards Container: Premium FIRST and highlighted, Basic SECOND */}
        <div className="flex flex-col gap-8 lg:gap-10 items-center">
          
          {/* PLANO PREMIUM (Featured Card - Strong Visual Anchor) */}
          <div className="w-full max-w-2xl bg-white rounded-2xl border-2 border-[#1247D6] shadow-lg relative overflow-hidden transition-all">
            
            {/* Top Yellow Tag */}
            <div className="bg-[#F5B800] text-[#111827] font-heading font-normal text-sm sm:text-base uppercase tracking-wider text-center py-2 px-4">
              MAIS COMPLETO
            </div>

            <div className="p-6 sm:p-9">
              <div className="pb-5 mb-6 border-b border-[#DCE3EF]">
                <h3 className="text-3xl sm:text-4xl font-heading font-normal text-[#111827] tracking-wide">
                  PLANO PREMIUM
                </h3>
                <p className="text-xs sm:text-sm text-[#596273] font-body mt-1">
                  Para quem quer o material principal e todos os conteúdos extras.
                </p>
              </div>

              {/* Checklist Premium */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span>+250 Treinos de Vôlei</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span>Treinos de quadra</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span>Treinos de academia</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span className="font-semibold text-[#1247D6]">Plano de Evolução 30 Dias</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span className="font-semibold text-[#1247D6]">Rotina de Aquecimento para Vôlei</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span className="font-semibold text-[#1247D6]">50 Exercícios Extras de Vôlei</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span>Acesso digital</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body sm:col-span-2">
                  <Check className="w-4 h-4 text-[#1247D6] shrink-0 stroke-[2.5]" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>

              {/* Price Box */}
              <div className="bg-[#F8F9FB] rounded-xl p-5 border border-[#DCE3EF] text-center mb-6">
                <p className="text-xs sm:text-sm text-[#596273] font-body">
                  Valor total <span className="line-through font-semibold text-red-500">R$216</span>
                </p>
                <p className="text-xs uppercase tracking-wider text-[#1247D6] font-semibold mt-1 font-body">
                  HOJE POR APENAS
                </p>
                <p className="text-5xl sm:text-6xl font-heading font-normal text-[#111827] my-0.5 tracking-tight">
                  R$27,95
                </p>
                <p className="text-xs text-[#596273] font-body">Pagamento único</p>
              </div>

              {/* CTA Button Premium */}
              <a
                href="https://pay.wiapy.com/2KHOyUlkVWbb"
                className="block w-full py-4 px-6 rounded-[10px] bg-[#1247D6] hover:bg-[#0B2F8F] text-white font-heading font-normal text-xl sm:text-2xl text-center shadow-md hover:shadow-lg transition-all active:scale-[0.99] uppercase tracking-wider"
              >
                QUERO O PLANO PREMIUM
              </a>

              <p className="text-center text-xs text-[#596273] mt-2.5 font-body">
                Acesso imediato após a compra
              </p>
            </div>
          </div>


          {/* PLANO BÁSICO (Simpler, Secondary, Outline Button) */}
          <div className="w-full max-w-xl bg-white rounded-2xl border-2 border-[#1247D6] p-6 sm:p-8 shadow-sm relative">
            
            <div className="pb-5 mb-5 border-b border-[#DCE3EF]">
              <h3 className="text-2xl sm:text-3xl font-heading font-normal text-[#111827] tracking-wide">
                PLANO BÁSICO
              </h3>
              <p className="text-xs sm:text-sm text-[#596273] font-body mt-1">
                Para quem quer começar apenas com o material principal.
              </p>
            </div>

            {/* Checklist Basic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                <Check className="w-3.5 h-3.5 text-[#1247D6] shrink-0 stroke-[2.5]" />
                <span>+250 Treinos de Vôlei</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                <Check className="w-3.5 h-3.5 text-[#1247D6] shrink-0 stroke-[2.5]" />
                <span>Material principal completo</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                <Check className="w-3.5 h-3.5 text-[#1247D6] shrink-0 stroke-[2.5]" />
                <span>Acesso digital</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body">
                <Check className="w-3.5 h-3.5 text-[#1247D6] shrink-0 stroke-[2.5]" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#111827] font-body sm:col-span-2">
                <Check className="w-3.5 h-3.5 text-[#1247D6] shrink-0 stroke-[2.5]" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>

            {/* Price Box Basic */}
            <div className="bg-[#F8F9FB] rounded-xl p-4 border border-[#DCE3EF] text-center mb-5">
              <p className="text-xs text-[#596273] font-body">
                De <span className="line-through font-semibold text-red-500">R$69</span>
              </p>
              <p className="text-xs uppercase tracking-wider text-[#596273] font-semibold mt-0.5 font-body">
                POR APENAS
              </p>
              <p className="text-4xl sm:text-5xl font-heading font-normal text-[#111827] my-0.5 tracking-tight">
                R$14,95
              </p>
              <p className="text-xs text-[#596273] font-body">Pagamento único</p>
            </div>

            {/* CTA Button Basic - Outline */}
            <a
              href="https://pay.wiapy.com/rCu8CCIvXfq2"
              className="block w-full py-3 px-6 rounded-[10px] border border-[#1247D6] text-[#1247D6] hover:bg-[#EAF1FF] font-heading font-normal text-lg sm:text-xl text-center transition-all uppercase tracking-wider"
            >
              QUERO O PLANO BÁSICO
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

