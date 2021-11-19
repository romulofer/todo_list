import {useEffect} from 'react';
import {useTarefas} from '../../Helper/Context';

import api from '../../api/apiBackend';
import {ItemTodo} from '../ItemTodo/index';
import {interfaceTarefa} from '../../interfaces/interfaces';


export const ListaTodo = () =>{

  const {tarefas, addTarefa} = useTarefas();

  useEffect(() =>{
    consultarTarefas();
  },[])

  async function consultarTarefas(){
    const response = await api.get('/tarefas');
    response.data.forEach((item:interfaceTarefa) => {addTarefa(item)});
    //console.log(tarefas);
  }
    
  return(
    <>
      
      {tarefas.map((tarefa:interfaceTarefa) =>{ console.log(tarefa);
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