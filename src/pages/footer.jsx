import { Clock3, Mail, MapPin, PawPrint, Phone } from "lucide-react";
import siteConfig from "../site.config.js";
import { enderecoLinhas, linkWhatsApp, redesPreenchidas } from "../utils/site.js";

const { negocio, contato, horario, textos } = siteConfig;
const t = textos.rodape;

export default function Footer() {
  const telefone = contato.whatsapp;
  const linhasEndereco = enderecoLinhas();
  const redes = redesPreenchidas();

  const enderecoConteudo = (
    <span>
      {linhasEndereco.map((linha, indice) => (
        <span key={linha}>
          {indice > 0 && <br />}
          <span>{linha}</span>
        </span>
      ))}
    </span>
  );

  return (
    <footer className="bg-azul text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3">
            <PawPrint aria-hidden="true" className="h-8 w-8 text-laranja" />
            <span className="text-xl font-bold uppercase">{negocio.nome}</span>
          </a>

          {negocio.descricaoCurta && (
            <p className="mt-4 max-w-sm leading-relaxed text-azul-100">
              {negocio.descricaoCurta}
            </p>
          )}

          {redes.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-4 text-azul-100">
              {redes.map((rede) => (
                <li key={rede.nome}>
                  <a
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white hover:underline"
                  >
                    {rede.nome}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label={t.labelNavegacao}>
          <h2 className="mb-4 text-lg font-semibold">{t.tituloNavegacao}</h2>

          <ul className="space-y-3">
            {t.links.map((link) => (
              <li key={link.destino}>
                <a
                  href={link.destino}
                  className="text-azul-100 transition hover:text-white hover:underline"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-lg font-semibold">{t.tituloContato}</h2>

          <ul className="space-y-4 text-azul-100">
            {telefone && (
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                <a
                  href={linkWhatsApp(contato.mensagens.rodape)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white hover:underline"
                >
                  {t.textoWhatsapp}
                </a>
              </li>
            )}

            {contato.email && (
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                <a
                  href={`mailto:${contato.email}`}
                  className="transition hover:text-white hover:underline"
                >
                  {contato.email}
                </a>
              </li>
            )}

            {horario.texto && (
              <li className="flex items-start gap-3">
                <Clock3 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                <span>{horario.texto}</span>
              </li>
            )}

            {linhasEndereco.length > 0 && (
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                {contato.mapa ? (
                  <a
                    href={contato.mapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white hover:underline"
                  >
                    {enderecoConteudo}
                  </a>
                ) : (
                  enderecoConteudo
                )}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-azul-600 px-6 py-5 text-center text-sm text-azul-200">
        {t.copyright}
      </div>
    </footer>
  );
}
