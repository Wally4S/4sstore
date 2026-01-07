"use client";

export default function Home() {
  const promocoes = [
    { titulo: "Leve 3 Pague 2", descricao: "Na compra de 3 itens você paga apenas 2", banner: "/leve3pague2.jpg" },
    { titulo: "Mês Premiado", descricao: "15% de desconto todo mês de Janeiro", banner: "/15desc.jpg" },
    { titulo: "WhatsApp", descricao: "Sempre Disponíveis", banner: "/nossowhatsapp.jpg" },
  ];

  const criadores = [
    {
      nome: "Noturnolll",
      imagem: "/noturnolll.jpg",
      links: { youtube: "https://www.youtube.com/@noturnoragnarok", twitch: "", kick: "https://kick.com/noturnolll" }
    },
    {
      nome: "YuukiiBr",
      imagem: "/YuukiiBr.jpg",
      links: { youtube: "https://www.youtube.com/YuukiGamerBr", twitch: "https://www.twitch.tv/yuukiibr", kick: "https://kick.com/yuukiibr" }
    },
    {
      nome: "Julliezinha",
      imagem: "/Julliezinha.jpg",
      links: { youtube: "https://www.youtube.com/@Julliezinhafloquinho", twitch: "https://www.twitch.tv/julliezinha", kick: "https://kick.com/meowmeowzinha" }
    },
  ];

  const categorias = ["topo", "meio", "baixo", "capa", "consumiveis"];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center transition hover:scale-105">
              <img
                src="/logo.png"
                alt=""
                className="h-10 w-auto drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_24px_rgba(59,130,246,1)]"
              />
            </a>

            <nav className="hidden lg:flex gap-4">
              {categorias.map((cat) => (
                <a
                  key={cat}
                  href={`/loja/categoria/${cat}`}
                  className="px-4 py-2 text-xs font-semibold uppercase rounded-full border border-blue-500/30 text-gray-300 transition-all duration-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
                >
                  {cat}
                </a>
              ))}
            </nav>
          </div>

          <nav className="flex gap-3">
            {["INÍCIO", "LOJA", "CONTATO"].map((item) => (
              <a
                key={item}
                href={item === "INÍCIO" ? "/" : `/${item.toLowerCase()}`}
                className="px-5 py-2 text-sm font-semibold uppercase rounded-full border border-blue-500/30 text-gray-300 transition-all duration-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* RESTO DA PÁGINA */}
      {/* ⚠️ todo o restante do seu código continua IGUAL */}
      {/* banner, promoções, criadores, whatsapp etc */}

    </main>
  );
}
