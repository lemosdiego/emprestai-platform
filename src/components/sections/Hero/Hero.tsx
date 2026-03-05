import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero__section">
      <div className="hero-section__container">
        <h1>
          EmprestAi!
          <br />
          <span className="text-purple-200">Crédito Simples.</span>
          Sem enrolação.
        </h1>
        <p>
          A emprestAi conecta você às melhores opções de
          <br /> crédito de forma rápida, transparente e 100% digital.
        </p>
        <div className="hero-section__cta">
          <a href="#simulacao" className=" hero-section__cta-simular-btn">
            Simular Agora
          </a>
          <a
            href="#como-funciona"
            className="hero-section__cta-como-funciona-btn"
          >
            Como Funciona
          </a>
        </div>
        <div className="hero-section__social-proof">
          <div className="hero-section__social-proof-item-1">
            <div className="hero-section__social-proof-item-1-number">
              +50 mil
            </div>
            <p className="text-purple-100">Simulações realizadas</p>
          </div>
          <div className="hero-section__social-proof-item-2">
            <div className="hero-section__social-proof-item-1-number">
              R$ 15 mi
            </div>
            <p className="text-purple-100">Em crédito liberado</p>
          </div>
          <div className=" hero-section__social-proof-item-1">
            <div className="hero-section__social-proof-item-1-number">
              4.9/5
            </div>
            <p className="text-purple-100">Avaliação dos clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
