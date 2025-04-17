import './DownloadApp.css'

export function DownloadApp() {
    return (
        <aside className='app-container' aria-label="Download do aplicativo Meu UOL">
            <div className='app-content'>
                <div className='app-content-text'>
                    <img src="/mobile.png"
                        alt="Ilustração de celular"
                        className='mobile'
                        width="60"
                        height="100" />
                    <p>
                        Baixe agora o <strong>App Meu UOL</strong><br />
                        e facilite seu dia a dia!
                    </p>
                </div>
                <div className='app-content-store'>
                    <a href="https://play.google.com/store/apps/details?hl=pt_BR&id=com.invillia.uol.meuappuol"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Disponível no Google Play">
                        <img src="/google.png"
                            alt="Google Play Store"
                            width="160"
                            height="52" />
                    </a>
                    <a href="https://apps.apple.com/br/app/meu-uol/id1453193555"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Disponível na App Store">
                        <img src="/app-store.png"
                            alt="Apple App Store"
                            width="160"
                            height="52" />
                    </a>

                </div>
            </div>
        </aside>
    );
}