import {useState} from "react";
import {TextField, Button} from 'bold-ui';

import {useTarefas} from '../../Helper/Context';

export const FormularioInput = () =>{

  const {addTarefa} = useTarefas();
  const [entradaTarefa, setEntradaTarefa] = useState("");
  
  const changeTarefaHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEntradaTarefa(event.target.value);    
  }

  const enviarHandler = async () => {
    const id:string = String(Math.random())
    addTarefa({"id":id,"descricao":entradaTarefa}) 
  }

  return(
    <>
      <TextField 
        placeholder="Tarefa"
        onChange={changeTarefaHandler}
      />
        
      <Button
        kind='primary'
        size='medium'
        onClick={enviarHandler}
        >Adicionar
      </Button>
    </>
  );
}