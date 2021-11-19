import {Checkbox, HFlow, Button, Icon} from 'bold-ui';

import api from '../../api/apiBackend';
import {useTarefasContext} from '../../Helper/Context';

interface itemTodoProps{
  id: string,
  descricao:string  
}

export const ItemTodo = (props:itemTodoProps) =>{
  const {deleteTarefa} = useTarefasContext()
  const deletaTarefaHandler = async() =>{
    await api.delete(`/tarefas/${props.id}`).then(() =>{deleteTarefa(props.id)})
  }
  
  return(
    
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
    
  );
}