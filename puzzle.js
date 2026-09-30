// ============================================================================
//  PUZZLE.JS — L'UNICO FILE DA MODIFICARE PER CREARE UN CRUCIVERBA
// ============================================================================
//
//  Per fare il cruciverba di una nuova persona, cambia solo i valori qui sotto
//  e ricarica la pagina: la griglia (portrait + landscape) e il footer con gli
//  indizi si rigenerano da soli, in automatico.
//
//  Regole per le risposte (answer):
//   - una sola parola, senza spazi
//   - vengono messe in MAIUSCOLO in automatico; le lettere accentate vengono
//     tolte, non convertite: scrivi "BONARIETA", non "BONARIETÀ"
//   - le parole devono CONDIVIDERE QUALCHE LETTERA tra loro, altrimenti il
//     cruciverba non puo incrociarsi (in locale, con ?dev, vedrai un avviso)
//
//  Numero di indizi: libero (il footer si divide da solo in due colonne).
//
//  Avatar (facoltativi): immagini in assets/avatars/. Con piu' di un avatar
//  compaiono le frecce per sceglierlo; la scelta resta salvata nel browser.
//  Una voce puo' essere il percorso di un'immagine ("assets/avatars/x.webp")
//  oppure un'animazione a sprite sheet ({ sprite, frames, frameMs }).
// ============================================================================

const PUZZLE = {
  // Titolo della scheda del browser.
  title: "Costi",

  // Gli indizi e le risposte. clue = la domanda mostrata sotto "INFO".
  clues: [
    { number: 1, clue: "Il mio nome",           answer: "COSTI" },
    { number: 2, clue: "Ma mi chiamano anche:", answer: "COSTICINA" },
    { number: 3, clue: "Laureata in:",          answer: "DESIGN" },
    { number: 4, clue: "Amo i:",                answer: "GATTI" },
    { number: 5, clue: "Nome del mio gatto:",   answer: "STANGHE" },
    { number: 6, clue: "Difetto:",              answer: "BONARIETA" },
    { number: 7, clue: "La mia paura:",         answer: "GIOCHI DA TAVOLO" },
    { number: 8, clue: "Possibile lavoro:",     answer: "MODELLA" },
  ],

  // Contatti mostrati sotto "CONTACT".
  contact: {
    mail: "costanza.gerin@gmail.com",
    tel: "+393427407463", // usato nel link "chiama"
    telDisplay: "+39 3427407463", // come viene mostrato
    instagram: "costanzagerin",
    instagramUrl: "https://instagram.com/costanzagerin",
    year: 2026,
  },

  // Avatar in alto a sinistra: [] = nessun avatar.
  avatars: [],
};
