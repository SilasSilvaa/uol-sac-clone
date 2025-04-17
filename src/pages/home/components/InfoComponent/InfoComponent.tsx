import { Info } from '@phosphor-icons/react';
import './InfoComponent.css';

export function InfoComponent() {
    return (
        <section className='info-container' aria-labelledby="alert-heading">
            <div className="info-content" role="alert">
                <div className='icon-container' aria-hidden="true">
                    <Info size={50} color='#44ADC7' />
                </div>

                <div className='text-container'>
                    <p>
                        <strong className="alert-title">Fique alerta com e-mails falsos enviados em nome do UOL</strong>
                        <br />
                        <br />
                        Alguns fraudadores enviam e-mails falsos tentando se passar pelo UOL para aplicação de phishing.
                        Phishing é uma forma de fraude para roubar dados e aplicar golpes. Geralmente está associado a uma comunicação falsa disparada por e-mail.
                        <br />
                        <br />
                        <strong>
                            <a
                                href="https://sac.uol.com.br/ajuda/content/como-identificar-um-phishing-em-e-mails"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="alert-link"
                            >
                                Clique aqui
                            </a>
                        </strong> e acesse a nossa FAQ para identificar phishing em e-mails.
                    </p>
                </div>

            </div>
        </section>

    );
}