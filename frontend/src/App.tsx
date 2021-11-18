import React, { useState } from 'react';

import {TarefasProvider} from './Helper/TarefasProvider';

import {FormularioInput} from './components/FormularioInput';
import {ListaTodo} from './components/ListaTodo';

interface interfaceTarefa{
  id:string,
  descricao:string
}

function App() {
  //const [tarefas, setTarefas] = useState<interfaceTarefa[]>([]);
  return (
    <TarefasProvider>
      <FormularioInput />
      <ListaTodo />
    </TarefasProvider>
  );
}

export default App;
