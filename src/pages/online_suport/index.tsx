import './index.css';

import { SupportHeader } from './components/SupportHeader';
import { WrapperCardOption } from './components/WrapperCardOption';
import { CardType } from './enum/CardType';

export function OnlineSupport() {
    return (
        <main>
            <section className='support_container'>
                <SupportHeader />
                <WrapperCardOption logo="https://imguol.com/p/sac/cms/3/4/32/uol-logo-full.svg" type={CardType.USER} content={forYouTypes} />
                <WrapperCardOption logo="https://imguol.com/p/sac/cms/3/4/32/uol-host.svg" type={CardType.ENTERPRISE} content={forEnterpriseTypes} />
            </section>
        </main>
    );
}

const forYouTypes = [
    "Conteudo",
    "E-mail UOL",
    "UOL Play",
    "UOL Resolve",
    "Antivírus e muito mais!"
]

const forEnterpriseTypes = [
    "Domínios",
    "Loja Virtual",
    "Criador de Sites",
    "Hospedagem",
    "Cloud e muito mais!",
]
