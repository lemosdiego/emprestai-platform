import type { RefObject } from "react";
import { createPortal } from "react-dom";

interface NavigationMobileProps {
  isOpen: boolean;
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
}

export default function NavigationMobile({
  isOpen,
  onClose,
  menuRef,
}: NavigationMobileProps) {
  return createPortal(
    <nav
      ref={menuRef}
      className={`
        fixed w-[90vw] h-dvh top-0 right-0 bg-white z-40
        flex flex-col items-center justify-center gap-10
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      aria-hidden={!isOpen}
    >
      <ul className="flex flex-col gap-8 text-center">
        <li>
          <a
            href="#como-funciona"
            className="text-2xl font-medium text-gray-700 hover:text-purple-600 transition-colors"
            onClick={onClose} // Fecha o menu ao clicar
          >
            Como funciona
          </a>
        </li>
        <li>
          <a
            href="#beneficios"
            className="text-2xl font-medium text-gray-700 hover:text-purple-600 transition-colors"
            onClick={onClose} // Fecha o menu ao clicar
          >
            Vantagens
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-2xl font-medium text-gray-700 hover:text-purple-600 transition-colors"
            onClick={onClose} // Fecha o menu ao clicar
          >
            Dúvidas
          </a>
        </li>
        <li>
          <a
            href="#simulacao"
            className="text-2xl font-bold text-purple-600 hover:text-purple-800 transition-colors"
            onClick={onClose}
          >
            Simulação
          </a>
        </li>
      </ul>
    </nav>,
    document.body,
  );
}
