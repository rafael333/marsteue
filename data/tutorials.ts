import { Tutorial } from '../types';

export const tutorials: Tutorial[] = [
    {
        id: '1',
        title: 'Receita de Marshmallows Caseiros (Nuvens)',
        duration: '7:33',

        category: 'Decoração',
        imageUrl: '/cloud_marshmallows_cover.png',
        description: 'Este vídeo ensina a fazer figuras de animais utilizando uma receita simples de marshmallows (nuvens)',
        videoUrl: 'https://youtu.be/7vx3uRtXN28',
        ingredients: [
            { name: 'Açúcar', icon: 'cookie', details: '200 g' },
            { name: 'Xarope de açúcar invertido', icon: 'water_drop', details: '80 g (pode ser substituído por glicose de milho)' },
            { name: 'Água para o xarope', icon: 'water_drop', details: '60 ml' },
            { name: 'Gelatina em pó', icon: 'science', details: '13 g' },
            { name: 'Água para hidratar a gelatina', icon: 'water_drop', details: '65 ml' },
            { name: 'Sal', icon: 'auto_awesome', details: 'uma pitada' },
            { name: 'Para decorar', icon: 'palette', details: 'Corantes alimentícios em gel, canetas de tinta comestível, amido de milho e açúcar de confeiteiro (para polvilhar)' }
        ],
        steps: [
            { id: 1, title: 'Preparar a Gelatina e o Xarope', isCompleted: false, isLocked: false, startTime: 66 },
            { id: 2, title: 'Derreter a Gelatina', isCompleted: false, isLocked: true, startTime: 75 },
            { id: 3, title: 'Bater a Massa com o Xarope', isCompleted: false, isLocked: true, startTime: 92 },
            { id: 4, title: 'Colorir a Massa', isCompleted: false, isLocked: true, startTime: 129 },
            { id: 5, title: 'Preparar a Superfície', isCompleted: false, isLocked: true, startTime: 175 },
            { id: 6, title: 'Moldar os Animais', isCompleted: false, isLocked: true, startTime: 195 },
            { id: 7, title: 'Fazer Detalhes e Membros', isCompleted: false, isLocked: true, startTime: 218 },
            { id: 8, title: 'Corrigir Imperfeições', isCompleted: false, isLocked: true, startTime: 248 },
            { id: 9, title: 'Secagem e Polvilhar', isCompleted: false, isLocked: true, startTime: 405 },
            { id: 10, title: 'Desenhar Rostos e Expressões', isCompleted: false, isLocked: true, startTime: 461 }
        ]
    },
    {
        id: '2',
        title: 'Marshmallow Unicórnio',
        duration: '5:27',
        category: 'Decoração',
        imageUrl: '/unicorn_marshmallow_cover.png',
        description: 'Este vídeo foca na arte da finalização decorativa, ensinando como desenhar rostos delicados e expressivos em marshmallows de nuvens. Você aprenderá técnicas de pintura manual e o uso de ferramentas específicas para garantir que cada doce tenha um acabamento profissional e encantador',
        videoUrl: 'https://youtu.be/NkHc2Qz5U9I',
        ingredients: [
            { name: 'Gelatina', icon: 'water_drop', details: '24g de gelatina em folhas (hidratada em água fria)' },
            { name: 'Xarope de Açúcar', icon: 'cookie', details: '130g de açúcar refinado, 20g de água, 20g de mel e 20g de glicose de milho' },
            { name: 'Merengue', icon: 'egg', details: '70g de claras de ovo e 40g de açúcar refinado' },
            { name: 'Finalização', icon: 'auto_awesome', details: 'Corantes alimentícios variados e mistura de açúcar de confeiteiro com amido de milho (1:1)' }
        ],
        steps: [
            { id: 1, title: 'Hidratação da Gelatina', isCompleted: false, isLocked: false, startTime: 15 },
            { id: 2, title: 'Preparação do Xarope', isCompleted: false, isLocked: true, startTime: 50 },
            { id: 3, title: 'Bater o Merengue', isCompleted: false, isLocked: true, startTime: 80 },
            { id: 4, title: 'Incorporação do Xarope e Gelatina', isCompleted: false, isLocked: true, startTime: 112 },
            { id: 5, title: 'Coloração e Modelagem', isCompleted: false, isLocked: true, startTime: 140 },
            { id: 6, title: 'Secagem e Acabamento', isCompleted: false, isLocked: true, startTime: 280 },
            { id: 7, title: 'Resultado Final', isCompleted: false, isLocked: true, startTime: 334 }
        ]
    },
    {
        id: 'p1',
        title: 'Marshmallow caseiro',
        duration: '03:22',
        category: 'Iniciante',
        isPopular: true,
        imageUrl: '/highlight_marshmallow_cover.png',
        description: 'Este vídeo é um tutorial detalhado que ensina como fazer marshmallows caseiros em forma de \'nuvens\' de maneira artesanal.',
        videoUrl: 'https://youtu.be/IfdnqLMZ16A',
        steps: []
    },
    {
        id: 'p2',
        title: 'Marshmallow Unicórnio',
        duration: '5:27',
        category: 'Decoração',
        isPopular: true,
        imageUrl: '/unicorn_marshmallow_cover.png',
        description: 'Este vídeo foca na arte da finalização decorativa, ensinando como desenhar rostos delicados e expressivos em marshmallows de nuvens.',
        videoUrl: 'https://youtu.be/NkHc2Qz5U9I',
        steps: []
    },
    {
        id: '3',
        title: 'Marshmallow caseiro',
        duration: '03:22',
        category: 'Iniciante',
        imageUrl: '/highlight_marshmallow_cover.png',
        description: 'Este vídeo é um tutorial detalhado que ensina como fazer marshmallows caseiros em forma de \'nuvens\' de maneira artesanal. O conteúdo foca em técnicas de confeitaria para obter a textura ideal e o acabamento visual necessário para este tipo de doce decorado',
        videoUrl: 'https://youtu.be/IfdnqLMZ16A',
        ingredients: [
            { name: '250 ml de água quente', icon: 'water_drop' },
            { name: '20 g de gelatina sem sabor', icon: 'science' },
            { name: '20 g de gelatina de morango', icon: 'science', details: 'Ou outro sabor de sua preferência' },
            { name: '500 g de açúcar refinado', icon: 'cookie' },
            { name: 'Manteiga e açúcar extra', icon: 'auto_awesome', details: 'Para untar e polvilhar' }
        ],
        steps: [
            { id: 1, title: 'Mistura da água com as gelatinas', isCompleted: false, isLocked: false, startTime: 0 },
            { id: 2, title: 'Adição do açúcar refinado', isCompleted: false, isLocked: true, startTime: 43 },
            { id: 3, title: 'Bater a mistura na batedeira', isCompleted: false, isLocked: true, startTime: 60 },
            { id: 4, title: 'Colocação da massa na forma', isCompleted: false, isLocked: true, startTime: 83 },
            { id: 5, title: 'Tempo de descanso e polvilhar por cima', isCompleted: false, isLocked: true, startTime: 100 },
            { id: 6, title: 'Desenformar o marshmallow', isCompleted: false, isLocked: true, startTime: 118 },
            { id: 7, title: 'Corte em tiras e quadrados', isCompleted: false, isLocked: true, startTime: 148 },
            { id: 8, title: 'Cobertura final com açúcar', isCompleted: false, isLocked: true, startTime: 179 }
        ]
    },
    {
        id: '4',
        title: 'COMO FAZER MARSHMALLOWS',
        duration: '04:30',
        category: 'Decoração',
        isHighlight: true,
        imageUrl: '/cat_paws_marshmallow_cover.png',
        description: 'Aprenda a fazer adoráveis marshmallows em forma de patinhas de gato com esta receita detalhada.',
        videoUrl: 'https://youtu.be/69y2gBQomFM',
        ingredients: [
            { name: 'Gelatina', icon: 'science', details: '15 g de gelatina sem sabor (ou grenetina) e 35 ml de água' },
            { name: 'Merengue', icon: 'egg', details: '2 claras de ovo' },
            { name: 'Calda', icon: 'water_drop', details: '135 g de açúcar, 35 ml de água e 20 g de glicose' },
            { name: 'Acabamento e cor', icon: 'palette', details: 'Corante vegetal vermelho em gel (para tom rosa) e aprox. 500 g de fécula de milho' }
        ],
        steps: [
            { id: 1, title: 'Preparação da gelatina', isCompleted: false, isLocked: false, startTime: 10 },
            { id: 2, title: 'Montagem das claras', isCompleted: false, isLocked: true, startTime: 20 },
            { id: 3, title: 'Elaboração da calda', isCompleted: false, isLocked: true, startTime: 34 },
            { id: 4, title: 'Mistura dos ingredientes', isCompleted: false, isLocked: true, startTime: 60 },
            { id: 5, title: 'Cor e forma', isCompleted: false, isLocked: true, startTime: 95 },
            { id: 6, title: 'Acabamento final', isCompleted: false, isLocked: true, startTime: 187 },
            { id: 7, title: 'Conservação', isCompleted: false, isLocked: true, startTime: 260 }
        ]
    }
];
