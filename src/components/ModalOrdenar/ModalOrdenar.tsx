import React, { ReactElement, ReactNode, useContext, useState } from "react";
import { MostrarFrutas } from "../../contexts/MostrarFrutas";
import { LimparBusca } from "../../contexts/LimparBusca";
import { InputRadio } from "../InputRadio/InputRadio";
import styles from "./ModalOrdenar.module.scss"

interface Props {
    open: boolean;
    setShowModal: (boolean: boolean) => void;

}

interface eventProps {
    preventDefault: () => void;
    target: {
        value: string;
    }
}
export function ModalOrdenar(props: Props) {
    const { allFruits, setShowFruits } = useContext(MostrarFrutas)

    // PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE CLICAR EM ORDENAR
    const {toggle, inverterValor} = useContext(LimparBusca)

    const [inputChecked, setInputChecked] = useState<string>("menosz")
    console.log(inputChecked)


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

    function ordenarAlfabetico(a: FrutaProps, b: FrutaProps) {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    }
    function filtrarFrutas() {
        let todasFrutas = allFruits;
        switch (inputChecked) {
            case "menosa":
                todasFrutas.sort((a, b) => { return ordenarAlfabetico(b,a) })
                setShowFruits(todasFrutas)
                break;
            case "menosz":
                todasFrutas.sort((a, b) => { return ordenarAlfabetico(a, b) })
                setShowFruits(todasFrutas)
                break;
            case "maisaçucares":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.sugar - a.nutritions.sugar
                })
                setShowFruits(todasFrutas)
                break;
            case "maiscarboídratos":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.carbohydrates - a.nutritions.carbohydrates
                })
                setShowFruits(todasFrutas)
                break;
            case "maisgorduras":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.fat - a.nutritions.fat
                })
                setShowFruits(todasFrutas)
                break;
            case "maiscalorias":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.calories - a.nutritions.calories
                })
                setShowFruits(todasFrutas)
                break;
            case "maisproteinas":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.protein - a.nutritions.protein
                })
                setShowFruits(todasFrutas)
                break;
        }
    }



    function handleSubmit(e: React.SyntheticEvent) {
        console.log(e)
        e.preventDefault()

        // ESCONDER O MODAL DE ORDENAR
        props.setShowModal(false)

        filtrarFrutas()

        // PARA LIMPAR A BARRA DE BUSCA SEMPRE QUE CLICAR EM ORDENAR
        inverterValor()

        

    }

    return (
        <dialog open={props.open} className={styles.modalOrdenar}>
            <form onSubmit={handleSubmit}>
                <h2>Ordenar por</h2>
                <InputRadio
                    text="a - z"
                    setInputChecked={setInputChecked}
                    defaultChecked
                />
                <InputRadio text="z - a" setInputChecked={setInputChecked} />
                <InputRadio text="+ açucares" setInputChecked={setInputChecked} />
                <InputRadio text="+ carboídratos" setInputChecked={setInputChecked} />
                <InputRadio text="+ gorduras" setInputChecked={setInputChecked} />
                <InputRadio text="+ calorias" setInputChecked={setInputChecked} />
                <InputRadio text="+ proteinas" setInputChecked={setInputChecked}/>
                <button type="submit">Ordenar</button>
            </form>
        </dialog>
    )
}