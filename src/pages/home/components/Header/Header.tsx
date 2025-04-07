import { CaretDown, Chats, House, List, Question, Receipt, UserCircle, UserGear, X } from "@phosphor-icons/react";
import './Header.css'

export function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="hamburger-menu">
                    <input type="checkbox" id="toggle-menu" hidden />
                    <label htmlFor="toggle-menu" className="menu-icon">
                        <List size={42} />
                        <span>menu</span>
                    </label>

                    <nav className="sidebar">
                        <div className="first-block">
                            <div>
                                <a href="https://conta.uol.com.br/login">
                                    <UserCircle size={42} color="#EAB525" />
                                    Entrar
                                </a>
                            </div>
                            <div>
                                <label htmlFor="toggle-menu" className="close-icon">
                                    <X size={22} color="#000" />
                                </label>

                            </div>
                        </div>
                        <div className="second-block">
                            <div className="menu-home">
                                <a href="#">
                                    <House size={22} color="#EAB525" />
                                    Home
                                </a>
                            </div>

                            <div className="menu-option">
                                <input type="radio" name="menu-group" id="atendimento-menu" hidden />
                                <label htmlFor="atendimento-menu" className="menu-label">
                                    <div>
                                        <Chats size={22} />
                                        <span>Atendimento</span>
                                    </div>
                                    <div>
                                        <CaretDown className="caret-icon" size={22} />
                                    </div>
                                </label>
                                <div className="menu-dropdown atendimento-menu-dropdown">
                                    <a href="https://faq.uol.com.br/uolpd/">Ajuda</a>
                                    <a href="https://sac.uol.com.br/atendimento-online">Fale conosco</a>
                                </div>
                            </div>

                            <div className="menu-option">
                                <input type="radio" name="menu-group" id="financeiro-menu" hidden />
                                <label htmlFor="financeiro-menu" className="menu-label">
                                    <div>
                                        <Receipt size={22} />
                                        <span>Financeiro</span>
                                    </div>
                                    <div>
                                        <CaretDown className="caret-icon" size={22} />
                                    </div>
                                </label>
                                <div className="menu-dropdown financeiro-menu-dropdown">
                                    <a href="https://sac.uol.com.br/cobranca">Meus débitos</a>
                                    <a href="https://sac.uol.com.br/extrato">Meu extrato</a>
                                    <a href="https://sac.uol.com.br/segundaviaboleto">2º via do boleto a vencer</a>
                                    <a href="https://sac.uol.com.br/meiospagamento">Meios de pagamentos</a>
                                    <a href="https://sac.uol.com.br/page/declaracao-quitacao-debitos">Comprovante de quitação</a>
                                    <a href="https://sac.uol.com.br/dados-de-recebimento">Dados de recebimento</a>
                                </div>
                            </div>

                            <div className="menu-option">
                                <input type="radio" name="menu-group" id="minha-conta-menu" hidden />
                                <label htmlFor="minha-conta-menu" className="menu-label">
                                    <div>
                                        <UserGear size={22} />
                                        <span>Minha Conta</span>
                                    </div>
                                    <div>
                                        <CaretDown className="caret-icon" size={22} />
                                    </div>
                                </label>
                                <div className="menu-dropdown minha-conta-menu-dropdown">
                                    <a href="https://sac.uol.com.br/recuperarsenha">Recuperação de senha</a>
                                    <a href="https://sac.uol.com.br/dados-de-cadastro">Meus dados</a>
                                    <a href="https://sac.uol.com.br/meus-beneficios">Meus benefícios</a>
                                    <a href="https://sac.uol.com.br/produtoseservicos">Meus produtos</a>
                                    <a href="https://sac.uol.com.br/produtoseservicos">Cartilha de segurança</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="sac-logo">
                    <a href="#">
                        <img src="/Logo SAC.svg" alt="" height={28} />
                    </a>
                </div>

                <div className="menu-list">
                    <div>
                        <a href="#">
                            Home
                        </a>
                    </div>

                    <input type="radio" name="menu-group" id="none-desk" hidden defaultChecked />

                    <div className="menu-container-desk">
                        <input type="radio" name="menu-group" id="atendimento-menu-desk" hidden />
                        <label htmlFor="atendimento-menu-desk" className="menu-label-desk">
                            Atendimento
                            <CaretDown className="caret-icon-desk" size={20} />
                        </label>
                        <div className="menu-dropdown-desk">
                            <a href="https://faq.uol.com.br/uolpd/">Ajuda</a>
                            <a href="https://sac.uol.com.br/atendimento-online">Fale conosco</a>
                        </div>
                    </div>

                    <div className="menu-container-desk">
                        <input type="radio" name="menu-group" id="financeiro-menu-desk" hidden />
                        <label htmlFor="financeiro-menu-desk" className="menu-label-desk">
                            Financeiro
                            <CaretDown className="caret-icon-desk" size={20} />
                        </label>
                        <div className="menu-dropdown-desk">
                            <a href="https://sac.uol.com.br/cobranca">Meus débitos</a>
                            <a href="https://sac.uol.com.br/extrato">Meu extrato</a>
                            <a href="https://sac.uol.com.br/segundaviaboleto">2º via do boleto a vencer</a>
                            <a href="https://sac.uol.com.br/meiospagamento">Meios de pagamentos</a>
                            <a href="https://sac.uol.com.br/page/declaracao-quitacao-debitos">Comprovante de quitação</a>
                            <a href="https://sac.uol.com.br/dados-de-recebimento">Dados de recebimento</a>
                        </div>
                    </div>

                    <div className="menu-container-desk">
                        <input type="radio" name="menu-group" id="conta-menu-desk" hidden />
                        <label htmlFor="conta-menu-desk" className="menu-label-desk">
                            Minha Conta
                            <CaretDown className="caret-icon-desk" size={20} />
                        </label>
                        <div className="menu-dropdown-desk">
                            <a href="https://sac.uol.com.br/recuperarsenha">Recuperação de senha</a>
                            <a href="https://sac.uol.com.br/dados-de-cadastro">Meus dados</a>
                            <a href="https://sac.uol.com.br/meus-beneficios">Meus benefícios</a>
                            <a href="https://sac.uol.com.br/produtoseservicos">Meus produtos</a>
                            <a href="https://sac.uol.com.br/produtoseservicos">Cartilha de segurança</a>
                        </div>
                    </div>

                </div>

                <div className="second-menu-list">
                    <a href="#">
                        <Question size={32} color="#EAB525" />
                        Ajuda
                    </a>
                    <hr />
                    <a href="#">
                        <UserCircle size={32} color="#EAB525" />
                        Entrar
                    </a>
                </div>
            </div>
        </header >
    );
}