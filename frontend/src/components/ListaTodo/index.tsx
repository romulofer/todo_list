import {useEffect, useState, useContext} from 'react';

import {TarefasContext} from '../../Helper/Context';

import api from '../../api/apiBackend';
import {ItemTodo} from '../ItemTodo/index';


interface interfaceTarefa{
  id:string,
  descricao:string
}

export const ListaTodo = () =>{

  const {tarefas, setTarefas} = useContext(TarefasContext);
  
  async function consultarTarefas(){
    const response = await api.get('/tarefas');
    setTarefas([...tarefas, ...response.data]);
    console.log(response.data);
  }
  
  useEffect(() =>{
    consultarTarefas();
  },[])
  
  return(
    <>
      {tarefas.map((tarefa:interfaceTarefa) =>{return(
        <ItemTodo 
          key={Math.random()}
          id={tarefa.id}
          descricao={tarefa.descricao}
        />
        );
        })
      }
    </>
  );
}