import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg inline-block mb-4">
              <img src="/logosf.png" alt="EmprestAi" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Facilitando o acesso ao crédito com transparência e agilidade. Seu
              futuro financeiro começa aqui.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-purple-400 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-purple-400 transition-colors"
                >
                  Vantagens
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-purple-400 transition-colors"
                >
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Contato
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span> contato@emprestai.com.br
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> 0800 123 4567
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} EmprestAi Soluções Financeiras.
            Todos os droits reservados.
          </p>
          <p className="mt-2">
            CNPJ: 00.000.000/0001-00 | Av. Paulista, 1000 - São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
