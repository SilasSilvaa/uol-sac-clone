import './footer_login.css'

export function FooterLogin() {
    return (
        <footer className='footer_container'>
            <p>Sua senha é secreta.</p>
            <p>Nenhum funcionário a serviço do UOL está autorizado a solicitá-la</p>
            <nav className='footer_links' aria-label="Links institucionais">
                <a href='#'>Regras de uso</a>
                <a href='#'>Política anti-spam</a>
                <a href='#'>Crimes virtuais: denuncie</a>
            </nav>
        </footer>
    );
}