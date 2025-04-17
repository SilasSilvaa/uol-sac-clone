import { ReactNode } from 'react';
import './Card.css'

interface Props {
    link: string,
    text: string,
    children: ReactNode
}

export function Card({ link, text, children }: Props) {
    return (
        <a href={link} className="card-link" aria-label={text}>
            <div className='card' role="button" tabIndex={0}>
                <div className="card-icon" aria-hidden="true">
                    {children}
                </div>
                <span>{text}</span>
            </div>
        </a>
    );
}