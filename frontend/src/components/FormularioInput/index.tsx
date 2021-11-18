import {useState} from "react";
import {TextField, Button} from 'bold-ui';
import api from "../../api/apiBackend";

export const FormularioInput = () =>{


  const [entradaTarefa, setEntradaTarefa] = useState("");
  
  const changeTarefaHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEntradaTarefa(event.target.value);    
  }

  const enviarHandler = async () => {

    api.post("/tarefas",{
      "id":String(Math.random()),
      "descricao":entradaTarefa
    }).then((response) => {
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
    //falta atualizar a lista de tarefas depois. Será que dá de usar um custom hook e/ou um context?
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