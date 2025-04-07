import { MagnifyingGlass } from '@phosphor-icons/react';
import './Search.css'

export function Search() {
    return (
        <>
            <div className='search-container'>
                <h2>Olá, como podemos te ajudar?</h2>
                <div className='input-content'>
                    <input type="search" name="" placeholder='Digite aqui sua dúvida (exemplo: Como recuperar a senha?)' />
                    <button type='button'>
                        <MagnifyingGlass size={25} />
                    </button>
                </div>
            </div>
        </>
    );
}   