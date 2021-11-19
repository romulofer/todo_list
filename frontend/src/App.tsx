import {TarefasProvider} from './Helper/Context';

import {FormularioInput} from './components/FormularioInput';
import {ListaTodo} from './components/ListaTodo';


function App() {
  return (
    <TarefasProvider>
      <FormularioInput />
      <ListaTodo />
    </TarefasProvider>
  );
}

export default App;
