import './login.css'

export function Login() {
    return (

        <main className='login_container'>
            <section className='login_content' aria-labelledby="login-title">
                <header className='login_logo_content'>
                    <img src="/uol-logo-black.svg" alt="Logo do UOL" />
                    <p>Acesse seu produto ou serviço.</p>
                </header>

                <form className='login_form_content'>
                    <h1 id="login-title">Entrar</h1>
                    <label htmlFor="login-input" className="visually-hidden">E-mail ou CPF/CNPJ</label>
                    <input id="login-input" type="text" placeholder='E-mail ou CPF/CNPJ' />
                    <button type="submit">Continuar</button>
                </form>

                <section className='login_forgot_password_content'>
                    <a href="#">Esqueceu a senha?</a>
                    <div className='login_change_content'>
                        <hr />
                        <p>ou</p>
                        <hr />
                    </div>
                </section>

                <section className='login_wrapper_button'>
                    <button type="button" className='login_button_facebook'>
                        <img src="/facebook.svg" alt="Facebook" />
                        <span>Continuar com o <strong>Facebook</strong></span>
                    </button>
                    <button type="button" className='login_button_apple'>
                        <img src="/apple.svg" alt="Apple" />
                        <span>Continuar com a <strong>Apple</strong></span>
                    </button>
                </section>
            </section>

            <footer className='footer_container'>
                <p>Sua senha é secreta.</p>
                <p>Nenhum funcionário a serviço do UOL está autorizado a solicitá-la</p>
                <nav className='footer_links' aria-label="Links institucionais">
                    <a href='#'>Regras de uso</a>
                    <a href='#'>Política anti-spam</a>
                    <a href='#'>Crimes virtuais: denuncie</a>
                </nav>
            </footer>
        </main>
    );
}