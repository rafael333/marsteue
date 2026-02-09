
import React from 'react';

interface ProfileProps {
  onBack: () => void;
  onFeedClick: () => void;
  onHomeClick: () => void;
  onFavoritesClick: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onBack, onFeedClick, onHomeClick, onFavoritesClick }) => {
  const achievements = [
    { id: 1, icon: 'auto_awesome', label: 'Mestre do Merengue', color: 'bg-amber-100 text-amber-600' },
    { id: 2, icon: 'cloud', label: 'Nuvem de Açúcar', color: 'bg-blue-100 text-blue-600' },
    { id: 3, icon: 'local_fire_department', label: 'Expert em Chama', color: 'bg-orange-100 text-orange-600' },
  ];

  const menuItems = [
    { icon: 'edit', label: 'Editar Perfil', sub: 'Nome, foto e bio' },
    { icon: 'workspace_premium', label: 'Certificados', sub: '6 cursos completados' },
    { icon: 'favorite', label: 'Minhas Receitas', sub: '24 salvas', action: onFavoritesClick },
    { icon: 'settings', label: 'Configurações', sub: 'Notificações e privacidade' },
    { icon: 'help', label: 'Suporte', sub: 'Fale com o chef' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Meu Perfil</h2>
        <button className="text-[#1b120d] dark:text-white size-10 flex items-center justify-center">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </header>

      <div className="max-w-3xl mx-auto w-full">
        <div className="flex flex-col items-center pt-6 pb-8 px-6">
          <div className="relative">
            <div
              className="size-32 rounded-full border-4 border-white dark:border-white/10 shadow-xl bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmNoU9wXxKixg_DdG0HSOnQaDF1QG_-Pbolpb146IreNq66ZdP1-WxtCsFOx1AuUob3BXGVXBbcLq2a2lYMZNQddlKO8M5WcIGh4UE63jjYr_qa6MWbLpKDbJdnw5p5uDcCGsfFXee1gD2IHNERQLjDhqFoUKwknq3TYagF49O54mj_c7XW16hN2B3Tbh48HPbMneMhyi6C_kyyWmJqnmJLYsWynZv2kVf3FxbYrmPjhCtNycr-WXPdUOcQ41DTw7UT0C8p8GsZjOP")' }}
            ></div>
            <div className="absolute bottom-1 right-1 bg-primary text-white size-8 rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark">
              <span className="material-symbols-outlined text-sm">verified</span>
            </div>
          </div>
          <h1 className="text-2xl font-black text-[#1b120d] dark:text-white mt-4">Ana Silva</h1>
          <p className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full mt-2">Confeiteira Especialista</p>
        </div>

        <div className="grid grid-cols-3 gap-4 px-6 py-4">
          {[
            { val: '12', label: 'Cursos' },
            { val: '48', label: 'Receitas' },
            { val: '3.2k', label: 'Seguidores' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-white/5 p-4 rounded-2xl border border-black/5 text-center shadow-sm">
              <p className="text-xl font-black text-[#1b120d] dark:text-white">{stat.val}</p>
              <p className="text-[10px] font-bold text-[#9a664c] dark:text-white/40 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="px-6 mt-6">
          <h3 className="text-[#1b120d] dark:text-white font-bold mb-4">Minhas Conquistas</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {achievements.map(item => (
              <div key={item.id} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className={`size-16 rounded-full flex items-center justify-center shadow-sm ${item.color}`}>
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <p className="text-[10px] font-bold text-center text-[#9a664c] dark:text-white/60 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 mt-8 flex flex-col gap-3">
          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={item.action}
              className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-black/5 cursor-pointer hover:bg-marshmallow-pink/30 transition-colors"
            >
              <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#1b120d] dark:text-white">{item.label}</p>
                <p className="text-xs text-[#9a664c] dark:text-white/40">{item.sub}</p>
              </div>
              <span className="material-symbols-outlined text-gray-300 dark:text-white/20">chevron_right</span>
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
        <button onClick={onFavoritesClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] font-bold">Conteúdo</span>
        </button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-primary cursor-pointer scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined fill-icon">person</span>
          <span className="text-[10px] font-bold">Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default Profile;
