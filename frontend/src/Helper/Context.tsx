import {createContext, useContext} from 'react';
import { interfaceTarefa, TarefasProviderProps } from '../interfaces/interfaces';

const tarefas:interfaceTarefa[] = [];

//função para adicionar tarefas
const addTarefa = (tarefa:interfaceTarefa)=>{
  tarefas.push(tarefa);
}

const deleteTarefa = (id:string) => {
  tarefas.filter(tarefa => tarefa.id !== id);
}

const TarefasContext = createContext({addTarefa:addTarefa, tarefas:tarefas, deleteTarefa:deleteTarefa});
export const useTarefas = () => useContext(TarefasContext)


export const TarefasProvider = ({children}:TarefasProviderProps) =>{
  return(
    <TarefasContext.Provider value={{addTarefa:addTarefa, tarefas:tarefas, deleteTarefa:deleteTarefa}}>
      {children}
    </TarefasContext.Provider>
  );
}