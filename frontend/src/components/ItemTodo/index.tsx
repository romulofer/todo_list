import {Checkbox, HFlow, Button, Icon} from 'bold-ui';

import api from '../../api/apiBackend';
import {useTarefas} from '../../Helper/Context';

interface itemTodoProps{
  id: string,
  descricao:string  
}

export const ItemTodo = (props:itemTodoProps) =>{
  const {deleteTarefa} = useTarefas()
  const deletaTarefaHandler = async() =>{
    await api.delete(`/tarefas/${props.id}`).then(() =>{deleteTarefa(props.id)})
  }
  console.log(props)
  return(
    <>
    <HFlow>
      <Checkbox label={props.descricao} />
      <Button 
        skin='ghost' 
        kind='primary'
        onClick={deletaTarefaHandler}
      >
        <Icon icon='trashOutline' />
      </Button>
    </HFlow>
    </>
  );
}