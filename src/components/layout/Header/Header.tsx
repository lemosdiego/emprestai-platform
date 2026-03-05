import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Efeito para mudar o fundo do header ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="block group">
          <div
            className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? "" : "bg-white/95 backdrop-blur-md shadow-lg border border-white/20"}`}
          >
            <img
              src="/logosf.png"
              alt="EmprestAi"
              className="h-8 w-auto sm:h-10 object-contain"
            />
          </div>
        </Link>

        {isHome && (
          <nav className="hidden md:flex gap-8">
            <a
              href="#como-funciona"
              className={`font-medium hover:text-purple-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
            >
              Como funciona
            </a>
            <a
              href="#beneficios"
              className={`font-medium hover:text-purple-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
            >
              Vantagens
            </a>
            <a
              href="#faq"
              className={`font-medium hover:text-purple-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
            >
              Dúvidas
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
