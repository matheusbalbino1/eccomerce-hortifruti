import { useContext } from "react"
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

    const { carrinhoCompras, setCarrinho, alterarQuantidade } = useContext(CarrinhoCompras)

    // ATIVA AO CLICAR EM ADICIONAR AO CARRINHO
    function handleAdicionarCarrinho() {

        // PARA AUMENTAR O NUMERO DE ITENS NO CARRINHO, TRUE PARA AUMENTAR E FALSE PARA DIMINUIR
        alterarQuantidade(true)

        // SE A FRUTA JA TIVER NO CARRINHO AUMENTAR 1 NA PROPRIEDADE QUANTIDADE,
        // SE NÃO, ADICIONA FRUTA + A PROPRIEDADE QUANTIDADE = 1
        if (carrinhoCompras.find(fruta => fruta.name === props.fruta.name)) {
            let copiaCarrinhoCompras = carrinhoCompras.map((fruta) => {
                if (fruta.name === props.fruta.name) {
                    fruta.quantidade = Number(fruta.quantidade) + 1
                    return fruta
                }
                return fruta
            })
            setCarrinho(copiaCarrinhoCompras)
            return
        } else {
            let copiaFruta = props.fruta
            copiaFruta.quantidade = 1
            setCarrinho([...carrinhoCompras, copiaFruta])
            return
        }

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