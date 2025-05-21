
interface CardProps {
    text: string;
    image: string
}

export function Card({text, image}: CardProps) {
    return (
        <div className='help_card'>
            <div className='help_card_image'>
                <img src={image} alt="" />
            </div>
            <p className='help_card_text'>{text}</p>
        </div>
    );
}