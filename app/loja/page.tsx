"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/* 🔥 força renderização dinâmica (corrige erro da Vercel) */
export const dynamic = "force-dynamic";

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

/* =========================
   COMPONENTE REAL DA PÁGINA
========================= */
function LojaConteudo() {
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

  const categorias = [
    { nome: "Todas", link: "todas" },
    { nome: "Topo", link: "topo" },
    { nome: "Meio", link: "meio" },
    { nome: "Baixo", link: "baixo" },
    { nome: "Capa", link: "capa" },
    { nome: "Consumíveis", link: "consumiveis" },
    { nome: "Equipamentos", link: "equipamentos" },
  ];

  const produtos: Produto[] = [
    {
      nome: "Cachecol Preto do Eremes",
      categoria: "baixo",
      descricao: { visual: "✔️", equipeEm: "Baixo", peso: "0", nivelNecessario: "1", classes: "Todas" },
      imagem: "/eremes preto.png",
    },
    {
      nome: "Cachecol Azul do Eremes",
      categoria: "baixo",
      descricao: { visual: "✔️", equipeEm: "Baixo", peso: "0", nivelNecessario: "1", classes: "Todas" },
      imagem: "/eremes azul.png",
    },
    {
      nome: "Cachecol Celestial",
      categoria: "baixo",
      descricao: { visual: "✔️", equipeEm: "Baixo", peso: "0", nivelNecessario: "1", classes: "Todas" },
      imagem: "/Cachecol Celestial.png",
    },
    {
      nome: "Energia Drink",
      categoria: "consumiveis",
      descricao: { visual: "Bebida energética", equipeEm: "Consumíveis", peso: "0.2kg", nivelNecessario: "1", classes: "Todas" },
      imagem: "/produto-placeholder.jpg",
    },
  ];

  const produtosFiltrados = produtos
    .filter((p) => (categoria === "todas" ? true : p.categoria === categoria))
    .filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase()));

  const botaoGlow =
    "px-4 py-2 rounded-full text-white border border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition";

  return (
    <>
      {/* MENU */}
      <div
        className="fixed top-0 left-0 z-50 w-full py-3 backdrop-blur-md"
        style={{ backgroundColor: `rgba(0,0,0,${scrollY < 50 ? 0.3 : 0})` }}
      >
        <div className="max-w-6xl mx-auto flex gap-3 px-6">
          {categorias.map((cat) => (
            <button key={cat.link} onClick={() => router.push(`/loja?categoria=${cat.link}`)} className={botaoGlow}>
              {cat.nome}
            </button>
          ))}
        </div>
      </div>

      {/* BUSCA */}
      <div className="max-w-6xl mx-auto mt-28 px-6">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar produto..."
          className="w-full max-w-md px-4 py-2 rounded-full bg-black/30 text-white"
        />
      </div>

      {/* PRODUTOS */}
      <main className="min-h-screen bg-gray-900 text-white px-6 pb-20 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {produtosFiltrados.map((prod, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 text-center">
              <img src={prod.imagem} className="h-48 w-full object-cover mb-4" />
              <h2 className="text-blue-400 font-bold">{prod.nome}</h2>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

/* =========================
   EXPORT COM SUSPENSE
========================= */
export default function LojaPage() {
  return (
    <Suspense fallback={<div className="text-white p-10">Carregando loja...</div>}>
      <LojaConteudo />
    </Suspense>
  );
}
