import { useContext } from "react";
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras";
import { FrutaProps } from "../../contexts/MostrarFrutas";
import styles from "./ButtonDiminuirQuantia.module.scss"

interface Props {
    fruta: FrutaProps;
}

export function ButtonDiminuirQuantia(props: Props) {
    
    const { carrinhoCompras, setCarrinho, alterarQuantidade } = useContext(CarrinhoCompras);

    // AO CLICAR NO BOTÃO - NO CARRINHO
    function handleOnClick() {

        // APENAS DIMINUI SE A QUANTIDADE DESSE ITEM FOR MAIOR QUE 1
        // NÃO EXCLUI O ITEM DO CARRINHO
        if(Number(props.fruta.quantidade) > 1){

            //PARA DIMINUIR EM 1 A QUANTIDADE DE ITENS NO CARRINHO E MOSTRAR NO ICONE DO HEADER
            alterarQuantidade(false)

            // COPIA O CARRINHO DE COMPRAS E RETIRA A FRUTA CLICADA
            let indiceNoCarrinho = carrinhoCompras.filter(fruta => fruta.name !== props.fruta.name)

            // ADICIONA A FRUTA AO CARRINHO COM A QUANTIDADE + 1
            indiceNoCarrinho.push({
                name: props.fruta.name,
                genus: props.fruta.genus,
                id: props.fruta.id,
                family: props.fruta.family,
                order: props.fruta.order,
                nutritions: props.fruta.nutritions,
                quantidade: (Number(props.fruta.quantidade) - 1)
            })

            // ORGANIZA O CARRINHO DE A - Z
            indiceNoCarrinho.sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                } else {
                    return 1
                }
            })

            // SETA O NOVO CARRINHO DE COMPRAS
            setCarrinho(indiceNoCarrinho)
        }
        return
    }

    return (
        <button className={styles.button} onClick={handleOnClick}>-</button>
    )
}