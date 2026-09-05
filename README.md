# CheapWay PC — site web

Site simplu, static (HTML/CSS/JS, fără server), gata de găzduit **gratuit pe GitHub Pages**.

## Ce conține

Site cu 7 pagini separate — click pe un tab din meniu te duce pe o pagină nouă (nu doar derulare pe aceeași pagină):

- `index.html` — Acasă (hero + statistici + de ce CheapWay PC)
- `servicii.html` — Servicii
- `preturi.html` — Prețuri
- `gear.html` — Echipament recomandat (scaune și mouse-uri gaming, pe 3 bugete)
- `proces.html` — Cum funcționează
- `faq.html` — Întrebări frecvente (acordeon, 10 întrebări)
- `contact.html` — Contact
- `style.css` — design negru/alb, cu buton de comutare temă (vezi mai jos)
- `script.js` — traduceri EN / RO / DE / ES / FR / ZH + comutare temă + meniu mobil + formular de contact + asistent de chat
- `README.md` — acest fișier

Toate paginile trebuie urcate împreună în același repository (inclusiv `style.css` și `script.js`), altfel linkurile din meniu sau stilul nu vor funcționa.

## Buton alb / negru (temă)

În header, lângă selectorul de limbă, e un buton rotund (☀️/🌙) care comută site-ul între tema întunecată ("night", implicită) și una complet albă. Alegerea vizitatorului se ține minte automat (prin browser) și rămâne aceeași când navighează între pagini.

## Cum publici site-ul GRATUIT pe GitHub Pages

