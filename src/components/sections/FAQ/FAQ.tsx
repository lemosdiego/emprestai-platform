// src/components/sections/FAQ/FAQ.tsx
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso comprovar renda?",
      answer:
        "Sim, para garantir as melhores taxas, solicitamos uma comprovação simples que pode ser feita via extrato bancário ou holerite.",
    },
    {
      question: "O dinheiro cai na hora?",
      answer:
        "Após a aprovação e assinatura do contrato, o pagamento é processado via Pix e costuma cair em até 30 minutos.",
    },
    {
      question: "Negativados podem solicitar?",
      answer:
        "Sim! Temos parceiros especializados em crédito para negativados. Faça uma simulação para verificar as condições.",
    },
    {
      question: "É seguro informar meus dados?",
      answer:
        "Totalmente. Utilizamos criptografia de nível bancário e seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados).",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
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
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-900">{question}</span>
        <span
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-600 border-t border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
}
