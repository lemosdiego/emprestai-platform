export default function Header() {
  return (
    <header className="p-4 bg-[#9b00cf] flex items-center justify-center sticky top-0 z-20 drop-shadow-black font-medium ">
      <div className="flex items-center justify-between w-350 ">
        <span className="rounded w-52 bg-white p-2">
          <img
            src="/logosf.png"
            alt="SimulAi"
            className="w-full h-full rounded"
          />
        </span>
        <nav>
          <ul className="flex gap-4 text-lg text-white">
            <li>
              <a
                href="https://washington-app.netlify.app/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A001F] transition-colors duration-500"
              >
                Meu Portfólio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lemosdiego/EmprestAi-spring-api.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A001F] transition-colors duration-500"
              >
                Repositório
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
