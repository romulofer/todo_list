//hooks são tipo funções que usam outros hooks
import {useState} from 'react';

import api from '../api/apiBackend';
import {interfaceTarefa} from '../interfaces/interfaces';

export const useTarefas = () =>{
  const [dados, setDados] = useState<interfaceTarefa[]>([])

 
  const consultarDados = async () =>{
    const response = await api.get("/tarefas")
    const tarefasApi:interfaceTarefa[] = response.data;
    
    if(dados.length===0){
      setDados(tarefasApi)      
    }else{
      tarefasApi.forEach(tarefaApi =>{
        if(dados.some(tarefa => tarefa.id !== tarefaApi.id)){
          setDados([...dados, tarefaApi])
        }
      });
    }
  }
  return {dados, consultarDados}; 
}