import { produtos, Produto } from "../../../data/produtos/produtos";

interface Props {
  params: {
    categoria: string;
  };
}

export default function CategoriaPage({ params }: Props) {
  const { categoria } = params;

  // Filtra produtos da categoria
  const produtosFiltrados: Produto[] = produtos.filter(
    (produto) => produto.categoria === categoria
  );

  if (produtosFiltrados.length === 0) {
    return <div style={{ padding: "20px" }}>
      <h1>Categoria: {categoria}</h1>
      <p>Nenhum produto encontrado para essa categoria.</p>
    </div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Categoria: {categoria}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {produtosFiltrados.map((produto, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
            <h2 style={{ fontSize: "16px", margin: "10px 0 5px" }}>
              {produto.nome}
            </h2>
            <p style={{ fontSize: "14px", margin: "0 0 5px" }}>
              {produto.descricao}
            </p>
            <p style={{ fontWeight: "bold", margin: 0 }}>R$ {produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
