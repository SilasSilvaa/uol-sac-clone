import { Link } from 'react-router-dom';
import './preheader.css'
import { MagnifyingGlass, EnvelopeSimple, ChatCenteredDots } from '@phosphor-icons/react'

export function PreHeader() {
    return (
        <aside className="pre-header" aria-label="Links rápidos e serviços UOL">
            <div className='box-list'>
                <Link to={"/"} aria-label="Ir para a página inicial do UOL">
                    <img src="/logo_uol.svg" alt="Logo UOL" width={68} height={24} />
                </Link>

                <nav className='first-items' aria-label="Serviços UOL">
                    <ul className="services-list" role="list">
                        <li>
                            <a href="https://www.ingresso.com/" aria-label="Ingresso.com - Compre ingressos de cinema">
                                INGRESSO.COM
                            </a>
                        </li>
                        <li>
                            <a href="https://www.uolhost.uol.com.br/" aria-label="UOL Host - Hospedagem de sites">
                                UOL HOST
                            </a>
                        </li>
                        <li>
                            <a href="https://pagbank.onelink.me/" aria-label="PagBank - Conta digital e cartões">
                                PAGBANK
                            </a>
                        </li>
                        <li>
                            <a href="https://www.portaleducacao.com.br/" aria-label="Cursos online">
                                CURSOS
                            </a>
                        </li>
                        <li className="desktop-only">
                            <a href="https://www.uolplay.com.br/" aria-label="UOL Play - Streaming de vídeos">
                                UOL PLAY
                            </a>
                        </li>
                        <li>
                            <a href="https://ads.uol.com.br/" aria-label="UOL ADS - Publicidade digital">
                                UOL ADS
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav className='second-items' aria-label="Ferramentas UOL">
                    <ul className="tools-list" role="list">
                        <li>
                            <a href="https://busca.uol.com.br/s" aria-label="Busca na web">
                                <MagnifyingGlass size={24} color="#FFF" aria-hidden="true" />
                                <span>BUSCA</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://batepapo.uol.com.br/" aria-label="Bate-papo online">
                                <ChatCenteredDots size={24} color="#FFF" aria-hidden="true" />
                                <span>BATE-PAPO</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://email.uol.com.br/" aria-label="E-mail UOL">
                                <EnvelopeSimple size={24} color="#FFF" aria-hidden="true" />
                                <span>EMAIL</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}