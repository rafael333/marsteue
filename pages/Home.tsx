
import React from 'react';
import { ChefTip } from '../types';
import { tutorials } from '../data/tutorials';

interface HomeProps {
  onLessonClick: (id: string) => void;
  onProfileClick: () => void;
  onFeedClick: () => void;
  onFavoritesClick: () => void;
  onCoursesClick: () => void;
  userName: string;
}

const Home: React.FC<HomeProps> = ({ onLessonClick, onProfileClick, onFeedClick, onFavoritesClick, onCoursesClick, userName }) => {
  const techniques = tutorials.filter(t => !t.isPopular && !t.isHighlight);
  const popular = tutorials.filter(t => t.isPopular);
  const highlightDate = tutorials.find(t => t.isHighlight) || tutorials[0];

  const tips: ChefTip[] = [
    { id: 't1', icon: 'thermostat', title: 'Temperatura da Calda', subtitle: 'O segredo dos 115°C' },
    { id: 't2', icon: 'humidity_mid', title: 'Controle de Umidade', subtitle: 'Evite o derretimento' },
    { id: 't3', icon: 'kitchen', title: 'Armazenamento', subtitle: 'Frescor por 3 semanas' }
  ];

  return (
    <div className="flex flex-col pb-32">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 justify-between">
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmNoU9wXxKixg_DdG0HSOnQaDF1QG_-Pbolpb146IreNq66ZdP1-WxtCsFOx1AuUob3BXGVXBbcLq2a2lYMZNQddlKO8M5WcIGh4UE63jjYr_qa6MWbLpKDbJdnw5p5uDcCGsfFXee1gD2IHNERQLjDhqFoUKwknq3TYagF49O54mj_c7XW16hN2B3Tbh48HPbMneMhyi6C_kyyWmJqnmJLYsWynZv2kVf3FxbYrmPjhCtNycr-WXPdUOcQ41DTw7UT0C8p8GsZjOP")' }}
          ></div>
          <div>
            <p className="text-xs text-[#9a664c] dark:text-white/60 font-medium">Bem-vinda de volta,</p>
            <h2 className="text-[#1b120d] dark:text-white text-base font-bold leading-tight">{userName}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-full size-10 bg-white dark:bg-white/10 shadow-sm border border-black/5">
            <span className="material-symbols-outlined text-[#1b120d] dark:text-white">search</span>
          </button>
          <button className="flex items-center justify-center rounded-full size-10 bg-white dark:bg-white/10 shadow-sm border border-black/5">
            <span className="material-symbols-outlined text-[#1b120d] dark:text-white">notifications</span>
          </button>
        </div>
      </header>

      <section className="px-4 mt-2" onClick={() => onLessonClick(highlightDate.id)}>
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-80 md:min-h-[500px] relative group cursor-pointer shadow-lg transition-transform hover:scale-[1.01]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%), url("${highlightDate.imageUrl}")`
          }}
        >
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
            Destaque
          </div>
          <div className="flex flex-col p-6 gap-2">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">{highlightDate.title}</h1>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-white/90 text-[10px] md:text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">play_circle</span> {highlightDate.duration}
              </span>
              <span className="flex items-center gap-1 text-white/90 text-[10px] md:text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">star</span> {highlightDate.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between px-4 pb-2">
          <h2 className="text-[#1b120d] dark:text-white text-xl font-bold tracking-tight">Novas Técnicas</h2>
          <button onClick={() => { }} className="text-primary text-sm font-bold">Ver tudo</button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-4 gap-4 py-2 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible">
          {techniques.map(t => (
            <div key={t.id} className="flex flex-col gap-3 min-w-[180px] group cursor-pointer" onClick={() => onLessonClick(t.id)}>
              <div
                className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl shadow-md transition-transform group-hover:scale-[1.02]"
                style={{ backgroundImage: `url("${t.imageUrl}")` }}
              ></div>
              <div>
                <p className="text-[#1b120d] dark:text-white text-sm font-bold leading-tight">{t.title}</p>
                <p className="text-[#9a664c] dark:text-primary text-xs font-medium mt-1">{t.duration} • {t.category}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-3 min-w-[120px] items-center justify-center md:hidden snap-start">
            <div className="w-full aspect-[4/5] bg-primary/5 dark:bg-white/5 rounded-xl flex items-center justify-center border-2 border-primary/20 border-dashed">
              <span className="material-symbols-outlined text-primary text-3xl animate-pulse">arrow_forward</span>
            </div>
            <div className="h-[38px]"></div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between px-4 pb-2">
          <h2 className="text-[#1b120d] dark:text-white text-xl font-bold tracking-tight">Mais Populares</h2>
        </div>
        <div className="px-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {popular.map(p => (
            <div key={p.id} onClick={() => onLessonClick(p.id)} className="flex items-center gap-4 bg-white dark:bg-white/5 p-3 rounded-xl border border-black/5 group cursor-pointer hover:bg-marshmallow-pink/30 dark:hover:bg-primary/5 transition-colors">
              <div
                className="size-16 rounded-lg bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url("${p.imageUrl}")` }}
              ></div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-[#1b120d] dark:text-white uppercase tracking-tighter">{p.title}</h4>
                <p className="text-xs text-[#9a664c] dark:text-white/60 leading-tight">{p.description}</p>
              </div>
              <div className="text-primary group-hover:translate-x-1 transition-transform">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 mb-4">
        <div className="flex items-center justify-between px-4 pb-2">
          <h2 className="text-[#1b120d] dark:text-white text-xl font-bold tracking-tight">Dicas do Chef</h2>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-4 gap-3 py-2 md:grid md:grid-cols-3">
          {tips.map(tip => (
            <div key={tip.id} className="min-w-[140px] bg-primary/5 dark:bg-primary/20 p-4 rounded-xl border border-primary/20 flex flex-col gap-2 transition-transform hover:scale-105">
              <span className="material-symbols-outlined text-primary text-3xl">{tip.icon}</span>
              <p className="text-[#1b120d] dark:text-white text-[11px] font-bold leading-tight">{tip.title}</p>
              <p className="text-[#9a664c] dark:text-white/80 text-[10px]">{tip.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] bg-white/90 dark:bg-[#1b120d]/90 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-black/5 flex items-center justify-between z-50">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-primary cursor-pointer scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined fill-icon">home</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>

        <button onClick={onFeedClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">dynamic_feed</span>
          <span className="text-[10px] font-bold">Comunidade</span>
        </button>
        <button onClick={onFavoritesClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">favorite</span>
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

export default Home;
