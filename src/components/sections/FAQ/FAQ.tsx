import { useState } from "react";
import "./FAQ.css";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso comprovar renda?",
      answer:
        "Sim. Para oferecer as melhores condições e taxas de juros, solicitamos uma comprovação simples de renda. Você pode enviar um extrato bancário, holerite ou outro documento equivalente. Todo o processo é feito de forma digital e segura.",
    },
    {
      question: "O dinheiro cai na hora?",
      answer:
        "Após a aprovação da proposta e a assinatura do contrato digital, o pagamento é processado rapidamente via Pix. Em muitos casos, o valor pode cair na sua conta em poucos minutos, dependendo da instituição financeira parceira.",
    },
    {
      question: "Negativados podem solicitar?",
      answer:
        "Sim. Trabalhamos com parceiros que oferecem opções de crédito para pessoas com restrições no nome. A aprovação depende da análise de perfil, mas recomendamos fazer a simulação para verificar quais ofertas estão disponíveis para você.",
    },
    {
      question: "É seguro informar meus dados?",
      answer:
        "Sim, é totalmente seguro. Utilizamos criptografia de padrão bancário para proteger todas as informações enviadas. Além disso, seguimos rigorosamente as diretrizes da LGPD (Lei Geral de Proteção de Dados), garantindo a privacidade e segurança dos seus dados.",
    },
  ];

  return (
    <section id="faq" className=" faq__section">
      <div className="faq-section__container">
        <h2>Dúvidas Frequentes</h2>

        <div className="faq-section__faqs">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-section__faq">
      <button
        className=" faq-section__faq-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="faq-section__faq-question">{question}</span>
        {isOpen ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}
      </button>
      {isOpen && <div className="faq-section__faq-answer">{answer}</div>}
    </div>
  );
}
