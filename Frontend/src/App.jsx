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
              <img className="grid-img" src="/icon1.svg" alt="Diagnóstico" />
              <h3>Presupuesto claro</h3>
              <p>Un sistema sencillo para saber a dónde va tu dinero y cómo
                controlarlo sin complicarte.
              </p>
            </article>
            <article className="card">
              <img className="grid-img" src="/icon2.svg" alt="Plan de deudas" />
              <h3>Plan de deudas</h3>
              <p>Estrategias prácticas para salir de deudas más rápido y con
                menos estrés.
              </p>
            </article>
            <article className="card">
              <img className="grid-img" src="/icon3.svg" alt="Ahorro automático" />
              <h3>Ahorro automático</h3>
              <p>Crea hábitos y reglas que trabajen por ti, incluso cuando no
                piensas en ello.
              </p>
            </article>
            <article className="card">
              <img className="grid-img" src="/icon4.svg" alt="Inversión inicial" />
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
              <img className="step-img" src="/paso1.svg" alt="Diagnóstico" />
              <h3>Paso 1: Diagnóstico en 1 hora</h3>
              <p>
                Mapearás ingresos y gastos, identificarás “fugas”, 
                y clasificarás tus activos y pasivos entre “buenos” y “malos”.
              </p>
            </div>

            <div className="step-card">
              <img className="step-img" src="/paso2.svg" alt="Destino" />
              <h3>Paso 2: Destino</h3>
              <p>
                Calcularás tu <em>número de libertad</em>: cuánto capital necesitas 
                para generar de forma sostenible el ingreso con el que quieres vivir.
              </p>
            </div>

            <div className="step-card">
              <img className="step-img" src="/paso3.svg" alt="Plan de acción" />
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
        <div className="container cta-grid">
          
          {/* Texto de la oferta */}
          <div className="cta-offer">
            <h2>¿Listo para ordenar tus finanzas?</h2>
            <p className="cta-price">
              <strong>$ 40.967,00</strong><br />
              <span>en 12 cuotas de $ 3.413,00* con tarjeta de crédito</span>
            </p>

            <p className="cta-note">
              Métodos de pago disponibles:
            </p>
            <div className="payment-methods">
              <img src="/debit.svg" alt="Débito/Crédito" />
              <img src="/coin.svg" alt="Efecty" />
              <img src="/nequi.svg" alt="Nequi" />
              <img src="/pse.svg" alt="PSE" />
              <img src="/banc.svg" alt="Bancolombia" />
              <img src="/paypal.svg" alt="PayPal" />
            </div>

            <a className="cta cta-contrast" 
              href="https://pay.hotmart.com/V102087701L" 
              target="_blank" 
              rel="noopener noreferrer">
              Unirme al programa
            </a>
            <p className="small-note">Sin permanencias • Soporte por email</p>
          </div>

          {/* Imagen mockup producto */}
          <div className="cta-product">
            <img src="/mockups/ebook.png" alt="Ebook Finanzas en 3 pasos" />
          </div>
        </div>
      </section>

      {/* POLÍTICA DE GARANTÍA */}
      <section className="cta-garantia">
        <div className="container">
          <img src="/politic.svg" alt="Política de garantía" />
          <div className="cta-textPolit">
            <h2>
              Puedes probar el programa por 7 días y si no te gusta lo que ves, 
              te devolveremos el dinero sin problemas.
            </h2>
          </div>
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
