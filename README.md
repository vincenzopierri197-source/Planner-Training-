# Planner atleta ibrido

Cartella pronta da caricare in un repository GitHub e distribuire con Vercel.

## File inclusi

- `index.html`: applicazione web.
- `api/coach.js`: backend Gemini con ricerca web e fonti citate.
- `vercel.json`: configurazione della funzione API.
- `.gitignore`: esclude file di ambiente e cartelle locali.

## Pubblicazione

1. Crea un repository GitHub e carica il contenuto di questa cartella nella sua directory principale.
2. Importa il repository in Vercel per distribuire sia il sito sia l'endpoint `/api/coach`.
3. Nelle variabili d'ambiente del progetto Vercel, aggiungi `GEMINI_API_KEY` con la tua chiave. Facoltativamente imposta `GEMINI_MODEL`; il valore predefinito è `gemini-3.1-flash-preview`.
4. Ridistribuisci il progetto dopo aver salvato la variabile.

GitHub Pages da solo non esegue `api/coach.js`. La chiave Gemini deve rimanere nella configurazione server di Vercel: non inserirla in `index.html`, nel repository o in una variabile `VITE_*` / `NEXT_PUBLIC_*`. Non serve una chiave Groq per questa versione.

La chat invia il testo inserito e una porzione della conversazione a Gemini. Le interazioni non vengono archiviate lato Gemini (`store: false`). Per ogni richiesta, Gemini può usare Google Search grounding e restituire link alle fonti. Le modifiche suggerite al planner sono limitate a attività e orari e richiedono conferma esplicita.

Prima di rendere pubblico l'endpoint, configura limiti di quota/spesa nel progetto Gemini e una protezione anti-abuso. La chiave non è esposta nel sito, ma un endpoint pubblico può comunque essere chiamato da terzi e consumare la quota del progetto.
