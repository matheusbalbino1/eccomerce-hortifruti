import React, { ReactElement, ReactNode, useContext, useState } from "react";
import { carrinhoCompras } from "../../contexts/carrinhosDeCompras";
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
    const { allFruits, setShowFruits } = useContext(carrinhoCompras)
    const [inputChecked, setInputChecked] = useState<String>("menosz")
    console.log(inputChecked)


    interface FrutaProps {
        genus: string;
        name: string;
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


    function filtrarFrutas(nutriente: string) {



    }


    function handleSubmit(e: React.SyntheticEvent) {
        console.log(e)
        e.preventDefault()
        props.setShowModal(false)
        let todasFrutas = allFruits;
        switch (inputChecked) {

            case "maisaçucares":
                todasFrutas.sort((a, b) => {
                    return b.nutritions.sugar - a.nutritions.sugar
                })
                console.log(todasFrutas)
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

    return (
        <dialog open={props.open} className={styles.modalOrdenar}>
            <form onSubmit={handleSubmit}>
                <h2>Ordenar por</h2>
                <InputRadio
                  name="a - z"
                  setInputChecked={setInputChecked}
                  checked={inputChecked === "menosz" ? true : false} 
                  />
                <InputRadio name="z - a" setInputChecked={setInputChecked} />
                <InputRadio name="+ açucares" setInputChecked={setInputChecked} />
                <InputRadio name="+ carboídratos" setInputChecked={setInputChecked} />
                <InputRadio name="+ gorduras" setInputChecked={setInputChecked} />
                <InputRadio name="+ calorias" setInputChecked={setInputChecked} />
                <InputRadio name="+ proteinas" setInputChecked={setInputChecked} />
                <button type="submit">Ordenar</button>
            </form>
        </dialog>
    )
}