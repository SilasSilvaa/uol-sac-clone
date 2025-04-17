import { Barcode, Invoice, LockSimpleOpen, ShoppingCartSimple, Wallet } from '@phosphor-icons/react';
import './Cardslist.css'
import { Card } from '../Card/Card';

export function CardsList() {
    return (
        <nav className='cardContainer' aria-label="Acesso rápido aos serviços">
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

        </nav>
    );
}