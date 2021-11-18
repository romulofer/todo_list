import { TarefasContext } from "./Context";

interface TarefasProviderProps{
  children: JSX.Element | JSX.Element[]
}

export const TarefasProvider = ({children}:TarefasProviderProps) =>{
  return(
    <TarefasContext.Provider value={[]}>
      {children}
    </TarefasContext.Provider>
  );
}