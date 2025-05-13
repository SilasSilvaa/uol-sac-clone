import './login_form.css';

export function LoginForm() {
    return (
        <form className='login_form_content'>
            <h1 id="login-title">Entrar</h1>
            <label htmlFor="login-input" className="visually-hidden">E-mail ou CPF/CNPJ</label>
            <input id="login-input" type="text" placeholder='E-mail ou CPF/CNPJ' />
            <button type="submit">Continuar</button>
        </form>
    );
}