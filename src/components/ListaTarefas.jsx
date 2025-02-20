import {useState} from "react"
import "./ListaTarefas.css"
import Tarefa from "./Tarefa"

function ListaTarefas () {
    const [lista,setLista] = useState()

    return (
        <>
         
         <section  >
        <h1>Tarefas do Dia </h1>
         <Tarefa
         foto = ""
         objetivo = "Arrumar a cama "
         />

        <Tarefa
         foto = ""
         objetivo = " Lavar a louça "
         />

        <Tarefa
         foto = ""
         objetivo = " Varrer a casa "
        />

        <Tarefa
         foto = ""
         objetivo = " Passar pano no chão"
         />

         <Tarefa
         foto = ""
         objetivo = "Estudar"
         />

        <Tarefa
         foto = ""
         objetivo = " Tomar banho  "
         />
         </section>

        </>
    )

}

export default ListaTarefas