import {createContext, useContext} from 'react';
import { interfaceTarefa, TarefasProviderProps } from '../interfaces/interfaces';
import api from '../api/apiBackend';

const tarefas:interfaceTarefa[] = [];

const enviarApi = async (id:string,descricao:string) => {
    
  await api.post("/tarefas",{
    "id":id,
    "descricao":descricao
  }).then((response) => {
    console.log(response.data);
  }, (error) => {
    console.log(error);
  });
}
//função para adicionar tarefas
const addTarefa = (tarefa:interfaceTarefa)=>{
  tarefas.push(tarefa);
  enviarApi(tarefa.id, tarefa.descricao);
}

const deleteTarefa = (id:string) => {
  tarefas.filter(tarefa => tarefa.id !== id);
}

const consultarTarefas = async () =>{
  await api.get("/tarefas").then(response => {
    const tarefasApi:interfaceTarefa[] = response.data;
    
    
    if(tarefas.length===0){
      tarefasApi.forEach(tarefaApi => {
        tarefas.push(tarefaApi);
      })
      
    }else{
    tarefasApi.forEach(tarefaApi =>{
      if(tarefas.some(tarefa => tarefa.id !== tarefaApi.id)){
        tarefas.push(tarefaApi)
      }
    });
  }
  })
}

const TarefasContext = createContext({
                                       addTarefa:addTarefa, 
                                       tarefas:tarefas, 
                                       deleteTarefa:deleteTarefa,
                                       consultarTarefas:consultarTarefas
                                      });
export const useTarefas = () => useContext(TarefasContext)


export const TarefasProvider = ({children}:TarefasProviderProps) =>{
  return(
    <TarefasContext.Provider value={{addTarefa:addTarefa, tarefas:tarefas, deleteTarefa:deleteTarefa,consultarTarefas:consultarTarefas}}>
      {children}
    </TarefasContext.Provider>
  );
}