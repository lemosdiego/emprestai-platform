import "./HowItWorks.css";
import { FaClipboardList, FaBolt, FaMoneyBillWave } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Simule seu Crédito",
      description:
        "Informe seus dados básicos e o valor que deseja solicitar. A simulação é rápida, gratuita e não compromete seu score de crédito.",
      icon: <FaClipboardList size={45} className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Análise Rápida",
      description:
        "Nossa plataforma analisa seu perfil em poucos segundos e busca automaticamente as melhores ofertas disponíveis para você.",
      icon: <FaBolt size={45} className="text-purple-500" />,
    },
    {
      id: 3,
      title: "Dinheiro na Conta",
      description:
        "Após a aprovação, assine o contrato digital com segurança e receba o valor diretamente na sua conta via Pix.",
      icon: <FaMoneyBillWave size={45} className="text-green-500" />,
    },
  ];

  return (
    <section id="como-funciona" className="howtworks__section">
      <div className="howtworks__section-container">
        <div className="howtworks__section-container-title">
          <h2>Como funciona?</h2>
          <p>Conseguir crédito nunca foi tão simples. Veja como é fácil:</p>
        </div>

        <div className="howtworks__section-container-steps">
          {steps.map((step) => (
            <div
              key={step.id}
              className="howtworks__section-container-steps-item"
            >
              <span className="howtworks__section-container-steps-icon">
                {step.icon}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
