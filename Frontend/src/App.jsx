import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="lp">
      {/* HERO */}
      <header className="hero" role="banner" id="inicio">
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
              Quiero el Ebook ahora
            </a>
            <p className="small-note">Sin permanencias • Soporte por email</p>
          </div>

          {/* Imagen mockup producto */}
          <div className="cta-product">
            <img src="/Ebook.jpeg" alt="Ebook Finanzas en 3 pasos" />
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

      {/* PARA QUIÉN ES EL PROGRAMA */}
      <section className="target">
        <div className="container">
          <img 
            className="target-icon" 
            src="/icono.png" 
            alt="Icono programa" 
          />
          <h2>¿Será para ti este programa?</h2>
          <div className="target-grid">
            
            {/* Es para ti */}
            <div className="target-col yes">
              <img src="/chulo.svg" alt="Chulo" />
              <h3>Es para ti:</h3>
              <ul>
                <li>Si sientes que trabajas duro pero no ves resultados claros en tus finanzas.</li>
                <li>Si tienes deudas y no sabes cómo salir de ellas de forma efectiva.</li>
                <li>Si quieres empezar desde cero y construir un plan financiero paso a paso.</li>
                <li>Si buscas aumentar tus ingresos, reducir gastos y tener un plan claro de inversión.</li>
                <li>Si prefieres un método práctico con plantillas, ejemplos y hábitos fáciles de aplicar.</li>
              </ul>
            </div>

            {/* No es para ti */}
            <div className="target-col no">
              <img src="/equis.svg" alt="Equis" />
              <h3>No es para ti:</h3>
              <ul>
                <li>Si ya tienes tu vida financiera organizada y sin deudas.</li>
                <li>Si ya gozas de libertad financiera y no buscas mejorar ingresos.</li>
                <li>Si cuentas con suficientes fuentes de ingresos estables y diversificados.</li>
                <li>Si vives de tus inversiones y no necesitas un plan adicional.</li>
                <li>Si no estás dispuesto a comprometerte con un método simple y constante.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonials" id="testimonios" aria-labelledby="testimonials-title">
        <div className="container">
          <header className="testimonials-header">
            <h2 id="testimonials-title">Esto dicen nuestros lectores</h2>
            <p className="testimonials-sub">Resultados reales con un método simple y práctico.</p>
          </header>

          <div className="testimonials-layout">
            {/* Izquierda: logo */}
            <div className="testimonials-left">
              <img className="hero-textLogo" src="/animacion.gif" alt="TextLogo Tribu724" />
            </div>

            {/* Derecha: 3 reseñas en columna */}
            <div className="testimonials-right">
              <article className="review-card" aria-label="Reseña de Valentina M.">
                <div className="review-head">
                  <img className="avatar" src="/girl.svg" alt="Foto de Valentina M." />
                  <div>
                    <h3 className="name">Valentina M.</h3>
                    <div className="rating" aria-label="5 de 5 estrellas" style={{ "--rating": 5 }} />
                  </div>
                </div>
                <p className="quote">
                  “En dos semanas entendí mis gastos y dejé de sentir que el dinero se me ‘perdía’.
                  El presupuesto del ebook es súper aplicable.”
                </p>
              </article>

              <article className="review-card" aria-label="Reseña de Carlos R.">
                <div className="review-head">
                  <img className="avatar" src="/boy.svg" alt="Foto de Carlos R." />
                  <div>
                    <h3 className="name">Carlos R.</h3>
                    <div className="rating" aria-label="4.5 de 5 estrellas" style={{ "--rating": 4.5 }} />
                  </div>
                </div>
                <p className="quote">
                  “Ajusté mis deudas y bajé intereses. El plan de acción me dio claridad para priorizar.”
                </p>
              </article>

              <article className="review-card" aria-label="Reseña de Laura P.">
                <div className="review-head">
                  <img className="avatar" src="/girl.svg" alt="Foto de Laura P." />
                  <div>
                    <h3 className="name">Laura P.</h3>
                    <div className="rating" aria-label="5 de 5 estrellas" style={{ "--rating": 5 }} />
                  </div>
                </div>
                <p className="quote">
                  “Pasé de ansiedad a tener un sistema. Ya estoy ahorrando y sé cuánto necesito para mi meta.”
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Tribu724 - Todos los derechos reservados.</p>

          <div className="footer-links">
            <a href="#inicio">Políticas de privacidad</a>
            <a href="#inicio">Términos y condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
