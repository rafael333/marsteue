
import React, { useState } from 'react';

interface LoginProps {
    onLogin: (name: string, email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted', { name, email });
        if (name.trim() && email.trim()) {
            onLogin(name.trim(), email.trim());
        } else {
            console.warn('Validation failed');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-marshmallow-pink via-background-light to-primary/10 dark:from-background-dark dark:via-background-dark dark:to-primary/5 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-white/5 rounded-3xl shadow-2xl p-8 border border-black/5">
                    {/* Logo/Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center size-20 rounded-full bg-primary/10 mb-4">
                            <span className="material-symbols-outlined text-primary text-5xl">cake</span>
                        </div>
                        <h1 className="text-[#1b120d] dark:text-white text-3xl font-extrabold mb-2">Bem-vinda!</h1>
                        <p className="text-[#9a664c] dark:text-white/60 text-sm">Entre para começar sua jornada com Marshmallows 2.0</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-[#1b120d] dark:text-white text-sm font-bold mb-2">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                                className="w-full px-4 py-3 rounded-xl border-2 border-marshmallow-pink/30 dark:border-white/10 bg-white dark:bg-white/5 text-[#1b120d] dark:text-white placeholder-[#9a664c]/50 dark:placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[#1b120d] dark:text-white text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className="w-full px-4 py-3 rounded-xl border-2 border-marshmallow-pink/30 dark:border-white/10 bg-white dark:bg-white/5 text-[#1b120d] dark:text-white placeholder-[#9a664c]/50 dark:placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 mt-6"
                        >
                            Entrar
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-[#9a664c] dark:text-white/40 text-xs mt-6">
                        Ao entrar, você aceita nossos termos de uso
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
