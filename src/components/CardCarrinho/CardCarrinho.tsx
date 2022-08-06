import styles from "./CardCarrinho.module.scss"
import imgExemplo from "../../images/exemploImg.png"
export function CardCarrinho() {
    return (
        <div className={styles.card}>
            <div>
                <img src={imgExemplo} alt="" />

            </div>
        </div>
    )
}