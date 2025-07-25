import './index.css'

import { data } from '../../../categories'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function ProductCategories() {
    let params = useParams();
    const [key, setKey] = useState("UOL MAIL");
    const [questions, setQuestions] = useState<Array<string>>([]);
    let categories = Object.keys(data.categories);

    useEffect(() => {
        if (params.category != null || params.category != undefined) {
            setKey(params.category);
        }

        setQuestions(data.categories[key]);
    }, [params, key])

    return (
        <main>
            <section className='categories_container'>
                <div className='help_input_container'>
                    <form role="search" aria-label="Busca de ajuda">
                        <input
                            type="text"
                            placeholder="Digite aqui sua dúvida"
                            aria-label="Campo de busca por dúvida"
                        />
                    </form>
                </div>

                <section className='categories_box'>
                    <div className='categories_list'>
                        <h2>CATEGORIAS</h2>
                        {categories.map((category, index) => (
                            <Link to={`/categories/${category}`} key={index}>{category}</Link>
                        ))}
                    </div>
                    <div className='categories_questions'>
                        <h2>{key}</h2>
                        {questions.map((question, index) => (
                            <div key={index} className='category_question'>
                                <span>{question}</span>
                            </div>
                        ))}

                        <div className='categories_questions_page'>
                            <div className='page_numbers'>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                            </div>
                            <span>Próxima página →</span>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}