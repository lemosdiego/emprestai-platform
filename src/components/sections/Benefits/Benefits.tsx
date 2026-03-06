import "./Benefits.css";
import { FaCheck } from "react-icons/fa";
export default function Benefits() {
  const benefits = [
    {
      title: "100% Online",
      desc: "Faça todo o processo diretamente pelo celular ou computador, de forma rápida, prática e sem precisar sair de casa.",
    },
    {
      title: "Taxas Justas",
      desc: "Conectamos você às melhores opções de crédito disponíveis, com taxas competitivas e adequadas ao seu perfil.",
    },
    {
      title: "Segurança Total",
      desc: "Seus dados são protegidos com tecnologia de criptografia avançada, garantindo privacidade e segurança em todas as etapas.",
    },
    {
      title: "Sem Burocracia",
      desc: "Processo simples e descomplicado, com análise rápida e sem a necessidade de enfrentar longas filas ou papelada.",
    },
  ];

  return (
    <section id="beneficios" className=" benefits__section">
      <div className="benefits-section__container">
        <div className="benefits-section__text">
          <h2>
            Por que escolher a{" "}
            <span className="text-purple-600">EmprestAi</span>?
          </h2>
          <p>
            Nossa missão é democratizar o acesso ao crédito. Utilizamos
            tecnologia de ponta para oferecer uma experiência transparente,
            rápida e segura para você realizar seus sonhos.
          </p>
          <a href="#" className="">
            Saiba mais sobre nós <span>→</span>
          </a>
        </div>

        <div className="benefits-section__itens">
          {benefits.map((item, index) => (
            <div key={index} className="benefits-section__item">
              <div className="benefits-section__icon">
                <FaCheck size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
