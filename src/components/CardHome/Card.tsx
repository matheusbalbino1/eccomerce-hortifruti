import { useContext, useState } from "react"
import imgExemplo from "../../images/exemploImg.png"
import styles from "./Card.module.scss"
import { FrutaProps } from "../../contexts/MostrarFrutas"
import { ButtonNutricionais } from "../ButtonNutricionais/ButtonNutricionais";
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras";
interface Props {
    fruta: FrutaProps;
    toggleGrade: boolean;
}

export function Card(props: Props) {

    const { carrinhoCompras, setCarrinho } = useContext(CarrinhoCompras)

    function handleAdicionarCarrinho() {

        let indiceNoCarrinho = carrinhoCompras.findIndex(fruta => fruta.name === props.fruta.name);

        if (indiceNoCarrinho !== -1) {
            let objeto = carrinhoCompras[indiceNoCarrinho]
            objeto["quantidade"] = Number(objeto.quantidade) + 1

            return

        } else {
            let copiaFruta = props.fruta
            copiaFruta.quantidade = 1

            setCarrinho([...carrinhoCompras, copiaFruta])
            return
        }
        return

    }

    return (
        <div className={props.toggleGrade ? `${styles.card} ${styles.toggleGrid}` : `${styles.card}`}>
            <img src={imgExemplo} alt="exemplo de imagem cinza" />
            <p>{props.fruta.name}</p>
            <p>{(props.fruta.id * 1.3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} /kg</p>
            <ButtonNutricionais fruta={props.fruta} />
            <button onClick={handleAdicionarCarrinho}>Adicionar ao carrinho</button>
        </div>
    )

}