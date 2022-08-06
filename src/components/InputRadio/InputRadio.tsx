import { InputHTMLAttributes, ReactElement, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
    setInputChecked:any;
}



export function InputRadio({name, setInputChecked, ...rest}:Props) {

    const mais = name.split(" ")[0] === "+"
    const nome = name.split(" ")[2] || name.split(" ")[1] 
    const id = mais ? `mais${nome}` : `menos${nome}`

    return (
        <label htmlFor={id}>
            <input type="radio" name={"ordenar"} id={id} value={id} {...rest} onClick={()=>{setInputChecked(id)}}/>
            {name}</label>
    )
}