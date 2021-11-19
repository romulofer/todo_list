import {useState} from "react";
import {TextField, Button} from 'bold-ui';

import {useTarefasContext} from '../../Helper/Context';
import {useTarefas} from '../../hooks/useTarefas';

export const FormularioInput = () =>{
  const {dados, consultarDados} = useTarefas();

  const {addTarefa} = useTarefasContext();
  const [entradaTarefa, setEntradaTarefa] = useState("");
  
  const changeTarefaHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEntradaTarefa(event.target.value);    
  }

  const enviarHandler = async () => {
    const id:string = String(Math.random())
    addTarefa({"id":id,"descricao":entradaTarefa}) 
    consultarDados()
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