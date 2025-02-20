import './App.css'
import Tarefa from './components/Tarefa'

// Componentes
  import Header from "./components/Header"
  import Footer from "./components/Footer"
//.

// Fotos
  import logo from "./assets/logoG3.png"
  import foto from "./assets/gmail.png"
  import foto2 from "./assets/instagram.png"
//.

function App() {

  return (
    <>
      {/* Header */}
      <Header/>

      {/* Footer */}
      <Footer
        imagem1={foto} 
        imagem2={foto2} 
        email="vitor.cecatosesi@gmail.com" 
        instagram="@vitorgcecato"
        texto="O Vitor Geraldo Cecato é o responsável pelo projeto Lista de Tarefas com Componentes Separados, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo." 
        imglogo={logo}
      />
    </>
  )
}

export default App
