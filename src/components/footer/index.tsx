import { FooterBlock, Developed } from "./style";
import logoBranca from "../../assets/svg/logo-branca.svg";
import logoPreta from "../../assets/svg/logo-preta.svg";
import { useTheme } from "../../provider/LightDark";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const { lightTheme } = useTheme();
  return (
    <>
      <FooterBlock>
        <div className="footer-container">
          <figure className="col">
            <img src={lightTheme ? logoPreta : logoBranca} />
          </figure>
          <div className="col col-info">
            <h4>Contato:</h4>
            <p>Tel: (24)99999-9999</p>
            <p>Email: kenzie.mail.com</p>
            <p>CNPJ: xxxxxxxxxxxx</p>
          </div>
          <div className="col">
            <h4>Cidades de Atendimento:</h4>
            <p>Curitiba, PR</p>
            <p>Vassouras, RJ</p>
            <p>Volta Redonda, RJ</p>
            <p>Valença, RJ</p>
            <p>Barra do Piraí, RJ</p>
          </div>
          <div className="col">
            <h4>Redes Sociais</h4>
            <ul className="social-icons">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </div>
      </FooterBlock>
      <Developed>
        &copy; Copyright | Desenvolvido com 💚 por{" "}
        <a
          rel="noreferrer"
          href="https://github.com/gabrielrochasouza"
          target={"_blank"}
        >
          Gabriel da Rocha de Souza
        </a>
      </Developed>
    </>
  );
}
