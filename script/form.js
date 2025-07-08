// Recupera gli elementi dal DOM
const savedNameDiv = document.getElementById("savedName"); // Div per mostrare il nome salvato
const nameInput = document.getElementById("nameInput"); // Campo input per il nome
const saveBtn = document.getElementById("saveBtn"); // Pulsante per salvare il nome
const removeBtn = document.getElementById("removeBtn"); // Pulsante per rimuovere il nome

// Funzione per aggiornare la visualizzazione del nome salvato
function updateSavedName() {
  const savedName = localStorage.getItem("userName"); // Prende il nome da localStorage
  if (savedName) {
    savedNameDiv.textContent = `Nome salvato: ${savedName}`; // Mostra il nome salvato
  } else {
    savedNameDiv.textContent = "Nessun nome salvato."; // Messaggio se non c'è nome
  }
}

// Event listener per il pulsante Salva
saveBtn.addEventListener("click", function () {
  const name = nameInput.value.trim(); // Prende il valore dell'input
  if (name) {
    localStorage.setItem("userName", name); // Salva il nome in localStorage
    updateSavedName(); // Aggiorna la visualizzazione
  }
});

// Event listener per il pulsante Rimuovi
removeBtn.addEventListener("click", function () {
  localStorage.removeItem("userName"); // Rimuove il nome da localStorage
  updateSavedName(); // Aggiorna la visualizzazione
});

// Aggiorna la visualizzazione al caricamento della pagina
updateSavedName();
