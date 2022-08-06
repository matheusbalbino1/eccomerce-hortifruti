import { useContext, useEffect, useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MostrarFrutas } from "../../contexts/MostrarFrutas";
import { LimparBusca } from "../../contexts/LimparBusca";
import styles from "./SearchInput.module.scss"

export function SearchInput() {
    const { allFruits, setShowFruits, fruits } = useContext(MostrarFrutas)
    const [search, setSearch] = useState("")
    const [showResearched, setShowResearched] = useState("")

    // PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE CLICAR EM ORDENAR
    const {toggle, inverterValor} = useContext(LimparBusca)
    useEffect(()=>{
        setShowResearched("")
        setSearch("")
    },[toggle])
    
    function handleClick() {
        setShowResearched(search);
        if(search){
            const frutasFiltradas = allFruits.filter((fruta)=>{
                return fruta.name === search
            })
            setShowFruits(frutasFiltradas)
        }else{
            setShowFruits(allFruits)
        }
    }


    return (
        <section className={styles.sectionSearch}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" name="search" id="search" value={search} placeholder="O que você procura?" onChange={(e) => { setSearch(e.target.value) }} />
                <button onClick={handleClick}>
                    <GiMagnifyingGlass />
                </button>
            </form>
            {showResearched && <p>{showResearched}</p>}

        </section>
    )
}