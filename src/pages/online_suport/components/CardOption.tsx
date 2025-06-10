

interface SupportCardOptionProps {
    image: string;
    text: string;
}

export function CardOption({ image, text }: SupportCardOptionProps) {
    return (
        <button type='button' className='support_card_option'>
            <a href="#" className='support_card_option_content'>
                <div className="support_card_option_content_image">
                    <img src={image} alt="icone Atendimento via Chat" height={24} width={24}/>
                </div>
                {text}
            </a>
        </button>
    );
}