import "./Tarefa.css"
import { useState } from 'react';

function Tarefa(props){
    const [concluir, setConcluir] = useState("A fazer");
    const [cor, setCor] = useState(false);
    function concluirTarefa(){
        setConcluir("Feito")
        setCor(true)
    }
return(
    <>
<img className="" src={props.foto}></img>
    <h5>{props.objetivo}</h5>
    <button className={cor ? 'feito' : 'aFazer'} onClick={(concluirTarefa)}>{concluir}</button>
       
    </>


)



    
}
export default Tarefa;