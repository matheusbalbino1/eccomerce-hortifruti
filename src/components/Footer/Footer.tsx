import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import imgLogo from "../../images/Logo.png";
import styles from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://www.linkedin.com/in/matheus-balbino-de-oliveira-4a2456195/"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <BsLinkedin />
        </a>
        <BsFacebook />
        <BsInstagram />
        <a
          href="https://github.com/matheusbalbino1"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <BsGithub />
        </a>
      </div>
      <img src={imgLogo} alt="Imagem de uma cesta vermelha" />
      <address>
        <p>Avenida Paulista, São Paulo SP, Brasil</p>
        <p>CNPJ: 323133131</p>
      </address>
    </footer>
  );
}
