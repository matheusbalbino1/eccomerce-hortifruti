import { useContext } from "react"
import { CardCarrinho } from "../../components/CardCarrinho/CardCarrinho"
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras"
import imgCesta from "../../images/Vector.png"
import styles from "./Carrinho.module.scss"

export function Carrinho() {

    const { carrinhoCompras, setCarrinho, precoTotal,alterarQuantidade } = useContext(CarrinhoCompras)

    // QUANDO CLICAR EM LIMPAR CARRINHO
    function limparCarrinho(){
        setCarrinho([])
        
        // PARA ALTERAR A QUANTIDADE QUE SERA MOSTRADO NO HEADER
        alterarQuantidade(false, 9999)
        return
    }

    return (
        <main className={styles.main}>
            <h1>Carrinho de compras</h1>

            {!carrinhoCompras[0] ? <>
                <span>Cesta está vazia</span>
                <img src={imgCesta} alt="" />
            </> :
            carrinhoCompras.map((fruta)=>{
                return <CardCarrinho fruta={fruta} key={fruta.id * 1.3}/>
            })
                
            }

            <p>
                <span>Total:</span> {(precoTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
            <button onClick={limparCarrinho}>Limpar carrinho</button>
            <button>Finalizar compras</button>



        </main>
    )
}