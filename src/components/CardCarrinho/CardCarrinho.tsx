import styles from "./CardCarrinho.module.scss";
import imgExemplo from "../../images/exemploImg.png";
import { FrutaProps } from "../../contexts/MostrarFrutas";
import { ButtonAumentarQuantia } from "../ButtonAumentarQuantia/ButtonAumentarQuantia";
import { ButtonDiminuirQuantia } from "../ButtonDiminuirQuantia/ButtonDiminuirQuantia";
import { useContext } from "react";
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras";

interface Props {
  fruta: FrutaProps;
}

export function CardCarrinho({ fruta }: Props) {
  const { carrinhoCompras, alterarQuantidade, setCarrinho } =
    useContext(CarrinhoCompras);

  // AO CLICAR EM EXCLUIR NO CARRINHO
  function handleExcluir() {
    // FILTRA O CARRINHO E TIRA A FRUTA CLICADA
    const copiaCarrinhoCompras: FrutaProps[] = carrinhoCompras.filter(
      (item) => item.name !== fruta.name
    );

    // ALTERA A QUANTIDADE DE PRODUTOS NO CARRINHO QUE SERA MOSTRADO NO HEADER
    alterarQuantidade(false, fruta.quantidade);

    // SETA O NOVO CARRINHO
    setCarrinho(copiaCarrinhoCompras);
    return;
  }

  return (
    <div className={styles.card}>
      <div className={styles.divImgPreco}>
        <div>
          <img src={imgExemplo} alt="Imagem de exemplo" />
        </div>
        <div>
          <p>{fruta.name}</p>
          <span>
            {(fruta.id * 1.3).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <div className={styles.divButtons}>
        <button onClick={handleExcluir}>Excluir</button>
        <div>
          <ButtonDiminuirQuantia fruta={fruta} />
          <span>{fruta.quantidade}</span>
          <ButtonAumentarQuantia fruta={fruta} />
        </div>
      </div>
    </div>
  );
}
