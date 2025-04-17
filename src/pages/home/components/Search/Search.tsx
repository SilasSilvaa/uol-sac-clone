import { MagnifyingGlass } from '@phosphor-icons/react';
import './Search.css'

export function Search() {
    return (
        <section className='search-container' aria-labelledby="search-title">
            <h2 id="search-title">Olá, como podemos te ajudar?</h2>
            <form className='input-content' role="search">
                <input
                    type="search"
                    name="search-query"
                    placeholder='Digite aqui sua dúvida (exemplo: Como recuperar a senha?)'
                    aria-label="Campo de busca por dúvidas"
                    autoComplete="off"
                />
                <button type='submit' aria-label="Pesquisar">
                    <MagnifyingGlass size={25} aria-hidden="true" />
                </button>
            </form>
        </section>
    );
}   