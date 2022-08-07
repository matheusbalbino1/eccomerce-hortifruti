import { Link } from "react-router-dom";
import imgLogo from "../../images/Logo.png"
import imgCarrinho from "../../images/CarrinhoDeCompras.png"
import styles from "./Header.module.scss"
import { useContext } from "react";
import { CarrinhoCompras } from "../../contexts/CarrinhoCompras";
import { SearchInput } from "../SearchInput/SearchInput";
export function Header() {

    // RECEBER A QUANTIDADE DE PRODUTOS NO CARRINHO
    const { quantidadeProdutos } = useContext(CarrinhoCompras)

    return (
        <header className={styles.header}>
            <Link to="/">
                {/**/}
                <img src={imgLogo} alt="Logo é uma laranja com hortifruti escrito ao lado" />
            </Link>
            <SearchInput />
            <Link to="/carrinho">
                <img src={imgCarrinho} alt="Imagem de uma cesta vermelha" />
                <span>{quantidadeProdutos}</span>
            </Link>


        </header>
    )
}