import styles from "./CardCarrinho.module.scss"
import imgExemplo from "../../images/exemploImg.png"
import { FrutaProps } from "../../contexts/MostrarFrutas"
import { ButtonAumentarQuantia } from "../ButtonAumentarQuantia/ButtonAumentarQuantia";
import { ButtonDiminuirQuantia } from "../ButtonDiminuirQuantia/ButtonDiminuirQuantia";

interface Props {
    fruta: FrutaProps;
}

export function CardCarrinho(props: Props) {
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
                <button>Excluir</button>
                <div>
                    <ButtonDiminuirQuantia fruta={props.fruta}/>
                    <span>{props.fruta.quantidade}</span>
                    <ButtonAumentarQuantia fruta={props.fruta}/>
                </div>
            </div>
        </div>
    )
}