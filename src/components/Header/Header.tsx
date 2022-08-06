import { Link } from "react-router-dom";
import imgLogo from "../../images/Logo.png"
import imgCarrinho from "../../images/CarrinhoDeCompras.png"
import styles from "./Header.module.scss"
export function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={imgLogo} alt="Logo é uma laranja com hortifruti escrito ao lado" />
            </Link>
            <img src={imgCarrinho} alt="Imagem de uma cesta vermelha" />
        </header>
    )
}