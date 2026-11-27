# bah-holding
Marché guinéen et mondial
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">

  <title>AÏDABA MARKET — Maintenance</title>

  <link rel="stylesheet" href="maintenance.css">
</head>

<body>

  <main class="maintenance-container">

    <header class="header">
      <div class="logo">
        <div class="logo-icon">A</div>
        <span>AÏDABA <strong>MARKET</strong></span>
      </div>

      <span class="status">
        <span class="status-dot"></span>
        Maintenance
      </span>
    </header>

    <section class="content">

      <div class="illustration">

        <div class="circle circle-one"></div>
        <div class="circle circle-two"></div>

        <div class="market-card">

          <svg viewBox="0 0 120 120" fill="none">
            <path d="M25 43H95L88 103H32L25 43Z"
                  stroke="currentColor" stroke-width="4"
                  stroke-linejoin="round"/>

            <path d="M20 43L30 20H90L100 43"
                  stroke="currentColor" stroke-width="4"
                  stroke-linejoin="round"/>

            <path d="M20 43C20 53 38 53 38 43C38 53 56 53 56 43C56 53 74 53 74 43C74 53 100 53 100 43"
                  stroke="#07865B" stroke-width="4"/>

            <path d="M48 103V73H72V103"
                  stroke="currentColor" stroke-width="4"/>

            <path d="M44 63H76"
                  stroke="currentColor" stroke-width="4"/>
          </svg>

          <div class="sparkle">✦</div>
        </div>

        <div class="floating-dot dot-one"></div>
        <div class="floating-dot dot-two"></div>

      </div>

      <div class="text-content">

        <span class="eyebrow">INFORMATION IMPORTANTE</span>

        <h1>Nous préparons<br>
          quelque chose de <span>grand.</span>
        </h1>

        <p class="description">
          AÏDABA MARKET est momentanément indisponible.
          Notre équipe travaille pour vous offrir une
          expérience de shopping encore meilleure.
        </p>

        <div class="progress-card">

          <div class="progress-heading">
            <span>Préparation de votre marché</span>
            <span class="progress-label">En cours</span>
          </div>

          <div class="progress-track">
            <div class="progress-bar"></div>
          </div>

          <p>Merci pour votre patience.</p>

        </div>

        <button id="retryButton" class="retry-button">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 7V12H15"
                  stroke="currentColor" stroke-width="2"
                  stroke-linecap="round"/>

            <path d="M19 12A8 8 0 1 1 17 6"
                  stroke="currentColor" stroke-width="2"
                  stroke-linecap="round"/>
          </svg>

          Réessayer
        </button>

        <p id="retryMessage" class="retry-message"></p>

      </div>

    </section>

    <footer>
      <div class="footer-line"></div>

      <p>
        © 2026 AÏDABA MARKET
        <span>•</span>
        Une nouvelle expérience vous attend.
      </p>

      <small>BAH HOLDING</small>
    </footer>

  </main>

  <script src="maintenance.js"></script>

</body>
</html>* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #ffffff;
  color: #111827;
  min-height: 100vh;
}

.maintenance-container {
  max-width: 1100px;
  min-height: 100vh;
  margin: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 25px;
  border-bottom: 1px solid #eeeeee;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 700;
}

.logo-icon {
  width: 42px;
  height: 42px;
  background: #087a52;
  color: white;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 25px;
  font-weight: 900;
}

.status {
  background: #f1f8f5;
  padding: 10px 14px;
  border-radius: 30px;
  font-size: 12px;
  color: #087a52;
  font-weight: 700;
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #087a52;
  border-radius: 50%;
  margin-right: 5px;
  animation: pulse 1.5s infinite;
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding: 55px 0;
}

.illustration {
  position: relative;
  width: 300px;
  height: 300px;
  display: grid;
  place-items: center;
}

.market-card {
  width: 180px;
  height: 180px;
  background: white;
  border: 1px solid #eeeeee;
  box-shadow: 0 20px 60px #00000012;
  border-radius: 35px;
  display: grid;
  place-items: center;
  color: #111827;
  position: relative;
  z-index: 2;
  animation: float 3s ease-in-out infinite;
}

