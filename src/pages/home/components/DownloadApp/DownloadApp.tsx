import './DownloadApp.css'

export function DownloadApp() {
    return (
        <>
            <div className='app-container'>
                <div className='app-content'>
                    <div className='app-content-text'>
                        <img src="/mobile.png" alt="" className='mobile' />
                        <span>
                            Baixe agora o <b>App Meu UOL</b><br />
                            e facilite seu dia a dia!
                        </span>
                    </div>
                    <div className='app-content-store'>
                        <a href="https://play.google.com/store/apps/details?hl=pt_BR&id=com.invillia.uol.meuappuol">
                            <img src="/google.png" alt="" />
                        </a>
                        <a href="https://apps.apple.com/br/app/meu-uol/id1453193555">
                            <img src="/app-store.png" alt="" />
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}