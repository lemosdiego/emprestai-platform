export default function Header() {
  return (
    <header className="p-14 bg-[#9b00cf] flex items-center justify-around sticky top-0 z-10 drop-shadow-black ">
      <a href="/">
        <span className="text-4xl text-white">SimulAi</span>
      </a>
      <nav>
        <ul className="flex gap-4 text-lg text-white">
          <li>
            <a
              href="https://washington-app.netlify.app/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-bold"
            >
              Meu Portfólio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lemosdiego/EmprestAi-spring-api.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-bold"
            >
              Repositório
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
