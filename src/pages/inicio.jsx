import siteConfig from "../site.config.js";
import { imagemUrl, linkWhatsApp } from "../utils/site.js";

const { negocio, contato, imagens, textos } = siteConfig;
const t = textos.inicio;
const imagem = imagens.inicio;

function Inicio() {
  return (
    <section
      id="inicio"
      className="overflow-hidden bg-fundo px-5 pb-12 pt-28 font-['Inter'] md:px-10 md:pb-20 md:pt-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-azul">
            {negocio.nome}
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-azul sm:text-5xl lg:text-6xl">
            {negocio.slogan}
          </h1>

          {t.subtitulo && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-texto sm:text-lg">
              {t.subtitulo}
            </p>
          )}

          {t.pilares.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {t.pilares.map((pilar) => (
                <span
                  key={pilar}
                  className="rounded-full bg-azul-100 px-3 py-1 text-xs font-semibold text-azul"
                >
                  {pilar}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {t.botaoPrincipal && (
              <a
                href={linkWhatsApp(contato.mensagens.contato)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-laranja px-6 py-3 font-semibold text-azul shadow-md transition hover:bg-laranja-claro focus:outline-none focus:ring-2 focus:ring-azul focus:ring-offset-2"
              >
                {t.botaoPrincipal}
              </a>
            )}

            {t.botaoSecundario && (
              <a
                href={t.botaoSecundarioUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-azul px-6 py-3 font-semibold text-azul transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-azul focus:ring-offset-2"
              >
                {t.botaoSecundario}
              </a>
            )}
          </div>

          {t.frase && <p className="mt-6 text-sm text-texto">{t.frase}</p>}
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-laranja/30" />

          <img
            src={imagemUrl(imagem.arquivo)}
            alt={imagem.alt}
            width={imagem.largura}
            height={imagem.altura}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Inicio;
