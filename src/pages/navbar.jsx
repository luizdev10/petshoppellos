import { useState } from "react"
import { Menu, PawPrint, X } from "lucide-react"
import siteConfig from "../site.config.js"
import { publicUrl } from "../utils/site.js"

const { negocio, textos } = siteConfig
const t = textos.navbar
const logo = siteConfig.imagens.logo
const logoExiste = import.meta.env.VITE_LOGO_EXISTE === true

function NavBar() {
    const [menu, setMenu] = useState(false)
    const [logoFalhou, setLogoFalhou] = useState(false)

    const links = t.links
    return (
        <nav className="bg-fundo top-0 left-0 fixed w-full z-[500] shadow-sm">
            <div className="flex justify-around items-center w-full px-6 py-2">
                <div className="flex items-center gap-2">
                    {logoExiste && !logoFalhou ? (
                        <img
                            src={publicUrl(logo.arquivo)}
                            alt={logo.alt}
                            onError={() => setLogoFalhou(true)}
                            className="h-11 w-auto md:h-12"
                        />
                    ) : (
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-azul md:h-12 md:w-12">
                            <PawPrint aria-hidden="true" className="h-6 w-6 text-white" />
                        </span>
                    )}
                    <div className="text-azul text-lg md:text-1xl font-['Inter'] font-bold uppercase">{negocio.nome}</div>
                </div>
                <ul className="md:flex hidden gap-6">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a href={link.url} className="text-azul font-['Inter'] font-semibold text-sm hover:text-texto transition-colors duration-300 cursor-pointer">{link.nome}</a>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    aria-label={menu ? t.fecharMenu : t.abrirMenu}
                    aria-expanded={menu}
                    aria-controls="menu-mobile"
                    onClick={() => setMenu(!menu)}
                    className="md:hidden text-texto-suave"
                >
                    {menu ? <X size={30} /> : <Menu size={30} />}
                </button>
                {t.botao && (
                    <a href={t.botaoUrl} className="hidden md:flex font-['Inter'] text-azul text-sm font-semibold capitalize cursor-pointer bg-laranja px-4 py-2 rounded-md w-max hover:bg-laranja-claro transition-all duration-300 shadow-md">{t.botao}</a>
                )}
            </div>
            <div
                id="menu-mobile"
                inert={!menu}
                className={`md:hidden bg-fundo w-full overflow-hidden transition-all duration-300 ease-in-out ${menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col px-5 py-5 gap-5 items-start cursor-pointer">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a
                                href={link.url}
                                onClick={() => setMenu(false)}
                                className="text-texto-suave font-semibold block hover:text-azul transition-colors cursor-pointer"
                            >
                                {link.nome}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
