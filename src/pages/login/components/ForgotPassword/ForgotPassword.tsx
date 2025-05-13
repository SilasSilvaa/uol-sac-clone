import { Link } from 'react-router-dom';
import './forgot_password.css'

export function ForgotPassword() {
    return (
        <section className='login_forgot_password_content'>
            <Link to="/recoverpassword">Esqueceu a senha?</Link>
            <div className='login_change_content'>
                <hr />
                <p>ou</p>
                <hr />
            </div>
        </section>
    );
}