1. **Creează un cont GitHub** (dacă nu ai deja): [github.com](https://github.com)
2. **Creează un repository nou**:
   - Apasă pe „+" din colțul din dreapta sus → „New repository"
   - Nume sugerat: `cheapway-pc` (sau orice altceva)
   - Alege „Public"
   - Apasă „Create repository"
3. **Încarcă fișierele**:
   - În pagina repository-ului, apasă „Add file" → „Upload files"
   - Trage toate fișierele din acest folder (`index.html`, `servicii.html`, `preturi.html`, `proces.html`, `contact.html`, `style.css`, `script.js`, `README.md`)
   - Apasă „Commit changes"
4. **Activează GitHub Pages**:
   - Mergi la „Settings" (în repository-ul tău) → „Pages" (în meniul din stânga)
   - La „Source", alege branch-ul `main` și folderul `/ (root)`
   - Apasă „Save"
   - După 1-2 minute, GitHub îți va afișa un link de tipul:
     `https://numele-tau.github.io/cheapway-pc/`
5. Gata — site-ul e live și gratuit, permanent (atât timp cât repository-ul e public).

## Ce trebuie neapărat să editezi înainte să faci site-ul public

Deschide `contact.html` (secțiunea de contact are acum pagina ei separată):

- Înlocuiește `contact@cheapwaypc.ro` cu adresa ta reală de email (apare de 2 ori: în link-ul `mailto:` din formular din `script.js`, și în link-ul direct din `contact.html`)
- Înlocuiește `+40 700 000 000` cu numărul tău real de telefon
- Dacă vrei, adaugă și link-uri către Instagram/Facebook/WhatsApp lângă secțiunea de contact

## Despre formularul de contact

Formularul de pe site nu are backend (GitHub Pages găzduiește doar fișiere statice, fără server).
Momentan, la trimitere, deschide automat clientul de email al vizitatorului cu mesajul precompletat (către adresa ta).

Dacă vrei un formular care trimite direct mesajul fără să deschidă emailul vizitatorului, poți conecta gratuit:
- [Formspree](https://formspree.io) (gratuit până la 50 mesaje/lună)
- [EmailJS](https://www.emailjs.com) (gratuit până la un anumit volum)

Ambele au tutoriale simple de tip „copiază-lipește" pentru formulare HTML statice.

## Pagina de prețuri (configurații reale, cu piese exacte)

Pagina `preturi.html` afișează acum patru niveluri — **Super Budget**, **Budget**, **Mid-Range** și **High-End** — fiecare cu o listă reală de piese (CPU, placă de bază, GPU, RAM, stocare, cooler, carcasă, sursă) și un preț total afișat doar în EUR/USD (fără RON — componentele sunt cumpărate din România, dar site-ul arată clienților doar euro și dolari).

- **Super Budget** și **Budget** au fiecare o singură configurație; la Budget, opțiunea CPU/GPU AMD sau Intel/Nvidia e menționată direct în lista de piese (nu sunt două carduri separate).
- **Mid-Range** și **High-End** au fiecare două carduri alăturate — „AMD Edition” și „Intel + Nvidia Edition” — plus o notă sub carduri despre un upgrade opțional de CPU (pe același socket AMD) la un cost fix suplimentar.
- Toate prețurile sunt piese verificate manual de tine (Amazon.ro/.de, Compari.ro, PC Garage, Evomag) — nu sunt extrase automat și nu se actualizează singure. Intern, prețurile sunt calculate pornind de la costul real în RON al pieselor, convertit în EUR/USD (curs fix: 1 RON = 0,190383 EUR / 0,22136 USD) — dar RON nu mai apare nicăieri pe site, ca preț afișat.

**Cum actualizezi prețurile sau piesele:** deschide `script.js`, caută cheile `tier0_price`, `tier1_price`, `tier2_amd_price`, `tier2_intel_price`, `tier3_amd_price`, `tier3_intel_price` (și echivalentele lor din `ro`, `de`, `es`, `fr`, `zh`) pentru totaluri, apoi deschide `build.py` și caută constanta `PRETURI` pentru a edita piesele individuale afișate în fiecare card (nume, model, preț pe linie). După orice modificare în `build.py`, rulează din nou `python3 build.py` ca să regenerezi fișierele `.html` — altfel modificările nu apar pe site.

Mecanismul vechi de „MSRP + preț Amazon completat manual” (folosit pe o versiune anterioară a paginii) a fost eliminat — pagina arată acum direct prețul total confirmat al fiecărei configurații, nu doar prețul unui singur CPU.

## Asistent de chat (FAQ automat)

Colțul din dreapta jos are un buton 💬 care deschide o fereastră de chat. **Nu este un AI real** — un chatbot AI adevărat ar avea nevoie de un backend plătit (API către un model AI), imposibil pe hosting static gratuit ca GitHub Pages.

În schimb, asistentul caută cuvinte cheie în întrebarea scrisă de vizitator și afișează cel mai potrivit răspuns din cele 10 întrebări frecvente (aceleași ca pe pagina `faq.html`). Dacă nu găsește nimic relevant, îndrumă vizitatorul către formularul de contact.

**Cum adaugi o întrebare nouă:** deschide `script.js`, caută `FAQ_ORDER` (adaugă acolo un id nou), apoi `FAQ_KEYWORDS` (adaugă cuvintele cheie pentru fiecare limbă), și în `translations` adaugă `faq_<id>_q` și `faq_<id>_a` pentru fiecare limbă. Apoi adaugă manual un nou bloc `<details class="faq-item">` în `faq.html`, după modelul celorlalte.

## Echipament recomandat (scaune, mouse-uri, tastaturi)

Pagina `gear.html` recomandă produse reale (nu inventate), cercetate la data construirii site-ului: un tabel comparativ cu 5 scaune de gaming (SIHOO M57, COLAMY Atlas, Steelcase Series 1, Herman Miller Aeron, Herman Miller Embody — preț, durabilitate, suport mesh) și două liste „Top 5” — mouse-uri de gaming și tastaturi rapid-trigger/hall-effect — fiecare cu o scurtă descriere, prețul tipic și un link „Vezi live” către o căutare Amazon reală, cu domeniul potrivit (amazon.de/.com) în funcție de limbă.

Recomandările pot deveni depășite în timp — verifică din când în când dacă mai sunt cele mai bune opțiuni și actualizează-le direct în `script.js` (cheile `chair1_name`, `chair1_price`, `mouse1_name`, `kb1_name`, etc.) și `build.py` (constanta `GEAR`, pentru structura tabelului/listelor).

## Limbi disponibile

Site-ul pornește implicit în **engleză** (limbă internațională), cu un dropdown de limbă în header care include: EN, RO, DE, ES (spaniolă), FR (franceză) și ZH (chineză). Alegerea vizitatorului se ține minte automat, la fel ca tema.

## Cum schimbi prețurile sau textele

Toate textele (în toate cele 6 limbi) sunt centralizate în `script.js`, în obiectul `translations`.
Caută cheia dorită (ex: `tier1_price`) în secțiunile `en`, `ro`, `de`, `es`, `fr`, `zh` și modific-o direct — se va reflecta automat pe site.

## Cum adaugi un nume de domeniu propriu (opțional)

Dacă vrei ceva de tipul `cheapwaypc.ro` în loc de `numele-tau.github.io/...`:
1. Cumpără domeniul de la orice registrar (ex: un provider românesc de domenii)
2. În „Settings" → „Pages" din repository, la „Custom domain", scrie domeniul tău
3. La providerul de domeniu, adaugă un record DNS de tip `CNAME` către `numele-tau.github.io`

Acest pas e opțional — găzduirea pe `github.io` este complet gratuită și funcțională fără domeniu propriu.
