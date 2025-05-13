import './recover_password.css';

import { Link } from 'react-router-dom';

export function RecoverPassword() {
    return (
        <main className='recover_container'>
            <section className='recover_content' aria-labelledby="recover-heading">
                <nav className='recover_route' aria-label="Breadcrumb">
                    <img src="/house.svg" alt="Início" />
                    <Link to="/">Home</Link>
                    <img src="/arrow_next.svg" alt="Próximo" />
                    <span aria-current="page">Redefinição de senha</span>
                </nav>

                <h1 id="recover-heading">Redefinição de senha</h1>

                <form className='recover_form'>
                    <p>
                        Digite o <strong>e-mail, CPF</strong> ou <strong>CNPJ</strong> cadastrado no UOL.
                    </p>

                    <div className='recover_form_input'>
                        <label htmlFor="userIdentifier" className="sr-only">E-mail, CPF ou CNPJ</label>
                        <input
                            type="text"
                            id="userIdentifier"
                            name="userIdentifier"
                            placeholder="E-mail ou CPF/CNPJ"
                            aria-required="true"
                        />
                        <button type="button" aria-label="Ajuda sobre o campo">
                            <img src="/question.svg" alt="Ajuda" />
                        </button>
                    </div>

                    <div className='recover_form_buttons'>
                        <button type="submit" className='recover_form_button_continue'>
                            Continuar
                        </button>
                        <button type="button" className='recover_form_button_goback'>
                            Voltar
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}