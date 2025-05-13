import './login.css'

import { FooterLogin } from './components/Footer/FooterLogin';
import { ForgotPassword } from './components/ForgotPassword/ForgotPassword';
import { HeaderLogin } from './components/Header/HeaderLogin';
import { LoginButtons } from './components/LoginButtons/LoginButtons';
import { LoginForm } from './components/LoginForm/LoginForm';

export function Login() {
    return (
        <main className='login_container'>
            <section className='login_content' aria-labelledby="login-title">
                <HeaderLogin />
                <LoginForm />
                <ForgotPassword />
                <LoginButtons />
            </section>
            <FooterLogin />
        </main>
    );
}