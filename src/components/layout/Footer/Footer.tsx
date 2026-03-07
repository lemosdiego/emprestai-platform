import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Coluna 1: Marca */}
        <div className="footer__colum-1">
          <div className="footer__logo">
            <img src="/logo1sf.png" alt="EmprestAi" />
          </div>
          <p>
            Facilitando o acesso ao crédito com transparência e agilidade. Seu
            futuro financeiro começa aqui.
          </p>
        </div>

        {/* Coluna 2: Institucional */}
        <div className="footer__colum-2">
          <h3>Institucional</h3>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <a href="#como-funciona">Como Funciona</a>
            </li>
            <li>
              <a href="#beneficios">Vantagens</a>
            </li>
            <li>
              <a href="#faq">Dúvidas</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer__colum-3">
          <h3>Contato</h3>
          <ul>
            <li>
              <span>📧</span> contato@emprestai.com.br
            </li>
            <li>
              <span>📞</span> 0800 123 4567
            </li>
          </ul>
        </div>

        {/* Coluna 5: Redes sociais */}
        <div className="footer__colum-5">
          <h3>Redes Sociais</h3>

          <div className="footer__social">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          &copy; {new Date().getFullYear()} EmprestAi Soluções Financeiras.
          Todos os direitos reservados.
        </p>
        <p>CNPJ: 00.000.000/0001-00 | Av. Paulista, 1000 - São Paulo, SP</p>
      </div>
    </footer>
  );
}
