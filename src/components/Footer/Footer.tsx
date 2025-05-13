import { CaretDown } from '@phosphor-icons/react';
import './Footer.css'

export function Footer() {
    return (
        <footer className="site-footer" role="contentinfo">
            <section className='more-info' aria-labelledby="more-info-heading">
                <input type="checkbox" defaultChecked id="more-links" hidden aria-hidden="true" />
                <div className='linebar'>
                    <label htmlFor="more-links" className="menu-more-links" aria-expanded="false" aria-controls="footer-links">
                        <span className='more-info-text' id="more-info-heading">
                            Mais informações
                            <CaretDown className='caret' size={18} color='#025ec7' />
                        </span>
                    </label>
                </div>
                <div className='more-link-container' id="footer-links">
                    <div className='more-link-content' role="navigation" aria-label="Atendimento">
                        <h3 className="footer-heading">Atendimento</h3>
                        <ul className="footer-links-list">
                            <li><a href="https://sac.uol.com.br/atendimento-online">Fale conosco</a></li>
                            <li><a href="https://sac.uol.com.br/ouvidoriapd">Ouvidoria Produtos Digitais</a></li>
                            <li><a href="https://sac.uol.com.br/ouvidoriahost">Ouvidoria UOL Host</a></li>
                            <li><a href="https://faq.uol.com.br/uolpd/">Perguntas frequentes</a></li>
                        </ul>
                    </div>
                    <div className='more-link-content' role="navigation" aria-label="Financeiro">
                        <h3 className="footer-heading">Financeiro</h3>
                        <ul className="footer-links-list">
                            <li><a href="https://sac.uol.com.br/cobranca">Meus débitos</a></li>
                            <li><a href="https://sac.uol.com.br/extrato">Meu extrato</a></li>
                            <li><a href="https://sac.uol.com.br/segundaviaboleto">2° Via de boleto a vencer</a></li>
                            <li><a href="https://sac.uol.com.br/meiospagamento">Meios de pagamento</a></li>
                            <li><a href="https://sac.uol.com.br/comprovante-quitacao">Comprovante de quitação</a></li>
                            <li><a href="https://sac.uol.com.br/dados-de-recebimento">Dados de recebimento</a></li>
                        </ul>
                    </div>
                    <div className='more-link-content' role="navigation" aria-label="Minha conta">
                        <h3 className="footer-heading">Minha conta</h3>
                        <ul className="footer-links-list">
                            <li><a href="https://sac.uol.com.br/recuperarsenha">Recuperar senha</a></li>
                            <li><a href="https://sac.uol.com.br/dados-de-cadastro">Meus dados</a></li>
                            <li><a href="https://sac.uol.com.br/produtoseservicos">Meus produtos</a></li>
                            <li><a href="https://sac.uol.com.br/wrapper?url=https:%2F%2Fsac.uol.com.br%2Finfo%2Fcartilha%2Findex.jhtm">Cartilha de segurança</a></li>
                            <li><a href="https://faq.uol.com.br/uolpd/">Central de segurança</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className='others-info' role="contentinfo">
                <p>Sua senha é secreta. Nenhum funcionário a serviço do UOL está autorizado a solicitá-la.</p>

                <nav aria-label="Links institucionais">
                    <ul className="institutional-links">
                        <li><a href="https://regras.uol.com.br">Regras de uso</a></li>
                        <li><a href="https://sac.uol.com.br/wrapper?url=https://sac.uol.com.br/info/protecao_privacidade/politica_anti-spam.jhtm">Política anti-spam</a></li>
                        <li><a href="http://denuncia.uol.com.br">Crimes virtuais: denuncie</a></li>
                        <li><a href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade">Normas de Segurança e privacidade</a></li>
                    </ul>
                </nav>

                <p>© 1996 - 2025 - UOL - O melhor conteúdo. Todos os direitos reservados.</p>
                <address>
                    UNIVERSO ONLINE S/A - CNPJ/MF 01.109.184/0001-95 - Av. Brigadeiro Faria Lima, 1.384, São Paulo/SP - CEP 01452-002 - <a href="https://uol.com.br/sac">uol.com.br/sac</a>
                </address>
            </div>
        </footer>
    );
}