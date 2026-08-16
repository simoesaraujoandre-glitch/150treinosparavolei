import React, { useState } from 'react';
import { Image as ImageIcon, Upload } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]", "aspect-[16/9]", "aspect-[1/1]"
  className?: string;
  badgeText?: string;
  heightClass?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  badgeText,
  heightClass,
}) => {
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImageUrl(url);
    }
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-[14px] border border-[#DCE3EF] bg-white transition-all duration-300 hover:border-[#1247D6]/50 hover:shadow-xs ${aspectRatio} ${heightClass || ''} ${className}`}
    >
      {customImageUrl ? (
        <div className="relative w-full h-full">
          <img
            src={customImageUrl}
            alt={label}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <label className="absolute inset-0 bg-[#111827]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-white text-xs font-semibold gap-2">
            <Upload className="w-4 h-4" />
            <span>Trocar Imagem</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-[#F8F9FB] text-center relative select-none">
          {badgeText && (
            <span className="absolute top-3 left-3 bg-[#EAF1FF] text-[#1247D6] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-body">
              {badgeText}
            </span>
          )}

          <div className="w-10 h-10 rounded-full bg-[#EAF1FF] text-[#1247D6] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <ImageIcon className="w-5 h-5 stroke-[1.75]" />
          </div>

          <p className="text-xs font-bold text-[#111827] font-body tracking-tight max-w-[90%] leading-snug">
            {label}
          </p>

          {sublabel && (
            <p className="text-[11px] text-[#596273] mt-1 max-w-[85%] leading-snug font-body">
              {sublabel}
            </p>
          )}

          <label className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#DCE3EF] text-[11px] font-medium text-[#1247D6] shadow-xs cursor-pointer hover:bg-[#EAF1FF] hover:border-[#1247D6] transition-all font-body">
            <Upload className="w-3 h-3" />
            <span>Adicionar imagem</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
  );
};

