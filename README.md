# 🌊 Ebrezza Sailing - Guida alla Gestione del Sito

Benvenuta! Questa guida ti aiuterà a gestire e aggiornare il sito web di Ebrezza Sailing in modo semplice e chiaro.

---

## 📁 Come è organizzato il progetto

Il sito è costruito con **Jekyll**, un sistema che trasforma file di testo in pagine web. Ecco le cartelle più importanti:

```
ebrezzasailing/
├── _data/                  ← 📊 I TUOI DATI (esperienze, recensioni)
│   ├── experience.yml      ← Le esperienze offerte
│   └── reviews.yml         ← Le recensioni dei clienti
│
├── _includes/              ← 🧩 Le sezioni della pagina (HTML)
│   ├── about.html          ← Sezione "Chi siamo"
│   ├── contact.html        ← Sezione contatti
│   ├── crew.html           ← Sezione equipaggio
│   ├── experience.html     ← Sezione esperienze
│   ├── hero.html           ← Banner iniziale con video/logo
│   ├── navbar.html         ← Menu di navigazione
│   ├── recensioni.html     ← Sezione recensioni
│   └── footer.html         ← Piè di pagina
│
├── assets/                 ← 🖼️ FILE MULTIMEDIALI
│   ├── images/             ← Tutte le immagini del sito
│   │   └── reviews/        ← Foto dei recensori
│   └── videos/             ← Video (es. video hero)
│
├── index.html              ← 📄 La pagina principale
└── _config.yml             ← ⚙️ Configurazione generale del sito
```

---

## 🎯 COSA PUOI MODIFICARE FACILMENTE

### 1. Aggiungere o Modificare le ESPERIENZE

📂 **File:** `_data/experience.yml`

Questo file contiene tutte le esperienze mostrate nella sezione "Le nostre esperienze". Ogni esperienza ha questa struttura:

```yaml
- id: weekend-pontine          # Identificativo unico (senza spazi, usa trattini)
  title: "Weekend alle Isole Pontine"     # Titolo visibile
  short_description: "Naviga verso Ponza..."   # Descrizione breve (nella card)
  long_description: |          # Descrizione lunga (nel popup)
    Un weekend all'insegna della scoperta...
    Puoi scrivere su più righe.
  cover_image: "/assets/images/weekend-pontine.jpg"   # Immagine principale
  gallery:                     # Galleria di foto (nel popup)
    - "/assets/images/foto1.jpg"
    - "/assets/images/foto2.jpg"
```

#### ➕ Per aggiungere una nuova esperienza:
1. Apri il file `_data/experience.yml`
2. Copia una esperienza esistente
3. Incollala alla fine del file
4. Modifica i dati con quelli della nuova esperienza
5. Assicurati che l'`id` sia unico

#### ⚠️ Attenzione alla formattazione YAML:
- Gli spazi all'inizio delle righe sono importanti!
- Usa sempre 2 spazi per l'indentazione (non il tasto TAB)
- I testi con caratteri speciali vanno tra virgolette `"testo"`

---

### 2. Aggiungere o Modificare le RECENSIONI

📂 **File:** `_data/reviews.yml`

Ogni recensione ha questa struttura:

```yaml
- name: "Angelica"                              # Nome del cliente
  image: "/assets/images/reviews/angelica.png"  # Foto del cliente
  rating: 5                                     # Stelle (da 1 a 5)
  text: "Esperienza meravigliosa..."           # Testo della recensione
```

#### ➕ Per aggiungere una nuova recensione:
1. Apri `_data/reviews.yml`
2. Aggiungi alla fine:
```yaml
- name: "Nome Cliente"
  image: "/assets/images/reviews/nomefoto.png"
  rating: 5
  text: "Qui scrivi la recensione..."
```
3. Carica la foto nella cartella `assets/images/reviews/`

---

### 3. Caricare le IMMAGINI

📂 **Cartella:** `assets/images/`

#### Dove mettere le immagini:
| Tipo di immagine | Dove caricarla |
|-----------------|----------------|
| Esperienze | `assets/images/` |
| Recensioni (foto clienti) | `assets/images/reviews/` |
| Crew/Equipaggio | `assets/images/` |
| Hero/Banner | `assets/images/` |

#### 💡 Consigli per le immagini:
- **Formato consigliato:** JPG o PNG
- **Dimensioni:** Massimo 1-2 MB per immagine (per velocità del sito)
- **Nomi file:** Usa nomi senza spazi (es. `weekend-ponza.jpg`, non `weekend ponza.jpg`)
- **Proporzioni:** 
  - Card esperienze: formato orizzontale (es. 800x500 pixel)
  - Foto recensori: formato quadrato (es. 200x200 pixel)

---

### 4. Modificare i TESTI delle Sezioni

I testi di alcune sezioni sono direttamente nei file HTML in `_includes/`. Ecco quali puoi modificare:

#### Chi Siamo (`_includes/about.html`)
Cerca il testo tra i tag `<p>` e `</p>` e modificalo.

#### Contatti (`_includes/contact.html`)
- Email: cerca `mailto:info@ebrezzasailing.it`
- WhatsApp: cerca `https://wa.me/393338932861` (il numero dopo `wa.me/` è senza +)

#### Equipaggio (`_includes/crew.html`)
Per aggiungere un membro dell'equipaggio, copia il blocco `<div class="flex flex-col items-center">` e modifica nome, ruolo e foto.

#### Banner Iniziale (`_includes/hero.html`)
Cerca `eBrezza Vela & Vino` per modificare il titolo principale.

---

## 🔧 COME LAVORARE CON GITHUB

GitHub è come un "archivio cloud" per il codice, che tiene traccia di tutte le modifiche.

### Opzione 1: Modificare direttamente su GitHub (più semplice)

