import { useContext, useEffect, useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MostrarFrutas } from "../../contexts/MostrarFrutas";
import { LimparBusca } from "../../contexts/LimparBusca";
import styles from "./SearchInput.module.scss";

export function SearchInput() {
  // RECEBER TODAS AS FRUTAS DA API
  const { allFruits, setShowFruits } = useContext(MostrarFrutas);

  // PARA CONTROLAR A BARRA DE PESQUISA
  const [search, setSearch] = useState("");

  // PARA MOSTRAR O ITEM PESQUISADO ABAIXO DA BARRA (APENAS MOBILE)
  const [showResearched, setShowResearched] = useState("");

  // PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE CLICAR EM ORDENAR
  const { toggle } = useContext(LimparBusca);

  // PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE ORDENAREM A LISTA
  useEffect(() => {
    setShowResearched("");
    setSearch("");
  }, [toggle]);

  function handleClick() {
    // SETAR O ITEM DIGITADO PARA SER MOSTRAR ABAIXO DA BARRA DE BUSCA (APENAS MOBILE)
    setShowResearched(search);

    if (search) {
      const frutasFiltradas = allFruits.filter(
        (fruta) => fruta.name.toLowerCase() === search.toLowerCase()
      );
      setShowFruits(frutasFiltradas);
      return;
    }
    // SE TIVER EM BRANCO, MOSTRA TODAS AS FRUTAS SEM FILTRO
    setShowFruits(allFruits);
  }

  return (
    <section className={styles.sectionSearch}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="O que você procura?"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handleClick}>
          <GiMagnifyingGlass />
        </button>
      </form>
      {showResearched && <p>{showResearched}</p>}
    </section>
  );
}
