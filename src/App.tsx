import React from 'react';
import { Hero } from './components/Hero';
import { ProductDemo } from './components/ProductDemo';
import { PainPoint } from './components/PainPoint';
import { Solution } from './components/Solution';
import { WhatYouGet } from './components/WhatYouGet';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { FaqAndFinalCta } from './components/FaqAndFinalCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] selection:bg-[#EAF1FF] selection:text-[#1247D6]">
      
      {/* 01 HERO */}
      <Hero />

      {/* 02 DEMONSTRAÇÃO DO PRODUTO */}
      <ProductDemo />

      {/* 03 DOR */}
      <PainPoint />

      {/* 04 SOLUÇÃO */}
      <Solution />

      {/* 05 O QUE VOCÊ RECEBE */}
      <WhatYouGet />

      {/* 06 BÔNUS EXCLUSIVOS */}
      <Bonuses />

      {/* 07 PLANOS */}
      <Pricing />

      {/* 08 DEPOIMENTOS */}
      <Testimonials />

      {/* 09 GARANTIA */}
      <Guarantee />

      {/* 10 FAQ E CTA FINAL */}
      <FaqAndFinalCta />

    </div>
  );
}

