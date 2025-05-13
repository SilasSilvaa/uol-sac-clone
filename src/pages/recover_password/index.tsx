import './recover_password.css';

import { Link } from 'react-router-dom';

export function RecoverPassword() {
    return (
        <main className='recover_container'>
            <section className='recover_content'>
                <div className='recover_route'>
                    <img src="/house.svg" alt="" />
                    <Link to="/">Home</Link>
                    <img src="/arrow_next.svg" alt="" />
                    <span>Redefinição de senha</span>
                </div>
                <h1>Redefinição de senha</h1>

                <form action="" className='recover_form' >
                    <span>Digite o <strong>e-mail, CPF</strong> ou <strong>CNPJ</strong> cadastrado no UOL.</span>
                    <div className='recover_form_input'>
                        <input type="text" name="" id="" placeholder='E-mail ou CPF/CNPJ' />
                        <button>
                            <img src="/question.svg" alt="" />
                        </button>
                    </div>
                    <div className='recover_form_buttons'>
                        <button className='recover_form_button_continue'>Continuar</button>
                        <button className='recover_form_button_goback'>
                            Voltar
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}