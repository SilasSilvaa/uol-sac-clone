import { Info } from '@phosphor-icons/react';
import './InfoComponent.css';

export function InfoComponent() {
    return (
        <section className='info-container'>
            <div className="info-content">
                <div className='icon-container'>
                    <Info size={50} color='#44ADC7' />
                </div>

                <div className='text-container'>
                    <span>
                        <strong>Fique alerta com e-mails falsos enviados em nome do UOL</strong>
                        <br />
                        <br />
                        Alguns fraudadores enviam e-mails falsos tentando se passar pelo UOL para aplicação de phishing.
                        Phishing é uma forma de fraude para roubar dados e aplicar golpes. Geralmente está associado a uma comunicação falsa disparada por e-mail.
                        <br />
                        <strong><a href="https://sac.uol.com.br/ajuda/content/como-identificar-um-phishing-em-e-mails">Clique aqui</a></strong> e acesse a nossa FAQ para identificar phishing em e-mails.
                    </span>
                </div>

            </div>
        </section>

    );
}