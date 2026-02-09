export interface GuideItem {
    id: string;
    title: string;
    description: string;
    image: string;
    componentKey: 'marshmallow' | 'sales' | 'minidonas' | 'pdf' | 'coming_soon';
    pdfUrl?: string;
}

export const guides: GuideItem[] = [
    {
        id: 'g1',
        title: 'Guia de Marshmallows Caseiros',
        description: 'Aprenda a fazer marshmallows perfeitos sem forno. Técnicas, ingredientes e moldagem.',
        image: '/guia_1.png',
        componentKey: 'marshmallow'
    },
    {
        id: 'g2',
        title: 'Guia de Vendas',
        description: 'Estratégias para vender mais, calcular preços e usar redes sociais.',
        image: '/guia_ventas.png',
        componentKey: 'sales'
    },
    {
        id: 'g3',
        title: 'Guia de Mini Donuts',
        description: 'Receitas deliciosas e técnicas de decoração para mini donuts.',
        image: '/guia_minidonas.png',
        componentKey: 'minidonas',
        pdfUrl: '/guides/mini_donas.pdf'
    },
    {
        id: 'b1',
        title: '25 Moldes Imprimíveis',
        description: 'Coleção de moldes prontos para imprimir e usar em suas figuras.',
        image: '/bonus/moldes_cover.png',
        componentKey: 'pdf',
        pdfUrl: '/bonus/25_moldes.pdf'
    },
    {
        id: 'b2',
        title: 'Controle Financeiro',
        description: 'Planilha para gerenciar seus custos, lucros e despesas do negócio.',
        image: '/bonus/control_financiero_cover.png',
        componentKey: 'pdf',
        pdfUrl: '/bonus/control_financiero.pdf'
    },
    {
        id: 'b3',
        title: 'Controle de Pedidos',
        description: 'Formulário para organizar seus pedidos e não perder nenhum detalhe.',
        image: '/bonus/control_pedidos_cover.png',
        componentKey: 'pdf',
        pdfUrl: '/bonus/control_pedidos.pdf'
    },
    {
        id: 'g4',
        title: 'Pack Criativo',
        description: 'Em breve: Aprenda a usar aerógrafo e matizadores.',
        image: '/pack_creativo.png',
        componentKey: 'coming_soon'
    }
];
