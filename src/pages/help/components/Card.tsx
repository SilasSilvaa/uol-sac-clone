
interface CardProps {
    text: string;
    image: string
}

export function Card({ text, image }: CardProps) {
    return (
        <article
            className="help_card"
            tabIndex={0}
            role="button"
            aria-label={`Categoria: ${text}`}
        >
            <figure className="help_card_image">
                <img src={image} alt={`Imagem representando ${text}`} />
            </figure>
            <figcaption className="help_card_text">{text}</figcaption>
        </article>
    );
}