import { CardType } from "../enum/CardType";
import { CardOption } from "./CardOption";

interface WrapperCardOptionProps {
    logo: string;
    type: CardType;
    content: Array<string>;
}

export function WrapperCardOption({ logo, type, content }: WrapperCardOptionProps) {
    return (
        <>
            <div className='support_card'>
                <img src={logo} alt="Logo UOL" height={25} />
                <div className='support_card_types'>
                    <h2>{type === CardType.USER ? "Para você:" : "Para sua empresa digital:"}</h2>
                    {content.map((type) => (
                        <span> <img src="check-icon.svg" alt="green check icon" height={8} /> {type}</span>
                    ))}
                </div>
                <hr />

                <div className='support_card_option_container'>
                    <h3>Sou assinante e quero atendimento:</h3>
                    <div className='support_card_option_wrapper'>
                        <CardOption image="/chats.svg" text="Atendimento via Chat" />
                        <CardOption image="/user-setting.svg" text="Abrir Chamado" />
                        <CardOption image="/whatsapp-icon.svg" text="Atendimento via WhatsApp" />
                    </div>
                </div>
                <div className='support_card_option_container'>
                    <h3>Quero assinar:</h3>

                    <div className='support_card_option_wrapper'>
                        <CardOption image="/shopping-cart.svg" text="Comprar pelo WhatsApp" />
                        {type === CardType.ENTERPRISE && (
                        <CardOption image="/chats.svg" text="Comprar pelo Chat" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
