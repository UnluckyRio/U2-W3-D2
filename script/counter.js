// Recupera il valore del contatore da sessionStorage, oppure parte da 0
let seconds = sessionStorage.getItem("timerSeconds")
  ? parseInt(sessionStorage.getItem("timerSeconds"))
  : 0;

// Seleziona l'elemento che mostra il tempo
const timerDisplay = document.getElementById("timer");

// Funzione per aggiornare il display e salvare il valore
function updateTimer() {
  seconds++; // Incrementa il contatore di un secondo
  timerDisplay.textContent = seconds; // Aggiorna il testo del display
  sessionStorage.setItem("timerSeconds", seconds); // Salva il valore nel sessionStorage
}

// Mostra subito il valore corrente all'avvio
if (timerDisplay) {
  timerDisplay.textContent = seconds;
  // Avvia l'intervallo che aggiorna il contatore ogni secondo
  setInterval(updateTimer, 1000);
}
// Questo script mantiene il tempo anche aggiornando la pagina, ma lo resetta chiudendo la scheda/tab.
