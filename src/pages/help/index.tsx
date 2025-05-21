import { Card } from './components/Card'
import './help.css'

export function Help() {
    return (
        <main>
            <section className="help_container" aria-labelledby="help-heading">
                <header className='help_input_container'>
                    <h1 id="help-heading">Olá, como podemos te ajudar?</h1>
                    <form role="search" aria-label="Busca de ajuda">
                        <input
                            type="text"
                            placeholder="Digite aqui sua dúvida"
                            aria-label="Campo de busca por dúvida"
                        />
                    </form>
                </header>

                <section className='help_card_container' aria-labelledby="categories-heading">
                    <h2 id="categories-heading">Você também pode navegar pelas categorias</h2>
                    <div className='help_cards_content'>
                        {cardsData.map(({ text, image }) => (
                            <Card key={text} text={text} image={image} />
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}

const cardsData = [
    { text: 'UOL mail', image: '/uolmail.png' },
    { text: 'BOL mail', image: '/bol-email.png' },
    { text: 'UOL Play', image: '/uol-play.png' },
    { text: 'Assinatura UOL', image: '/assine_uol.png' },
    { text: 'UOL Assistencia Técnica', image: '/assistencia-tecnica.png' },
    { text: 'UOL Esporte Clube', image: '/uol_esporte.png' },
    { text: 'UOL Resolve', image: '/uol_resolve.png' },
    { text: 'UOL Antivirus', image: '/uol_antivirus.png' },
    { text: 'UOL Wi-fi', image: '/uol_wifi.png' },
    { text: 'Minha conta', image: '/uol_minha-conta.png' },
    { text: 'Clube UOL', image: '/clube_uol.png' },
    { text: 'Bate-Papo UOL', image: '/bate_papo.png' },
    { text: 'Universinho', image: '/universinho.png' },
    { text: 'Familia Protegida', image: '/familia_protegida.png' },
    { text: 'UOL Leia+', image: '/uol_leia.png' },
    { text: 'UOL Loja de jogos', image: '/uol_loja_jogos.png' },
];