import { createContext, ReactElement, useState } from "react";

interface Props {
    children: ReactElement;
}

type ContextProps = {
    toggle: boolean;
    inverterValor(): void;
}

// CONTEXTO PARA RESETAR A BARRA DE BUSCA SEMPRE QUE ORDENAR A LISTA
// SEMPRE QUE TOGGLE TROCAR DE VALOR, LIMPA A BARRA DE BUSCA
export const LimparBusca = createContext({} as ContextProps)

export const LimparBuscaProvider = ({ children }: Props) => {

    const [toggle, setToggle] = useState(false)

    function inverterValor() {
        setToggle(!toggle)
    }

    return (
        <LimparBusca.Provider value={{ toggle, inverterValor }}>
            {children}
        </LimparBusca.Provider>
    )
}