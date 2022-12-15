import { useState } from "react";
import { FrutaProps } from "../../contexts/MostrarFrutas";
import styles from "./ButtonNutricionais.module.scss";

interface Props {
  fruta: FrutaProps;
}

export function ButtonNutricionais({ fruta }: Props) {
  const [openModal, setOpenModal] = useState(false);

  // SE O MODAL ESTIVER ABERTO, TRAVA O SCROLL
  if (openModal) {
    const scrollTop = window.pageYOffset;
    const scrollLeft = window.pageXOffset;

    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };

    // SE O MODAL ESTIVER FECHADO, HABILITA O SCROLL
  } else {
    window.onscroll = () => {};
  }

  // ABRIR MODAL AO CLICAR EM VALORES NUTRICIONAIS
  function handleOnClick() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <button onClick={handleOnClick} className={styles.buttonNutricionais}>
        Valores nutricionais
      </button>
      <dialog open={openModal} className={styles.modalNutricionais}>
        <form>
          <h2>Valores nutricionais</h2>
          <p>{fruta.name}</p>
          <ul>
            {fruta.nutritions.calories && (
              <li>
                <span>Calorias:</span> {fruta.nutritions.calories}g
              </li>
            )}
            {fruta.nutritions.protein && (
              <li>
                <span>Proteinas:</span> {fruta.nutritions.protein}g
              </li>
            )}
            {fruta.nutritions.fat && (
              <li>
                <span>Gorduras:</span> {fruta.nutritions.fat}g
              </li>
            )}
            {fruta.nutritions.carbohydrates && (
              <li>
                <span>Carboidratos:</span> {fruta.nutritions.carbohydrates}g
              </li>
            )}
            {fruta.nutritions.sugar && (
              <li>
                <span>Açúcares:</span> {fruta.nutritions.sugar}g
              </li>
            )}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Fechar
          </button>
        </form>
      </dialog>
    </>
  );
}
