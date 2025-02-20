import "./Header.css";
import logoG3 from "../assets/logoG3.png";
import ImgGitHub from "../assets/github (1).png"

function Header() {
  return (
    <header className="Header">
      <a href="https://github.com/vitorcecato-sesi/Lista-de-Tarefas" target="_blank" rel="Link GitHub do Projeto">
        <img className="imagem-git" src={ImgGitHub} />
      </a>
      <h1> Exercício 8 - Lista de Tarefas com Componentes Separados </h1>
      <img className="imagem" src={logoG3} />
    </header>
  );
}

export default Header;
