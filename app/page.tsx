"use client";

export default function Home() {
  const promocoes = [
    {
      titulo: "Leve 3 Pague 2",
      descricao: "Na compra de 3 itens você paga apenas 2",
      banner: "/leve3pague2.jpg",
    },
    {
      titulo: "Mês Premiado",
      descricao: "15% de desconto todo mês de Janeiro",
      banner: "/15desc.jpg",
    },
    {
      titulo: "WhatsApp",
      descricao: "Sempre Disponíveis",
      banner: "/nossowhatsapp.jpg",
    },
  ];

  const criadores = [
    {
      nome: "Noturnolll",
      imagem: "/noturnolll.jpg",
      links: {
        youtube: "https://www.youtube.com/@noturnoragnarok",
        twitch: "",
        kick: "https://kick.com/noturnolll",
      },
    },
    {
      nome: "YuukiiBr",
      imagem: "/YuukiiBr.jpg",
      links: {
        youtube: "https://www.youtube.com/YuukiGamerBr",
        twitch: "https://www.twitch.tv/yuukiibr",
        kick: "https://kick.com/yuukiibr",
      },
    },
    {
      nome: "Julliezinha",
      imagem: "/Julliezinha.jpg",
      links: {
        youtube: "https://www.youtube.com/@Julliezinhafloquinho",
        twitch: "https://www.twitch.tv/julliezinha",
        kick: "https://kick.com/meowmeowzinha",
      },
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
                alt="Logo"
                className="h-10 w-auto drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              />
            </a>

            <nav className="hidden lg:flex gap-4">
              {categorias.map((cat) => (
                <a
                  key={cat}
                  href={`/loja/categoria/${cat}`}
                  className="px-4 py-2 text-xs font-semibold uppercase rounded-full border border-blue-500/30 text-gray-300 transition-all hover:text-white hover:border-blue-400 hover:bg-blue-500/20"
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
                className="px-5 py-2 text-sm font-semibold uppercase rounded-full border border-blue-500/30 text-gray-300 transition-all hover:text-white hover:border-blue-400 hover:bg-blue-500/20"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* BANNER PRINCIPAL */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center mt-[80px]"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-extrabold mb-4 text-blue-400">
            4S STORE
          </h1>
          <p className="text-xl text-blue-300 mb-10">
            Rápido e Barato
          </p>
          <a
            href="/loja"
            className="px-10 py-4 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Todos Produtos
          </a>
        </div>
      </section>

      {/* PROMOÇÕES */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Novidades
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-center">
          {promocoes.map((promo, index) => (
            <div
              key={index}
              className="w-full md:w-80 bg-black/60 rounded-2xl border border-blue-500/30 overflow-hidden hover:scale-105 transition"
            >
              <img
                src={promo.banner}
                alt={promo.titulo}
                className="h-64 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-blue-300">
                  {promo.titulo}
                </h3>
                <p className="text-sm text-gray-400">
                  {promo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRIADORES */}
      <section className="py-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Criadores de Conteúdo
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {criadores.map((creator) => (
            <div
              key={creator.nome}
              className="w-64 bg-black/60 rounded-2xl border border-blue-500/30 p-6 text-center"
            >
              <img
                src={creator.imagem}
                alt={creator.nome}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-blue-300">
                {creator.nome}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5524999561861"
        target="_blank"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-full font-bold shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}
