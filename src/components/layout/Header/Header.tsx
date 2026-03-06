import { TfiMenu, TfiClose } from "react-icons/tfi";

import "./Header.css";
import NavigationDesktop from "../../ui/Navigation/NavigationDesktop";
import NavigationMobile from "../../ui/Navigation/NavigationMobile";
import { useMenu } from "../../../hooks/useMenu";

export default function Header() {
  const {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    mobileMenuRef,
    toggleButtonRef,
  } = useMenu();

  return (
    <header
      className={`header ${isScrolled ? "isScrolled__yes" : "isScrolled__no"} `}
    >
      <div className="header__container">
        <a className="logo">
          <img
            src={isScrolled ? "/logo1sf.png" : "/logo2sf.png"}
            alt="EmprestAi"
          />
        </a>

        {/* Navegação para Desktop */}
        <NavigationDesktop isScrolled={isScrolled} />

        {/* Botão do Menu Mobile (Hambúrguer) - visível apenas em mobile */}
        <div className="hidden max-md:flex items-center ">
          <button
            ref={toggleButtonRef}
            onClick={toggleMobileMenu}
            className={`z-50 text-2xl transition-colors duration-300 focus:outline-none ${
              isMobileMenuOpen
                ? "text-gray-800"
                : isScrolled
                  ? "text-gray-800"
                  : "text-white"
            }`}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <TfiClose /> : <TfiMenu size={35} />}
          </button>
        </div>

        {/* Menu de Navegação Mobile (Overlay) */}
        <NavigationMobile
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          menuRef={mobileMenuRef}
        />
      </div>
    </header>
  );
}
