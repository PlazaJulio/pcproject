import Input from "../../partials/Input"
import Button from "../../partials/Button"

export default function FormLogin(){
    return <div className="mt-6 column is-4 has-text-centered">
        <div className="field mb-6">        
            <figure className="image is-128x128 mx-auto">
                <img src="src/assets/Images/Logo.png"/>
            </figure>
        </div>
        <div className="field">
            <Input placeholder="usuario" type="text"/>
        </div>
        <div className="field">
            <Input placeholder="senha" type="password"/>
        </div>
        <div className="field">
            <Button>Entrar</Button>
        </div>
    </div>
}