export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[url('https://res.cloudinary.com/dkrpmbjml/image/upload/v1772552420/emprestai_ssrjca.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      {/* Overlay com gradiente moderno */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-purple-900/80 to-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-lg leading-tight">
            EmprestAi! <br className="hidden lg:block" />
            <span className="text-purple-200">Crédito Simples.</span> <br />
            Sem enrolação.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            A emprestAi conecta você às melhores opções de crédito de forma
            rápida, transparente e 100% digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#simulacao"
              className="py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-full shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Simular Agora
            </a>
            <a
              href="#como-funciona"
              className="py-4 px-8 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white text-lg font-bold rounded-full shadow-lg transition-all"
            >
              Como Funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
