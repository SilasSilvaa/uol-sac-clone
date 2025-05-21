import { Card } from './components/Card'
import './help.css'

export function Help() {
    return (
        <main>
            <section className="help_container">
                <div className='help_input_container'>
                    <h1>Olá, como podemos te ajudar?</h1>
                    <input type="text" name="" id="" placeholder="Digite aqui sua dúvida" />
                </div>

                <div className='help_card_container'>
                    <h2>Você também pode navegar pelas categorias</h2>
                    <div className='help_cards_content'>
                        <Card text='UOL mail' image='/uolmail.png' />
                        <Card text='BOL mail' image='/bol-email.png' />
                        <Card text='UOL Play' image='/uol-play.png' />
                        <Card text='Assinatura UOL' image='/assine_uol.png' />
                        <Card text='UOL Assistencia Técnica' image='/assistencia-tecnica.png' />
                        <Card text='UOL Esporte Clube' image='/uol_esporte.png' />
                        <Card text='UOL Resolve' image='/uol_resolve.png' />
                        <Card text='UOL Antivirus' image='/uol_antivirus.png' />
                        <Card text='UOL Wi-fi' image='/uol_wifi.png' />
                        <Card text='Minha conta' image='/uol_minha-conta.png' />
                        <Card text='Clube UOL' image='/clube_uol.png' />
                        <Card text='Bate-Papo UOL' image='/bate_papo.png' />
                        <Card text='Universinho' image='/universinho.png' />
                        <Card text='Familia Protegida' image='/familia_protegida.png' />
                        <Card text='UOL Leia+' image='/uol_leia.png' />
                        <Card text='UOL Loja de jogos' image='/uol_loja_jogos.png' />
                    </div>
                </div>
            </section>
        </main>
    )
}