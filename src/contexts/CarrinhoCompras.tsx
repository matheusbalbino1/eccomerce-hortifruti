import { createContext, ReactNode, useEffect, useState } from "react";
import { FrutaProps } from "./MostrarFrutas";

interface CarrinhoProps {
    carrinhoCompras: FrutaProps[];
    setCarrinho([]): void;
    quantidadeProdutos: number;
    alterarQuantidade(valor: boolean, numero?: number): void;
    precoTotal: number;
}
interface Props {
    children: ReactNode;
}

export const CarrinhoCompras = createContext({} as CarrinhoProps)

export const CarrinhoComprasProvider = ({ children }: Props) => {

    // ARRAY COM AS FRUTAS QUE O USUARIO ADICIONAR AO CARRINHO, FRUTA + PROPRIEDADE QUANTIDADE
    const [carrinhoCompras, setCarrinhoCompras] = useState<FrutaProps[]>([])

    // STATE PARA CALCULAR O PREÇO TOTAL E IR ATUALIZANDO NO CARRINHO
    const [precoTotal, setPrecoTotal] = useState(0)

    // STATE PARA ATUALIZAR A QUANTIDADE DE PRODUTOS NO ICONE DE CESTA NO HEADER
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)

    // CALCULAR O PREÇO TOTAL SEMPRE QUE A QUANTIDADEdePRODUTOS MUDAR
    useEffect(() => {
        let count = 0
        carrinhoCompras.map(fruta => count = count + (fruta.id * 1.3 * Number(fruta.quantidade)))
        setPrecoTotal(count)
    }, [quantidadeProdutos])

    // FUNÇÃO PARA ALTERAR O CARRINHO DE COMPRAS
    function setCarrinho(frutas: FrutaProps[]) {
        setCarrinhoCompras(frutas)
        return
    }

    // FUNÇÃO PARA ALTERAR A QUANTIDADE DE PRODUTOS QUE SERÃO MOSTRADOS NO ICONE DE CESTA NO HEADER
    // PRIMEIRO PARAMETRO RECEBE TRUE PARA AUMENTAR OU FALSE PARA DIMINUIR
    // SEGUNDO PARAMETRO É O NUMERO PARA O CALCULO
    function alterarQuantidade(parametro: boolean, numero: number) {

        if (parametro) {
            if (numero) {
                setQuantidadeProdutos(quantidadeProdutos + numero)
            } else {
                setQuantidadeProdutos(quantidadeProdutos + 1)
            }
            return
        } else {
            if (numero) {
                // CONDIÇÃO PARA CASO CLIQUEM EM EXCLUIR O ITEM DO CARRINHO
                if (quantidadeProdutos - numero < 0) {
                    setQuantidadeProdutos(0)
                } else {
                    setQuantidadeProdutos(quantidadeProdutos - numero)
                }
            } else {
                setQuantidadeProdutos(quantidadeProdutos - 1)
            }
            return
        }
    }

    return (
        <CarrinhoCompras.Provider value={{ carrinhoCompras, setCarrinho, quantidadeProdutos, alterarQuantidade, precoTotal }}>
            {children}
        </CarrinhoCompras.Provider>
    )
}

