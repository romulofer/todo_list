import {useState} from "react";
import {TextField, Button} from 'bold-ui';
import api from "../../api/apiBackend";


export const FormularioInput = () =>{
  const [tarefa, setTarefa] = useState("");
  
  const changeTarefaHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setTarefa(event.target.value);    
  }

  const enviarHandler = () =>{
        
  }
  return(

    <>
      <TextField 
        placeholder="Tarefa"
        onChange={changeTarefaHandler}
      />
        {tarefa}
      <Button
        kind='primary'
        size='medium'
        onClick={enviarHandler}
        >Adicionar
      </Button>
    </>
  );
}