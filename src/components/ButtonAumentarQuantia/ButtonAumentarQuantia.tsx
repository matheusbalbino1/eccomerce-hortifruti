import { useContext } from "react";
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras";
import { FrutaProps } from "../../contexts/MostrarFrutas";
import styles from "./ButtonAumentarQuantia.module.scss";

interface Props {
  fruta: FrutaProps;
}

export function ButtonAumentarQuantia(props: Props) {
  const { carrinhoCompras, setCarrinho, alterarQuantidade } =
    useContext(CarrinhoCompras);

  // ATIVA AO CLICAR NO BOTÃO + NO CARRINHO
  function handleOnClick() {
    // AUMENTA 1 NA QUANTIDADE DE PRODUTOS NO CARRINHO PARA SER MOSTRADO NO HEADER
    alterarQuantidade(true);

    // COPIA O CARRINHO DE COMPRAS SEM A FRUTA CLICADA
    const indiceNoCarrinho = [
      ...carrinhoCompras.filter((fruta) => fruta.name !== props.fruta.name),
      {
        name: props.fruta.name,
        genus: props.fruta.genus,
        id: props.fruta.id,
        family: props.fruta.family,
        order: props.fruta.order,
        nutritions: props.fruta.nutritions,
        quantidade: Number(props.fruta.quantidade) + 1,
      },
    ].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    // SETA O NOVO CARRINHO
    setCarrinho(indiceNoCarrinho);
    return;
  }
  return (
    <button className={styles.button} onClick={handleOnClick}>
      +
    </button>
  );
}
