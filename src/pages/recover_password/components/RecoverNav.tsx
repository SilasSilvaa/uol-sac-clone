import { Link } from "react-router-dom";

export function RecoverNav() {
    return (
        <nav className='recover_route' aria-label="Breadcrumb">
            <img src="/house.svg" alt="Início" />
            <Link to="/">Home</Link>
            <img src="/arrow_next.svg" alt="Próximo" />
            <span aria-current="page">Redefinição de senha</span>
        </nav>
    );
}