1. **Vai su GitHub** e accedi al repository del progetto
2. **Naviga** nella cartella del file che vuoi modificare
3. **Clicca sul file** (es. `_data/experience.yml`)
4. **Clicca sulla matita** 🖊️ (icona "Edit") in alto a destra
5. **Fai le modifiche** nel testo
6. **Clicca "Commit changes"** (pulsante verde in basso)
7. Scrivi una breve descrizione delle modifiche (es. "Aggiunta nuova esperienza")
8. **Conferma** cliccando su "Commit changes"

### Opzione 2: Usare GitHub Desktop (consigliata per modifiche frequenti)

#### Installazione:

**Su Windows:**
1. Scarica GitHub Desktop da: https://desktop.github.com/
2. Installa il programma
3. Accedi con il tuo account GitHub

**Su macOS:**
1. Scarica GitHub Desktop da: https://desktop.github.com/
2. Apri il file .dmg e trascina l'app nella cartella Applicazioni
3. Accedi con il tuo account GitHub

#### Come usarlo:

1. **Clona il repository** (scarica il progetto sul tuo computer):
   - File → Clone Repository
   - Seleziona il repository di Ebrezza Sailing
   - Scegli dove salvarlo

2. **Modifica i file** con un qualsiasi editor di testo:
   - Trovali nella cartella dove hai clonato il progetto
   - Modificali e salvali

3. **Carica le modifiche su GitHub:**
   - Apri GitHub Desktop
   - Vedrai i file modificati sulla sinistra
   - Scrivi un "Summary" (es. "Aggiornate recensioni")
   - Clicca "Commit to main"
   - Clicca "Push origin" per caricare online

### Per caricare immagini:

1. Copia le immagini nella cartella appropriata (es. `assets/images/`)
2. In GitHub Desktop vedrai le nuove immagini come "nuovi file"
3. Fai commit e push come descritto sopra

---

## 🖥️ TESTARE IL SITO IN LOCALE (Opzionale)

Se vuoi vedere le modifiche sul tuo computer prima di caricarle online:

### Prerequisiti

#### Su Windows:

1. **Installa Ruby:**
   - Vai su https://rubyinstaller.org/downloads/
   - Scarica "Ruby+Devkit" (versione 3.x.x)
   - Installa con le opzioni predefinite
   - Quando chiede di eseguire `ridk install`, premi Invio

2. **Installa Node.js:**
   - Vai su https://nodejs.org/
   - Scarica la versione LTS (Long Term Support)
   - Installa con le opzioni predefinite

3. **Apri il Prompt dei Comandi** (cerca "cmd" nel menu Start)

4. **Vai nella cartella del progetto:**
   ```
   cd C:\Percorso\Dove\Hai\Salvato\ebrezzasailing
   ```

5. **Installa le dipendenze:**
   ```
   gem install bundler
   bundle install
   npm install
   ```

6. **Avvia il sito:**
   ```
   bundle exec jekyll serve
   ```

7. **Apri il browser** e vai su: http://localhost:4000

#### Su macOS:

1. **Apri Terminale** (cercalo in Spotlight con Cmd+Spazio)

2. **Installa Homebrew** (gestore pacchetti):
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. **Installa Ruby e Node.js:**
   ```
   brew install ruby node
   ```

4. **Aggiungi Ruby al PATH** (copia e incolla questo):
   ```
   echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

5. **Vai nella cartella del progetto:**
   ```
   cd ~/Percorso/del/progetto/ebrezzasailing
   ```

6. **Installa le dipendenze:**
   ```
   gem install bundler
   bundle install
   npm install
   ```

7. **Avvia il sito:**
   ```
   bundle exec jekyll serve
   ```

8. **Apri il browser** e vai su: http://localhost:4000

### Fermare il server locale:
Premi `Ctrl + C` nel terminale/prompt dei comandi.

---

## 🎨 COMPILARE TAILWIND CSS (Solo se modifichi gli stili)

Se modifichi le classi CSS nei file HTML, devi ricompilare Tailwind:

```bash
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/output.css --watch
```

Questo comando "osserva" le modifiche e aggiorna automaticamente il CSS.

---

## ❓ PROBLEMI COMUNI

### "Il sito non mostra le modifiche"
- Aspetta qualche minuto: GitHub Pages può impiegare 2-5 minuti per aggiornare
- Prova a ricaricare la pagina con Ctrl+F5 (svuota la cache)

### "Le immagini non si vedono"
- Controlla che il percorso nel file YAML sia corretto
- Controlla che il nome file sia identico (maiuscole/minuscole contano!)
- Verifica che l'immagine sia effettivamente nella cartella giusta

### "Il file YAML dà errori"
- Controlla gli spazi: usa sempre 2 spazi, mai TAB
- Controlla le virgolette: tutti i testi speciali devono essere tra `"virgolette"`
- Usa un validatore YAML online: https://www.yamllint.com/

### "Jekyll non si avvia"
- Assicurati di essere nella cartella corretta del progetto
- Prova a reinstallare le dipendenze: `bundle install`

---

## 📞 SUPPORTO

Se hai problemi o dubbi, contatta il supporto tecnico.

---

## 📝 RIASSUNTO RAPIDO

| Cosa vuoi fare | Dove modificare |
|---------------|-----------------|
| Aggiungere esperienza | `_data/experience.yml` |
| Aggiungere recensione | `_data/reviews.yml` |
| Aggiungere immagine | `assets/images/` |
| Modificare testo "Chi siamo" | `_includes/about.html` |
| Modificare contatti | `_includes/contact.html` |
| Modificare equipaggio | `_includes/crew.html` |
| Modificare banner | `_includes/hero.html` |

---

Buon lavoro! 🚀⛵
