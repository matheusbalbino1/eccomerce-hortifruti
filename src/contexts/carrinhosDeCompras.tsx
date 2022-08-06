import { createContext, ReactElement, useEffect, useState } from "react";
import { api } from "../services/axios"

interface Props {
    children: ReactElement;
}


export interface FrutaProps{
    genus:string;
    name:string;
    id:number;
    family:string;
    order:string;
    nutritions:{
        carbohydrates:number;
        protein:number;
        fat: number;
        calories:number;
        sugar: number;
    };
};

type ContextProps = {
    allFruits:FrutaProps[];
    fruits:FrutaProps[];
    setShowFruits([]):void;
}

type responseProps ={
    data:FrutaProps[]
}


export const carrinhoCompras = createContext({} as ContextProps)

export const CarrinhoComprasProvider = ({ children }: Props) => {

    const [allFruits, setAllFruits] = useState<FrutaProps[]>([])
    const [fruits, setFruits] = useState<FrutaProps[]>([])

    useEffect(() => {
        api.get("/all")
            .then((resposta:responseProps) => {
                setFruits(resposta.data)
                setAllFruits(resposta.data)
                console.log("Requisitou")
            })
    }, [])
    function setShowFruits(parametro:FrutaProps[]){
        setFruits(parametro)
        return
    }

    return (
        <carrinhoCompras.Provider value={{allFruits,fruits, setShowFruits}}>
            {children}
        </carrinhoCompras.Provider>
    )
}
