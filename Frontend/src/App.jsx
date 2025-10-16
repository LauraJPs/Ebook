import React, { useRef, useState } from "react";
import "./App.css";

export default function App() {
  const videoRef = useRef(null);
  const startedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const previewTime = 163; // segundos del fotograma que se muestra al cargar

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    const onSeeked = () => {
      v.pause(); // queda detenido en el fotograma
      setReady(true);
      v.removeEventListener("seeked", onSeeked);
    };
    v.addEventListener("seeked", onSeeked);
    // evitar pedir un tiempo fuera de rango
    v.currentTime = Math.min(previewTime, Math.max(0, v.duration - 0.1));
  };

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v || startedRef.current) return;
    startedRef.current = true;
    v.currentTime = 0; // al primer play vuelve al inicio
  };
  // ====== FIN LÓGICA ======

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
            <div className="benefits-media">
              <div className="logo-side">
                <img
                  className="hero-textLogo"
                  src="/textlogo.png"
                  alt="TextLogo Tribu724"
                />
                <p className="benefits-copy">
                  Si trabajas todo el mes y el dinero se esfuma, no es falta de
                  disciplina: es falta de sistema. No necesitas otro discurso
                  aspiracional; necesitas claridad:{" "}
                  <strong>
                    números sencillos, acciones concretas y planes reales
                  </strong>
                  .
                </p>
              </div>

              {/* Columna derecha: video con marco negro */}
              <div className="video-card">
                <div className="video-frame">
                  <video
                    ref={videoRef}
                    className="benefits-video"
                    src="/video_Ebook.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={handlePlay}
                    style={{ opacity: ready ? 1 : 0 }} // oculto mientras calcula preview
                    onCanPlay={() => !ready && setReady(true)}
                  />
                </div>
              </div>
            </div>

            <h2>Lo que te llevas</h2>
          </div>

          <div className="grid">
            <article className="card">
              <img className="grid-img" src="/icon1.svg" alt="Diagnóstico" />
              <h3>Presupuesto claro</h3>
              <p>
                Un sistema sencillo para saber a dónde va tu dinero y cómo
                controlarlo sin complicarte.
              </p>
            </article>
            <article className="card">
              <img className="grid-img" src="/icon2.svg" alt="Plan de deudas" />
              <h3>Plan de deudas</h3>
              <p>
                Estrategias prácticas para salir de deudas más rápido y con
                menos estrés.
              </p>
            </article>
            <article className="card">
              <img
                className="grid-img"
                src="/icon3.svg"
                alt="Ahorro automático"
              />
              <h3>Ahorro automático</h3>
              <p>
                Crea hábitos y reglas que trabajen por ti, incluso cuando no
                piensas en ello.
              </p>
            </article>
            <article className="card">
              <img
                className="grid-img"
                src="/icon4.svg"
                alt="Inversión inicial"
              />
              <h3>Inversión inicial</h3>
              <p>
                Primeros pasos para invertir con criterio y construir patrimonio
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
              No sabes a dónde se va tu dinero, tus deudas no bajan y no tienes
              un plan claro para aumentar ingresos ni acumular el capital que
              sostenga tu vida ideal.
            </h2>
            <h3 className="steps-intro">
              Aquí pasas de la <strong>confusión al control</strong> en 90 días
              con un método simple, práctico y probado:
            </h3>
          </header>

          <div className="steps-grid">
            <div className="step-card">
              <img className="step-img" src="/paso1.svg" alt="Diagnóstico" />
              <h3>Paso 1: Diagnóstico en 1 hora</h3>
              <p>
                Mapearás ingresos y gastos, identificarás “fugas”, y
                clasificarás tus activos y pasivos entre “buenos” y “malos”.
              </p>
            </div>

            <div className="step-card">
              <img className="step-img" src="/paso2.svg" alt="Destino" />
              <h3>Paso 2: Destino</h3>
              <p>
                Calcularás tu <em>número de libertad</em>: cuánto capital
                necesitas para generar de forma sostenible el ingreso con el que
                quieres vivir.
              </p>
            </div>

            <div className="step-card">
              <img className="step-img" src="/paso3.svg" alt="Plan de acción" />
              <h3>Paso 3: Plan de acción</h3>
              <p>
                Activarás palancas para subir ingresos (+$200–$600/mes con
                estrategias realistas), reducir gastos sin sacrificar calidad de
                vida y reconfigurar deudas para pagar menos intereses.
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
              <strong>$ 40.967,00</strong>
              <br />
              <span>
                en 12 cuotas de $ 3.413,00* con tarjeta de crédito
              </span>
            </p>

            <p className="cta-note">Métodos de pago disponibles:</p>
            <div className="payment-methods">
              <img src="/debit.svg" alt="Débito/Crédito" />
              <img src="/coin.svg" alt="Efecty" />
              <img src="/nequi.svg" alt="Nequi" />
              <img src="/pse.svg" alt="PSE" />
              <img src="/banc.svg" alt="Bancolombia" />
              <img src="/paypal.svg" alt="PayPal" />
            </div>

            <a
              className="cta cta-contrast"
              href="https://pay.hotmart.com/V102087701L"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero el Ebook ahora
            </a>
            <p className="small-note">Sin permanencias • Soporte por email</p>
          </div>

          {/* Imagen mockup producto */}
          <div className="cta-product">
            <img src="/5.png" alt="Ebook Finanzas en 3 pasos" />
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
          <img className="target-icon" src="/icono.png" alt="Icono programa" />
          <h2>¿Será para ti este programa?</h2>
          <div className="target-grid">
            {/* Es para ti */}
            <div className="target-col yes">
              <img src="/chulo.svg" alt="Chulo" />
              <h3>Es para ti:</h3>
              <ul>
                <li>
                  Si sientes que trabajas duro pero no ves resultados claros en
                  tus finanzas.
                </li>
                <li>
                  Si tienes deudas y no sabes cómo salir de ellas de forma
                  efectiva.
                </li>
                <li>
                  Si quieres empezar desde cero y construir un plan financiero
                  paso a paso.
                </li>
                <li>
                  Si buscas aumentar tus ingresos, reducir gastos y tener un
                  plan claro de inversión.
                </li>
                <li>
                  Si prefieres un método práctico con plantillas, ejemplos y
                  hábitos fáciles de aplicar.
                </li>
              </ul>
            </div>

            {/* No es para ti */}
            <div className="target-col no">
              <img src="/equis.svg" alt="Equis" />
              <h3>No es para ti:</h3>
              <ul>
                <li>
                  Si ya tienes tu vida financiera organizada y sin deudas.
                </li>
                <li>
                  Si ya gozas de libertad financiera y no buscas mejorar
                  ingresos.
                </li>
                <li>
                  Si cuentas con suficientes fuentes de ingresos estables y
                  diversificados.
                </li>
                <li>
                  Si vives de tus inversiones y no necesitas un plan adicional.
                </li>
                <li>
                  Si no estás dispuesto a comprometerte con un método simple y
                  constante.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA EXPERIENCIA */}
      <section className="experience" id="experiencia">
        <div className="container">
          <header className="exp-header">
            <h2>Nuestra experiencia</h2>
            <p>Más de una década ayudando a personas a pasar de la confusión al control financiero.</p>
          </header>

          {/* Galería de 3 imágenes */}
          <div className="exp-gallery">
            <figure className="exp-photo polaroid">
              <img src="/exp_1.jpeg" alt="Sesiones con alumnos" onError={(e)=>{e.currentTarget.src="/Ebook.jpeg"}} />
              <figcaption className="pol-caption">Sesiones en vivo</figcaption>
            </figure>

            <figure className="exp-photo polaroid">
              <img src="/exp_2.jpeg" alt="Casos aplicados" onError={(e)=>{e.currentTarget.src="/Ebook.jpeg"}} />
              <figcaption className="pol-caption">Casos aplicados</figcaption>
            </figure>

            <figure className="exp-photo polaroid">
              <img src="/exp_3.jpeg" alt="Talleres y eventos" onError={(e)=>{e.currentTarget.src="/Ebook.jpeg"}} />
              <figcaption className="pol-caption">Talleres y eventos</figcaption>
            </figure>
          </div>

          {/* Textos tipo KPI */}
          <div className="exp-kpis">
            <p className="stat">
              <strong>+ de 2.000 alumnos</strong> que han probado nuestro método para manejar sus finanzas.
            </p>
            <p className="stat">
              <strong>7 años</strong> aplicando la metodología para salir de deudas, ahorrar y generar ingresos.
            </p>
          </div>

          {/* CTA opcional */}
          <div className="exp-cta">
            <a
              className="cta cta-contrast"
              href="https://pay.hotmart.com/V102087701L"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero el Ebook ahora
            </a>
          </div>
        </div>
      </section>

      {/* ACERCA DE NOSOTROS */}
      <section className="about" id="nosotros">
        <div className="container about-grid">
          <div className="about-media">
            {/* usa una imagen que tengas en /public; si no, el textlogo */}
            <img src="/nosotros.jpeg" onError={(e)=>{e.currentTarget.src="/textlogo.png"}} alt="Equipo Tribu724" />
          </div>

          <div className="about-copy">
            <h2>Acerca de nosotros</h2>
            <p>
              Hace unos años, mi esposa y yo tocamos fondo con nuestras finanzas.
              Trabajábamos duro, pero el dinero se iba sin dejarnos paz. Entre deudas,
              pagos atrasados y decisiones impulsivas, entendimos que no era falta de
              ganas: <strong>nos faltaba un sistema</strong>.
            </p>

            <p>
              Decidimos empezar de cero. Estudiamos a quienes ya lo hacían bien,
              ordenamos cada gasto, hicimos nuestro diagnóstico y creamos hábitos
              simples que pudiéramos sostener. Paso a paso, aprendimos qué funciona y qué
              no para una familia real con tiempo limitado.
            </p>

            <p>
              Hoy no prometemos milagros: prometemos <strong>claridad, método y resultados medibles</strong> si haces tu parte.
              Todo lo que nos ayudó a salir del desorden y ganar tranquilidad está
              condensado en <em>“Finanzas personales en 3 pasos”</em>: un camino práctico
              para ver tus números en 60 minutos y avanzar con un plan de 90 días.
            </p>

            <p className="about-highlight">
              Este es el programa que nos habría encantado tener cuando empezamos.
              Si buscas una guía honesta y aplicable, <strong>estás en el lugar correcto</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section
        className="testimonials"
        id="testimonios"
        aria-labelledby="testimonials-title"
      >
        <div className="container">
          <header className="testimonials-header">
            <h2 id="testimonials-title">Esto dicen nuestros lectores</h2>
            <p className="testimonials-sub">
              Resultados reales con un método simple y práctico.
            </p>
          </header>

          <div className="testimonials-layout">
            {/* Izquierda: logo */}
            <div className="testimonials-left">
              <img
                className="hero-textLogo"
                src="/animacion.gif"
                alt="TextLogo Tribu724"
              />
            </div>

            {/* Derecha: 3 reseñas en columna */}
            <div className="testimonials-right">
              <article className="review-card" aria-label="Reseña de Valentina M.">
                <div className="review-head">
                  <img className="avatar" src="/prueba3.jpg" alt="Foto de Valentina M." />
                  <div>
                    <h3 className="name">Valentina M.</h3>
                    <div
                      className="rating"
                      aria-label="5 de 5 estrellas"
                      style={{ "--rating": 5 }}
                    />
                  </div>
                </div>
                <p className="quote">
                  “En dos semanas entendí mis gastos y dejé de sentir que el dinero se me
                  ‘perdía’. El presupuesto del ebook es súper aplicable.”
                </p>
              </article>

              <article className="review-card" aria-label="Reseña de Carlos R.">
                <div className="review-head">
                  <img className="avatar" src="/prueba1.jpg" alt="Foto de Carlos R." />
                  <div>
                    <h3 className="name">Carlos R.</h3>
                    <div
                      className="rating"
                      aria-label="4.5 de 5 estrellas"
                      style={{ "--rating": 4.5 }}
                    />
                  </div>
                </div>
                <p className="quote">
                  “Ajusté mis deudas y bajé intereses. El plan de acción me dio claridad
                  para priorizar.”
                </p>
              </article>

              <article className="review-card" aria-label="Reseña de Laura P.">
                <div className="review-head">
                  <img className="avatar" src="/prueba2.jpg" alt="Foto de Laura P." />
                  <div>
                    <h3 className="name">Laura P.</h3>
                    <div
                      className="rating"
                      aria-label="5 de 5 estrellas"
                      style={{ "--rating": 5 }}
                    />
                  </div>
                </div>
                <p className="quote">
                  “Pasé de ansiedad a tener un sistema. Ya estoy ahorrando y sé cuánto
                  necesito para mi meta.”
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
