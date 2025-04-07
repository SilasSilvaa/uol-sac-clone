import { CaretDown } from '@phosphor-icons/react';
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <div className='more-info'>
                <input type="checkbox" id="more-links" hidden />
                <div className='linebar'>
                    <label htmlFor="more-links" className="menu-more-links">
                        <span className='more-info-text'>
                            Mais informações
                            <CaretDown className='caret' size={18} color='#025ec7' />
                        </span>
                    </label>
                </div>
                <div className='more-link-container'>
                    <div className='more-link-content'>
                        <span>Atendimento</span>
                        <a href="https://sac.uol.com.br/atendimento-online">Fale conosco</a>
                        <a href="https://sac.uol.com.br/atendimento-online">Ouvidoria Produtos Digitais</a>
                        <a href="https://sac.uol.com.br/atendimento-online">Ouvidoria UOL Host</a>
                        <a href="https://sac.uol.com.br/atendimento-online">Perguntas frequentes</a>
                    </div>
                    <div className='more-link-content'>
                        <span>Financeiro</span>
                        <a href="https://sac.uol.com.br/cobranca">Meus débitos</a>
                        <a href="https://sac.uol.com.br/cobranca">Meu extrato</a>
                        <a href="https://sac.uol.com.br/segundaviaboleto">2° Via de boleto a vencer</a>
                        <a href="https://sac.uol.com.br/meiospagamento">Meios de pagamento</a>
                        <a href="https://sac.uol.com.br/comprovante-quitacao">Comprovante de quitação</a>
                        <a href="https://sac.uol.com.br/dados-de-recebimento">Dados de recebimento</a>
                    </div>
                    <div className='more-link-content'>
                        <span>Minha conta</span>
                        <a href="https://sac.uol.com.br/recuperarsenha">Recuperar senha</a>
                        <a href="https://sac.uol.com.br/dados-de-cadastro">Meus dados</a>
                        <a href="https://sac.uol.com.br/produtoseservicos">Meus produtos</a>
                        <a href="https://sac.uol.com.br/wrapper?url=https:%2F%2Fsac.uol.com.br%2Finfo%2Fcartilha%2Findex.jhtm">Cartilha de segurança</a>
                        <a href="https://sac.uol.com.br/wrapper?url=https:%2F%2Fsac.uol.com.br%2Finfo%2Fcartilha%2Findex.jhtm">Central de segurança</a>
                    </div>
                </div>
            </div>

            <div className='others-info'>
                <p >Sua senha é secreta. Nenhum funcionário a serviço do UOL está autorizado a solicitá-la.</p>

                <p>
                    <a href="https://regras.uol.com.br">Regras de uso</a> | <a href="https://sac.uol.com.br/wrapper?url=https://sac.uol.com.br/info/protecao_privacidade/politica_anti-spam.jhtm" >Política anti-spam</a> | <a href="http://denuncia.uol.com.br">Crimes virtuais: denuncie</a> | <a href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade">Normas de Segurança e privacidade</a>
                </p>

                <p >© 1996 - 2025 - UOL - O melhor conteúdo. Todos os direitos reservados.</p>
                <p>UNIVERSO ONLINE S/A - CNPJ/MF 01.109.184/0001-95 - Av. Brigadeiro Faria Lima, 1.384, São Paulo/SP - CEP 01452-002 - uol.com.br/sac</p>
            </div>
        </footer>
    );
}