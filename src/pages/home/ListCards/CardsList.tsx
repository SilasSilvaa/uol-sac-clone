import { Barcode, Invoice, LockSimpleOpen, ShoppingCartSimple, Wallet } from '@phosphor-icons/react';
import { Card } from '../components/Card/Card';
import './Cardslist.css'

export function CardsList() {
    return (
        <div className='cardContainer'>
            <Card link='https://sac.uol.com.br/cobranca' text='Meus debitos'>
                <Wallet />
            </Card>

            <Card link='https://sac.uol.com.br/produtoseservicos' text='Meus Produtos'>
                <ShoppingCartSimple />
            </Card>

            <Card link='https://sac.uol.com.br/extrato' text='Meu extrato'>
                <Invoice />
            </Card>

            <Card link='https://sac.uol.com.br/segundaviaboleto' text='2º via de boleto a vencer'>
                <Barcode />
            </Card>

            <Card link='https://sac.uol.com.br/recuperarsenha' text='Recuperar senha'>
                <LockSimpleOpen />
            </Card>

        </div>
    );
}

// href="https://sac.uol.com.br/cobranca">
// <div className='card'>
//     <Wallet />
//     <span>Meus debitos</span>
// </div>
// </

// <a href="https://sac.uol.com.br/produtoseservicos">
//                 <div className='card'>
//                     <ShoppingCartSimple />
//                     <span>Meus Produtos</span>
//                 </div>
//             </a>

//             <a href="https://sac.uol.com.br/extrato">
//                 <div className='card'>
//                     <Invoice />
//                     <span>Meu extrato</span>
//                 </div>
//             </a>

//             <a href="https://sac.uol.com.br/segundaviaboleto">
//                 <div className='card'>
//                     <Barcode />
//                     <span>2º via de boleto a vencer</span>
//                 </div>
//             </a>

//             <a href="https://sac.uol.com.br/segundaviaboleto">
//                 <div className='card'>
//                     <LockSimpleOpen />
//                     <span>Recuperar senha</span>
//                 </div>
//             </a>