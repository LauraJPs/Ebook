import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="lp">
      {/* HERO */}
      <header className="hero" role="banner">
        <div className="container hero-grid">
          <div className="hero-media">
            <img
              className="hero-logo"
              src="/logo_transp.png"  // pon tu ruta de logo aquí
              alt="Logo Tribu724"
            />
          </div>

          <div className="hero-copy">
            <h1 className="hero-title">Finanzas personales en 3 pasos</h1>
          </div>
        </div>
      </header>

      {/* SOCIAL PROOF / BANDA */}
      <section className="trustband" aria-label="Confianza">
        <div className="container trustband-inner">
          <span>+5.000 alumnos</span>
          <span>Metodología paso a paso</span>
          <span>Actualizado 2025</span>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits" id="beneficios">
        <div className="container">
          <h2>Lo que te llevas</h2>
          <div className="grid">
            <article className="card">
              <h3>Presupuesto claro</h3>
              <p>Un sistema sencillo para saber a dónde va tu dinero y cómo
                controlarlo sin complicarte.
              </p>
            </article>
            <article className="card">
              <h3>Plan de deudas</h3>
              <p>Estrategias prácticas para salir de deudas más rápido y con
                menos estrés.
              </p>
            </article>
            <article className="card">
              <h3>Ahorro automático</h3>
              <p>Crea hábitos y reglas que trabajen por ti, incluso cuando no
                piensas en ello.
              </p>
            </article>
            <article className="card">
              <h3>Inversión inicial</h3>
              <p>Primeros pasos para invertir con criterio y construir patrimonio
                a largo plazo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="quote">
        <div className="container">
          <blockquote>
            “Pasé de sentir que el dinero se me iba de las manos a tener un
            plan simple que sigo cada mes.”
          </blockquote>
          <cite>— Estudiante del programa</cite>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <div className="container">
          <h2>¿Listo para ordenar tus finanzas?</h2>
          <a className="cta cta-contrast" href="https://tusitio.com" target="_blank" rel="noopener noreferrer">
            Empezar ahora
          </a>
          <p className="small-note">Sin permanencias • Soporte por email</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.</p>
          <a href="#beneficios">Beneficios</a>
        </div>
      </footer>
    </div>
  );
}
