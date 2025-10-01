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
              src="/logo_transp.png"  
              alt="Logo Tribu724"
            />
          </div>

          <div className="hero-copy">
            <h1 className="hero-title">Finanzas personales en 3 pasos</h1>
            <p className="hero-caption">
              Acceso inmediato • Garantía 7 días
            </p>
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
          <div className="benefits-heading">
            <div className="logo-card">
              <img
                className="hero-textLogo"
                src="/textlogo.png"  
                alt="TextLogo Tribu724"
              />
            </div>
            <h2>Lo que te llevas</h2>
          </div>

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

      {/* TRES PASOS */}
      <section className="steps">
        <div className="container">
          <header className="steps-header">
            <h2 className="steps-intro">
              No sabes a dónde se va tu dinero, tus deudas no bajan y no tienes un plan claro 
              para aumentar ingresos ni acumular el capital que sostenga tu vida ideal.
            </h2>
            <h3 className="steps-intro">
              Aquí pasas de la <strong>confusión al control</strong> en 90 días con un método simple, práctico y probado:
            </h3>
          </header>

          <div className="steps-grid">
            <div className="step-card">
              <img className="step-img" src="/paso1.png" alt="Diagnóstico" />
              <h3>Paso 1: Diagnóstico en 1 hora</h3>
              <p>
                Mapearás ingresos y gastos, identificarás “fugas”, 
                y clasificarás tus activos y pasivos entre “buenos” y “malos”.
              </p>
            </div>

            <div className="step-card">
              <img className="step-img" src="/paso2.png" alt="Destino" />
              <h3>Paso 2: Destino</h3>
              <p>
                Calcularás tu <em>número de libertad</em>: cuánto capital necesitas 
                para generar de forma sostenible el ingreso con el que quieres vivir.
              </p>
            </div>

            <div className="step-card">
              <img className="step-img" src="/paso3.png" alt="Plan de acción" />
              <h3>Paso 3: Plan de acción</h3>
              <p>
                Activarás palancas para subir ingresos (+$200–$600/mes con estrategias realistas), 
                reducir gastos sin sacrificar calidad de vida y reconfigurar deudas para pagar menos intereses.
              </p>
            </div>
          </div>
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
