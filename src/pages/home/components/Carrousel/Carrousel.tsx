import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import './Carrousel.css';

export function Carrousel() {
    const scroll = (direction: "left" | "right") => {
        const container = document.querySelector(".carrousel-track") as HTMLElement;
        if (container) {
            const scrollAmount = container.offsetWidth;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="carrousel-wrapper" aria-label="Carrossel de promoções">
            <button
                className="arrow arrow-left"
                onClick={() => scroll("left")}
                aria-label="Voltar slide anterior"
            >
                <CaretCircleLeft size={40} color="#FFF" aria-hidden="true" />
            </button>

            <div className="carrousel-track">
                <a href="https://clube.uol.com.br/megaexposiaoandywarholpopart/nOw-pre-venda-20-off-em-ate-6-ingressos?utm_source=bannerSAC_ANDY_0104&utm_medium=bannerSAC_ANDY_0104" target="_blank" className="carrousel-image">
                    <img src="/1500_andy.png" alt="" />
                </a>

                <a href="https://clube.uol.com.br/3palavrinhas/nOC-50-off-em-ate-4-ingressos?utm_source=bannerSAC_3PALAVRINHAS_0304&utm_medium=bannerSAC_3PALAVRINHAS_0304" target="_blank" className="carrousel-image">
                    <img src="/1500_PALAVRINHAS.png" alt="" />

                </a>
                <a href="https://clube.uol.com.br/3palavrinhas/nOC-50-off-em-ate-4-ingressos?utm_source=bannerSAC_3PALAVRINHAS_0304&utm_medium=bannerSAC_3PALAVRINHAS_0304" target="_blank" className="carrousel-image">
                    <img src="/1500_teatromagico.png" alt="" />
                </a>
            </div>

            <button
                className="arrow arrow-right"
                onClick={() => scroll("right")}
                aria-label="Avançar para próximo slide"
            >
                <CaretCircleRight size={40} color="#FFF" aria-hidden="true" />
            </button>
        </section>
    );
}
