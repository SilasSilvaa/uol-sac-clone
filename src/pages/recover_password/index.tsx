import { RecoverForm } from './components/RecoverForm';
import { RecoverNav } from './components/RecoverNav';
import './recover_password.css';

export function RecoverPassword() {
    return (
        <main className='recover_container'>
            <section className='recover_content' aria-labelledby="recover-heading">
                <RecoverNav />
                <h1 id="recover-heading">Redefinição de senha</h1>
                <RecoverForm />
            </section>
        </main>
    );
}