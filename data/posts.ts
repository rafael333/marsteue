

export interface Post {
    id: number;
    user: string;
    userImg: string;
    image: string;
    caption: string;
    likes: number;
    comments?: number;
    level?: string;
    isLiked?: boolean;
    video?: string;
}

export const posts: Post[] = [



    {
        id: 4,
        user: 'Carla Confeiteira',
        userImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop',
        caption: 'Pedido de hoje pronto para entregar! 🎁 #minidonuts',
        likes: 142,
        comments: 24,
        level: 'Intermediário'
    },

    {
        id: 6,
        user: 'Sofía Doces',
        userImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/736x/1a/6a/d7/1a6ad7c820cd19616e580f8901c92f46.jpg',
        caption: 'Pessoal, olhem a produção dos pedidos de hoje! 😍 Ficaram lindos demais, não? Estou apaixonada! 💖🍬 #confeitaria #marshmallow',
        likes: 184,
        comments: 34,
        level: 'Intermediário'
    },
    {
        id: 7,
        user: 'Café & Doçura',
        userImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/736x/55/a5/8b/55a58bdb53651ee5429a3b05ca20f783.jpg',
        caption: 'Nada melhor que um bom café acompanhado dessas delícias! ☕🍬 A combinação perfeita para a tarde.',
        likes: 189,
        comments: 24,
        level: 'Avançado'
    },
    {
        id: 8,
        user: 'Festas Mágicas',
        userImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/736x/6a/e9/80/6ae980ffe59355869b6ae5486e64760c.jpg',
        caption: 'Mesa de doces pronta para o aniversário de hoje! 🎉🎂 Tudo feito com amor e as técnicas do curso. As crianças vão adorar!',
        likes: 165,
        comments: 89,
        level: 'Intermediário'
    },
    {
        id: 9,
        user: 'Ana Aprendiz',
        userImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/1200x/85/d2/08/85d208fe3ff15a739c627de0fa6249bf.jpg',
        caption: 'Consegui! 🙌 Olhem o resultado depois de assistir a aula de marshmallows. Nunca pensei que sairiam tão bem de primeira! 😍',
        likes: 98,
        comments: 45,
        level: 'Iniciante'
    },
    {
        id: 10,
        user: 'Lúcia Empreendedora',
        userImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/1200x/03/cf/93/03cf9388a79f6d1d0a261c0dfe9f7dfd.jpg',
        caption: 'Graças às aulas do curso já tenho minha primeira entrega grande! 📦✨ Feliz de ver resultados tão rápido.',
        likes: 125,
        comments: 42,
        level: 'Iniciante'
    },
    {
        id: 11,
        user: 'Decorações Estela',
        userImg: 'https://images.unsplash.com/photo-1595769816263-9b9102c405fa?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/1200x/d7/a2/fe/d7a2fe8db53a89bbf78bacd900388d28.jpg',
        caption: 'Vamos decorar mais uma festa! 🎉🍭 Os marshmallows personalizados sempre são o centro das atenções.',
        likes: 176,
        comments: 67,
        level: 'Avançado'
    },
    {
        id: 12,
        user: 'Juliana Progresso',
        userImg: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=100&h=100&fit=crop',
        image: '',
        video: '/videos/evolution.mp4',
        caption: 'Desde minha primeira aula até hoje! 📈 A evolução é incrível. Nunca parem de praticar! 💪✨ #progresso #marshmallows',
        likes: 195,
        comments: 115,
        level: 'Avançado'
    }
];
