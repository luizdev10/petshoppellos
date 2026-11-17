import { useEffect, useState } from "react";
import siteConfig from "../site.config.js";
import { abrirWhatsApp, imagemUrl, preencher } from "../utils/site.js";

const { contato, servicos: dadosServicos, imagens, textos, demonstracao } = siteConfig;
const t = textos.estetica;
const m = t.modal;
const aviso = textos.avisoPrivacidade;
const imagem = imagens.estetica;

export default function BanhoTosa() {
  const [modalAgendar, setModalAgendar] = useState(false);
  const [servicoDesejado, setServicoDesejado] = useState("");

  useEffect(() => {
    if (modalAgendar) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [modalAgendar]);

  function abrirAgendamento(servico) {
    setServicoDesejado(servico);
    setModalAgendar(true);
  }

  function enviarWhatsBanho(event) {
    event.preventDefault();
    const dados = new FormData(event.currentTarget);
    const obter = (campo) => String(dados.get(campo) ?? "");

    abrirWhatsApp(
      preencher(contato.mensagens.banho, {
        servico: servicoDesejado,
        nomeTutor: obter("nomeTutor"),
        nomePet: obter("nomePet"),
        telefone: obter("telefone"),
        porte: obter("porte"),
        raca: obter("raca"),
      }).trim(),
    );
  }

  const servicos = dadosServicos.estetica;

  const inputClass =
    "rounded-lg border border-azul-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-texto-suave focus:border-azul focus:ring-2 focus:ring-azul-100";

  function Campo({ id, tipo = "text", dados }) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="text-sm font-medium text-texto">
          {dados.rotulo}
        </label>

        <input
          id={id}
          name={id}
          type={tipo}
          placeholder={dados.placeholder}
          className={inputClass}
          required
        />
      </div>
    );
  }

  return (
    <>
      <main>
        <section
          id="banhoetosa"
          className="w-full h-full bg-fundo flex px-8 lg:justify-around scroll-mt-24"
        >
          <div className="pt-12 w-full lg:w-120 ">
            <p className="text-azul font-['Inter'] text-sm">
              {" "}
              {t.eyebrow}
            </p>
            <h2 className="font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter'] ">
              {t.titulo}
            </h2>

            <div className="flex items-center md:pt-8">
              <p className="text-texto text-sm md:text-lg">
                {t.descricao}
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              {t.botaoAgendar && (
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => abrirAgendamento(t.servicoPadrao)}
                  className="bg-laranja p-3 text-azul text-sm flex text-center items-center rounded-md cursor-pointer font-['Inter'] font-semibold capitalize hover:bg-laranja-claro"
                >
                  {t.botaoAgendar}
                </button>
              )}
              {t.botaoServicos && (
                <a
                  href={t.botaoServicosUrl}
                  className=" p-3 font-['Inter'] capitalize text-sm flex text-center items-center border-2 border-azul rounded-md hover:bg-azul hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {t.botaoServicos}
                </a>
              )}
            </div>

            {t.diferenciais.length > 0 && (
              <div className="pt-3 pb-2 flex justify-around md:gap-2 font-light">
                {t.diferenciais.map((item) => (
                  <p key={item} className="text-[12px] md:text-sm">{item}</p>
                ))}
              </div>
            )}
          </div>

          <div className="p-5 hidden md:flex items-center">
            <img
              src={imagemUrl(imagem.arquivo)}
              alt={imagem.alt}
              width={imagem.largura}
              height={imagem.altura}
              loading="lazy"
              decoding="async"
              className="h-80 w-80 lg:w-140 lg:h-100 object-cover rounded-3xl shadow-md"
            />
          </div>
        </section>

        <section
          id="servicos"
          className="w-full h-full bg-fundo-alt font-['Inter'] py-4 scroll-mt-24"
        >
          <div className="flex flex-col justify-center items-center px-4 pt-10">
            <p className="text-azul font-['Inter'] text-sm">
              {t.servicosEyebrow}
            </p>
            <h2 className="text-center font-bold text-4xl pt-5 pb-1 md:text-5xl font-['Inter']">
              {t.servicosTitulo}
            </h2>
            <p className="text-azul text-md w-80 text-center md:text-lg lg:w-100">
              {t.servicosSubtitulo}
            </p>
            {t.avisoPreco && (
              <p className="text-[10px] w-80 text-center font-light">
                {t.avisoPreco}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-4xl mx-auto">
            {servicos.map((item) => (
              <div
                key={item.nome}
                className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border border-azul-100 w-full"
              >
                <h3 className="font-bold text-lg text-azul">
                  {item.nome}
                </h3>

                {item.descricao && (
                  <p className="font-light text-texto text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                )}

                <div className="flex items-center justify-between mt-1 border-t border-azul-100 pt-3">
                  {item.preco && (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-texto-suave uppercase tracking-wide">
                        {t.aPartirDe}
                      </span>
                      <span className="font-bold text-lg text-texto">
                        {item.preco}
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => abrirAgendamento(item.nome)}
                    className="ml-auto bg-laranja px-4 py-2 text-azul text-sm text-center rounded-lg cursor-pointer font-['Inter'] font-semibold hover:bg-laranja-claro transition-colors shadow-sm"
                  >
                    {item.botao}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {modalAgendar && (
            <div
              className="fixed inset-0 z-[500] flex items-center justify-center bg-black/30 px-4 py-6"
              onClick={() => setModalAgendar(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-agendamento"
                className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setModalAgendar(false)}
                  aria-label={m.fechar}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-2xl text-texto-suave transition hover:bg-azul-100 hover:text-texto"
                >
                  &times;
                </button>

                <div className="mb-6 pr-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-azul">
                    {m.eyebrow}
                  </p>

                  <h3
                    id="titulo-agendamento"
                    className="mt-1 text-2xl font-bold text-azul"
                  >
                    {m.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                    {m.intro}
                  </p>
                </div>

                {servicoDesejado && (
                  <p className="mb-4 rounded-lg bg-azul-100 px-3 py-2 text-sm font-semibold text-azul">
                    {m.servicoEscolhido} {servicoDesejado}
                  </p>
                )}

                <form className="flex flex-col gap-4 font-['Inter']" onSubmit={enviarWhatsBanho}>
                  {Campo({ id: "nomeTutor", dados: m.campos.nomeTutor })}
                  {Campo({ id: "nomePet", dados: m.campos.nomePet })}
                  {Campo({ id: "telefone", tipo: "tel", dados: m.campos.telefone })}

                  <div className="flex flex-col gap-1">
                    <label htmlFor="porte" className="text-sm font-medium text-texto">
                      {m.campos.porte.rotulo}
                    </label>

                    <select
                      id="porte"
                      name="porte"
                      className="rounded-lg border border-azul-200 bg-white px-3 py-2.5 text-sm text-texto outline-none transition focus:border-azul focus:ring-2 focus:ring-azul-100"
                      required
                    >
                      <option value="" disabled>
                        {m.campos.porte.placeholder}
                      </option>
                      {m.portes.map((porte) => (
                        <option key={porte} value={porte}>{porte}</option>
                      ))}
                    </select>
                  </div>

                  {Campo({ id: "raca", dados: m.campos.raca })}
                  <p className="rounded-lg border border-azul-200 bg-fundo-alt p-3 text-sm leading-relaxed text-texto">
                    <strong>{aviso.destaque}</strong> {aviso.texto}{" "}
                    <a
                      href="#privacidade"
                      onClick={() => setModalAgendar(false)}
                      className="font-semibold text-azul underline underline-offset-2 hover:text-azul"
                    >
                      {aviso.link}
                    </a>
                    .
                  </p>
                  {m.avisoValores && (
                    <p className="text-center text-[10px] text-texto">
                      {m.avisoValores}
                    </p>
                  )}

                  <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setModalAgendar(false)}
                      className="rounded-lg border border-azul-200 px-5 py-2.5 text-sm font-semibold text-texto transition hover:bg-azul-100"
                    >
                      {m.cancelar}
                    </button>

                    <button
                      type="submit"
                      className="rounded-lg bg-laranja px-5 py-2.5 text-sm font-semibold text-azul transition hover:bg-laranja-claro focus:outline-none focus:ring-2 focus:ring-azul"
                    >
                      {m.enviar}
                    </button>
                  </div>
                  {demonstracao.avisoFormulario && (
                    <p className="text-center text-xs text-texto-suave">
                      {demonstracao.avisoFormulario}
                    </p>
                  )}
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
