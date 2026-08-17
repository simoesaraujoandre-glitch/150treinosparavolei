import React, { useState } from 'react';
import { ChevronDown, Check, ShieldCheck, Lock } from 'lucide-react';

export const FaqAndFinalCta: React.FC = () => {
  const faqs = [
    {
      q: 'Como recebo o material?',
      a: 'Após a confirmação do pagamento você recebe as orientações de acesso imediatamente por e-mail para consultar todo o conteúdo digital.',
    },
    {
      q: 'O acesso é vitalício?',
      a: 'Sim. Você terá acesso contínuo ao material e a todas as futuras atualizações sem cobranças adicionais.',
    },
    {
      q: 'Serve para quem joga em qualquer posição?',
      a: 'Sim. O material possui treinos específicos para ponteiros, levantadores, centrais, opostos e líberos, além de preparação física geral.',
    },
    {
      q: 'Preciso de academia para fazer os treinos?',
      a: 'Não obrigatoriamente. O conteúdo possui treinos técnicos e físicos para quadra e treinos complementares para quem treina em academia.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o material não é para você, basta solicitar o reembolso integral.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F8F9FB]">
      
      {/* FAQ Section */}
      <section className="py-10 sm:py-14 md:py-16 border-b border-[#DCE3EF] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide">
              DÚVIDAS <span className="text-[#1247D6]">FREQUENTES</span>
            </h2>
          </div>

          {/* Clean Lightweight Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#DCE3EF] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F9FB] transition-colors"
                  >
                    <span className="font-semibold text-[#111827] text-sm sm:text-base font-body">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-[#EAF1FF] text-[#1247D6] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1247D6] text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-[#596273] font-body text-xs sm:text-sm leading-relaxed border-t border-[#DCE3EF] pt-3.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#F8F9FB] py-10 sm:py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="bg-white rounded-2xl border-2 border-[#1247D6] p-8 sm:p-12 md:p-14 shadow-md relative overflow-hidden">
            
            <span className="inline-block px-3 py-1 rounded-md bg-[#EAF1FF] text-[#1247D6] text-xs font-semibold uppercase tracking-wider font-body mb-4">
              +150 TREINOS DE VÔLEI
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide mb-4 max-w-2xl mx-auto">
              COMECE A TREINAR COM MAIS DIREÇÃO <span className="text-[#1247D6]">HOJE MESMO</span>
            </h2>

            <p className="text-[#596273] text-sm sm:text-base font-body max-w-xl mx-auto mb-7 leading-relaxed">
              Tenha acesso imediato aos treinos e comece a aplicar na sua rotina.
            </p>

            {/* Final CTA Button */}
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto px-9 py-3.5 rounded-[10px] bg-[#1247D6] hover:bg-[#0B2F8F] text-white font-heading font-normal text-xl sm:text-2xl tracking-wider shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer uppercase mb-6 inline-block"
            >
              VER PLANOS DISPONÍVEIS
            </button>

            {/* Subtext Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#596273] font-medium pt-4 border-t border-[#DCE3EF] font-body">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1247D6]" />
                Acesso imediato
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#1247D6]" />
                Pagamento 100% seguro
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1247D6]" />
                Garantia de 7 dias
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Clean Dark Footer */}
      <footer className="bg-[#111827] text-white/70 py-10 text-center text-xs font-body border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 space-y-2.5">
          <p className="font-heading font-normal text-white text-lg tracking-wider">
            +150 TREINOS DE VÔLEI
          </p>
          <p className="text-white/60 text-xs">
            Material digital para desenvolvimento técnico, físico e tático no voleibol.
          </p>
          <p className="text-white/40 pt-2 border-t border-white/10 text-[11px]">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
};

