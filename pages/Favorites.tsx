import React, { useState } from 'react';
import { guides } from '../data/guides';
import MarshmallowGuide from '../components/MarshmallowGuide';
import SalesGuide from '../components/SalesGuide';
import MiniDonasGuide from '../components/MiniDonasGuide';
import PdfGuide from '../components/PdfGuide';

interface FavoritesProps {
  onBack: () => void;
  onHomeClick: () => void;
  onFeedClick: () => void;
  onProfileClick: () => void;
  onLessonClick: (id: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ onBack, onHomeClick, onFeedClick, onProfileClick }) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const selectedGuide = guides.find(g => g.id === selectedGuideId);

  // If a guide is selected, render it
  if (selectedGuide && selectedGuide.componentKey === 'marshmallow') {
    return <MarshmallowGuide onBack={() => setSelectedGuideId(null)} />;
  }

  if (selectedGuide && selectedGuide.componentKey === 'sales') {
    return <SalesGuide onBack={() => setSelectedGuideId(null)} />;
  }

  if (selectedGuide && selectedGuide.componentKey === 'minidonas') {
    return <MiniDonasGuide onBack={() => setSelectedGuideId(null)} />;
  }

  if (selectedGuide && selectedGuide.componentKey === 'pdf' && selectedGuide.pdfUrl) {
    return (
      <PdfGuide
        onBack={() => setSelectedGuideId(null)}
        pdfUrl={selectedGuide.pdfUrl}
        title={selectedGuide.title}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Minhas Guias</h2>
        <div className="w-10"></div>
      </header>

      <div className="px-4 py-4">
        <div className="bg-marshmallow-pink/30 dark:bg-primary/5 p-6 rounded-3xl border border-primary/10 mb-6 text-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-2 fill-icon">auto_stories</span>
          <h3 className="text-lg font-black text-[#1b120d] dark:text-white">Biblioteca de Conhecimentos</h3>
          <p className="text-sm text-[#9a664c] dark:text-white/60">Suas guias e manuais técnicos.</p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {guides.map(guide => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuideId(guide.id)}
              className={`bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-black/5 shadow-sm transition-transform cursor-pointer ${guide.componentKey !== 'coming_soon' ? 'active:scale-98 hover:shadow-md' : 'opacity-70'}`}
            >
              <div className="flex h-56">
                <div
                  className="w-40 h-full bg-cover bg-center shrink-0 shadow-xl"
                  style={{ backgroundImage: `url("${guide.image}")` }}
                ></div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <span className={`text-[10px] font-black tracking-wider uppercase mb-1 ${guide.componentKey === 'pdf' ? 'text-green-500' : (guide.title.includes('Pack') ? 'text-purple-500' : 'text-primary')}`}>
                    {guide.componentKey === 'pdf' ? 'Bônus' : (guide.title.includes('Pack') ? 'Pack' : 'Guia')}
                  </span>
                  <h4 className="text-xl font-bold text-[#1b120d] dark:text-white leading-tight mb-2">{guide.title}</h4>
                  <p className="text-sm text-[#9a664c] dark:text-white/60 leading-snug line-clamp-4">{guide.description}</p>
                  {guide.componentKey === 'coming_soon' && (
                    <span className="mt-3 text-xs font-bold bg-gray-200 text-gray-500 px-3 py-1 rounded-full w-fit">Em breve</span>
                  )}
                </div>
                <div className="flex items-center justify-center px-4 text-primary">
                  <span className="material-symbols-outlined text-3xl">chevron_right</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] bg-white/90 dark:bg-[#1b120d]/90 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-black/5 flex items-center justify-between z-50">
        <button onClick={onHomeClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>

        <button onClick={onFeedClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">dynamic_feed</span>
          <span className="text-[10px] font-bold">Comunidade</span>
        </button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-primary cursor-pointer scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined fill-icon">favorite</span>
          <span className="text-[10px] font-bold">Conteúdo</span>
        </button>
        <button disabled className="flex flex-col items-center gap-1 text-[#9a664c]/40 dark:text-white/20 cursor-not-allowed opacity-50 relative">
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-full shadow-lg">Manutenção</div>
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Em breve</span>
        </button>
      </nav>
    </div>
  );
};

export default Favorites;
