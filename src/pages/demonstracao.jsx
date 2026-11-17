import siteConfig from "../site.config.js";

const { demonstracao } = siteConfig;

export default function Demonstracao() {
  if (!demonstracao.ativo) return null;

  return (
    <div
      role="note"
      className="fixed inset-x-0 bottom-0 z-[600] bg-azul px-4 py-1.5 text-center font-['Inter'] text-xs font-semibold text-white"
    >
      {demonstracao.texto}
    </div>
  );
}
