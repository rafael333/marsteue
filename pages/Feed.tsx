
import React, { useState, useEffect, useRef } from 'react';
import { posts as initialPosts, Post } from '../data/posts';

interface FeedProps {
  onBack: () => void;
  onHomeClick: () => void;
  onProfileClick: () => void;
  onFavoritesClick: () => void;
}

const Feed: React.FC<FeedProps> = ({ onBack, onHomeClick, onProfileClick, onFavoritesClick }) => {
  const [allPosts, setAllPosts] = useState<Post[]>(initialPosts);
  const [likedPostIds, setLikedPostIds] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImage, setNewImage] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load local user posts
    const saved = localStorage.getItem('myPosts');
    if (saved) {
      try {
        const myPosts = JSON.parse(saved);
        setAllPosts([...initialPosts, ...myPosts]);
      } catch (e) {
        console.error("Failed to parse local posts");
      }
    }

    // Load liked posts
    const savedLikes = localStorage.getItem('likedPostIds');
    if (savedLikes) {
      try {
        setLikedPostIds(JSON.parse(savedLikes));
      } catch (e) {
        console.error("Failed to parse liked posts");
      }
    }
  }, []);

  const toggleLike = (postId: number) => {
    const isLiked = likedPostIds.includes(postId);
    let newLikedIds: number[];

    if (isLiked) {
      newLikedIds = likedPostIds.filter(id => id !== postId);
    } else {
      newLikedIds = [...likedPostIds, postId];
    }

    setLikedPostIds(newLikedIds);
    localStorage.setItem('likedPostIds', JSON.stringify(newLikedIds));
  };

  const handleCreatePost = () => {
    if (!newImage && !newCaption) return;

    const newPost: Post = {
      id: Date.now(),
      user: 'Você',
      userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      image: newImage,
      caption: newCaption,
      likes: 0,
      comments: 0,
      level: 'Iniciante'
    };

    const saved = localStorage.getItem('myPosts');
    const myPosts = saved ? JSON.parse(saved) : [];
    const updatedMyPosts = [newPost, ...myPosts];

    localStorage.setItem('myPosts', JSON.stringify(updatedMyPosts));
    setAllPosts([...initialPosts, ...updatedMyPosts]);

    setNewImage('');
    setNewCaption('');
    setIsModalOpen(false);
    setIsModalOpen(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32">
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1b120d] rounded-2xl p-6 w-full max-w-md shadow-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-4">Nova Publicação</h3>

            <label className="block text-sm font-bold text-[#9a664c] dark:text-white/60 mb-2">URL da Imagem</label>
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="Cole o link da imagem aqui..."
              className="w-full p-3 rounded-xl bg-background-light dark:bg-white/5 border border-primary/20 text-[#1b120d] dark:text-white mb-2 focus:outline-none focus:border-primary"
            />

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
              <span className="text-xs text-[#9a664c] dark:text-white/40 font-bold uppercase">O</span>
              <div className="h-px bg-black/10 dark:bg-white/10 flex-1"></div>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
              accept="image/*"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-2 rounded-xl border border-dashed border-primary/40 text-primary font-bold hover:bg-primary/5 transition-colors mb-4 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">upload_file</span>
              Enviar do Dispositivo
            </button>

            <label className="block text-sm font-bold text-[#9a664c] dark:text-white/60 mb-2">Descrição</label>
            <textarea
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
              placeholder="Escreva algo sobre seu doce..."
              className="w-full p-3 rounded-xl bg-background-light dark:bg-white/5 border border-primary/20 text-[#1b120d] dark:text-white mb-6 focus:outline-none focus:border-primary h-24 resize-none"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-xl text-[#9a664c] font-bold hover:bg-black/5 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreatePost}
                className="flex-1 py-3 rounded-xl bg-primary text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/30"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Comunidade</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-[#1b120d] dark:text-white size-10 flex items-center justify-center active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">add_box</span>
        </button>
      </header>

      <div className="flex flex-col gap-6 px-4 pt-4 text-[#1b120d] dark:text-white max-w-2xl mx-auto w-full">
        {allPosts.map(post => {
          const isLiked = likedPostIds.includes(post.id);
          const displayLikes = post.likes + (isLiked ? 1 : 0);

          return (
            <div key={post.id} className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <div className="flex items-center gap-3 p-4">
                <img src={post.userImg} className="size-10 rounded-full border border-primary/20" alt="" />
                <div>
                  <p className="text-sm font-bold text-[#1b120d] dark:text-white">{post.user}</p>
                  <p className="text-[10px] text-[#9a664c] dark:text-white/40 uppercase tracking-widest font-bold">{post.level || 'Iniciante'}</p>
                </div>
              </div>
              {post.video ? (
                <video src={post.video} controls className="w-full aspect-square object-cover" />
              ) : (
                <img src={post.image} className="w-full aspect-square object-cover" alt="" />
              )}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button onClick={() => toggleLike(post.id)} className={`flex items-center gap-1 transition-colors ${isLiked ? 'text-primary' : 'text-[#9a664c] dark:text-white/40'}`}>
                    <span className={`material-symbols-outlined ${isLiked ? 'fill-icon' : ''}`}>favorite</span>
                    <span className="text-xs font-bold">{displayLikes}</span>
                  </button>
                </div>
                <p className="text-sm text-[#1b120d] dark:text-white leading-relaxed">
                  <span className="font-bold mr-2">{post.user}</span>
                  {post.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] bg-white/90 dark:bg-[#1b120d]/90 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-black/5 flex items-center justify-between z-50">
        <button onClick={onHomeClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-primary cursor-pointer scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined fill-icon">dynamic_feed</span>
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

export default Feed;
