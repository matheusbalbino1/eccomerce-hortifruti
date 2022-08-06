import { useContext } from "react"
import imgExemplo from "../../images/exemploImg.png"
import styles from "./Card.module.scss"
import { FrutaProps } from "../../contexts/carrinhosDeCompras"

interface Props{
    fruta:FrutaProps;
    toggleGrade:boolean;
}
export function Card(props:Props) {
    return (
        <div className={props.toggleGrade ? `${styles.card} ${styles.toggleGrid}` : `${styles.card}`}>
            <img src={imgExemplo} alt="exemplo de imagem cinza" />
            <p>{props.fruta.name}</p>
            <p>{(props.fruta.id * 1.3).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} /kg</p>
            <button>Valores nutricionais</button>
            <button>Adicionar ao carrinho</button>
        </div>
    )

}