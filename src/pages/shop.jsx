/*
import { useState } from "react";
import siteConfig from "../site.config.js";
import { abrirWhatsApp, imagemUrl, preencher } from "../utils/site.js";

const { contato, servicos, textos } = siteConfig;

const t = textos.shop;
const produtos = servicos.produtos.map((produto, indice) => ({ ...produto, id: indice + 1 }));

function comprarProduto(produto) {
  abrirWhatsApp(
    preencher(contato.mensagens.produto, {
      produto: produto.nome,
      preco: produto.preco,
    }),
  );
}

export default function Shop() {
  const produtosPorPagina = t.produtosPorPagina;
  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = indiceInicial + produtosPorPagina;

  const produtosVisiveis = produtos.slice(
    indiceInicial,
    indiceFinal
  );

  const totalDePaginas = Math.ceil(
    produtos.length / produtosPorPagina
  );

  return (
    <section
      id="shop"
      className="bg-fundo-alt px-5 py-16 md:px-10 lg:px-20 font-['Inter']"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="font-semibold text-azul">
            {t.eyebrow}
          </span>

          <h2 className="mt-2 text-3xl font-bold text-texto md:text-4xl">
            {t.titulo}
          </h2>

          <p className="mt-4 text-texto">
            {t.descricao}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produtosVisiveis.map((produto) => (
            <article
              key={produto.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={imagemUrl(produto.imagem)}
                alt={produto.nome}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-texto">
                  {produto.nome}
                </h3>

                {produto.preco && (
                  <strong className="mt-3 block text-xl text-azul">
                    {produto.preco}
                  </strong>
                )}

                <button
                  onClick={() => comprarProduto(produto)}
                  className="mt-5 w-full rounded-xl bg-laranja px-4 py-3 font-semibold text-azul transition hover:bg-laranja-claro"
                >
                  {t.botaoComprar}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            onClick={() =>
              setPaginaAtual((pagina) => pagina - 1)
            }
            disabled={paginaAtual === 1}
            className="rounded-lg bg-white px-4 py-2 text-texto shadow disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.anterior}
          </button>

          {Array.from({ length: totalDePaginas }, (_, index) => {
            const numeroDaPagina = index + 1;

            return (
              <button
                key={numeroDaPagina}
                onClick={() => setPaginaAtual(numeroDaPagina)}
                className={`h-10 w-10 rounded-lg font-semibold ${
                  paginaAtual === numeroDaPagina
                    ? "bg-azul text-white"
                    : "bg-white text-texto hover:bg-azul-100"
                }`}
              >
                {numeroDaPagina}
              </button>
            );
          })}

          <button
            onClick={() =>
              setPaginaAtual((pagina) => pagina + 1)
            }
            disabled={paginaAtual === totalDePaginas}
            className="rounded-lg bg-white px-4 py-2 text-texto shadow disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.proxima}
          </button>
        </div>
      </div>
    </section>
  );
}
*/
