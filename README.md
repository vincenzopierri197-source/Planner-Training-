# Planner atleta ibrido

Applicazione statica con funzioni server su Cloudflare Pages.

## Contenuti

- `index.html`: planner, diario, checklist, chat e catalogo.
- `exercises.js`: catalogo locale di 40 esercizi.
- `functions/api/coach.js`: API Gemini eseguita come Pages Function.
- `build.mjs`: copia i file statici in `dist/`.
- `wrangler.toml`: configurazione Pages Functions e directory di output.

## Pubblicazione su Cloudflare Pages

1. Crea un progetto Pages collegato a questa repository GitHub.
2. Imposta il comando di build su `npm run build` e la directory di output su `dist`. Il preset è `None`.
3. In **Settings → Functions → Variables and Secrets**, aggiungi `GEMINI_API_KEY` come segreto. Configuralo sia per produzione sia per le anteprime se vuoi provare la chat nelle preview.
4. Pubblica il progetto e usa il suo dominio `*.pages.dev` oppure collega il tuo dominio.

La funzione `/api/coach` condivide lo stesso dominio della pagina: non serve configurare CORS. La chiave resta nel runtime server e non viene inclusa nell’HTML o nei file pubblici.

GitHub Pages può continuare a pubblicare una copia statica del planner, ma non esegue Pages Functions. La chat Gemini funziona soltanto sull’hosting Cloudflare Pages configurato sopra.

## Dati e protezioni

La chat invia a Gemini la domanda, fino a otto messaggi recenti e il contesto del planner (peso, altezza, obiettivi di proteine/acqua, attività e orari). Le richieste non vengono archiviate da Gemini (`store: false`). I dati del diario, delle impostazioni e della conversazione restano anche in `localStorage` nel browser.

L’endpoint è pubblico: configura limiti di quota/spesa nel progetto Gemini e protezioni anti-abuso sul servizio. Non inserire dati identificativi o informazioni sanitarie sensibili nella chat.

## Catalogo

Il database contiene 40 esercizi con nome italiano e internazionale, distretto, target, sinergisti, pattern, attrezzatura, curva di resistenza e ROM. Le assegnazioni del planner vengono salvate nel browser.
