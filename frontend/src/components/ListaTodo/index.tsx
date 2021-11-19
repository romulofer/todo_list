import {useEffect} from 'react';
import {useTarefas} from '../../Helper/Context';

//import api from '../../api/apiBackend';
import {ItemTodo} from '../ItemTodo/index';
import {interfaceTarefa} from '../../interfaces/interfaces';



export const ListaTodo = () =>{
  const {tarefas, consultarTarefas} = useTarefas();
  useEffect(() =>{consultarTarefas()},[]);    
  return(
    <>
      {console.log(tarefas)}
      {tarefas.map((tarefa:interfaceTarefa) =>{
          return(
            <ItemTodo 
              key={tarefa.id}
              id={tarefa.id}
              descricao={tarefa.descricao}
            />
          );
        })
      }
    </>
  );
}