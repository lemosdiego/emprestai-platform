export default function NavigationDesktop({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  return (
    <nav className="max-md:hidden flex items-center gap-8 max-lg:gap-4">
      <a
        href="#como-funciona"
        className={`font-medium hover:text-purple-950 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
      >
        Como funciona
      </a>
      <a
        href="#beneficios"
        className={`font-medium hover:text-purple-950 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
      >
        Vantagens
      </a>
      <a
        href="#faq"
        className={`font-medium hover:text-purple-950 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
      >
        Dúvidas
      </a>
      <a
        href="#simulacao"
        className={`font-bold px-5 py-2 rounded-xl transition-all ${isScrolled ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-white text-purple-600 hover:bg-gray-100"}`}
      >
        Simulação
      </a>
    </nav>
  );
}
