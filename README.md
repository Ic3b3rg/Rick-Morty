# Rick and Morty Dashboard
Questa repo contiene un'applicazione che permette di cercare e visualizzare i personaggi del famoso cartone animato *Rick and Morty*. I dati vengono recuperati tramite l'API ufficiale di Rick and Morty utilizzando `fetch` e l'interfaccia utente è progettata per essere chiara e funzionale.

### Funzionalità principali:
- **Ricerca Personaggi**: È possibile cercare i personaggi in base al nome tramite una barra di ricerca.
- **Paginazione**: Al click sulle frecce di paginazione (precedente e successiva), l'app carica e mostra i personaggi delle pagine successive.
- **Visualizzazione Dettagli**: Ogni personaggio viene mostrato con i suoi dettagli, inclusa la descrizione.
- **Interfaccia Utente**: La UI è progettata per garantire una buona usabilità e fruibilità, seguendo le convenzioni comuni di design.

### Stack Tecnologico:
- **React**: Per la costruzione dell'interfaccia utente.
- **Vite**: Per il bundling e lo sviluppo rapido.
- **TypeScript**: Per garantire un tipo di sicurezza statica e facilitare il refactoring.
- **StyledComponent**: Per la gestione dello styling e il layout.
- **Fetch API**: Utilizzato per recuperare i dati dall'API di Rick and Morty.

### Come Avviare il Progetto:

1. **Clonare la repo**:
   ```bash
   git clone <url-del-repository>

2. **Installare le dipendenze**: All'interno della cartella del progetto, eseguire:
    ```bash
   npm install
3. **Avviare il progetto in modalità sviluppo**: 
    ```bash
   npm run dev
