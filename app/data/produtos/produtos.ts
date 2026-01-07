export interface Produto {
  nome: string;
  preco: string;
  imagem: string;
  categoria: string;
  descricao: string;
}

export const produtos: Produto[] = [
  {
    nome: "Capacete Sombrio",
    preco: "25,00",
    imagem: "/produtos/capacete.png",
    categoria: "topo",
    descricao: "Um capacete antigo e amaldiçoado."
  },
  {
    nome: "Armadura Negra",
    preco: "80,00",
    imagem: "/produtos/armadura.png",
    categoria: "meio",
    descricao: "Proteção forjada nas sombras."
  },
  {
    nome: "Botas do Vento",
    preco: "40,00",
    imagem: "/produtos/botas.png",
    categoria: "baixo",
    descricao: "Aumenta a velocidade do portador."
  },
  {
    nome: "Capa Sombria",
    preco: "30,00",
    imagem: "/produtos/capa.png",
    categoria: "capa",
    descricao: "Oculta a presença do usuário."
  },
  {
    nome: "Poção de Vida",
    preco: "10,00",
    imagem: "/produtos/pocao.png",
    categoria: "consumiveis",
    descricao: "Recupera a vida."
  }
];