.market-card svg {
  width: 115px;
  height: 115px;
}

.circle {
  position: absolute;
  border: 1px solid #e5eee9;
  border-radius: 50%;
}

.circle-one {
  width: 250px;
  height: 250px;
}

.circle-two {
  width: 300px;
  height: 300px;
}

.sparkle {
  position: absolute;
  top: 20px;
  right: 15px;
  color: #087a52;
  font-size: 30px;
}

.floating-dot {
  position: absolute;
  width: 13px;
  height: 13px;
  background: #087a52;
  border-radius: 50%;
}

.dot-one {
  top: 35px;
  left: 35px;
}

.dot-two {
  bottom: 30px;
  right: 35px;
  background: #f2a900;
}

.text-content {
  max-width: 480px;
}

.eyebrow {
  color: #087a52;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 2px;
}

h1 {
  font-size: clamp(35px, 5vw, 53px);
  line-height: 1.13;
  margin: 20px 0;
  letter-spacing: -2px;
}

h1 span {
  color: #087a52;
}

.description {
  color: #64748b;
  font-size: 16px;
  line-height: 1.8;
}

.progress-card {
  background: #f8faf9;
  padding: 20px;
  border-radius: 17px;
  margin: 28px 0;
}

.progress-heading {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
}

.progress-label {
  color: #087a52;
}

.progress-track {
  height: 7px;
  background: #e5ebe7;
  border-radius: 20px;
  margin: 15px 0 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 65%;
  background: #087a52;
  border-radius: 20px;
  animation: loading 3s ease-in-out infinite alternate;
}

.progress-card p {
  color: #64748b;
  font-size: 12px;
}

.retry-button {
  width: 100%;
  padding: 17px;
  background: #087a52;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: .2s;
}

.retry-button:hover {
  background: #065f41;
  transform: translateY(-2px);
}

.retry-button svg {
  width: 21px;
  height: 21px;
}

.retry-message {
  margin-top: 12px;
  color: #64748b;
  text-align: center;
  font-size: 13px;
}

footer {
  text-align: center;
  color: #64748b;
  padding: 20px 0;
}

.footer-line {
  height: 1px;
  background: #eeeeee;
  margin-bottom: 20px;
}

footer p {
  font-size: 12px;
}

footer p span {
  color: #087a52;
  padding: 0 5px;
}

footer small {
  display: block;
  margin-top: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #111827;
}

@keyframes float {
  50% { transform: translateY(-12px); }
}

@keyframes pulse {
  50% { opacity: .3; }
}

@keyframes loading {
  from { width: 35%; }
  to { width: 85%; }
}

@media(max-width: 750px) {
  .content {
    flex-direction: column;
    gap: 25px;
    padding: 35px 0;
  }

  .illustration {
    transform: scale(.8);
    height: 240px;
    margin-bottom: -10px;
  }

  .text-content {
    width: 100%;
  }

  h1 {
    font-size: 39px;
  }

  .header {
    gap: 10px;
  }

  .logo {
    font-size: 14px;
  }
}const retryButton = document.getElementById("retryButton");
const retryMessage = document.getElementById("retryMessage");

retryButton.addEventListener("click", async () => {

  retryButton.disabled = true;
  retryMessage.textContent = "Vérification de la connexion...";

  const originalText = retryButton.innerHTML;

  retryButton.innerHTML = "Vérification en cours...";

  try {

    const response = await fetch(
      window.location.origin + window.location.pathname,
      {
        method: "HEAD",
        cache: "no-store"
      }
    );

    if (response.ok) {
      retryMessage.textContent =
        "Le serveur répond. Rechargement de la page...";

      setTimeout(() => {
        window.location.reload();
      }, 1200);

    } else {
      throw new Error("Serveur indisponible");
    }

  } catch (error) {

    retryMessage.textContent =
      "AÏDABA MARKET est toujours momentanément indisponible. Réessayez bientôt.";

  } finally {

    retryButton.disabled = false;
    retryButton.innerHTML = originalText;

  }

});
