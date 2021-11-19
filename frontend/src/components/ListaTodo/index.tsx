import {useEffect} from 'react';

import {useTarefas} from '../../hooks/useTarefas';

import {ItemTodo} from '../ItemTodo/index';
import {interfaceTarefa} from '../../interfaces/interfaces';

export const ListaTodo = () =>{
  useEffect(() =>{consultarDados()},[])
  const {dados, consultarDados} = useTarefas();
  return(
    <>

      {console.log(dados)}
      {dados.map((tarefa:interfaceTarefa) =>
          

      <ItemTodo 
        key={tarefa.id}
        id={tarefa.id}
        descricao={tarefa.descricao}
      />
          
        )
      }
    </>
  );
}