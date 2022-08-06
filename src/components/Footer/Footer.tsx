import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"
import imgLogo from "../../images/Logo.png"
import styles from "./Footer.module.scss"
export function Footer (){
    return(
        <footer className={styles.footer}>
            <div>
                <BsLinkedin/>
                <BsFacebook/>
                <BsInstagram/>
                <BsGithub/>
            </div>
            <img src={imgLogo} alt="Imagem de uma cesta vermelha" />
            <address>
                <p>Avenida Paulista, 98, andar 91, São Paulo SP, Brasil</p>
                <p>CNPJ: 323133131</p>
            </address>
        </footer>
    )
}