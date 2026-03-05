// src/components/sections/SocialProof/SocialProof.tsx
export default function SocialProof() {
  return (
    <section className="py-16 bg-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">
          Junte-se a milhares de brasileiros satisfeitos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="text-4xl font-extrabold text-purple-300 mb-2">
              +50 mil
            </div>
            <p className="text-purple-100">Simulações realizadas</p>
          </div>
          <div className="p-6 border-y md:border-y-0 md:border-x border-purple-800">
            <div className="text-4xl font-extrabold text-purple-300 mb-2">
              R$ 15 mi
            </div>
            <p className="text-purple-100">Em crédito liberado</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-extrabold text-purple-300 mb-2">
              4.9/5
            </div>
            <p className="text-purple-100">Avaliação dos clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
