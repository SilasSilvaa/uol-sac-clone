import './login_buttons.css'

export function LoginButtons() {
    return (
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
    );
}