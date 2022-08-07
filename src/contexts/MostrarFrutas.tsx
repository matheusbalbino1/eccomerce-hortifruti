import { createContext, ReactElement, useEffect, useState } from "react";
import { api } from "../services/axios"

interface Props {
    children: ReactElement;
}

export interface FrutaProps {
    quantidade?: number;
    genus: string;
    name: string;
    id: number;
    family: string;
    order: string;
    nutritions: {
        carbohydrates: number;
        protein: number;
        fat: number;
        calories: number;
        sugar: number;
    };
};

type ContextProps = {
    allFruits: FrutaProps[];
    fruits: FrutaProps[];
    setShowFruits([]): void;
};

type responseProps = {
    data: FrutaProps[]
};


export const MostrarFrutas = createContext({} as ContextProps)

export const MostrarFrutasProvider = ({ children }: Props) => {

    // TODAS AS FRUTAS QUE VIERAM DA API, ESSA NÃO MUDA
    const [allFruits, setAllFruits] = useState<FrutaProps[]>([])

    // APENAS AS FRUTAS QUE DEVEM SER MOSTRADAS NA TELA, PARA OS FILTROS E ORDENS
    const [fruits, setFruits] = useState<FrutaProps[]>([])

    useEffect(() => {
        api.get("")
            .then((resposta: responseProps) => {
                setFruits(resposta.data)
                setAllFruits(resposta.data)
            })
    }, [])

    // PARA SETAR AS FRUTAS QUE DEVEM SER MOSTRADAS NA TELA
    function setShowFruits(parametro: FrutaProps[]) {
        setFruits(parametro)
        return
    }

    return (
        <MostrarFrutas.Provider value={{ allFruits, fruits, setShowFruits }}>
            {children}
        </MostrarFrutas.Provider>
    )
}
