import {useState} from "react";
import {TextField, Button} from 'bold-ui';

import {useTarefas} from '../../Helper/Context';
import api from "../../api/apiBackend";

export const FormularioInput = () =>{

  const {addTarefa} = useTarefas();
  const [entradaTarefa, setEntradaTarefa] = useState("");
  
  const changeTarefaHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEntradaTarefa(event.target.value);    
  }

  const enviarHandler = async () => {
    
    const id:string = String(Math.random())
    api.post("/tarefas",{
      "id":id,
      "descricao":entradaTarefa
    }).then((response) => {
      console.log(response.data);
      addTarefa({
        "id":id,
        "descricao":entradaTarefa
      });
    }, (error) => {
      console.log(error);
    });
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