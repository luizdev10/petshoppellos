import { useState } from "react";
import siteConfig from "../site.config.js";
import { abrirWhatsApp, preencher } from "../utils/site.js";

const { contato, textos, demonstracao } = siteConfig;
const t = textos.atendimento;
const c = t.campos;
const aviso = textos.avisoPrivacidade;

export default function Atendimento() {
  const [motivo, setMotivo] = useState("");
  const [especie, setSpecie] = useState("");
  const other = t.opcaoOutros;
  const other2 = t.opcaoOutros;

  const Especies = t.especies.map((nome, indice) => ({ id: indice + 1, nome }));
  const motivos = t.motivos.map((nome, indice) => ({ id: indice + 1, nome }));
  const isOther = motivo === other;
  const isOther2 = especie === other2;


  function enviarParaWhatsApp(event) {
    event.preventDefault();

    const formulario = event.currentTarget;
    const dados = new FormData(formulario);

    const obter = (campo) =>
      String(dados.get(campo) || t.naoInformado);

    const obterComOutro = (campo, campoOutro, valorOutro) => {
  if (obter(campo) !== valorOutro) return obter(campo);

  return String(dados.get(campoOutro) || "").trim() || t.naoInformado;
};

    const mensagem = preencher(contato.mensagens.atendimento, {
      nomeTutor: obter("nomeTutor"),
      telefone: obter("telefone"),
      nomePet: obter("nomePet"),
      especie: obterComOutro("especie", "outra", other2),
      raca: obter("raca"),
      idade: obter("idade"),
      motivo: obterComOutro("motivo", "outros", other),
      inicio: obter("inicio"),
      observacoes: obter("observacoes"),
    }).trim();

    abrirWhatsApp(mensagem);
    formulario.reset();
  }

  const campoClass =
    "w-full rounded-lg border border-azul-200 bg-white px-4 py-3 text-texto outline-none transition placeholder:text-texto-suave focus:border-azul focus:ring-2 focus:ring-azul-100";

  return (
    <div id="atendimento" className="bg-fundo text-texto">

      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="font-semibold uppercase tracking-widest text-azul">
              {t.eyebrow}
            </p>

            <h2
              id="agendamento"
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              {t.titulo}
            </h2>

            <p className="mt-3 text-texto">
              {t.ajuda}
            </p>
          </div>

          <form
            onSubmit={enviarParaWhatsApp}
            className="space-y-8 rounded-2xl bg-white p-5 shadow-lg md:p-8"
          >
            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-bold">
                {t.grupoTutor}
              </legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nomeTutor"
                    className="mb-2 block text-sm font-medium"
                  >
                    {c.nomeTutor.rotulo}
                  </label>
                  <input
                    id="nomeTutor"
                    name="nomeTutor"
                    type="text"
                    autoComplete="name"
                    placeholder={c.nomeTutor.placeholder}
                    className={campoClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-sm font-medium"
                  >
                    {c.telefone.rotulo}
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={c.telefone.placeholder}
                    className={campoClass}
                    required
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-bold">{t.grupoPet}</legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nomePet"
                    className="mb-2 block text-sm font-medium"
                  >
                    {c.nomePet.rotulo}
                  </label>
                  <input
                    id="nomePet"
                    name="nomePet"
                    type="text"
                    placeholder={c.nomePet.placeholder}
                    className={campoClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="especie"
                    className="mb-2 block text-sm font-medium"
                  >
                    {c.especie.rotulo}
                  </label>
                  <select
                    id="especie"
                    name="especie"
                    value={especie}
                    onChange={(e) => {setSpecie(e.target.value) }}
                    defaultValue=""
                    className={campoClass}
                    required
                  >
                    <option value="" disabled>
                      {c.especie.placeholder}
                    </option>
                    {Especies.map(item => (
                      <option key={item.id} value={item.nome}>{item.nome}</option>
                    ))}

                  </select>
                    {isOther2 && (
                      <input type="text" name="outra" placeholder={c.especieOutra.placeholder} className="w-full rounded-lg border border-azul-200 bg-white px-4 py-3 mt-3 text-texto outline-none transition placeholder:text-texto-suave focus:border-azul focus:ring-2 focus:ring-azul-100"  />
                    )}
                </div>

                <div>
                  <label
                    htmlFor="raca"
                    className="mb-2 block text-sm font-medium"
                  >
                    {c.raca.rotulo}
                  </label>
                  <input
                    id="raca"
                    name="raca"
                    type="text"
                    placeholder={c.raca.placeholder}
                    className={campoClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="idade"
                    className="mb-2 block text-sm font-medium"
                  >
                    {c.idade.rotulo}
                  </label>
                  <input
                    id="idade"
                    name="idade"
                    type="text"
                    placeholder={c.idade.placeholder}
                    className={campoClass}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-bold">
                {t.grupoMotivo}
              </legend>

              <div>
                <label
                  htmlFor="motivo"
                  className="mb-2 block text-sm font-medium"
                >
                  {c.motivo.rotulo}
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  defaultValue=""
                  className={campoClass}
                  required
                >
                  <option value="" disabled>
                    {c.motivo.placeholder}
                  </option>
                  {motivos.map((motivo) => (
                    <option key={motivo.id} value={motivo.nome}>
                      {motivo.nome}
                    </option>
                  ))}
                </select>

                {isOther && (
                  <div>
                    <label
                      htmlFor="outros"
                      className="mb-2 block text-sm font-medium"
                    >
                      {c.motivoOutro.rotulo}
                    </label>
                    <input
                      id="outros"
                      name="outros"
                      type="text"
                      placeholder={c.motivoOutro.placeholder}
                      className={campoClass}
                    />
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="inicio"
                  className="mb-2 block text-sm font-medium"
                >
                  {c.inicio.rotulo}
                </label>
                <input
                  id="inicio"
                  name="inicio"
                  type="text"
                  placeholder={c.inicio.placeholder}
                  className={campoClass}
                />
              </div>

              <div>
                <label
                  htmlFor="observacoes"
                  className="mb-2 block text-sm font-medium"
                >
                  {c.observacoes.rotulo}
                </label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  rows="4"
                  placeholder={c.observacoes.placeholder}
                  className={`${campoClass} resize-y`}
                />
              </div>


            </fieldset>

            <p className="rounded-lg border border-azul-200 bg-fundo-alt p-4 text-sm leading-relaxed text-texto">
              <strong>{aviso.destaque}</strong> {aviso.texto}{" "}
              <a
                href="#privacidade"
                className="font-semibold text-azul underline underline-offset-2 hover:text-azul"
              >
                {aviso.link}
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full rounded-lg bg-laranja px-6 py-3 font-semibold text-azul transition hover:bg-laranja-claro focus:outline-none focus:ring-2 focus:ring-azul focus:ring-offset-2"
            >
              {t.botao}
            </button>

            {demonstracao.avisoFormulario && (
              <p className="text-center text-xs text-texto-suave">
                {demonstracao.avisoFormulario}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}