import React, { useContext, useState } from "react";
import { MostrarFrutas } from "../../contexts/MostrarFrutas";
import { LimparBusca } from "../../contexts/LimparBusca";
import { InputRadio } from "../InputRadio/InputRadio";
import styles from "./ModalOrdenar.module.scss"

interface Props {
    open: boolean;
    setShowModal: (boolean: boolean) => void;

}

interface FrutaProps {
    genus: string;
    name: string | number;
    id: number;
    family: string;
    order: string;
    nutritions: {
        "carbohydrates": number;
        "protein": number;
        "fat": number;
        "calories": number;
        "sugar": number;
    };
};

export function ModalOrdenar(props: Props) {
    // RECEBER TODAS AS FRUTAS DA API
    const { allFruits, setShowFruits } = useContext(MostrarFrutas)

    // PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE ORDENAR A LISTA
    const { inverterValor } = useContext(LimparBusca)

    // PARA RECEBER O VALOR DO INPUT PARA ORDENAR
    const [inputChecked, setInputChecked] = useState<string>("")

    // FUNÇÃO PARA ORDENAR EM ORDEM A - Z OU Z - A
    function ordenarAlfabetico(a: FrutaProps, b: FrutaProps) {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    }

    function filtrarFrutas() {
        // COPIAR TODAS AS FRUTAS
        let todasFrutas = allFruits;
        switch (inputChecked) {

            // FILTRA DE Z - A
            case "menosa":
                todasFrutas.sort((a, b) => { return ordenarAlfabetico(b, a) })
                setShowFruits(todasFrutas)
                break;

            // FILTRA DE Z - A
            case "menosz":
                todasFrutas.sort((a, b) => { return ordenarAlfabetico(a, b) })
                setShowFruits(todasFrutas)
                break;

            // FILTRA + AÇUCARES
            case "maisaçucares":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.sugar - a.nutritions.sugar
                })
                setShowFruits(todasFrutas)
                break;

            // FILTRA + CARBOIDRATOS
            case "maiscarboídratos":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.carbohydrates - a.nutritions.carbohydrates
                })
                setShowFruits(todasFrutas)
                break;

            // FILTRA + GORDURAS
            case "maisgorduras":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.fat - a.nutritions.fat
                })
                setShowFruits(todasFrutas)
                break;

            // FILTRA + CALORIAS
            case "maiscalorias":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.calories - a.nutritions.calories
                })
                setShowFruits(todasFrutas)
                break;

            // FILTRA + PROTEINAS
            case "maisproteinas":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.protein - a.nutritions.protein
                })
                setShowFruits(todasFrutas)
                break;
        }
    }

    // ATIVA AO CLICAR EM ORDENAR
    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()

        // ESCONDER O MODAL DE ORDENAR
        props.setShowModal(false)

        // FUNÇÃO PARA FILTRAR AS FRUTAS
        filtrarFrutas()

        // PARA LIMPAR A BARRA DE BUSCA
        inverterValor()

    }

    return (
        <dialog open={props.open} className={styles.modalOrdenar}>
            <form onSubmit={handleSubmit}>
                <h2>Ordenar por</h2>
                <InputRadio text="a - z" setInputChecked={setInputChecked} defaultChecked />
                <InputRadio text="z - a" setInputChecked={setInputChecked} />
                <InputRadio text="+ açucares" setInputChecked={setInputChecked} />
                <InputRadio text="+ carboídratos" setInputChecked={setInputChecked} />
                <InputRadio text="+ gorduras" setInputChecked={setInputChecked} />
                <InputRadio text="+ calorias" setInputChecked={setInputChecked} />
                <InputRadio text="+ proteinas" setInputChecked={setInputChecked} />
                <button type="submit">Ordenar</button>
            </form>
        </dialog>
    )
}