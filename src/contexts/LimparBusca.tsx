import { createContext, ReactElement, useEffect, useState } from "react";

interface Props {
    children: ReactElement;
}

type ContextProps = {
    toggle:boolean;
    inverterValor():void;
}

// CONTEXTO PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE CLICAR EM ORDENAR
export const LimparBusca = createContext({} as ContextProps)

export const LimparBuscaProvider = ({ children }:Props) => {
    
    const [toggle, setToggle] = useState(false)

    function inverterValor(){
        setToggle(!toggle)
    }

    return (
        <LimparBusca.Provider value={{toggle, inverterValor}}>
            {children}
        </LimparBusca.Provider>
    )
}