import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    setInputChecked: any;
}

export function InputRadio({ text, setInputChecked, ...rest }: Props) {

    // PARA CRIAR UM ID UNICO
    const mais = text.split(" ")[0] === "+"
    const nome = text.split(" ")[2] || text.split(" ")[1]
    const id = mais ? `mais${nome}` : `menos${nome}`

    return (
        <label htmlFor={id}>
            <input type="radio" name={"ordenar"} id={id} value={id} {...rest} onClick={() => { setInputChecked(id) }} />
            {text}
        </label>
    )
}