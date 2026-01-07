"use client";

/**
 * 🔴 MUITO IMPORTANTE
 * Esta linha impede o Next/Vercel de tentar prerenderizar a página
 * que usa useSearchParams()
 */
export const dynamic = "force-dynamic";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Produto = {
  nome: string;
  categoria: string;
  descricao: {
    visual: string;
    equipeEm: string;
    peso: string;
    nivelNecessario: string;
    classes: string;
  };
  imagem: string;
};

export default function LojaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoria = searchParams.get("categoria") || "todas";

  const [scrollY, setScrollY] = useState(0);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================
     CATEGORIAS
  ======================== */
  const categorias = [
    { nome: "Todas", link: "todas" },
    { nome: "Topo", link: "topo" },
    { nome: "Meio", link: "meio" },
    { nome: "Baixo", link: "baixo" },
    { nome: "Capa", link: "capa" },
    { nome: "Consumíveis", link: "consumiveis" },
    { nome: "Equipamentos", link: "equipamentos" },
  ];

  /* =======================
     PRODUTOS
  ======================== */
  const produtos: Produto[] = [
    {
      nome: "Cachecol Preto do Eremes",
      categoria: "baixo",
      descricao: {
        visual: "✔️",
        equipeEm: "Baixo",
        peso: "0",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/eremes preto.png",
    },
    {
      nome: "Cachecol Azul do Eremes",
      categoria: "baixo",
      descricao: {
        visual: "✔️",
        equipeEm: "Baixo",
        peso: "0",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/eremes azul.png",
    },
    {
      nome: "Cachecol Celestial",
      categoria: "baixo",
      descricao: {
        visual: "✔️",
        equipeEm: "Baixo",
        peso: "0",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/Cachecol Celestial.png",
    },
    {
      nome: "Cachecol dos Corajosos",
      categoria: "baixo", // 🔧 corrigido (antes estava "Baixo")
      descricao: {
        visual: "✔️",
        equipeEm: "Baixo",
        peso: "0",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/cachecol dos Corajosos.png",
    },
    {
      nome: "Cachecol Marrom com Laço",
      categoria: "baixo",
      descricao: {
        visual: "✔️",
        equipeEm: "Baixo",
        peso: "0",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/Cachecol Marrom com Laço.png",
    },
    {
      nome: "Aplique Duplo Branco",
      categoria: "baixo",
      descricao: {
        visual: "✔️",
        equipeEm: "Baixo",
        peso: "0",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/Aplique Duplo Branco.png",
    },
    {
      nome: "Cachecol Glorioso",
      categoria: "baixo",
      descricao: {
        visual: "✔️",
        equipeEm: "Capa",
        peso: "0",
        nivelNecessario: "3",
        classes: "Todas",
      },
      imagem: "/Cachecol Glorioso.png",
    },
    {
      nome: "Energia Drink",
      categoria: "consumiveis",
      descricao: {
        visual: "Bebida energética",
        equipeEm: "Consumíveis",
        peso: "0.2kg",
        nivelNecessario: "1",
        classes: "Todas",
      },
      imagem: "/produto-placeholder.jpg",
    },
    {
      nome: "Teclado Gamer",
      categoria: "equipamentos",
      descricao: {
        visual: "Teclado mecânico",
        equipeEm: "Equipamentos",
        peso: "1.5kg",
        nivelNecessario: "2",
        classes: "Todas",
      },
      imagem: "/produto-placeholder.jpg",
    },
  ];

  /* =======================
     FILTROS
  ======================== */
  const produtosFiltrados = produtos
    .filter((prod) =>
      categoria === "todas" ? true : prod.categoria === categoria
    )
    .filter((prod) =>
      prod.nome.toLowerCase().includes(busca.toLowerCase())
    );

  const mudarCategoria = (link: string) =>
    router.push(`/loja?categoria=${link}`);

  const irParaInicio = () => router.push("/");

  const categoriaAtual =
    categorias.find((c) => c.link === categoria)?.nome || "Todos os produtos";

  const botaoGlow =
    "flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300";

  return (
    <>
      {/* MENU FIXO */}
      <div
        className="fixed top-0 left-0 z-50 w-full py-3 backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: `rgba(0,0,0,${scrollY < 50 ? 0.3 : 0})`,
          opacity: scrollY < 50 ? 1 : 0,
        }}
      >
        <div className="max-w-6xl mx-auto flex gap-4 items-center overflow-x-auto px-6">
          {categorias.map((cat) => (
            <button
              key={cat.link}
              onClick={() => mudarCategoria(cat.link)}
              className={botaoGlow}
            >
              {cat.nome}
            </button>
          ))}
          <button onClick={irParaInicio} className={`${botaoGlow} ml-auto`}>
            Início
          </button>
        </div>
      </div>

      {/* BUSCA */}
      <div className="max-w-6xl mx-auto mt-28 flex justify-center mb-6 px-6">
        <input
          type="text"
          placeholder="Buscar produto..."
          className="w-full max-w-md px-4 py-2 rounded-full bg-black/30 border border-blue-500/30 text-white outline-none"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* CONTEÚDO */}
      <main className="min-h-screen bg-gray-900 text-white px-6 pb-20">
        <h1 className="text-4xl font-bold mb-10 text-center">
          {categoriaAtual}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {produtosFiltrados.map((prod, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="h-56 bg-gray-900 flex items-center justify-center">
                <img
                  src={prod.imagem}
                  alt={prod.nome}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-blue-400 mb-3">
                  {prod.nome}
                </h2>

                <p className="text-gray-300 text-sm mb-4">
                  <strong>Visual:</strong> {prod.descricao.visual} <br />
                  <strong>Equipe em:</strong> {prod.descricao.equipeEm} <br />
                  <strong>Peso:</strong> {prod.descricao.peso} <br />
                  <strong>Nível necessário:</strong>{" "}
                  {prod.descricao.nivelNecessario} <br />
                  <strong>Classes:</strong> {prod.descricao.classes}
                </p>

                <button className={`${botaoGlow} w-full justify-center`}>
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
