import {Checkbox, HFlow, Button, Icon} from 'bold-ui';
interface itemTodoProps{
  id: string,
  descricao:string  
}

export const ItemTodo = (props:itemTodoProps) =>{
  const deletaTarefaHandler = () =>{
    {/*Soon*/}
  }
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