import siteConfig from "../site.config.js";
import { imagemUrl } from "../utils/site.js";

const { servicos, imagens, textos } = siteConfig;
const t = textos.sobre;
const imagem = imagens.sobre;

function Sobre() {
    const destaques = servicos.destaques;

    return (
        <section
            id="sobre"
            className="w-full min-h-screen bg-fundo-alt py-20 px-6 md:px-16 lg:px-24 flex items-center"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="font-['Inter'] text-azul text-sm font-semibold tracking-[0.2em] uppercase">
                                {t.eyebrow}
                            </span>
                        </div>

                        <h2 className="text-3xl font-['Inter'] md:text-4xl lg:text-5xl font-bold text-azul leading-tight tracking-tight">
                            {t.titulo}
                        </h2>

                        <p className="text-texto text-base md:text-lg leading-relaxed">
                            {t.descricao}
                        </p>

                        {t.indicadores.length > 0 && (
                            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-azul-200">
                                {t.indicadores.map((item) => (
                                    <div key={item.rotulo}>
                                        <span className="block text-2xl md:text-3xl font-bold text-azul">{item.valor}</span>
                                        <span className="text-texto-suave text-sm">{item.rotulo}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem]">
                            <img
                                src={imagemUrl(imagem.arquivo)}
                                alt={imagem.alt}
                                width={imagem.largura}
                                height={imagem.altura}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/5] w-full object-cover"
                            />
                        </div>

                    </div>
                </div>

                {(destaques.length > 0 || t.botao) && (
                    <div className="flex flex-col items-center gap-10 mt-8 font-['Inter']">
                        {destaques.length > 0 && (
                            <div className="w-full flex flex-col items-center gap-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-azul leading-tight tracking-tight text-center">
                                    {t.tituloDestaques}
                                </h2>

                                <div className="flex gap-4 flex-wrap justify-center items-center">
                                    {destaques.map((nome, index) => (
                                        <div key={nome} className="flex items-center gap-4">
                                            <span className="font-semibold text-xl md:text-2xl text-azul">
                                                {nome}
                                            </span>
                                            {index !== destaques.length - 1 && (
                                                <span className="h-6 border-l-2 border-laranja"></span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {t.botao && (
                            <a
                                href={t.botaoUrl}
                                className="px-8 py-3 bg-laranja border-2 border-azul rounded-lg text-azul text-xl font-bold hover:bg-laranja-claro transition-colors"
                            >
                                {t.botao}
                            </a>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}

export default Sobre;
