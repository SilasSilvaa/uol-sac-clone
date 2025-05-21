import { CaretDown, Chats, House, List, Question, Receipt, UserCircle, UserGear, X } from "@phosphor-icons/react";
import './Header.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {

    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuToggle = (menuId: string) => {
        if (openMenu === menuId) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menuId);
        }
    };

    return (
        <header>
            <div className="header-container">
                <div className="hamburger-menu" aria-label="Menu mobile">
                    <input type="checkbox" id="toggle-menu" hidden aria-hidden="true" />
                    <label htmlFor="toggle-menu" className="menu-icon" aria-expanded="false" aria-controls="sidebar-menu" role="button">
                        <List size={42} aria-hidden="true" />
                        <span>menu</span>
                    </label>

                    <nav id="sidebar-menu" className="sidebar" aria-label="Navegação principal">
                        <div className="first-block">
                            <div>
                                <Link to="/login" aria-label="Acessar minha conta">
                                    <UserCircle size={42} color="#EAB525" aria-hidden="true" />
                                    Entrar
                                </Link>
                            </div>
                            <div>
                                <label htmlFor="toggle-menu" className="close-icon" role="button" aria-label="Fechar menu">
                                    <X size={22} color="#000" aria-hidden="true" />
                                </label>
                            </div>
                        </div>

                        <ul className="second-block" role="menu">
                            <li className="menu-home" role="none">
                                <a href="#" role="menuitem" aria-current="page">
                                    <House size={22} color="#EAB525" aria-hidden="true" />
                                    Home
                                </a>
                            </li>

                            <li className="menu-option" role="none">
                                <input type="radio" name="menu-group" id="atendimento-menu" hidden aria-hidden="true" />
                                <label htmlFor="atendimento-menu" className="menu-label" role="button" aria-expanded="false" aria-controls="atendimento-dropdown">
                                    <div>
                                        <Chats size={22} aria-hidden="true" />
                                        <span>Atendimento</span>
                                    </div>
                                    <div>
                                        <CaretDown className="caret-icon" size={22} aria-hidden="true" />
                                    </div>
                                </label>
                                <ul id="atendimento-dropdown" className="menu-dropdown atendimento-menu-dropdown" role="menu">
                                    <li role="none"><Link to="/help" role="menuitem">Ajuda</Link></li>
                                    <li role="none"><a href="https://sac.uol.com.br/atendimento-online" role="menuitem">Fale conosco</a></li>
                                </ul>
                            </li>

                            <li className="menu-option" role="none">
                                <input type="radio" name="menu-group" id="financeiro-menu" hidden aria-hidden="true" />
                                <label htmlFor="financeiro-menu" className="menu-label" role="button" aria-expanded="false" aria-controls="financeiro-dropdown">
                                    <div>
                                        <Receipt size={22} aria-hidden="true" />
                                        <span>Financeiro</span>
                                    </div>
                                    <div>
                                        <CaretDown className="caret-icon" size={22} aria-hidden="true" />
                                    </div>
                                </label>
                                <ul id="financeiro-dropdown" className="menu-dropdown financeiro-menu-dropdown" role="menu">
                                    <li role="none"><a href="https://sac.uol.com.br/cobranca" role="menuitem">Meus débitos</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/extrato" role="menuitem">Meu extrato</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/segundaviaboleto" role="menuitem">2º via do boleto a vencer</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/meiospagamento" role="menuitem">Meios de pagamentos</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/page/declaracao-quitacao-debitos" role="menuitem">Comprovante de quitação</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/dados-de-recebimento" role="menuitem">Dados de recebimento</a></li>
                                </ul>
                            </li>

                            <li className="menu-option" role="none">
                                <input type="radio" name="menu-group" id="minha-conta-menu" hidden aria-hidden="true" />
                                <label htmlFor="minha-conta-menu" className="menu-label" role="button" aria-expanded="false" aria-controls="conta-dropdown">
                                    <div>
                                        <UserGear size={22} aria-hidden="true" />
                                        <span>Minha Conta</span>
                                    </div>
                                    <div>
                                        <CaretDown className="caret-icon" size={22} aria-hidden="true" />
                                    </div>
                                </label>
                                <ul id="conta-dropdown" className="menu-dropdown minha-conta-menu-dropdown" role="menu">
                                    <li role="none"><Link to="/recoverpassword" role="menuitem">Recuperação de senha</Link></li>
                                    <li role="none"><a href="https://sac.uol.com.br/dados-de-cadastro" role="menuitem">Meus dados</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/meus-beneficios" role="menuitem">Meus benefícios</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/produtoseservicos" role="menuitem">Meus produtos</a></li>
                                    <li role="none"><a href="https://sac.uol.com.br/produtoseservicos" role="menuitem">Cartilha de segurança</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sac-logo">
                    <Link to="/">
                        <figure>
                            <img src="/Logo SAC.svg" alt="Logo SAC" height={28} aria-hidden="false" />
                        </figure>
                    </Link>
                </div>

                <nav className="menu-list" aria-label="Menu principal">
                    <div className="menu-item">
                        <Link to="/" aria-current="page">Home</Link>
                    </div>

                    <div className="menu-container-desk" role="menuitem">
                        <input type="radio" name="menu-group" id="atendimento-menu-desk" hidden
                            checked={openMenu === 'atendimento'}
                            onChange={() => { }} />
                        <label htmlFor="atendimento-menu-desk" className="menu-label-desk" tabIndex={0}
                            role="button" onClick={() => handleMenuToggle('atendimento')}>
                            Atendimento
                            <CaretDown className="caret-icon-desk" size={20} aria-hidden="true" />
                        </label>
                        <ul className="menu-dropdown-desk" role="menu"
                            style={{ display: openMenu === 'atendimento' ? 'block' : 'none' }}>
                            <li role="none"><Link to="/help" role="menuitem">Ajuda</Link></li>
                            <li role="none"><a href="https://sac.uol.com.br/atendimento-online" role="menuitem">Fale conosco</a></li>
                        </ul>
                    </div>

                    <div className="menu-container-desk" role="menuitem">
                        <input type="radio" name="menu-group" id="financeiro-menu-desk" hidden
                            checked={openMenu === 'financeiro'}
                            onChange={() => { }} />
                        <label htmlFor="financeiro-menu-desk" className="menu-label-desk" tabIndex={0}
                            role="button" onClick={() => handleMenuToggle('financeiro')}>
                            Financeiro
                            <CaretDown className="caret-icon-desk" size={20} aria-hidden="true" />
                        </label>
                        <ul className="menu-dropdown-desk" role="menu"
                            style={{ display: openMenu === 'financeiro' ? 'block' : 'none' }}>
                            <li role="none"><a href="https://sac.uol.com.br/cobranca" role="menuitem">Meus débitos</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/extrato" role="menuitem">Meu extrato</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/segundaviaboleto" role="menuitem">2º via do boleto a vencer</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/meiospagamento" role="menuitem">Meios de pagamentos</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/page/declaracao-quitacao-debitos" role="menuitem">Comprovante de quitação</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/dados-de-recebimento" role="menuitem">Dados de recebimento</a></li>
                        </ul>
                    </div>

                    <div className="menu-container-desk" role="menuitem">
                        <input type="radio" name="menu-group" id="conta-menu-desk" hidden
                            checked={openMenu === 'conta'}
                            onChange={() => { }} />
                        <label htmlFor="conta-menu-desk" className="menu-label-desk" tabIndex={0}
                            role="button" onClick={() => handleMenuToggle('conta')}>
                            Minha Conta
                            <CaretDown className="caret-icon-desk" size={20} aria-hidden="true" />
                        </label>
                        <ul className="menu-dropdown-desk" role="menu"
                            style={{ display: openMenu === 'conta' ? 'block' : 'none' }}>
                            <li role="none"><Link to="/recoverpassword" role="menuitem">Recuperação de senha</Link></li>
                            <li role="none"><a href="https://sac.uol.com.br/dados-de-cadastro" role="menuitem">Meus dados</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/meus-beneficios" role="menuitem">Meus benefícios</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/produtoseservicos" role="menuitem">Meus produtos</a></li>
                            <li role="none"><a href="https://sac.uol.com.br/produtoseservicos" role="menuitem">Cartilha de segurança</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="second-menu-list">
                    <a href="https://faq.uol.com.br/uolpd/">
                        <Question size={32} color="#EAB525" />
                        Ajuda
                    </a>
                    <hr />
                    <Link to="/login" aria-label="Acessar minha conta">
                        <UserCircle size={32} color="#EAB525" />
                        Entrar
                    </Link>
                </div>
            </div>
        </header >
    );
}