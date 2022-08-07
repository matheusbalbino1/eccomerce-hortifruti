import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { FrutaProps, MostrarFrutas } from "./MostrarFrutas";

interface CarrinhoProps{
    carrinhoCompras:FrutaProps[];
    setCarrinho([]):void;
    quantidadeProdutos:number;
    alterarQuantidade(valor:boolean):void;
}
interface Props{
    children:ReactNode;
}

export const CarrinhoCompras = createContext({} as CarrinhoProps)

export const CarrinhoComprasProvider = ({children}:Props) => {

    const [carrinhoCompras, setCarrinhoCompras] = useState<FrutaProps[]>([])

    const {allFruits,fruits} = useContext(MostrarFrutas)

    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)
    
    function setCarrinho(frutas:FrutaProps[]){
        
        setCarrinhoCompras(frutas)
        return
    }
    console.log("SetCarrinho")
    console.log(carrinhoCompras)
    function alterarQuantidade(parametro:boolean){
        if(parametro){
            setQuantidadeProdutos(quantidadeProdutos + 1)
            return
        }else{
            setQuantidadeProdutos(quantidadeProdutos - 1)
            return
        }
           
    }

    return (
        <CarrinhoCompras.Provider value={{carrinhoCompras,setCarrinho, quantidadeProdutos, alterarQuantidade}}>
            {children}
        </CarrinhoCompras.Provider>
    )
}

