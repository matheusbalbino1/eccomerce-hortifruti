import { useContext } from "react"
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras"
import { FrutaProps } from "../../contexts/MostrarFrutas";
import styles from "./ButtonAumentarQuantia.module.scss"

interface Props {
    fruta: FrutaProps;
}

export function ButtonAumentarQuantia(props: Props) {

    const { carrinhoCompras, setCarrinho } = useContext(CarrinhoCompras)



    function handleOnClick() {
        let indiceNoCarrinho = carrinhoCompras.filter(fruta => fruta.name !== props.fruta.name)
        indiceNoCarrinho.push({
            name: props.fruta.name,
            genus:props.fruta.genus,
            id:props.fruta.id,
            family:props.fruta.family,
            order:props.fruta.order,
            nutritions:props.fruta.nutritions,
            quantidade:(Number(props.fruta.quantidade) + 1)
        })
        console.log(indiceNoCarrinho)
        indiceNoCarrinho.sort((a,b)=>{
            if(a.name < b.name){
                return -1
            }else{
                return 1
            }
        })
        console.log(indiceNoCarrinho)
        setCarrinho(indiceNoCarrinho)
        // setCarrinho([{
            
        //     },...indiceNoCarrinho, ])
        return
    }
    return (
        <button className={styles.button} onClick={handleOnClick}>+</button>
    )
}