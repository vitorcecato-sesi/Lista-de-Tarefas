import "./Header.css"
import logoG3 from "../assets/logoG3.png"

function Header() {
    return (
        <header className="Header"> 
            <h1> Exercício 8 - Lista de Tarefas com Componentes Separados </h1>
            <img className="imagem" src={logoG3} />
        </header>
    )
}

export default Header