import styles from "./CardCarrinho.module.scss"
import imgExemplo from "../../images/exemploImg.png"
import { FrutaProps } from "../../contexts/MostrarFrutas"
import { ButtonAumentarQuantia } from "../ButtonAumentarQuantia/ButtonAumentarQuantia";
import { ButtonDiminuirQuantia } from "../ButtonDiminuirQuantia/ButtonDiminuirQuantia";
import { useContext } from "react";
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras";

interface Props {
    fruta: FrutaProps;
}

export function CardCarrinho(props: Props) {

    const {carrinhoCompras, alterarQuantidade, setCarrinho} = useContext(CarrinhoCompras)

    // AO CLICAR EM EXCLUIR NO CARRINHO
    function handleExcluir(){
        // FILTRA O CARRINHO E TIRA A FRUTA CLICADA
        let copiaCarrinhoCompras =  carrinhoCompras.filter((fruta)=>{
            if(fruta.name !== props.fruta.name){
                return fruta
            }
            return
        })
        
        // ALTERA A QUANTIDADE DE PRODUTOS NO CARRINHO QUE SERA MOSTRADO NO HEADER
        alterarQuantidade(false, props.fruta.quantidade)

        // SETA O NOVO CARRINHO
        setCarrinho(copiaCarrinhoCompras)
        return
    }

    return (
        <div className={styles.card}>
            <div className={styles.divImgPreco}>
                <div><img src={imgExemplo} alt="Imagem de exemplo" /></div>
                <div>
                    <p>{props.fruta.name}</p>
                    <span>{(props.fruta.id * 1.3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                </div>
            </div>
            <div className={styles.divButtons}>
                <button onClick={handleExcluir}>Excluir</button>
                <div>
                    <ButtonDiminuirQuantia fruta={props.fruta}/>
                    <span>{props.fruta.quantidade}</span>
                    <ButtonAumentarQuantia fruta={props.fruta}/>
                </div>
            </div>
        </div>
    )
}