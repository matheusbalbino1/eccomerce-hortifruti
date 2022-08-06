import { useContext } from "react"
import { CardCarrinho } from "../../components/CardCarrinho/CardCarrinho"
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras"
import imgCesta from "../../images/Vector.png"
import styles from "./Carrinho.module.scss"
export function Carrinho() {

    const { carrinhoCompras, setCarrinho } = useContext(CarrinhoCompras)
    return (
        <main className={styles.main}>
            <h1>Carrinho de compras</h1>
            {/* {!carrinhoCompras[0] ? <>
                <span>Cesta está vazia</span>
                <img src={imgCesta} alt="" />
            </> :
                carrinhoCompras.map(())
                
                } */}

        </main>
    )
}