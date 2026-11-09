# Planner atleta ibrido

Distribuzione prevista con Vercel collegato a questo repository GitHub.

## File principali

- `index.html`: applicazione web e interfaccia del catalogo.
- `exercises.js`: database locale con 46 esercizi strutturati.
- `api/coach.js`: endpoint Gemini con ricerca Google e fonti citate.
- `package.json`: abilita i moduli ES usati dalla funzione backend.
- `vercel.json`: configurazione della funzione API.

## Eserciziario biomeccanico

Il database è stato compilato dal compendio PDF fornito e contiene nome italiano e internazionale, distretto, target principale, muscoli sinergisti, pattern e attrezzatura. Nel sito si può cercare per nome, muscolo o attrezzatura e filtrare per distretto, attrezzatura e pattern. I dati sono incorporati come script locale: il catalogo non richiede una chiamata API o un servizio esterno.

## Pubblicazione

1. Importa il repository in Vercel.
2. Nelle variabili d'ambiente del progetto Vercel, aggiungi `GEMINI_API_KEY`.
3. Ridistribuisci il progetto.

La chat usa `gemini-3.5-flash-lite` con Google Search grounding. La chiave Gemini deve rimanere nella configurazione server di Vercel: non inserirla nell'HTML o nel repository. Non serve una chiave Groq. GitHub Pages da solo non esegue `api/coach.js`.

La chat invia il testo inserito e una parte della conversazione a Gemini. Le interazioni non vengono archiviate lato Gemini (`store: false`). Le modifiche a giorni e orari richiedono conferma esplicita.

Configura limiti di quota/spesa nel progetto Gemini e una protezione anti-abuso prima di rendere pubblico l'endpoint. La chiave non è esposta nel sito, ma l'endpoint pubblico può essere chiamato da terzi e consumare la quota del progetto.
