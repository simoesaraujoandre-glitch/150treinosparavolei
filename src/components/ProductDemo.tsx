import React from 'react';

interface TrainingImage {
  id: string;
  src: string;
  alt: string;
}

interface CarouselRowProps {
  images: TrainingImage[];
  direction: 'left' | 'right';
  eager?: boolean;
}

const CarouselRow: React.FC<CarouselRowProps> = ({ images, direction, eager = false }) => {
  const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="w-full overflow-hidden flex relative select-none">
      <div className={`flex gap-3.5 sm:gap-4 ${animClass} whitespace-nowrap`}>
        {[...images, ...images].map((img, idx) => (
          <div
            key={`${direction}-${img.id}-${idx}`}
            className="w-56 sm:w-64 md:w-72 shrink-0 aspect-[416/600]"
          >
            <div className="relative w-full h-full group overflow-hidden rounded-[14px] border border-[#DCE3EF] bg-[#EAEEF6] shadow-xs transition-all duration-300 hover:border-[#1247D6]/50 hover:shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                width={416}
                height={600}
                className="w-full h-full object-cover rounded-[13px] transition-transform duration-300 group-hover:scale-[1.02]"
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductDemo: React.FC = () => {
  // Carrossel 1: 5 imagens (treinos 1 a 5)
  const carousel1Images: TrainingImage[] = [
    { id: 't1', src: '/treinos/treino-1.webp', alt: 'Treino de Vôlei 01' },
    { id: 't2', src: '/treinos/treino-2.webp', alt: 'Treino de Vôlei 02' },
    { id: 't3', src: '/treinos/treino-3.webp', alt: 'Treino de Vôlei 03' },
    { id: 't4', src: '/treinos/treino-4.webp', alt: 'Treino de Vôlei 04' },
    { id: 't5', src: '/treinos/treino-5.webp', alt: 'Treino de Vôlei 05' },
  ];

  // Carrossel 2: 5 imagens (treinos 6 a 10)
  const carousel2Images: TrainingImage[] = [
    { id: 't6', src: '/treinos/treino-6.webp', alt: 'Treino de Vôlei 06' },
    { id: 't7', src: '/treinos/treino-7.webp', alt: 'Treino de Vôlei 07' },
    { id: 't8', src: '/treinos/treino-8.webp', alt: 'Treino de Vôlei 08' },
    { id: 't9', src: '/treinos/treino-9.webp', alt: 'Treino de Vôlei 09' },
    { id: 't10', src: '/treinos/treino-10.webp', alt: 'Treino de Vôlei 10' },
  ];

  // Carrossel 3: 5 imagens (treinos 11 a 15)
  const carousel3Images: TrainingImage[] = [
    { id: 't11', src: '/treinos/treino-11.webp', alt: 'Treino de Vôlei 11' },
    { id: 't12', src: '/treinos/treino-12.webp', alt: 'Treino de Vôlei 12' },
    { id: 't13', src: '/treinos/treino-13.webp', alt: 'Treino de Vôlei 13' },
    { id: 't14', src: '/treinos/treino-14.webp', alt: 'Treino de Vôlei 14' },
    { id: 't15', src: '/treinos/treino-15.webp', alt: 'Treino de Vôlei 15' },
  ];

  return (
    <section className="bg-[#F8F9FB] py-10 sm:py-14 md:py-16 overflow-hidden border-b border-[#DCE3EF]">
      <div className="flex flex-col gap-4 sm:gap-5">
        <CarouselRow images={carousel1Images} direction="left" eager />
        <CarouselRow images={carousel2Images} direction="right" />
        <CarouselRow images={carousel3Images} direction="left" />
      </div>
    </section>
  );
};

