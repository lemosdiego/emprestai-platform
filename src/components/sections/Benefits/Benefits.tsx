// src/components/sections/Benefits/Benefits.tsx
export default function Benefits() {
  const benefits = [
    {
      title: "100% Online",
      desc: "Faça tudo pelo celular, sem filas e sem papelada.",
    },
    {
      title: "Taxas Justas",
      desc: "Trabalhamos com as melhores taxas do mercado para o seu perfil.",
    },
    {
      title: "Segurança Total",
      desc: "Seus dados são protegidos com criptografia de ponta a ponta.",
    },
    {
      title: "Sem Burocracia",
      desc: "Esqueça a papelada. Aqui a análise é simplificada.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Por que escolher a{" "}
              <span className="text-purple-600">EmprestAi</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é democratizar o acesso ao crédito. Utilizamos
              tecnologia de ponta para oferecer uma experiência transparente,
              rápida e segura para você realizar seus sonhos.
            </p>
            <a
              href="#"
              className="text-purple-600 font-bold hover:text-purple-800 transition-colors flex items-center gap-2"
            >
              Saiba mais sobre nós <span>→</span>
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
