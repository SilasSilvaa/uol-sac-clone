import { Link } from 'react-router-dom';
import './preheader.css'
import { MagnifyingGlass, EnvelopeSimple, ChatCenteredDots } from '@phosphor-icons/react'

export function PreHeader() {
    return (
        <aside>
            <div className='box-list'>
                <Link to={"/"}>
                    <img src="/logo_uol.svg" alt="" />
                </Link>
                <nav className='first-items'>
                    <ul>
                        <li>
                            <a href="https://www.ingresso.com/">INGRESSO.COM</a>
                        </li>
                        <li>
                            <a href="https://www.uolhost.uol.com.br/">UOL HOST</a>
                        </li>
                        <li>
                            <a href="https://pagbank.onelink.me/">PAGBANK</a>
                        </li>
                        <li>
                            <a href="https://www.portaleducacao.com.br/">CURSOS</a>
                        </li>
                        <li>
                            <a href="https://www.portaleducacao.com.br/">UOL PLAY</a>
                        </li>
                        <li>
                            <a href="https://ads.uol.com.br/">UOL ADS</a>
                        </li>
                    </ul>
                </nav>
                <nav className='second-items'>
                    <ul>
                        <li>
                            <a href="https://busca.uol.com.br/s">
                                <MagnifyingGlass size={24} color="#FFF" />
                                BUSCA
                            </a>
                        </li>
                        <li>
                            <a href="https://batepapo.uol.com.br/">
                                <ChatCenteredDots size={24} color="#FFF" />
                                BATE-PAPO
                            </a>
                        </li>
                        <li>
                            <a href="https://email.uol.com.br/">
                                <EnvelopeSimple size={24} color="#FFF" />
                                EMAIL
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </aside >
    );
}