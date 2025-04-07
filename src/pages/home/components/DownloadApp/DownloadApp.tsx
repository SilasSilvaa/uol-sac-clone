import './DownloadApp.css'

export function DownloadApp() {
    return (
        <>
            <div className='app-container'>
                <div className='app-content'>
                    <div className='app-content-text'>
                        <img src="src\assets\mobile.png" alt="" className='mobile' />
                        <span>
                            Baixe agora o <b>App Meu UOL</b><br />
                            e facilite seu dia a dia!
                        </span>
                    </div>
                    <div className='app-content-store'>
                        <a href="https://play.google.com/store/apps/details?hl=pt_BR&id=com.invillia.uol.meuappuol">
                            <img src="src\assets\google.png" alt="" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?hl=pt_BR&id=com.invillia.uol.meuappuol">
                            <img src="src\assets\app-store.png" alt="" />
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}