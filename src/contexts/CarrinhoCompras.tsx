import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { FrutaProps, MostrarFrutas } from "./MostrarFrutas";

interface CarrinhoProps{
    carrinhoCompras:FrutaProps[];
    setCarrinho([]):void;
}
interface Props{
    children:ReactNode;
}

export const CarrinhoCompras = createContext({} as CarrinhoProps)

export const CarrinhoComprasProvider = ({children}:Props) => {

    const [carrinhoCompras, setCarrinhoCompras] = useState<FrutaProps[]>([])

    const {allFruits,fruits} = useContext(MostrarFrutas)

    // useEffect(()=>{
    //     setCarrinho(allFruits)
    // })
    console.log("CARRINHOCOMPRAS")
    console.log(carrinhoCompras)
    function setCarrinho(frutas:FrutaProps[]){
        setCarrinhoCompras(frutas)
        return
    }

    return (
        <CarrinhoCompras.Provider value={{carrinhoCompras,setCarrinho}}>
            {children}
        </CarrinhoCompras.Provider>
    )
}

