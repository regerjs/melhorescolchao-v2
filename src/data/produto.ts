export interface Produto {
  slug: string;
  titulo: string;
  tituloSidebar: string;
  breadcrumb: { label: string; href: string }[];
  estrelas: number;
  avaliacoesTexto: string;
  preco: string;
  linkAfiliado: string;
  versoes: { nome: string; desc: string; indicada?: boolean }[];
  sobre: { label: string; valor: string }[];
  comparacao: {
    titulo: string;
    colunas: string[];
    linhas: { criterio: string; destaque: string; outro: string }[];
  };
  review: {
    titulo: string;
    secoes: { subtitulo: string; texto: string }[];
    pros: string[];
    cons: string[];
  };
  specs: { label: string; valor: string }[];
  sidebullets: { tipo: 'ok' | 'no'; texto: string }[];
  sbVersion: string;
  imagens: { src: string; alt: string }[];
}

export const sofaChesterfield: Produto = {
  slug: '',
  titulo: 'Sofá 3 Lugares Sala de Estar 2,35M Chesterfield Pés Madeira Couro Capucino — Gran Belo',
  tituloSidebar: 'Gran Belo Chesterfield Couro Capucino',
  breadcrumb: [
    { label: 'Início', href: '/' },
    { label: 'Sofás', href: '#' },
    { label: 'Chesterfield', href: '#' },
  ],
  estrelas: 4.7,
  avaliacoesTexto: '4,7 de 5',
  preco: '9.449,00',
  linkAfiliado: 'https://link.amazon/B0fS3w1Zs',
  versoes: [
    { nome: 'Couro Capucino (3 lugares)', desc: '235 cm · pés madeira · couro legítimo', indicada: true },
    { nome: 'Couro Natural (3 lugares)', desc: 'mesma estrutura, cor mais clara' },
  ],
  sobre: [
    { label: 'Para quem é', valor: 'quem busca um sofá de alto padrão com estética clássica atemporal e materiais duráveis para a sala de estar' },
    { label: 'Revestimento', valor: 'couro legítimo com capitonê manual no encosto — desenvolve pátina ao longo dos anos, diferente do couro sintético (PU)' },
    { label: 'Estrutura', valor: 'madeira maciça interna + espuma D-33 no assento — firmeza e durabilidade superiores à média do mercado' },
    { label: 'Dimensões', valor: '235 cm de largura · 3 lugares · altura total aprox. 90 cm · assento a aprox. 46 cm do chão' },
    { label: 'Pés', valor: 'madeira torneada com acabamento tom tabaco — incluídos no produto' },
    { label: 'Montagem', valor: 'necessária em casa, recomenda-se 2 pessoas' },
    { label: 'Não tem', valor: 'mecanismo reclinável — sofá fixo com foco em elegância clássica' },
  ],
  comparacao: {
    titulo: 'Gran Belo Capucino ou Gran Belo Natural?',
    colunas: ['Gran Belo Capucino (este)', 'Gran Belo Natural'],
    linhas: [
      { criterio: 'O que é', destaque: 'Couro tom capucino/avelã', outro: 'Mesmo sofá, couro tom bege/natural' },
      { criterio: 'Disponibilidade', destaque: 'Nesta página', outro: 'Só para esclarecer, sem link' },
      { criterio: 'Como diferenciar', destaque: '"Capucino" ou "Avelã" no título', outro: '"Natural" ou "Bege" no título' },
      { criterio: 'Ambientação', destaque: 'Ambientes quentes e neutros', outro: 'Ambientes claros e neutros' },
    ],
  },
  review: {
    titulo: 'Análise Completa — Gran Belo Chesterfield 235cm Couro',
    secoes: [
      {
        subtitulo: 'Construção e qualidade dos materiais',
        texto: 'A estrutura interna em madeira maciça é o diferencial mais importante em um sofá de alto padrão. O Gran Belo usa espuma D-33 no assento e couro legítimo no revestimento. Diferente de couro PU, o couro genuíno respira, envelhece bem e suporta melhor o atrito diário — com cuidado básico, dura mais de 10 anos sem perder a aparência.',
      },
      {
        subtitulo: 'Conforto e ergonomia',
        texto: 'O capitonê no encosto cria áreas de apoio distintas que distribuem melhor a pressão lombar. A altura do assento próxima a 46 cm é confortável para adultos de estatura média a alta. O encosto alto do Chesterfield entrega uma sensação de "cadeira de clube" difícil de replicar com modelos de banco baixo.',
      },
    ],
    pros: [
      'Couro legítimo — durabilidade >10 anos',
      'Madeira maciça na estrutura interna',
      '235 cm generosos para 3 pessoas',
      'Design atemporal — funciona em vários estilos',
      'Pés torneados em madeira escura incluídos',
      'Frete via Amazon Brasil com rastreio',
    ],
    cons: [
      'Montagem requer duas pessoas',
      'Couro exige hidratação a cada 6–12 meses',
      'Peso elevado dificulta reposicionamento',
      'Sem mecanismo reclinável',
      'Prazo de entrega varia por região',
    ],
  },
  specs: [
    { label: 'Marca', valor: 'Gran Belo' },
    { label: 'Modelo', valor: 'Chesterfield Pés Madeira Couro Capucino' },
    { label: 'Largura total', valor: '235 cm' },
    { label: 'Profundidade', valor: 'Aprox. 85 cm' },
    { label: 'Altura total', valor: 'Aprox. 90 cm' },
    { label: 'Altura do assento', valor: 'Aprox. 46 cm' },
    { label: 'Revestimento', valor: 'Couro legítimo' },
    { label: 'Espuma assento', valor: 'D-33 (alta densidade)' },
    { label: 'Estrutura interna', valor: 'Madeira maciça' },
    { label: 'Pés', valor: 'Madeira torneada tom tabaco' },
    { label: 'Capacidade', valor: '3 lugares' },
    { label: 'Cores disponíveis', valor: 'Capucino / Natural' },
    { label: 'Montagem', valor: 'Necessária (2 pessoas recomendado)' },
  ],
  sidebullets: [
    { tipo: 'ok', texto: 'Couro legítimo (não PU)' },
    { tipo: 'ok', texto: 'Estrutura em madeira maciça' },
    { tipo: 'ok', texto: 'Frete rastreado via Amazon' },
    { tipo: 'no', texto: 'Sem mecanismo reclinável' },
  ],
  sbVersion: 'Versão: <strong>Capucino · 3 lugares · 235 cm</strong>',
  imagens: [
    { src: '/images/sofa-chesterfield/01-frontal.jpg', alt: 'Sofá Chesterfield Gran Belo 235cm Couro Capucino — vista frontal' },
    { src: '/images/sofa-chesterfield/02-ambiente.jpg', alt: 'Sofá Gran Belo Chesterfield no ambiente' },
    { src: '/images/sofa-chesterfield/03-medidas.jpg', alt: 'Diagrama de medidas 235x95x80cm' },
    { src: '/images/sofa-chesterfield/04-materiais.jpg', alt: 'Detalhe dos materiais' },
    { src: '/images/sofa-chesterfield/05-couro.jpg', alt: 'Amostra Couro Legítimo Avelã 465' },
    { src: '/images/sofa-chesterfield/06-traseira.jpg', alt: 'Vista traseira' },
  ],
};
