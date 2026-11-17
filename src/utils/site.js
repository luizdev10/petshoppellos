import siteConfig from "../site.config.js";

export function imagemUrl(arquivo) {
  return `${import.meta.env.BASE_URL}images/${arquivo}`;
}

export function enderecoLinhas(endereco = siteConfig.contato.endereco) {
  const { rua, bairro, cidade, uf, cep } = endereco;
  const cidadeUf = [cidade, uf].filter(Boolean).join("/");
  return [rua, [bairro, cidadeUf].filter(Boolean).join(" - "), cep ? `CEP ${cep}` : ""].filter(
    Boolean,
  );
}

export function redesPreenchidas() {
  const nomes = {
    instagram: "Instagram",
    facebook: "Facebook",
    tiktok: "TikTok",
    youtube: "YouTube",
  };
  return Object.entries(siteConfig.redes)
    .filter(([, url]) => Boolean(url))
    .map(([chave, url]) => ({ nome: nomes[chave] ?? chave, url }));
}

export function preencher(modelo, dados = {}) {
  return modelo.replace(/\{(\w+)\}/g, (_, chave) => String(dados[chave] ?? ""));
}

export function linkWhatsApp(mensagem = "") {
  const { whatsapp, prefixoMensagem = "" } = siteConfig.contato;
  const base = `https://wa.me/${whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(prefixoMensagem + mensagem)}` : base;
}

export function abrirWhatsApp(mensagem) {
  window.open(linkWhatsApp(mensagem), "_blank", "noopener,noreferrer");
}

export function publicUrl(arquivo) {
  return `${import.meta.env.BASE_URL}${arquivo}`;
}
