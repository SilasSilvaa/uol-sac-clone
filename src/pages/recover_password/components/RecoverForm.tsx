import { Button } from "../../../components/Button/Button";

export function RecoverForm() {
    return (
        <form className='recover_form'>
            <p>
                Digite o <strong>e-mail, CPF</strong> ou <strong>CNPJ</strong> cadastrado no UOL.
            </p>

            <div className='recover_form_input'>
                <label htmlFor="userIdentifier" className="sr-only">E-mail, CPF ou CNPJ</label>
                <input
                    type="text"
                    id="userIdentifier"
                    name="userIdentifier"
                    placeholder="E-mail ou CPF/CNPJ"
                    aria-required="true"
                />
                <Button type="button" aria-label="Ajuda sobre o campo">
                    <img src="/question.svg" alt="Ajuda" />
                </Button>
            </div>

            <div className='recover_form_buttons'>
                <Button className="recover_form_button_continue">
                    Continuar
                </Button>
                <Button className="recover_form_button_goback">
                    Voltar
                </Button>
            </div>
        </form>
    );
}