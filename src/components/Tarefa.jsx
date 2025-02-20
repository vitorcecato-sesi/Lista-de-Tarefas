import "./Tarefa.css"
import { useState } from 'react';

// Função Tarefa que pega o props
function Tarefa(props){
    // Estado inicial da tarefa
    const [concluir, setConcluir] = useState("A fazer");
    // Estado inicial da cor
    const [cor, setCor] = useState(false);

    // Função para concluir a tarefa
    function concluirTarefa(){
        // Mudar estado da tarefa para "Feito"
        setConcluir("Feito")
        // Mudar estado da cor para true
        setCor(true)
    }


    return(

        <>
            {/* Imagem com a foto da tarefa */}
            <img className="" src={props.foto}></img>
            {/* Título da tarefa */}
            <h5>{props.objetivo}</h5>
            {/* Botão para concluir a tarefa */}
            <button className={cor ? 'feito' : 'aFazer'} onClick={(concluirTarefa)}>{concluir}</button>
       
        </>


    )

    
}
// Exportando a função Tarefa como padrão
export default Tarefa;