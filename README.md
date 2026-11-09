# Planner atleta ibrido

Cartella pronta da distribuire con Vercel da questo repository GitHub.

## File inclusi

- `index.html`: applicazione web.
- `api/coach.js`: backend Gemini con ricerca web e fonti citate.
- `vercel.json`: configurazione della funzione API.

## Pubblicazione

1. Importa questo repository in Vercel per distribuire sia il sito sia l'endpoint `/api/coach`.
2. Nelle variabili d'ambiente del progetto Vercel, aggiungi `GEMINI_API_KEY` con la tua chiave.
3. Ridistribuisci il progetto dopo aver salvato la variabile.

La chat usa `gemini-3.5-flash-lite` con Google Search grounding. La chiave Gemini deve rimanere nella configurazione server di Vercel: non inserirla in `index.html`, nel repository o in una variabile `VITE_*` / `NEXT_PUBLIC_*`. Non serve una chiave Groq per questa versione. GitHub Pages da solo non esegue `api/coach.js`.

La chat invia il testo inserito e una porzione della conversazione a Gemini. Le interazioni non vengono archiviate lato Gemini (`store: false`). Le modifiche suggerite al planner sono limitate ad attività e orari e richiedono conferma esplicita.

Prima di rendere pubblico l'endpoint, configura limiti di quota/spesa nel progetto Gemini e una protezione anti-abuso. La chiave non è esposta nel sito, ma un endpoint pubblico può comunque essere chiamato da terzi e consumare la quota del progetto.
