import { Link } from "react-router-dom";

export function BackHomeButton() {
    return (
        <div className='support_back_to_home_button'>
            <Link to="/">Home</Link>
            <span>Atendimento Online</span>
        </div>
    );
}