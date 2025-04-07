import { ReactNode } from 'react';
import './Card.css'

interface Props {
    link: string,
    text: string,
    children: ReactNode
}

export function Card({ link, text, children }: Props) {
    return (
        <a href={link}>
            <div className='card'>
                {children}
                <span>{text}</span>
            </div>
        </a>
    );
}