import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  text: string;
  image: string;
  initials: string;
}

interface TestimonialsRowProps {
  reviews: Review[];
  direction: 'left' | 'right';
}

const TestimonialsRow: React.FC<TestimonialsRowProps> = ({ reviews, direction }) => {
  const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 ${animClass} whitespace-nowrap`}>
        {[...reviews, ...reviews, ...reviews].map((rev, idx) => (
          <div
            key={`${direction}-${idx}`}
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
              <img
                src={rev.image}
                alt={rev.name}
                className="w-10 h-10 rounded-full object-cover border border-[#DCE3EF] shrink-0"
                loading="lazy"
              />
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
  );
};

export const Testimonials: React.FC = () => {
  const allReviews: Review[] = [
    {
      name: 'Lucas S.',
      role: 'Ponteiro',
      text: 'Os treinos me ajudaram a entender o que fazer para melhorar meu ataque e salto. A evolução foi nítida na quadra!',
      image: '/imagem/jogador_11zon.webp',
      initials: 'LS',
    },
    {
      name: 'Camila R.',
      role: 'Levantadora',
      text: 'Muito bom ter vários exercícios organizados em um lugar só. Ganhei muito mais consistência e precisão nos levantamentos.',
      image: '/imagem/jogadora5_11zon.webp',
      initials: 'CR',
    },
    {
      name: 'Gabriel M.',
      role: 'Atleta Amador',
      text: 'Excelente material para quem joga e quer treinar por conta própria. Fichas muito diretas ao ponto e fáceis de aplicar.',
      image: '/imagem/jogador1_11zon.webp',
      initials: 'GM',
    },
    {
      name: 'Rafael F.',
      role: 'Central',
      text: 'O direcionamento para bloqueio e leitura de jogo mudou meu tempo de bola na rede. Valeu demais!',
      image: '/imagem/jogador2_11zon.webp',
      initials: 'RF',
    },
    {
      name: 'Beatriz D.',
      role: 'Líbero',
      text: 'Os exercícios de passe e defesa reflexa me deram muito mais segurança para receber saques pesados.',
      image: '/imagem/jpgadoras6_11zon.webp',
      initials: 'BD',
    },
    {
      name: 'Matheus O.',
      role: 'Oposto',
      text: 'Material completíssimo! Uso para complementar meus treinos físicos e técnicos durante toda a semana.',
      image: '/imagem/jogadp3_11zon.webp',
      initials: 'MO',
    },
    {
      name: 'Carlos C.',
      role: 'Treinador de Base',
      text: 'Uso as fichas para montar o planejamento dos treinos dos meus atletas. Prático e muito bem estruturado.',
      image: '/imagem/jpgador_11zon.webp',
      initials: 'CC',
    },
    {
      name: 'Felipe A.',
      role: 'Atleta Universitário',
      text: 'A divisão por fundamentos facilitou focar exatamente onde eu mais precisava evoluir no meu jogo.',
      image: '/imagem/jpgador4_11zon.webp',
      initials: 'FA',
    },
  ];

  return (
    <section className="bg-[#F8F9FB] py-10 sm:py-14 md:py-16 border-b border-[#DCE3EF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-normal text-[#111827] leading-[0.98] tracking-wide max-w-2xl mx-auto">
            O QUE DIZEM <span className="text-[#1247D6]">SOBRE O MATERIAL</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Carousel (Single Row) */}
      <div className="flex flex-col">
        <TestimonialsRow reviews={allReviews} direction="left" />
      </div>
    </section>
  );
};


