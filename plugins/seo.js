import siteConfig from "../src/site.config.js";

const escaparHtml = (texto) =>
  String(texto)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const comBarra = (url) => (url.endsWith("/") ? url : `${url}/`);

export function montarJsonLd(config = siteConfig) {
  const { negocio, contato, horario, redes, seo } = config;
  const { rua, bairro, cidade, uf, cep } = contato.endereco;

  const endereco = {
    "@type": "PostalAddress",
    streetAddress: [rua, bairro].filter(Boolean).join(" - ") || undefined,
    addressLocality: cidade || undefined,
    addressRegion: uf || undefined,
    postalCode: cep || undefined,
    addressCountry: "BR",
  };

  const horarios = horario.periodos.map((periodo) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: periodo.dias,
    opens: periodo.abre,
    closes: periodo.fecha,
  }));

  const dados = {
    "@context": "https://schema.org",
    "@type": seo.tipoSchema || "LocalBusiness",
    name: negocio.nome,
    description: seo.descricao || undefined,
    url: seo.url || undefined,
    telephone: contato.whatsapp ? `+${contato.whatsapp}` : undefined,
    email: contato.email || undefined,
    address: rua || cidade ? endereco : undefined,
    openingHoursSpecification: horarios.length > 0 ? horarios : undefined,
    sameAs: Object.values(redes).filter(Boolean),
  };
  if (dados.sameAs.length === 0) delete dados.sameAs;

  const json = JSON.stringify(dados, null, 2);
  JSON.parse(json);
  return json.replace(/</g, "\u003c");
}

export function montarHead(config = siteConfig) {
  const { seo } = config;
  const meta = [];
  const add = (atributo, nome, conteudo) => {
    if (conteudo) meta.push(`<meta ${atributo}="${nome}" content="${escaparHtml(conteudo)}" />`);
  };

  if (seo.noindex) add("name", "robots", "noindex, nofollow");
  add("name", "description", seo.descricao);
  add("property", "og:type", "website");
  add("property", "og:locale", seo.idioma.replace("-", "_"));
  add("property", "og:site_name", config.negocio.nome);
  add("property", "og:title", seo.ogTitulo || seo.titulo);
  add("property", "og:description", seo.ogDescricao || seo.descricao);
  if (seo.url) {
    add("property", "og:url", seo.url);
    meta.push(`<link rel="canonical" href="${escaparHtml(seo.url)}" />`);
  }
  const imagem = seo.url && seo.ogImagem ? `${comBarra(seo.url)}images/${seo.ogImagem}` : "";
  if (imagem) {
    add("property", "og:image", imagem);
    if (imagem.startsWith("https://")) add("property", "og:image:secure_url", imagem);
    add("property", "og:image:width", seo.ogImagemLargura);
    add("property", "og:image:height", seo.ogImagemAltura);
    add("property", "og:image:alt", seo.ogImagemAlt);
  }
  add("name", "twitter:card", imagem ? "summary_large_image" : "summary");
  add("name", "twitter:title", seo.ogTitulo || seo.titulo);
  add("name", "twitter:description", seo.ogDescricao || seo.descricao);
  add("name", "twitter:image", imagem);
  add("name", "twitter:image:alt", imagem ? seo.ogImagemAlt : "");
  const jsonLd = `<script type="application/ld+json">\n${montarJsonLd(config)}\n</script>`;
  return [...meta, jsonLd].join("\n    ");
}

export default function seoPlugin() {
  return {
    name: "site-config-seo",
    transformIndexHtml(html) {
      const { seo } = siteConfig;
      return html
        .replace(/<html lang="[^"]*"/, `<html lang="${escaparHtml(seo.idioma)}"`)
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escaparHtml(seo.titulo)}</title>`)
        .replace("</head>", `  ${montarHead(siteConfig)}\n</head>`);
    },
  };
}
