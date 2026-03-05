// src/components/sections/HowItWorks/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Simule seu Crédito",
      description:
        "Preencha o formulário com seus dados básicos e o valor desejado.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Análise Rápida",
      description:
        "Nossa tecnologia analisa seu perfil em segundos para encontrar a melhor oferta.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Dinheiro na Conta",
      description:
        "Aprovou? Assine o contrato digital e receba o dinheiro via Pix.",
      icon: "💰",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conseguir crédito nunca foi tão simples. Veja como é fácil:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Linha conectora (visível apenas em desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-purple-100 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
