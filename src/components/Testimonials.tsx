import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  text: string;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const reviewsRow1: Review[] = [
    {
      name: 'Lucas S.',
      role: 'Ponteiro',
      text: 'Os treinos me ajudaram a entender o que fazer para melhorar meu ataque e salto. A evolução foi nítida na quadra!',
      initials: 'LS',
    },
    {
      name: 'Camila R.',
      role: 'Levantadora',
      text: 'Muito bom ter vários exercícios organizados em um lugar só. Ganhei muito mais consistência e precisão nos levantamentos.',
      initials: 'CR',
    },
    {
      name: 'Gabriel M.',
      role: 'Atleta Amador',
      text: 'Excelente material para quem joga e quer treinar por conta própria. Fichas muito diretas ao ponto e fáceis de aplicar.',
      initials: 'GM',
    },
    {
      name: 'Rafael F.',
      role: 'Central',
      text: 'O direcionamento para bloqueio e leitura de jogo mudou meu tempo de bola na rede. Valeu demais!',
      initials: 'RF',
    },
  ];

  const reviewsRow2: Review[] = [
    {
      name: 'Beatriz D.',
      role: 'Líbero',
      text: 'Os exercícios de passe e defesa reflexa me deram muito mais segurança para receber saques pesados.',
      initials: 'BD',
    },
    {
      name: 'Matheus O.',
      role: 'Oposto',
      text: 'Material completíssimo! Uso para complementar meus treinos físicos e técnicos durante toda a semana.',
      initials: 'MO',
    },
    {
      name: 'Juliana C.',
      role: 'Treinadora de Base',
      text: 'Uso as fichas para montar o planejamento dos treinos das minhas alunas. Prático e muito bem estruturado.',
      initials: 'JC',
    },
    {
      name: 'Felipe A.',
      role: 'Atleta Universitário',
      text: 'A divisão por fundamentos facilitou focar exatamente onde eu mais precisava evoluir no meu jogo.',
      initials: 'FA',
    },
  ];

  return (
    <section className="bg-[#F8F9FB] py-14 sm:py-20 md:py-24 border-b border-[#DCE3EF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-2xl mx-auto">
            O QUE DIZEM <span className="text-[#1247D6]">SOBRE O MATERIAL</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Carousels */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Carrossel Linha 1 - Movimento para a Esquerda */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
            {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-80 sm:w-96 shrink-0 whitespace-normal bg-white rounded-2xl border border-[#DCE3EF] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-[#1247D6]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-3 text-[#F5B800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-[#111827] font-body leading-relaxed mb-5 font-medium">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-[#DCE3EF]">
                  <div className="w-9 h-9 rounded-full bg-[#EAF1FF] text-[#1247D6] font-bold text-xs font-body flex items-center justify-center shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm font-body leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-[#596273] font-body">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel Linha 2 - Movimento para a Direita */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right whitespace-nowrap">
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-80 sm:w-96 shrink-0 whitespace-normal bg-white rounded-2xl border border-[#DCE3EF] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-[#1247D6]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-3 text-[#F5B800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-[#111827] font-body leading-relaxed mb-5 font-medium">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-[#DCE3EF]">
                  <div className="w-9 h-9 rounded-full bg-[#EAF1FF] text-[#1247D6] font-bold text-xs font-body flex items-center justify-center shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm font-body leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-[#596273] font-body">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


