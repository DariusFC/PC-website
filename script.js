// ---------------------------------------------------------------
// CheapWay PC — translations (RO / EN / DE) + site interactions
// Editează textele de mai jos ca să personalizezi conținutul site-ului.
// ---------------------------------------------------------------

const translations = {
  ro: {
    nav_home: "Acasă",
    nav_services: "Servicii",
    nav_pricing: "Prețuri",
    nav_process: "Cum funcționează",
    nav_contact: "Contact",

    hero_eyebrow: "Făcut de gameri. Vândut de gameri.",
    hero_title: "PC-uri făcute de gameri, pentru gameri, la un preț corect!",
    hero_subtitle: "Configurăm, asamblăm și optimizăm calculatorul tău de gaming — fără costuri ascunse și fără piese la mâna a doua nedeclarate.",
    hero_cta_primary: "Cere o ofertă gratuită",
    hero_cta_secondary: "Vezi prețurile",

    strip1_num: "100%",
    strip1_label: "Piese noi, sigilate",
    strip2_num: "24h",
    strip2_label: "Timp mediu de asamblare",
    strip3_num: "12 luni",
    strip3_label: "Garanție service",

    services_title: "Ce facem",
    services_subtitle: "Fie că pornești de la zero sau vrei doar câteva upgrade-uri, te ajutăm să obții cele mai bune performanțe pentru bugetul tău.",
    service1_title: "PC gaming la comandă",
    service1_desc: "Configurăm componentele potrivite pentru jocurile și bugetul tău, apoi asamblăm și testăm tot sistemul.",
    service2_title: "Upgrade la PC-ul existent",
    service2_desc: "Îți analizăm sistemul actual și îți spunem exact ce merită schimbat pentru mai mult FPS, fără cheltuieli inutile.",
    service3_title: "Build-uri pe buget mic",
    service3_desc: "Găsim cel mai bun raport preț-performanță din piață, cu piese verificate de noi personal.",
    service4_title: "Consultanță gratuită",
    service4_desc: "Nu știi de unde să începi? Îți răspundem la întrebări și te ajutăm să alegi fără presiune de vânzare.",

    pricing_title: "Configurații reale, prețuri reale",
    pricing_subtitle: "Acestea sunt liste de piese reale, calculate chiar de noi — nu specificații generice. Alege AMD sau Intel/Nvidia la nivelurile care oferă ambele variante. Oferta exactă se confirmă înainte de comandă.",
    part_cpu: "Procesor",
    part_gpu: "Placă video",
    part_mobo: "Placă de bază",
    part_ram: "RAM",
    part_storage: "Stocare",
    part_psu: "Sursă",
    part_cooler: "Cooler",
    part_case: "Carcasă",
    opt_or: "sau",
    edition_amd: "Ediția AMD",
    edition_intel: "Ediția Intel + Nvidia",
    tier0_name: "Super Buget",
    tier0_price: "de la 758 € / $882",
    tier1_name: "Budget",
    tier1_desc: "Două configurații de intrare pentru esports și jocuri la 1080p — Super Buget pentru început, sau Budget pentru mai multă putere și alegerea între AMD sau Intel.",
    tier1_price: "de la 1.044 € / $1.214",
    tier1_gpu_note: "(varianta Nvidia +23 € / +$25)",
    tier1_case_note: "(3× ventilatoare ARGB incluse)",
    tier2_name: "Mid-Range",
    tier2_desc: "1440p la frame-rate ridicat, pregătit pentru streaming — alegi platforma.",
    tier2_amd_price: "1.868 € / $2.171",
    tier2_intel_price: "1.882 € / $2.187",
    tier2_case_note: "(2× ventilatoare de 140mm incluse, +1 ventilator Aspect 12 suplimentar)",
    tier2_upsell: "Vrei și mai multă putere la jocuri? Upgradează procesorul Ediției AMD la un Ryzen 7 9800X3D pentru +100 € / +$100.",
    tier2_gpu_upsell: "Vrei și mai multă putere grafică? Upgradează placa video a Ediției AMD la o Radeon RX 9070 XT 16GB, sau placa video a Ediției Intel + Nvidia la o RTX 5070 12GB, pentru +190 € / +$222.",
    tier3_name: "High-End",
    tier3_desc: "Configurații fără compromis pentru 4K / refresh ridicat — cele mai bune procesoare de gaming pe ambele platforme.",
    tier3_amd_price: "3.744 € / $4.350",
    tier3_intel_price: "4.204 € / $4.888",
    tier_cta: "Cere ofertă",
    pricing_note: "* Prețurile sunt afișate în EUR/USD și pot varia ușor în funcție de cursul de schimb și disponibilitatea componentelor la momentul comenzii. Se aplică o taxă de 25$ / 25€ pentru asamblare și garanție, per PC, peste costul componentelor. Oferta exactă se confirmă în urma unei discuții rapide.",
    amazon_link_text: "Vezi live →",

    process_title: "Cum funcționează",
    step1_title: "Ne spui ce ai nevoie",
    step1_desc: "Buget, jocuri preferate, spațiu disponibil — orice contează în alegerea pieselor.",
    step2_title: "Primești o ofertă",
    step2_desc: "Îți trimitem o configurație clară, cu prețuri reale, fără costuri ascunse.",
    step3_title: "Asamblăm și testăm",
    step3_desc: "Montăm sistemul, rulăm teste de stres și verificăm temperaturile înainte de livrare.",
    step4_title: "Livrare și garanție",
    step4_desc: "Primești PC-ul gata de joc, cu garanție și suport post-vânzare.",

    why_title: "De ce CheapWay PC",
    why1_title: "Transparență totală",
    why1_desc: "Vezi exact ce piese primești și cât costă fiecare componentă.",
    why2_title: "Fără presiune de vânzare",
    why2_desc: "Recomandăm doar ce are sens pentru bugetul și jocurile tale.",
    why3_title: "Gameri adevărați, nu vânzători",
    why3_desc: "Echipa noastră chiar joacă jocurile pentru care construim PC-uri — știm exact ce contează la FPS, nu doar ce scrie pe cutie.",
    why4_title: "Suport după livrare",
    why4_desc: "Rămânem disponibili pentru întrebări și mentenanță după ce primești PC-ul.",

    contact_title: "Hai să construim PC-ul tău",
    contact_subtitle: "Scrie-ne câteva detalii despre ce cauți și revenim cu o ofertă personalizată.",
    contact_name_label: "Nume",
    contact_email_label: "Email",
    contact_message_label: "Ce cauți? (buget, jocuri, cerințe)",
    contact_send_btn: "Trimite cererea",
    contact_direct_label: "Sau contactează-ne direct:",
    contact_edit_note: "(Editează emailul și numărul de telefon din contact.html cu datele tale reale)",

    cta_banner_title: "Gata să-ți construim PC-ul de vis?",
    cta_banner_pricing: "Vezi prețurile",
    cta_banner_contact: "Cere o ofertă",

    footer_rights: "Toate drepturile rezervate.",
    footer_note: "Site găzduit gratuit pe GitHub Pages.",

    // --- FAQ / chat / gear (added) ---
    nav_gear: "Echipament",
    nav_faq: "Întrebări",
    faq_page_title: "Întrebări frecvente",
    faq_page_subtitle: "Nu găsești răspunsul? Folosește asistentul de chat din colț sau scrie-ne direct.",
    chat_header_title: "Întreabă-ne orice",
    chat_greeting: "Salut! Întreabă-mă despre prețuri, garanție, livrare sau orice altceva — încerc să te ajut.",
    chat_placeholder: "Scrie întrebarea ta...",
    chat_send: "Trimite",
    chat_fallback: "Nu sunt sigur la asta — încearcă să reformulezi, sau scrie-ne direct și îți răspunde un om.",
    chat_budget_below_a: "E puțin sub cât pornesc configurațiile noastre (de la 758 € / $882) — dar fiecare buget e diferit! Scrie-ne pe pagina de Contact cu detalii și vedem ce se poate face.",
    chat_budget_super_budget_a: "Se potrivește cu nivelul Super Buget — cea mai accesibilă variantă, cu performanță solidă la 1080p pentru esports, de la 758 € / $882. Vezi lista completă de piese pe pagina de Prețuri, sau treci direct la o ofertă.",
    chat_budget_tier1_a: "Cu bugetul ăsta ești exact pe zona Budget — configurații solide de 1080p/esports, de la 1.044 € / $1.214. Vezi lista completă de piese pe pagina de Prețuri, sau treci direct la o ofertă.",
    chat_budget_tier2_a: "Perfect pentru nivelul Mid-Range — 1440p la frame rate ridicat, de la 1.868 € / 2.171 $. Aruncă un ochi pe pagina de Prețuri sau cere direct o ofertă.",
    chat_budget_tier3_a: "Excelent, ești în zona High-End — cele mai bune configurații ale noastre pentru 4K / refresh ridicat, de la 3.744 € / 4.350 $. Vezi specificațiile complete pe pagina de Prețuri sau cere o ofertă.",
    chat_faq_link: "Vezi toate întrebările frecvente →",
    faq_payment_q: "Ce metode de plată acceptați?",
    faq_payment_a: "Acceptăm transfer bancar și plată ramburs (numerar la livrare) pentru comenzile locale. Plata cu cardul se poate configura la cerere — întreabă-ne când ceri oferta.",
    faq_build_time_q: "Cât durează construcția PC-ului?",
    faq_build_time_a: "Majoritatea configurațiilor se asamblează în aproximativ 24 de ore, odată ce avem toate piesele. Timpul de livrare depinde apoi de locația ta.",
    faq_warranty_q: "Ce acoperă garanția?",
    faq_warranty_a: "Fiecare PC vine cu 12 luni garanție service, care acoperă probleme de asamblare și defecte ale pieselor în condiții normale de utilizare. Serviciul de asamblare + garanție costă fix 25$ / 25€ per PC, peste costul componentelor. Rămânem disponibili și pentru suport după livrare.",
    faq_custom_parts_q: "Pot cere anumite mărci sau piese?",
    faq_custom_parts_a: "Sigur. Spune-ne ce mărci sau componente preferi și construim configurația în jurul lor, atât timp cât se încadrează în buget și în obiectivele tale.",
    faq_shipping_q: "Livrați în afara României?",
    faq_shipping_a: "Da, putem organiza livrare internațională — costul și timpul de livrare depind de țara ta. Cere-ne o ofertă de livrare împreună cu oferta pentru PC.",
    faq_damaged_q: "Ce se întâmplă dacă PC-ul ajunge deteriorat?",
    faq_damaged_a: "Fiecare PC este testat înainte să plece de la noi și ambalat cu grijă. Dacă ceva se deteriorează în timpul transportului, contactează-ne imediat și reparăm sau înlocuim gratuit, în garanție.",
    faq_peripherals_q: "Trebuie să am eu monitor, tastatură sau mouse?",
    faq_peripherals_a: "Nu — putem include monitor, tastatură, mouse sau scaun gaming în comandă. Vezi pagina Echipament pentru recomandările noastre pe bugete.",
    faq_quote_q: "Cum obțin o ofertă?",
    faq_quote_a: "Completează formularul din pagina Contact cu bugetul tău și jocurile pe care le joci, iar noi revenim cu o ofertă clară, detaliată pe componente.",
    faq_upgrade_existing_q: "Puteți doar să-mi faceți upgrade la PC-ul actual, nu unul nou?",
    faq_upgrade_existing_a: "Da — facem frecvent upgrade-uri la PC-uri existente, inclusiv cele cumpărate din magazin. Îți spunem exact ce merită schimbat pentru performanță mai bună.",
    faq_no_budget_q: "Ce fac dacă nu știu încă bugetul meu?",
    faq_no_budget_a: "Nicio problemă — spune-ne ce jocuri vrei să joci și cum vei folosi PC-ul, iar noi îți sugerăm câteva variante la prețuri diferite.",
    gear_title: "Echipament recomandat",
    gear_subtitle: "Recomandări reale pentru fiecare tip de gamer, de la casual la competitiv — date reale, surse reale, plus link către prețul curent de pe Amazon.",
    gear_chairs_title: "Cele mai bune scaune gaming 2026",
    gear_th_model: "Model",
    gear_th_price: "Preț",
    gear_th_durability: "Durabilitate",
    gear_th_mesh: "Suport plasă (mesh)",
    chair1_name: "SIHOO M57",
    chair1_price: "$200",
    chair1_durability: "Redusă",
    chair1_mesh: "Da",
    chair2_name: "COLAMY Atlas",
    chair2_price: "$280",
    chair2_durability: "Medie",
    chair2_mesh: "Parțial",
    chair3_name: "Steelcase Series 1",
    chair3_price: "$500",
    chair3_durability: "Ridicată",
    chair3_mesh: "Parțial",
    chair4_name: "Herman Miller Aeron",
    chair4_price: "$1.725",
    chair4_durability: "Foarte ridicată",
    chair4_mesh: "Da",
    chair5_name: "Herman Miller Embody",
    chair5_price: "$2.045",
    chair5_durability: "Foarte ridicată",
    chair5_mesh: "Nu",
    gear_chairs_note: "* Prețuri de pornire în USD pentru configurația de bază — prețul real variază în funcție de opțiunea de material/plasă, dotări și regiune.",
    gear_mice_title: "Top 5 mouse-uri gaming",
    mouse1_name: "Razer Viper V4 Pro",
    mouse1_data: "Datele: În prezent clasat #1 la categoria mouse gaming per ansamblu de către PC Gamer. Senzor optic de 50K DPI, doar 49 de grame și polling wireless real la 8000Hz, fără cusur.",
    mouse1_price: "~$159",
    mouse2_name: "Logitech G Pro X2 Superstrike",
    mouse2_data: "Datele: TechPowerUp și Tom's Hardware confirmă că acest mouse de 61g suportă polling wireless de până la 8000Hz. Elementul distinctiv este sistemul de click inductiv, cu puncte de actuare reglabile pentru latență minimă la click.",
    mouse2_price: "~$180",
    mouse3_name: "Razer Viper V3 Pro",
    mouse3_data: "Datele: Citat de Razer, pe baza datelor de utilizare Prosettings.net, drept cel mai folosit mouse printre profesioniștii din esports — dovadă a fiabilității și consistenței de tracking la cel mai înalt nivel competitiv.",
    mouse3_price: "~$159",
    mouse4_name: "G-Wolves Lycan",
    mouse4_data: "Datele: Pentru pasionații de greutate extrem de redusă — TechPowerUp a testat Lycan la doar ~29 de grame. Folosește un senzor PixArt 3950 și oferă polling verificat la 8000Hz, atât cu fir cât și wireless.",
    mouse5_name: "Pulsar ZywOo The Chosen Mouse Gen 2",
    mouse5_data: "Datele: Creat pentru jucătorii FPS competitivi. Suportă polling real la 8000Hz prin dongle-ul Link 8K, cu switch-uri optice cu latență minimă și alunecare excelentă — o serie limitată la doar 5.000 de bucăți.",
    mouse5_price: "$139,95",
    gear_kb_title: "Top 5 tastaturi cu Rapid Trigger / Hall Effect",
    kb1_name: "Wooting 80HE",
    kb1_data: "Datele: Wooting a pionierat mișcarea Rapid Trigger, iar Wootility rămâne standardul de aur pentru reglabilitate și latență aproape zero — clasată constant printre cele mai bune tastaturi Rapid Trigger de publicații precum Eurogamer/Digital Foundry.",
    kb1_price: "~$199,99",
    kb2_name: "SteelSeries Apex Pro TKL (Gen 3)",
    kb2_data: "Datele: Considerată pe scară largă cea mai bună alternativă mainstream la Wooting. Switch-urile OmniPoint 3.0 HyperMagnetic și suita software GG permit reglarea actuării pe fiecare tastă între 0,2mm și 3,8mm.",
    kb2_price: "~$200",
    kb3_name: "Corsair MAKR PRO 75",
    kb3_data: "Datele: O tastatură de nivel enthusiast, care combină switch-urile Hall Effect MGX Hyperdrive de la Corsair (actuare reglabilă 0,3mm-3,6mm) cu un polling rate de 8000Hz și un șasiu premium din aluminiu.",
    kb3_price: "~$249,99",
    kb4_name: "Razer Huntsman V3 Pro Mini",
    kb4_data: "Datele: Clasată de Eneba drept o alegere de top pentru jucătorii competitivi — switch-uri optice analogice ultra-responsive, cu actuare Rapid Trigger reglabilă între 0,1mm și 4,0mm, într-un format compact de 60%.",
    kb4_price: "~$180",
    kb5_name: "Keychron K2 HE",
    kb5_data: "Datele: Alegerea Hall Effect mai accesibilă — switch-uri magnetice Gateron cu dublă șină, cu Rapid Trigger reglabil și suport complet QMK/VIA, cu opțiune wireless și prietenoasă cu open-source.",
    kb5_price: "~$109,99+",
    gear_price_note: "* Prețurile afișate sunt prețuri tipice în USD și pot varia pe regiune sau vânzător. Apasă „Vezi live” pentru prețul real de azi pe Amazon.",
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_process: "How it works",
    nav_contact: "Contact",

    hero_eyebrow: "Made by gamers. Sold by gamers.",
    hero_title: "Gaming PCs made by gamers, for gamers, at a fair price!",
    hero_subtitle: "We spec, build, and tune your gaming PC — no hidden fees, no undisclosed used parts.",
    hero_cta_primary: "Get a free quote",
    hero_cta_secondary: "See pricing",

    strip1_num: "100%",
    strip1_label: "New, sealed parts",
    strip2_num: "24h",
    strip2_label: "Average build time",
    strip3_num: "12 months",
    strip3_label: "Service warranty",

    services_title: "What we do",
    services_subtitle: "Starting from scratch or just upgrading — we help you get the best performance for your budget.",
    service1_title: "Custom gaming PC builds",
    service1_desc: "We pick the right parts for your games and budget, then build and test the whole system.",
    service2_title: "Upgrade your current PC",
    service2_desc: "We check your current setup and tell you exactly what's worth upgrading for more FPS — without wasted spend.",
    service3_title: "Budget-friendly builds",
    service3_desc: "We find the best price-to-performance parts on the market, personally checked by us.",
    service4_title: "Free consultation",
    service4_desc: "Not sure where to start? We answer your questions and help you choose — no sales pressure.",

    pricing_title: "Real builds, real prices",
    pricing_subtitle: "These are actual parts lists we've priced out ourselves — not placeholder specs. Pick AMD or Intel/Nvidia on the tiers that offer both. Final quote confirmed before you order.",
    part_cpu: "CPU",
    part_gpu: "GPU",
    part_mobo: "Motherboard",
    part_ram: "RAM",
    part_storage: "Storage",
    part_psu: "PSU",
    part_cooler: "Cooler",
    part_case: "Case",
    opt_or: "or",
    edition_amd: "AMD Edition",
    edition_intel: "Intel + Nvidia Edition",
    tier0_name: "Super Budget",
    tier0_price: "from €758 / $882",
    tier1_name: "Budget",
    tier1_desc: "Two entry-level builds for esports and solid 1080p gaming — Super Budget to get started, or Budget for more headroom with your choice of AMD or Intel.",
    tier1_price: "from €1,044 / $1,214",
    tier1_gpu_note: "(Nvidia option +€23 / +$25)",
    tier1_case_note: "(3× ARGB fans included)",
    tier2_name: "Mid-Range",
    tier2_desc: "1440p at high frame rates, streaming-ready — pick your platform.",
    tier2_amd_price: "€1,868 / $2,171",
    tier2_intel_price: "€1,882 / $2,187",
    tier2_case_note: "(2× 140mm fans included, +1 extra Aspect 12 fan)",
    tier2_upsell: "Want more gaming headroom? Upgrade the AMD Edition's CPU to a Ryzen 7 9800X3D for +€100 / +$100.",
    tier2_gpu_upsell: "Want more graphics headroom? Upgrade the AMD Edition's GPU to a Radeon RX 9070 XT 16GB, or the Intel + Nvidia Edition's GPU to an RTX 5070 12GB, for +€190 / +$222.",
    tier3_name: "High-End",
    tier3_desc: "No-compromise 4K / high-refresh builds — our best gaming CPUs on either platform.",
    tier3_amd_price: "€3,744 / $4,350",
    tier3_intel_price: "€4,204 / $4,888",
    tier_cta: "Request quote",
    pricing_note: "* Prices are shown in EUR/USD and may vary slightly with exchange rates and parts availability at order time. A $25 / €25 assembly & warranty service fee applies per PC, on top of parts cost. Exact quote confirmed after a quick chat.",
    amazon_link_text: "See live →",

    process_title: "How it works",
    step1_title: "Tell us what you need",
    step1_desc: "Budget, favorite games, available space — everything matters when picking parts.",
    step2_title: "Get a quote",
    step2_desc: "We send you a clear build with real prices, no hidden costs.",
    step3_title: "We build and test",
    step3_desc: "We assemble the system, run stress tests, and check temperatures before delivery.",
    step4_title: "Delivery and warranty",
    step4_desc: "You get a ready-to-play PC with warranty and after-sales support.",

    why_title: "Why CheapWay PC",
    why1_title: "Full transparency",
    why1_desc: "See exactly which parts you're getting and what each one costs.",
    why2_title: "No sales pressure",
    why2_desc: "We only recommend what makes sense for your budget and games.",
    why3_title: "Real gamers, not salespeople",
    why3_desc: "Our team actually plays the games we build PCs for — we know exactly what matters for FPS, not just what's on the box.",
    why4_title: "Support after delivery",
    why4_desc: "We stay available for questions and maintenance after you get your PC.",

    contact_title: "Let's build your PC",
    contact_subtitle: "Send us a few details about what you're looking for and we'll get back with a custom quote.",
    contact_name_label: "Name",
    contact_email_label: "Email",
    contact_message_label: "What are you looking for? (budget, games, requirements)",
    contact_send_btn: "Send request",
    contact_direct_label: "Or contact us directly:",
    contact_edit_note: "(Edit the email and phone number in contact.html with your real details)",

    cta_banner_title: "Ready to build your dream PC?",
    cta_banner_pricing: "See pricing",
    cta_banner_contact: "Request a quote",

    footer_rights: "All rights reserved.",
    footer_note: "Site hosted for free on GitHub Pages.",

    // --- FAQ / chat / gear (added) ---
    nav_gear: "Gear",
    nav_faq: "FAQ",
    faq_page_title: "Frequently asked questions",
    faq_page_subtitle: "Can't find your answer? Use the chat assistant in the corner, or contact us directly.",
    chat_header_title: "Ask us anything",
    chat_greeting: "Hi! Ask me about pricing, warranty, shipping, or anything else — I'll do my best to help.",
    chat_placeholder: "Type your question...",
    chat_send: "Send",
    chat_fallback: "I'm not sure about that one — try rephrasing, or contact us directly and a real person will help.",
    chat_budget_below_a: "That's a little under where our builds start (from €758 / $882) — but every budget is different! Send us your details on the Contact page and we'll see what's possible.",
    chat_budget_super_budget_a: "That fits our Super Budget tier — the most affordable way in, with solid 1080p esports performance, from €758 / $882. Check the Pricing page for the full parts list, or jump straight to a quote.",
    chat_budget_tier1_a: "With that budget you're right in Budget tier territory — solid 1080p/esports builds from €1,044 / $1,214. Check the Pricing page for the full parts list, or jump straight to a quote.",
    chat_budget_tier2_a: "That puts you comfortably in our Mid-Range tier — 1440p at high frame rates, from €1,868 / $2,171. Take a look at the Pricing page, or request a quote and we'll lock in the details.",
    chat_budget_tier3_a: "Nice, that's High-End territory — our best 4K / high-refresh builds, from €3,744 / $4,350. Check the Pricing page for the full spec sheet, or go ahead and request a quote.",
    chat_faq_link: "See all FAQs →",
    faq_payment_q: "What payment methods do you accept?",
    faq_payment_a: "We accept bank transfer and cash on delivery for local orders. Card payment can be set up on request — just ask when you request your quote.",
    faq_build_time_q: "How long does it take to build my PC?",
    faq_build_time_a: "Most builds take about 24 hours once we have all the parts in hand. Delivery time on top of that depends on your location.",
    faq_warranty_q: "What does the warranty cover?",
    faq_warranty_a: "Every build comes with a 12-month service warranty covering assembly issues and part failures under normal use. Assembly + warranty is a flat $25 / €25 per PC, on top of the parts cost. We also offer support after delivery for any questions.",
    faq_custom_parts_q: "Can I request specific brands or parts?",
    faq_custom_parts_a: "Absolutely. Tell us the brands or components you prefer and we'll build around them whenever compatible with your budget and goals.",
    faq_shipping_q: "Do you ship outside Romania?",
    faq_shipping_a: "Yes, we can arrange shipping internationally — cost and delivery time depend on your country. Ask us for a shipping quote along with your PC quote.",
    faq_damaged_q: "What if my PC arrives damaged?",
    faq_damaged_a: "Every PC is tested before it leaves us and carefully packaged. If anything is damaged in transit, contact us right away and we'll fix or replace it under warranty at no extra cost.",
    faq_peripherals_q: "Do I need to provide my own monitor, keyboard, or mouse?",
    faq_peripherals_a: "No — we can include a monitor, keyboard, mouse, or gaming chair in your order. Check our Gear page for our recommended picks by budget.",
    faq_quote_q: "How do I get a quote?",
    faq_quote_a: "Fill out the form on our Contact page with your budget and the games you play, and we'll reply with a clear, itemized quote.",
    faq_upgrade_existing_q: "Can you just upgrade my current PC instead of building a new one?",
    faq_upgrade_existing_a: "Yes — we regularly upgrade existing PCs, including ones bought from a store. We'll tell you exactly what's worth changing for better performance.",
    faq_no_budget_q: "What if I don't know my budget yet?",
    faq_no_budget_a: "That's fine — tell us what games you want to play and how you plan to use the PC, and we'll suggest a few options at different price points.",
    gear_title: "Recommended gear",
    gear_subtitle: "Real picks for every type of gamer, from casual to competitive — real data, real sources, plus a link to today's Amazon price.",
    gear_chairs_title: "Best gaming chairs 2026",
    gear_th_model: "Model",
    gear_th_price: "Price",
    gear_th_durability: "Durability",
    gear_th_mesh: "Mesh Support",
    chair1_name: "SIHOO M57",
    chair1_price: "$200",
    chair1_durability: "Low",
    chair1_mesh: "Yes",
    chair2_name: "COLAMY Atlas",
    chair2_price: "$280",
    chair2_durability: "Medium",
    chair2_mesh: "Partial",
    chair3_name: "Steelcase Series 1",
    chair3_price: "$500",
    chair3_durability: "High",
    chair3_mesh: "Partial",
    chair4_name: "Herman Miller Aeron",
    chair4_price: "$1,725",
    chair4_durability: "Very High",
    chair4_mesh: "Yes",
    chair5_name: "Herman Miller Embody",
    chair5_price: "$2,045",
    chair5_durability: "Very High",
    chair5_mesh: "No",
    gear_chairs_note: "* Starting prices in USD for a base configuration — actual price varies by fabric/mesh choice, options, and region.",
    gear_mice_title: "Top 5 gaming mice",
    mouse1_name: "Razer Viper V4 Pro",
    mouse1_data: "The Data: Currently ranked the #1 overall gaming mouse by PC Gamer. A 50K DPI optical sensor, just 49 grams, and flawless true 8000Hz wireless polling.",
    mouse1_price: "~$159",
    mouse2_name: "Logitech G Pro X2 Superstrike",
    mouse2_data: "The Data: TechPowerUp and Tom's Hardware confirm this 61g mouse supports up to 8000Hz wireless polling. Its standout feature is an inductive click system with adjustable actuation points for ultra-low click latency.",
    mouse2_price: "~$180",
    mouse3_name: "Razer Viper V3 Pro",
    mouse3_data: "The Data: Cited by Razer, using Prosettings.net usage data, as the most-used mouse among esports professionals — proof of its reliability and tracking consistency at the highest level of competition.",
    mouse3_price: "~$159",
    mouse4_name: "G-Wolves Lycan",
    mouse4_data: "The Data: For the extreme lightweight enthusiast — TechPowerUp tested the Lycan at an ultralight ~29 grams. It uses a PixArt 3950 sensor and delivers verified 8000Hz polling in both wired and wireless modes.",
    mouse5_name: "Pulsar ZywOo The Chosen Mouse Gen 2",
    mouse5_data: "The Data: Designed for competitive FPS players. Supports true 8000Hz polling via its Link 8K Dongle, with ultra-low-latency optical switches and excellent glide — a limited run of just 5,000 units.",
    mouse5_price: "$139.95",
    gear_kb_title: "Top 5 rapid trigger / hall effect keyboards",
    kb1_name: "Wooting 80HE",
    kb1_data: "The Data: Wooting pioneered the Rapid Trigger movement, and Wootility remains the gold standard for adjustability and near-zero latency — consistently rated among the very best rapid trigger keyboards by outlets like Eurogamer/Digital Foundry.",
    kb1_price: "~$199.99",
    kb2_name: "SteelSeries Apex Pro TKL (Gen 3)",
    kb2_data: "The Data: Widely considered the best mainstream alternative to Wooting. Its OmniPoint 3.0 HyperMagnetic switches and GG software suite allow per-key actuation adjustment from 0.2mm to 3.8mm.",
    kb2_price: "~$200",
    kb3_name: "Corsair MAKR PRO 75",
    kb3_data: "The Data: An enthusiast-grade powerhouse combining Corsair's MGX Hyperdrive Hall Effect switches (0.3mm-3.6mm adjustable actuation) with an 8000Hz polling rate and a premium aluminum chassis.",
    kb3_price: "~$249.99",
    kb4_name: "Razer Huntsman V3 Pro Mini",
    kb4_data: "The Data: Ranked by Eneba as a top-tier choice for competitive players — ultra-responsive analog optical switches with Rapid Trigger actuation adjustable from 0.1mm to 4.0mm, in a compact 60% footprint.",
    kb4_price: "~$180",
    kb5_name: "Keychron K2 HE",
    kb5_data: "The Data: The more affordable Hall Effect pick — Gateron double-rail magnetic switches with adjustable Rapid Trigger and full QMK/VIA support, wireless-capable and open-source friendly.",
    kb5_price: "~$109.99+",
    gear_price_note: "* Prices shown are typical prices in USD and may vary by region or retailer. Click \"See live\" for today's real Amazon price.",
  },

  de: {
    nav_home: "Start",
    nav_services: "Leistungen",
    nav_pricing: "Preise",
    nav_process: "So funktioniert's",
    nav_contact: "Kontakt",

    hero_eyebrow: "Von Gamern gemacht. Von Gamern verkauft.",
    hero_title: "Gaming-PCs von Gamern, für Gamer, zu einem fairen Preis!",
    hero_subtitle: "Wir konfigurieren, bauen und optimieren deinen Gaming-PC — ohne versteckte Kosten und ohne nicht deklarierte Gebrauchtteile.",
    hero_cta_primary: "Kostenloses Angebot anfordern",
    hero_cta_secondary: "Preise ansehen",

    strip1_num: "100%",
    strip1_label: "Neue, versiegelte Teile",
    strip2_num: "24 Std.",
    strip2_label: "Durchschnittliche Bauzeit",
    strip3_num: "12 Monate",
    strip3_label: "Service-Garantie",

    services_title: "Was wir machen",
    services_subtitle: "Egal ob kompletter Neubau oder nur ein Upgrade — wir helfen dir, das Beste aus deinem Budget herauszuholen.",
    service1_title: "Gaming-PC nach Maß",
    service1_desc: "Wir wählen die passenden Komponenten für deine Spiele und dein Budget, bauen das System und testen es vollständig.",
    service2_title: "Upgrade für deinen PC",
    service2_desc: "Wir analysieren dein aktuelles System und sagen dir genau, was sich für mehr FPS lohnt — ohne unnötige Ausgaben.",
    service3_title: "Builds mit kleinem Budget",
    service3_desc: "Wir finden das beste Preis-Leistungs-Verhältnis am Markt, persönlich von uns geprüft.",
    service4_title: "Kostenlose Beratung",
    service4_desc: "Nicht sicher, wo du anfangen sollst? Wir beantworten deine Fragen — ganz ohne Verkaufsdruck.",

    pricing_title: "Echte Builds, echte Preise",
    pricing_subtitle: "Das sind reale Teilelisten, die wir selbst kalkuliert haben — keine Platzhalter-Specs. Wähle AMD oder Intel/Nvidia bei den Stufen, die beides anbieten. Das genaue Angebot wird vor der Bestellung bestätigt.",
    part_cpu: "CPU",
    part_gpu: "Grafikkarte",
    part_mobo: "Mainboard",
    part_ram: "RAM",
    part_storage: "Speicher",
    part_psu: "Netzteil",
    part_cooler: "Kühler",
    part_case: "Gehäuse",
    opt_or: "oder",
    edition_amd: "AMD-Edition",
    edition_intel: "Intel + Nvidia-Edition",
    tier0_name: "Super-Budget",
    tier0_price: "ab 758 € / $882",
    tier1_name: "Budget",
    tier1_desc: "Zwei Einstiegs-Builds für Esport und stabiles 1080p-Gaming — Super-Budget für den Einstieg, oder Budget für mehr Leistung mit der Wahl zwischen AMD und Intel.",
    tier1_price: "ab 1.044 € / $1.214",
    tier1_gpu_note: "(Nvidia-Option +23 € / +$25)",
    tier1_case_note: "(3× ARGB-Lüfter inklusive)",
    tier2_name: "Mid-Range",
    tier2_desc: "1440p mit hoher Bildrate, streaming-tauglich — wähle deine Plattform.",
    tier2_amd_price: "1.868 € / $2.171",
    tier2_intel_price: "1.882 € / $2.187",
    tier2_case_note: "(2× 140mm-Lüfter inklusive, +1 zusätzlicher Aspect-12-Lüfter)",
    tier2_upsell: "Mehr Gaming-Leistung gewünscht? Upgrade die CPU der AMD-Edition auf einen Ryzen 7 9800X3D für +100 € / +$100.",
    tier2_gpu_upsell: "Mehr Grafikleistung gewünscht? Upgrade die GPU der AMD-Edition auf eine Radeon RX 9070 XT 16GB, oder die GPU der Intel + Nvidia-Edition auf eine RTX 5070 12GB, für +190 € / +$222.",
    tier3_name: "High-End",
    tier3_desc: "Kompromisslose 4K-/High-Refresh-Builds — unsere besten Gaming-CPUs auf beiden Plattformen.",
    tier3_amd_price: "3.744 € / $4.350",
    tier3_intel_price: "4.204 € / $4.888",
    tier_cta: "Angebot anfordern",
    pricing_note: "* Die Preise werden in EUR/USD angezeigt und können je nach Wechselkurs und Verfügbarkeit der Teile zum Bestellzeitpunkt leicht variieren. Es fällt eine Montage- und Garantiegebühr von 25 $ / 25 € pro PC an, zusätzlich zu den Teilekosten. Genaues Angebot nach kurzem Gespräch.",
    amazon_link_text: "Live ansehen →",

    process_title: "So funktioniert's",
    step1_title: "Sag uns, was du brauchst",
    step1_desc: "Budget, Lieblingsspiele, verfügbarer Platz — alles zählt bei der Teileauswahl.",
    step2_title: "Du erhältst ein Angebot",
    step2_desc: "Wir schicken dir eine klare Konfiguration mit echten Preisen, ohne versteckte Kosten.",
    step3_title: "Wir bauen und testen",
    step3_desc: "Wir montieren das System, führen Stresstests durch und prüfen die Temperaturen vor der Lieferung.",
    step4_title: "Lieferung und Garantie",
    step4_desc: "Du erhältst einen spielbereiten PC mit Garantie und Support nach dem Kauf.",

    why_title: "Warum CheapWay PC",
    why1_title: "Volle Transparenz",
    why1_desc: "Du siehst genau, welche Teile du bekommst und was jede Komponente kostet.",
    why2_title: "Kein Verkaufsdruck",
    why2_desc: "Wir empfehlen nur, was für dein Budget und deine Spiele sinnvoll ist.",
    why3_title: "Echte Gamer, keine Verkäufer",
    why3_desc: "Unser Team spielt tatsächlich die Spiele, für die wir PCs bauen — wir wissen genau, was für die FPS wirklich zählt, nicht nur, was auf der Verpackung steht.",
    why4_title: "Support nach der Lieferung",
    why4_desc: "Wir stehen auch nach der Lieferung für Fragen und Wartung zur Verfügung.",

    contact_title: "Lass uns deinen PC bauen",
    contact_subtitle: "Schick uns ein paar Details zu dem, was du suchst, und wir melden uns mit einem individuellen Angebot.",
    contact_name_label: "Name",
    contact_email_label: "E-Mail",
    contact_message_label: "Wonach suchst du? (Budget, Spiele, Anforderungen)",
    contact_send_btn: "Anfrage senden",
    contact_direct_label: "Oder kontaktiere uns direkt:",
    contact_edit_note: "(Bearbeite E-Mail und Telefonnummer in contact.html mit deinen echten Daten)",

    cta_banner_title: "Bereit für deinen Traum-PC?",
    cta_banner_pricing: "Preise ansehen",
    cta_banner_contact: "Angebot anfordern",

    footer_rights: "Alle Rechte vorbehalten.",
    footer_note: "Kostenlos gehostet auf GitHub Pages.",

    // --- FAQ / chat / gear (added) ---
    nav_gear: "Ausrüstung",
    nav_faq: "FAQ",
    faq_page_title: "Häufig gestellte Fragen",
    faq_page_subtitle: "Keine Antwort gefunden? Nutze den Chat-Assistenten in der Ecke oder schreib uns direkt.",
    chat_header_title: "Frag uns alles",
    chat_greeting: "Hallo! Frag mich zu Preisen, Garantie, Versand oder allem anderen — ich helfe dir gerne weiter.",
    chat_placeholder: "Schreib deine Frage...",
    chat_send: "Senden",
    chat_fallback: "Da bin ich mir nicht sicher — versuch es anders zu formulieren oder schreib uns direkt, dann antwortet dir ein Mensch.",
    chat_budget_below_a: "Das liegt etwas unter dem Einstieg unserer Builds (ab 758 € / $882) — aber jedes Budget ist anders! Schreib uns über die Kontaktseite, dann schauen wir, was möglich ist.",
    chat_budget_super_budget_a: "Das passt zu unserer Super-Budget-Stufe — der günstigste Einstieg, mit solider 1080p-Esports-Leistung, ab 758 € / $882. Schau dir die volle Teileliste auf der Preise-Seite an oder hol dir direkt ein Angebot.",
    chat_budget_tier1_a: "Mit diesem Budget passt unsere Budget-Stufe perfekt — solide 1080p/Esports-Builds ab 1.044 € / 1.214 $. Schau dir die volle Teileliste auf der Preise-Seite an oder hol dir direkt ein Angebot.",
    chat_budget_tier2_a: "Damit liegst du klar in unserer Mid-Range-Stufe — 1440p mit hohen Frameraten, ab 1.868 € / 2.171 $. Schau auf der Preise-Seite vorbei oder fordere direkt ein Angebot an.",
    chat_budget_tier3_a: "Stark, das ist High-End-Territorium — unsere besten 4K-/High-Refresh-Builds, ab 3.744 € / 4.350 $. Alle Details auf der Preise-Seite, oder fordere gleich ein Angebot an.",
    chat_faq_link: "Alle FAQs ansehen →",
    faq_payment_q: "Welche Zahlungsmethoden akzeptiert ihr?",
    faq_payment_a: "Wir akzeptieren Banküberweisung und Nachnahme (Barzahlung bei Lieferung) für lokale Bestellungen. Kartenzahlung richten wir auf Anfrage ein — frag einfach bei deinem Angebot danach.",
    faq_build_time_q: "Wie lange dauert der Bau meines PCs?",
    faq_build_time_a: "Die meisten Builds dauern etwa 24 Stunden, sobald alle Teile vorhanden sind. Die Lieferzeit danach hängt von deinem Standort ab.",
    faq_warranty_q: "Was deckt die Garantie ab?",
    faq_warranty_a: "Jeder PC kommt mit 12 Monaten Service-Garantie, die Montagefehler und Bauteilausfälle bei normaler Nutzung abdeckt. Montage + Garantie kosten pauschal 25 $ / 25 € pro PC, zusätzlich zu den Teilekosten. Auch nach der Lieferung stehen wir für Support zur Verfügung.",
    faq_custom_parts_q: "Kann ich bestimmte Marken oder Teile wünschen?",
    faq_custom_parts_a: "Klar. Sag uns, welche Marken oder Komponenten du bevorzugst, und wir bauen die Konfiguration darum herum, solange es zu Budget und Zielen passt.",
    faq_shipping_q: "Liefert ihr auch außerhalb Rumäniens?",
    faq_shipping_a: "Ja, wir organisieren auch internationalen Versand — Kosten und Lieferzeit hängen von deinem Land ab. Frag einfach nach einem Versandangebot zusammen mit deinem PC-Angebot.",
    faq_damaged_q: "Was, wenn mein PC beschädigt ankommt?",
    faq_damaged_a: "Jeder PC wird vor dem Versand getestet und sorgfältig verpackt. Sollte beim Transport etwas beschädigt werden, melde dich sofort — wir reparieren oder ersetzen es kostenlos im Rahmen der Garantie.",
    faq_peripherals_q: "Muss ich selbst Monitor, Tastatur oder Maus mitbringen?",
    faq_peripherals_a: "Nein — wir können Monitor, Tastatur, Maus oder einen Gaming-Stuhl in deine Bestellung aufnehmen. Schau auf unserer Ausrüstungs-Seite nach unseren Empfehlungen nach Budget.",
    faq_quote_q: "Wie bekomme ich ein Angebot?",
    faq_quote_a: "Fülle das Formular auf unserer Kontaktseite mit deinem Budget und deinen Lieblingsspielen aus, und wir melden uns mit einem klaren, aufgeschlüsselten Angebot.",
    faq_upgrade_existing_q: "Könnt ihr nur meinen aktuellen PC aufrüsten statt einen neuen zu bauen?",
    faq_upgrade_existing_a: "Ja — wir rüsten regelmäßig bestehende PCs auf, auch aus dem Laden gekaufte. Wir sagen dir genau, was sich für mehr Leistung lohnt.",
    faq_no_budget_q: "Was, wenn ich mein Budget noch nicht kenne?",
    faq_no_budget_a: "Kein Problem — sag uns, welche Spiele du spielen willst und wie du den PC nutzen wirst, und wir schlagen dir ein paar Optionen zu unterschiedlichen Preisen vor.",
    gear_title: "Empfohlene Ausrüstung",
    gear_subtitle: "Echte Empfehlungen für jeden Gamer-Typ, von Casual bis kompetitiv — echte Daten, echte Quellen, plus Link zum aktuellen Amazon-Preis.",
    gear_chairs_title: "Die besten Gaming-Stühle 2026",
    gear_th_model: "Modell",
    gear_th_price: "Preis",
    gear_th_durability: "Langlebigkeit",
    gear_th_mesh: "Netzbespannung",
    chair1_name: "SIHOO M57",
    chair1_price: "200 $",
    chair1_durability: "Niedrig",
    chair1_mesh: "Ja",
    chair2_name: "COLAMY Atlas",
    chair2_price: "280 $",
    chair2_durability: "Mittel",
    chair2_mesh: "Teilweise",
    chair3_name: "Steelcase Series 1",
    chair3_price: "500 $",
    chair3_durability: "Hoch",
    chair3_mesh: "Teilweise",
    chair4_name: "Herman Miller Aeron",
    chair4_price: "1.725 $",
    chair4_durability: "Sehr hoch",
    chair4_mesh: "Ja",
    chair5_name: "Herman Miller Embody",
    chair5_price: "2.045 $",
    chair5_durability: "Sehr hoch",
    chair5_mesh: "Nein",
    gear_chairs_note: "* Einstiegspreise in USD für die Basiskonfiguration — der tatsächliche Preis variiert je nach Stoff-/Netzwahl, Ausstattung und Region.",
    gear_mice_title: "Top 5 Gaming-Mäuse",
    mouse1_name: "Razer Viper V4 Pro",
    mouse1_data: "Die Daten: Aktuell von PC Gamer als #1 Gaming-Maus insgesamt eingestuft. 50K-DPI-Optiksensor, nur 49 Gramm und makelloses echtes 8000Hz-Wireless-Polling.",
    mouse1_price: "~159 $",
    mouse2_name: "Logitech G Pro X2 Superstrike",
    mouse2_data: "Die Daten: TechPowerUp und Tom's Hardware bestätigen, dass diese 61g-Maus bis zu 8000Hz-Wireless-Polling unterstützt. Das Highlight ist ein induktives Klick-System mit einstellbaren Aktivierungspunkten für ultraniedrige Klicklatenz.",
    mouse2_price: "~180 $",
    mouse3_name: "Razer Viper V3 Pro",
    mouse3_data: "Die Daten: Von Razer, gestützt auf Nutzungsdaten von Prosettings.net, als meistgenutzte Maus unter Esports-Profis genannt — ein Beweis für Zuverlässigkeit und Tracking-Konsistenz auf höchstem Wettkampfniveau.",
    mouse3_price: "~159 $",
    mouse4_name: "G-Wolves Lycan",
    mouse4_data: "Die Daten: Für Enthusiasten des extremen Leichtgewichts — TechPowerUp testete die Lycan bei ultraleichten ~29 Gramm. Sie nutzt einen PixArt-3950-Sensor und liefert verifiziertes 8000Hz-Polling, sowohl kabelgebunden als auch kabellos.",
    mouse5_name: "Pulsar ZywOo The Chosen Mouse Gen 2",
    mouse5_data: "Die Daten: Entwickelt für kompetitive FPS-Spieler. Unterstützt echtes 8000Hz-Polling über den Link-8K-Dongle, mit ultra-latenzarmen optischen Switches und exzellentem Gleitverhalten — limitiert auf nur 5.000 Stück.",
    mouse5_price: "139,95 $",
    gear_kb_title: "Top 5 Rapid-Trigger-/Hall-Effect-Tastaturen",
    kb1_name: "Wooting 80HE",
    kb1_data: "Die Daten: Wooting hat die Rapid-Trigger-Bewegung ins Leben gerufen, und Wootility bleibt der Goldstandard für Einstellbarkeit und nahezu null Latenz — durchweg von Outlets wie Eurogamer/Digital Foundry unter den besten Rapid-Trigger-Tastaturen bewertet.",
    kb1_price: "~199,99 $",
    kb2_name: "SteelSeries Apex Pro TKL (Gen 3)",
    kb2_data: "Die Daten: Gilt weithin als beste Mainstream-Alternative zu Wooting. Die OmniPoint-3.0-HyperMagnetic-Switches und die GG-Software-Suite erlauben eine Aktivierungspunkt-Einstellung pro Taste von 0,2mm bis 3,8mm.",
    kb2_price: "~200 $",
    kb3_name: "Corsair MAKR PRO 75",
    kb3_data: "Die Daten: Ein Kraftpaket für Enthusiasten, das Corsairs MGX-Hyperdrive-Hall-Effect-Switches (einstellbare Aktivierung 0,3mm-3,6mm) mit einer 8000Hz-Pollingrate und einem hochwertigen Aluminiumgehäuse kombiniert.",
    kb3_price: "~249,99 $",
    kb4_name: "Razer Huntsman V3 Pro Mini",
    kb4_data: "Die Daten: Von Eneba als Top-Wahl für kompetitive Spieler eingestuft — ultra-reaktionsschnelle analoge optische Switches mit Rapid-Trigger-Aktivierung, einstellbar von 0,1mm bis 4,0mm, in einem kompakten 60%-Format.",
    kb4_price: "~180 $",
    kb5_name: "Keychron K2 HE",
    kb5_data: "Die Daten: Die erschwinglichere Hall-Effect-Wahl — Gateron-Doppelschienen-Magnetswitches mit einstellbarem Rapid Trigger und vollem QMK/VIA-Support, kabellos-fähig und Open-Source-freundlich.",
    kb5_price: "~109,99 $+",
    gear_price_note: "* Die angezeigten Preise sind typische Preise in USD und können je nach Region oder Händler variieren. Klicke auf „Live ansehen“ für den heutigen echten Amazon-Preis.",
  },

  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_pricing: "Precios",
    nav_process: "Cómo funciona",
    nav_contact: "Contacto",

    hero_eyebrow: "Hecho por gamers. Vendido por gamers.",
    hero_title: "PCs gaming hechos por gamers, para gamers, a un precio justo!",
    hero_subtitle: "Configuramos, montamos y optimizamos tu PC gaming — sin costes ocultos ni piezas de segunda mano no declaradas.",
    hero_cta_primary: "Pide un presupuesto gratis",
    hero_cta_secondary: "Ver precios",

    strip1_num: "100%",
    strip1_label: "Piezas nuevas, selladas",
    strip2_num: "24h",
    strip2_label: "Tiempo medio de montaje",
    strip3_num: "12 meses",
    strip3_label: "Garantía de servicio",

    services_title: "Qué hacemos",
    services_subtitle: "Ya sea que empieces desde cero o solo quieras algunas mejoras, te ayudamos a sacar el máximo rendimiento para tu presupuesto.",
    service1_title: "PC gaming a medida",
    service1_desc: "Elegimos las piezas adecuadas para tus juegos y tu presupuesto, luego montamos y probamos todo el sistema.",
    service2_title: "Mejora tu PC actual",
    service2_desc: "Revisamos tu configuración actual y te decimos exactamente qué merece la pena mejorar para más FPS, sin gastos innecesarios.",
    service3_title: "Builds económicos",
    service3_desc: "Encontramos la mejor relación calidad-precio del mercado, con piezas revisadas personalmente por nosotros.",
    service4_title: "Consultoría gratuita",
    service4_desc: "¿No sabes por dónde empezar? Respondemos tus preguntas y te ayudamos a elegir sin presión de venta.",

    pricing_title: "Builds reales, precios reales",
    pricing_subtitle: "Estas son listas de piezas reales que hemos calculado nosotros mismos, no especificaciones genéricas. Elige AMD o Intel/Nvidia en los niveles que ofrecen ambas opciones. El presupuesto exacto se confirma antes de pedir.",
    part_cpu: "CPU",
    part_gpu: "GPU",
    part_mobo: "Placa base",
    part_ram: "RAM",
    part_storage: "Almacenamiento",
    part_psu: "Fuente de alimentación",
    part_cooler: "Refrigeración",
    part_case: "Caja",
    opt_or: "o",
    edition_amd: "Edición AMD",
    edition_intel: "Edición Intel + Nvidia",
    tier0_name: "Súper Económico",
    tier0_price: "desde 758 € / $882",
    tier1_name: "Budget",
    tier1_desc: "Dos configuraciones de entrada para esports y gaming estable en 1080p — Súper Económico para empezar, o Budget para más potencia y elegir entre AMD o Intel.",
    tier1_price: "desde 1.044 € / $1.214",
    tier1_gpu_note: "(opción Nvidia +23 € / +$25)",
    tier1_case_note: "(3× ventiladores ARGB incluidos)",
    tier2_name: "Mid-Range",
    tier2_desc: "1440p a alta tasa de fotogramas, listo para streaming — elige tu plataforma.",
    tier2_amd_price: "1.868 € / $2.171",
    tier2_intel_price: "1.882 € / $2.187",
    tier2_case_note: "(2× ventiladores de 140mm incluidos, +1 ventilador Aspect 12 adicional)",
    tier2_upsell: "¿Quieres más potencia para jugar? Mejora la CPU de la Edición AMD a un Ryzen 7 9800X3D por +100 € / +$100.",
    tier2_gpu_upsell: "¿Quieres más potencia gráfica? Mejora la GPU de la Edición AMD a una Radeon RX 9070 XT 16GB, o la GPU de la Edición Intel + Nvidia a una RTX 5070 12GB, por +190 € / +$222.",
    tier3_name: "High-End",
    tier3_desc: "Builds sin concesiones para 4K / alta tasa de refresco — nuestras mejores CPU de gaming en ambas plataformas.",
    tier3_amd_price: "3.744 € / $4.350",
    tier3_intel_price: "4.204 € / $4.888",
    tier_cta: "Pedir presupuesto",
    pricing_note: "* Los precios se muestran en EUR/USD y pueden variar ligeramente según el tipo de cambio y la disponibilidad de piezas en el momento del pedido. Se aplica una tarifa de montaje y garantía de $25 / €25 por PC, además del costo de las piezas. Presupuesto exacto tras una breve conversación.",
    amazon_link_text: "Ver en vivo →",

    process_title: "Cómo funciona",
    step1_title: "Cuéntanos qué necesitas",
    step1_desc: "Presupuesto, juegos favoritos, espacio disponible — todo importa a la hora de elegir las piezas.",
    step2_title: "Recibe un presupuesto",
    step2_desc: "Te enviamos una configuración clara, con precios reales, sin costes ocultos.",
    step3_title: "Montamos y probamos",
    step3_desc: "Montamos el sistema, hacemos pruebas de estrés y comprobamos las temperaturas antes de la entrega.",
    step4_title: "Entrega y garantía",
    step4_desc: "Recibes un PC listo para jugar, con garantía y soporte postventa.",

    why_title: "Por qué CheapWay PC",
    why1_title: "Transparencia total",
    why1_desc: "Ves exactamente qué piezas recibes y cuánto cuesta cada componente.",
    why2_title: "Sin presión de venta",
    why2_desc: "Solo recomendamos lo que tiene sentido para tu presupuesto y tus juegos.",
    why3_title: "Gamers de verdad, no vendedores",
    why3_desc: "Nuestro equipo realmente juega a los juegos para los que construimos PCs — sabemos exactamente qué importa para los FPS, no solo lo que dice la caja.",
    why4_title: "Soporte tras la entrega",
    why4_desc: "Seguimos disponibles para preguntas y mantenimiento después de recibir tu PC.",

    contact_title: "Construyamos tu PC",
    contact_subtitle: "Envíanos algunos detalles sobre lo que buscas y te responderemos con un presupuesto personalizado.",
    contact_name_label: "Nombre",
    contact_email_label: "Correo electrónico",
    contact_message_label: "¿Qué buscas? (presupuesto, juegos, requisitos)",
    contact_send_btn: "Enviar solicitud",
    contact_direct_label: "O contáctanos directamente:",
    contact_edit_note: "(Edita el correo y el teléfono en contact.html con tus datos reales)",

    cta_banner_title: "¿Listo para construir el PC de tus sueños?",
    cta_banner_pricing: "Ver precios",
    cta_banner_contact: "Pedir presupuesto",

    footer_rights: "Todos los derechos reservados.",
    footer_note: "Sitio alojado gratis en GitHub Pages.",

    // --- FAQ / chat / gear (added) ---
    nav_gear: "Equipo",
    nav_faq: "Preguntas",
    faq_page_title: "Preguntas frecuentes",
    faq_page_subtitle: "¿No encuentras tu respuesta? Usa el asistente de chat en la esquina o contáctanos directamente.",
    chat_header_title: "Pregúntanos lo que sea",
    chat_greeting: "¡Hola! Pregúntame sobre precios, garantía, envíos o cualquier otra cosa — haré lo posible por ayudarte.",
    chat_placeholder: "Escribe tu pregunta...",
    chat_send: "Enviar",
    chat_fallback: "No estoy seguro de esa — intenta reformularla, o contáctanos directamente y te ayudará una persona real.",
    chat_budget_below_a: "Eso está un poco por debajo de donde empiezan nuestras configuraciones (desde 758 € / $882) — ¡pero cada presupuesto es diferente! Escríbenos en la página de Contacto y vemos qué se puede hacer.",
    chat_budget_super_budget_a: "Eso encaja con nuestro nivel Súper Económico — la opción más asequible, con un rendimiento sólido en esports a 1080p, desde 758 € / $882. Mira la lista completa de piezas en la página de Precios, o pide directamente un presupuesto.",
    chat_budget_tier1_a: "Con ese presupuesto encajas justo en el nivel Budget — configuraciones sólidas para 1080p/esports desde 1.044 € / 1.214 $. Mira la lista completa de piezas en la página de Precios, o pide directamente un presupuesto.",
    chat_budget_tier2_a: "Eso te sitúa cómodamente en nuestro nivel Mid-Range — 1440p a altas tasas de fotogramas, desde 1.868 € / 2.171 $. Echa un vistazo a la página de Precios o pide un presupuesto directamente.",
    chat_budget_tier3_a: "Genial, eso es territorio High-End — nuestras mejores configuraciones para 4K / alta frecuencia, desde 3.744 € / 4.350 $. Revisa la ficha completa en la página de Precios o pide ya un presupuesto.",
    chat_faq_link: "Ver todas las preguntas →",
    faq_payment_q: "¿Qué métodos de pago aceptáis?",
    faq_payment_a: "Aceptamos transferencia bancaria y pago contra reembolso (efectivo al recibir) para pedidos locales. El pago con tarjeta se puede configurar bajo petición — pregúntanos al pedir tu presupuesto.",
    faq_build_time_q: "¿Cuánto tarda el montaje de mi PC?",
    faq_build_time_a: "La mayoría de los montajes tardan unas 24 horas una vez que tenemos todas las piezas. El tiempo de entrega después depende de tu ubicación.",
    faq_warranty_q: "¿Qué cubre la garantía?",
    faq_warranty_a: "Cada PC incluye 12 meses de garantía de servicio, que cubre problemas de montaje y fallos de piezas en uso normal. El montaje + garantía tiene un costo fijo de $25 / €25 por PC, además del costo de las piezas. Además, seguimos disponibles para soporte tras la entrega.",
    faq_custom_parts_q: "¿Puedo pedir marcas o piezas específicas?",
    faq_custom_parts_a: "Por supuesto. Dinos qué marcas o componentes prefieres y montamos la configuración en torno a ellos, siempre que encajen con tu presupuesto y objetivos.",
    faq_shipping_q: "¿Enviáis fuera de Rumanía?",
    faq_shipping_a: "Sí, podemos organizar envío internacional — el coste y el tiempo de entrega dependen de tu país. Pídenos un presupuesto de envío junto con el del PC.",
    faq_damaged_q: "¿Qué pasa si mi PC llega dañado?",
    faq_damaged_a: "Cada PC se prueba antes de salir y se embala con cuidado. Si algo se daña durante el transporte, contáctanos de inmediato y lo reparamos o reemplazamos sin coste, bajo garantía.",
    faq_peripherals_q: "¿Necesito llevar mi propio monitor, teclado o ratón?",
    faq_peripherals_a: "No — podemos incluir monitor, teclado, ratón o una silla gaming en tu pedido. Consulta nuestra página de Equipo para ver nuestras recomendaciones por presupuesto.",
    faq_quote_q: "¿Cómo consigo un presupuesto?",
    faq_quote_a: "Rellena el formulario de nuestra página de Contacto con tu presupuesto y los juegos que juegas, y te responderemos con un presupuesto claro y detallado.",
    faq_upgrade_existing_q: "¿Podéis solo mejorar mi PC actual en vez de construir uno nuevo?",
    faq_upgrade_existing_a: "Sí — mejoramos habitualmente PCs existentes, incluidos los comprados en tienda. Te decimos exactamente qué merece la pena cambiar para más rendimiento.",
    faq_no_budget_q: "¿Y si todavía no sé mi presupuesto?",
    faq_no_budget_a: "No pasa nada — dinos qué juegos quieres jugar y cómo usarás el PC, y te sugerimos varias opciones a distintos precios.",
    gear_title: "Equipo recomendado",
    gear_subtitle: "Recomendaciones reales para cada tipo de gamer, de casual a competitivo — datos reales, fuentes reales, más un enlace al precio actual en Amazon.",
    gear_chairs_title: "Las mejores sillas gaming 2026",
    gear_th_model: "Modelo",
    gear_th_price: "Precio",
    gear_th_durability: "Durabilidad",
    gear_th_mesh: "Soporte de malla",
    chair1_name: "SIHOO M57",
    chair1_price: "$200",
    chair1_durability: "Baja",
    chair1_mesh: "Sí",
    chair2_name: "COLAMY Atlas",
    chair2_price: "$280",
    chair2_durability: "Media",
    chair2_mesh: "Parcial",
    chair3_name: "Steelcase Series 1",
    chair3_price: "$500",
    chair3_durability: "Alta",
    chair3_mesh: "Parcial",
    chair4_name: "Herman Miller Aeron",
    chair4_price: "$1.725",
    chair4_durability: "Muy alta",
    chair4_mesh: "Sí",
    chair5_name: "Herman Miller Embody",
    chair5_price: "$2.045",
    chair5_durability: "Muy alta",
    chair5_mesh: "No",
    gear_chairs_note: "* Precios de partida en USD para la configuración base — el precio real varía según la tela/malla elegida, las opciones y la región.",
    gear_mice_title: "Top 5 ratones gaming",
    mouse1_name: "Razer Viper V4 Pro",
    mouse1_data: "Los datos: Actualmente clasificado como el ratón gaming general #1 por PC Gamer. Sensor óptico de 50K DPI, solo 49 gramos y un polling inalámbrico real de 8000Hz sin fallos.",
    mouse1_price: "~$159",
    mouse2_name: "Logitech G Pro X2 Superstrike",
    mouse2_data: "Los datos: TechPowerUp y Tom's Hardware confirman que este ratón de 61g soporta polling inalámbrico de hasta 8000Hz. Su rasgo distintivo es un sistema de clic inductivo con puntos de activación ajustables para una latencia de clic ultrabaja.",
    mouse2_price: "~$180",
    mouse3_name: "Razer Viper V3 Pro",
    mouse3_data: "Los datos: Citado por Razer, usando datos de uso de Prosettings.net, como el ratón más usado entre los profesionales de esports — prueba de su fiabilidad y consistencia de seguimiento al más alto nivel competitivo.",
    mouse3_price: "~$159",
    mouse4_name: "G-Wolves Lycan",
    mouse4_data: "Los datos: Para el entusiasta del peso extremadamente ligero — TechPowerUp probó el Lycan en unos ultraligeros ~29 gramos. Usa un sensor PixArt 3950 y ofrece polling verificado de 8000Hz tanto con cable como inalámbrico.",
    mouse5_name: "Pulsar ZywOo The Chosen Mouse Gen 2",
    mouse5_data: "Los datos: Diseñado para jugadores competitivos de FPS. Soporta polling real de 8000Hz mediante su dongle Link 8K, con switches ópticos de latencia ultrabaja y un deslizamiento excelente — una tirada limitada de solo 5.000 unidades.",
    mouse5_price: "$139,95",
    gear_kb_title: "Top 5 teclados Rapid Trigger / Hall Effect",
    kb1_name: "Wooting 80HE",
    kb1_data: "Los datos: Wooting inició el movimiento Rapid Trigger, y Wootility sigue siendo el estándar de oro en ajustabilidad y latencia casi nula — clasificado constantemente entre los mejores teclados Rapid Trigger por medios como Eurogamer/Digital Foundry.",
    kb1_price: "~$199,99",
    kb2_name: "SteelSeries Apex Pro TKL (Gen 3)",
    kb2_data: "Los datos: Ampliamente considerado la mejor alternativa mainstream a Wooting. Sus switches OmniPoint 3.0 HyperMagnetic y su suite de software GG permiten ajustar la actuación de cada tecla entre 0,2mm y 3,8mm.",
    kb2_price: "~$200",
    kb3_name: "Corsair MAKR PRO 75",
    kb3_data: "Los datos: Una potencia de nivel entusiasta que combina los switches Hall Effect MGX Hyperdrive de Corsair (actuación ajustable de 0,3mm-3,6mm) con una tasa de polling de 8000Hz y un chasis de aluminio premium.",
    kb3_price: "~$249,99",
    kb4_name: "Razer Huntsman V3 Pro Mini",
    kb4_data: "Los datos: Clasificado por Eneba como una opción de primer nivel para jugadores competitivos — switches ópticos analógicos ultrarrespuesta con actuación Rapid Trigger ajustable de 0,1mm a 4,0mm, en un formato compacto del 60%.",
    kb4_price: "~$180",
    kb5_name: "Keychron K2 HE",
    kb5_data: "Los datos: La opción Hall Effect más asequible — switches magnéticos Gateron de doble riel con Rapid Trigger ajustable y soporte completo QMK/VIA, con opción inalámbrica y compatible con open-source.",
    kb5_price: "~$109,99+",
    gear_price_note: "* Los precios mostrados son precios habituales en USD y pueden variar según la región o el vendedor. Haz clic en «Ver en vivo» para el precio real de hoy en Amazon.",
  },

  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_pricing: "Tarifs",
    nav_process: "Comment ça marche",
    nav_contact: "Contact",

    hero_eyebrow: "Fait par des gamers. Vendu par des gamers.",
    hero_title: "Des PC gaming faits par des gamers, pour des gamers, à un prix juste !",
    hero_subtitle: "Nous configurons, assemblons et optimisons votre PC gaming — sans frais cachés ni pièces d'occasion non déclarées.",
    hero_cta_primary: "Demander un devis gratuit",
    hero_cta_secondary: "Voir les tarifs",

    strip1_num: "100%",
    strip1_label: "Pièces neuves, scellées",
    strip2_num: "24h",
    strip2_label: "Délai moyen de montage",
    strip3_num: "12 mois",
    strip3_label: "Garantie service",

    services_title: "Ce que nous faisons",
    services_subtitle: "Que vous partiez de zéro ou souhaitiez juste quelques améliorations, nous vous aidons à obtenir les meilleures performances pour votre budget.",
    service1_title: "PC gaming sur mesure",
    service1_desc: "Nous choisissons les bons composants pour vos jeux et votre budget, puis assemblons et testons tout le système.",
    service2_title: "Améliorer votre PC actuel",
    service2_desc: "Nous analysons votre configuration actuelle et vous disons exactement ce qui vaut la peine d'être amélioré pour plus de FPS, sans dépenses inutiles.",
    service3_title: "Configurations petit budget",
    service3_desc: "Nous trouvons le meilleur rapport qualité-prix du marché, avec des pièces vérifiées personnellement par nous.",
    service4_title: "Consultation gratuite",
    service4_desc: "Vous ne savez pas par où commencer ? Nous répondons à vos questions et vous aidons à choisir, sans pression commerciale.",

    pricing_title: "Configurations réelles, prix réels",
    pricing_subtitle: "Ce sont de vraies listes de pièces que nous avons chiffrées nous-mêmes — pas des specs génériques. Choisissez AMD ou Intel/Nvidia sur les niveaux qui proposent les deux. Devis exact confirmé avant la commande.",
    part_cpu: "CPU",
    part_gpu: "Carte graphique",
    part_mobo: "Carte mère",
    part_ram: "RAM",
    part_storage: "Stockage",
    part_psu: "Alimentation",
    part_cooler: "Refroidisseur",
    part_case: "Boîtier",
    opt_or: "ou",
    edition_amd: "Édition AMD",
    edition_intel: "Édition Intel + Nvidia",
    tier0_name: "Super Économique",
    tier0_price: "à partir de 758 € / 882 $",
    tier1_name: "Budget",
    tier1_desc: "Deux configurations d'entrée pour l'esport et un gaming stable en 1080p — Super Économique pour démarrer, ou Budget pour plus de puissance et le choix entre AMD et Intel.",
    tier1_price: "à partir de 1 044 € / 1 214 $",
    tier1_gpu_note: "(option Nvidia +23 € / +25 $)",
    tier1_case_note: "(3× ventilateurs ARGB inclus)",
    tier2_name: "Mid-Range",
    tier2_desc: "1440p à haute fréquence d'images, prêt pour le streaming — choisissez votre plateforme.",
    tier2_amd_price: "1 868 € / 2 171 $",
    tier2_intel_price: "1 882 € / 2 187 $",
    tier2_case_note: "(2× ventilateurs de 140mm inclus, +1 ventilateur Aspect 12 supplémentaire)",
    tier2_upsell: "Envie de plus de puissance en jeu ? Passez le CPU de l'Édition AMD à un Ryzen 7 9800X3D pour +100 € / +100 $.",
    tier2_gpu_upsell: "Envie de plus de puissance graphique ? Passez le GPU de l'Édition AMD à une Radeon RX 9070 XT 16GB, ou le GPU de l'Édition Intel + Nvidia à une RTX 5070 12GB, pour +190 € / +222 $.",
    tier3_name: "High-End",
    tier3_desc: "Configurations sans compromis pour le 4K / le taux de rafraîchissement élevé — nos meilleurs CPU gaming sur les deux plateformes.",
    tier3_amd_price: "3 744 € / 4 350 $",
    tier3_intel_price: "4 204 € / 4 888 $",
    tier_cta: "Demander un devis",
    pricing_note: "* Les prix sont indiqués en EUR/USD et peuvent varier légèrement selon le taux de change et la disponibilité des pièces au moment de la commande. Des frais de montage et de garantie de 25 $ / 25 € s'appliquent par PC, en plus du coût des pièces. Devis exact confirmé après une courte discussion.",
    amazon_link_text: "Voir en direct →",

    process_title: "Comment ça marche",
    step1_title: "Dites-nous ce qu'il vous faut",
    step1_desc: "Budget, jeux préférés, place disponible — tout compte dans le choix des pièces.",
    step2_title: "Recevez un devis",
    step2_desc: "Nous vous envoyons une configuration claire, avec de vrais prix, sans coûts cachés.",
    step3_title: "Nous assemblons et testons",
    step3_desc: "Nous montons le système, effectuons des tests de stress et vérifions les températures avant la livraison.",
    step4_title: "Livraison et garantie",
    step4_desc: "Vous recevez un PC prêt à jouer, avec garantie et support après-vente.",

    why_title: "Pourquoi CheapWay PC",
    why1_title: "Transparence totale",
    why1_desc: "Voyez exactement quelles pièces vous recevez et combien coûte chaque composant.",
    why2_title: "Aucune pression commerciale",
    why2_desc: "Nous ne recommandons que ce qui a du sens pour votre budget et vos jeux.",
    why3_title: "De vrais gamers, pas des vendeurs",
    why3_desc: "Notre équipe joue réellement aux jeux pour lesquels nous construisons des PC — nous savons exactement ce qui compte pour les FPS, pas seulement ce qui est écrit sur la boîte.",
    why4_title: "Support après livraison",
    why4_desc: "Nous restons disponibles pour les questions et la maintenance après réception de votre PC.",

    contact_title: "Construisons votre PC",
    contact_subtitle: "Envoyez-nous quelques détails sur ce que vous recherchez et nous reviendrons vers vous avec un devis personnalisé.",
    contact_name_label: "Nom",
    contact_email_label: "E-mail",
    contact_message_label: "Que recherchez-vous ? (budget, jeux, besoins)",
    contact_send_btn: "Envoyer la demande",
    contact_direct_label: "Ou contactez-nous directement :",
    contact_edit_note: "(Modifiez l'e-mail et le numéro de téléphone dans contact.html avec vos vraies coordonnées)",

    cta_banner_title: "Prêt à construire le PC de vos rêves ?",
    cta_banner_pricing: "Voir les tarifs",
    cta_banner_contact: "Demander un devis",

    footer_rights: "Tous droits réservés.",
    footer_note: "Site hébergé gratuitement sur GitHub Pages.",

    // --- FAQ / chat / gear (added) ---
    nav_gear: "Équipement",
    nav_faq: "FAQ",
    faq_page_title: "Questions fréquentes",
    faq_page_subtitle: "Vous ne trouvez pas votre réponse ? Utilisez l'assistant de chat dans le coin, ou contactez-nous directement.",
    chat_header_title: "Posez-nous vos questions",
    chat_greeting: "Salut ! Posez-moi vos questions sur les prix, la garantie, la livraison ou autre chose — je ferai de mon mieux pour vous aider.",
    chat_placeholder: "Écrivez votre question...",
    chat_send: "Envoyer",
    chat_fallback: "Je ne suis pas sûr pour celle-ci — essayez de reformuler, ou contactez-nous directement et une vraie personne vous répondra.",
    chat_budget_below_a: "C'est un peu en dessous du prix de départ de nos configurations (à partir de 758 € / 882 $) — mais chaque budget est différent ! Écrivez-nous sur la page Contact et on regarde ce qui est possible.",
    chat_budget_super_budget_a: "Cela correspond à notre gamme Super Économique — la solution la plus abordable, avec de bonnes performances en esport à 1080p, à partir de 758 € / 882 $. Consultez la liste complète des pièces sur la page Tarifs, ou demandez directement un devis.",
    chat_budget_tier1_a: "Avec ce budget, vous êtes en plein dans notre gamme Budget — configurations solides pour le 1080p/esport à partir de 1 044 € / 1 214 $. Consultez la liste complète des pièces sur la page Tarifs, ou demandez directement un devis.",
    chat_budget_tier2_a: "Cela vous place confortablement dans notre gamme Mid-Range — 1440p à hauts framerates, à partir de 1 868 € / 2 171 $. Jetez un œil à la page Tarifs ou demandez directement un devis.",
    chat_budget_tier3_a: "Parfait, c'est le territoire High-End — nos meilleures configurations 4K / haut taux de rafraîchissement, à partir de 3 744 € / 4 350 $. Consultez la fiche complète sur la page Tarifs, ou demandez un devis dès maintenant.",
    chat_faq_link: "Voir toutes les questions →",
    faq_payment_q: "Quels moyens de paiement acceptez-vous ?",
    faq_payment_a: "Nous acceptons le virement bancaire et le paiement à la livraison (espèces) pour les commandes locales. Le paiement par carte peut être mis en place sur demande — demandez-le lors de votre devis.",
    faq_build_time_q: "Combien de temps prend le montage de mon PC ?",
    faq_build_time_a: "La plupart des montages prennent environ 24 heures une fois toutes les pièces réunies. Le délai de livraison dépend ensuite de votre localisation.",
    faq_warranty_q: "Que couvre la garantie ?",
    faq_warranty_a: "Chaque PC bénéficie de 12 mois de garantie service, couvrant les problèmes de montage et les pannes de pièces en usage normal. Le montage + la garantie coûtent 25 $ / 25 € par PC, en plus du coût des pièces. Nous restons aussi disponibles après la livraison.",
    faq_custom_parts_q: "Puis-je demander des marques ou pièces spécifiques ?",
    faq_custom_parts_a: "Bien sûr. Dites-nous quelles marques ou composants vous préférez, et nous construisons la configuration autour, tant que cela reste compatible avec votre budget et vos objectifs.",
    faq_shipping_q: "Livrez-vous en dehors de la Roumanie ?",
    faq_shipping_a: "Oui, nous pouvons organiser une livraison internationale — le coût et le délai dépendent de votre pays. Demandez-nous un devis de livraison avec votre devis PC.",
    faq_damaged_q: "Que se passe-t-il si mon PC arrive endommagé ?",
    faq_damaged_a: "Chaque PC est testé avant de partir et emballé avec soin. Si quelque chose est endommagé pendant le transport, contactez-nous immédiatement et nous réparons ou remplaçons gratuitement, sous garantie.",
    faq_peripherals_q: "Dois-je fournir mon propre écran, clavier ou souris ?",
    faq_peripherals_a: "Non — nous pouvons inclure un écran, un clavier, une souris ou un fauteuil gaming dans votre commande. Consultez notre page Équipement pour nos recommandations par budget.",
    faq_quote_q: "Comment obtenir un devis ?",
    faq_quote_a: "Remplissez le formulaire de notre page Contact avec votre budget et vos jeux préférés, et nous reviendrons vers vous avec un devis clair et détaillé.",
    faq_upgrade_existing_q: "Pouvez-vous juste améliorer mon PC actuel plutôt que d'en construire un nouveau ?",
    faq_upgrade_existing_a: "Oui — nous améliorons régulièrement des PC existants, y compris ceux achetés en magasin. Nous vous disons exactement ce qui vaut la peine d'être changé pour de meilleures performances.",
    faq_no_budget_q: "Et si je ne connais pas encore mon budget ?",
    faq_no_budget_a: "Pas de souci — dites-nous quels jeux vous voulez jouer et comment vous utiliserez le PC, et nous vous proposerons plusieurs options à différents prix.",
    gear_title: "Équipement recommandé",
    gear_subtitle: "Des choix réels pour chaque type de gamer, du casual au compétitif — données réelles, sources réelles, plus un lien vers le prix Amazon du jour.",
    gear_chairs_title: "Les meilleurs fauteuils gaming 2026",
    gear_th_model: "Modèle",
    gear_th_price: "Prix",
    gear_th_durability: "Durabilité",
    gear_th_mesh: "Support résille (mesh)",
    chair1_name: "SIHOO M57",
    chair1_price: "200 $",
    chair1_durability: "Faible",
    chair1_mesh: "Oui",
    chair2_name: "COLAMY Atlas",
    chair2_price: "280 $",
    chair2_durability: "Moyenne",
    chair2_mesh: "Partiel",
    chair3_name: "Steelcase Series 1",
    chair3_price: "500 $",
    chair3_durability: "Élevée",
    chair3_mesh: "Partiel",
    chair4_name: "Herman Miller Aeron",
    chair4_price: "1 725 $",
    chair4_durability: "Très élevée",
    chair4_mesh: "Oui",
    chair5_name: "Herman Miller Embody",
    chair5_price: "2 045 $",
    chair5_durability: "Très élevée",
    chair5_mesh: "Non",
    gear_chairs_note: "* Prix de départ en USD pour la configuration de base — le prix réel varie selon le tissu/la résille choisis, les options et la région.",
    gear_mice_title: "Top 5 souris gaming",
    mouse1_name: "Razer Viper V4 Pro",
    mouse1_data: "Les données : Actuellement classée souris gaming n°1 toutes catégories par PC Gamer. Capteur optique 50K DPI, seulement 49 grammes et un polling sans fil réel à 8000Hz sans faille.",
    mouse1_price: "~159 $",
    mouse2_name: "Logitech G Pro X2 Superstrike",
    mouse2_data: "Les données : TechPowerUp et Tom's Hardware confirment que cette souris de 61g supporte un polling sans fil jusqu'à 8000Hz. Sa particularité est un système de clic inductif avec points d'actuation réglables pour une latence de clic ultra-faible.",
    mouse2_price: "~180 $",
    mouse3_name: "Razer Viper V3 Pro",
    mouse3_data: "Les données : Citée par Razer, sur la base des données d'usage de Prosettings.net, comme la souris la plus utilisée par les professionnels de l'esport — preuve de sa fiabilité et de la constance de son tracking au plus haut niveau compétitif.",
    mouse3_price: "~159 $",
    mouse4_name: "G-Wolves Lycan",
    mouse4_data: "Les données : Pour les passionnés de poids extrême — TechPowerUp a testé la Lycan à un ultraléger ~29 grammes. Elle utilise un capteur PixArt 3950 et offre un polling vérifié à 8000Hz, en filaire comme en sans-fil.",
    mouse5_name: "Pulsar ZywOo The Chosen Mouse Gen 2",
    mouse5_data: "Les données : Conçue pour les joueurs FPS compétitifs. Supporte un polling réel à 8000Hz via son dongle Link 8K, avec des switches optiques à latence ultra-faible et une excellente glisse — une série limitée à seulement 5 000 unités.",
    mouse5_price: "139,95 $",
    gear_kb_title: "Top 5 claviers Rapid Trigger / Hall Effect",
    kb1_name: "Wooting 80HE",
    kb1_data: "Les données : Wooting a lancé le mouvement Rapid Trigger, et Wootility reste la référence absolue en matière de réglabilité et de latence quasi nulle — constamment classé parmi les meilleurs claviers Rapid Trigger par des médias comme Eurogamer/Digital Foundry.",
    kb1_price: "~199,99 $",
    kb2_name: "SteelSeries Apex Pro TKL (Gen 3)",
    kb2_data: "Les données : Largement considéré comme la meilleure alternative grand public à Wooting. Ses switches OmniPoint 3.0 HyperMagnetic et sa suite logicielle GG permettent de régler l'actuation de chaque touche de 0,2mm à 3,8mm.",
    kb2_price: "~200 $",
    kb3_name: "Corsair MAKR PRO 75",
    kb3_data: "Les données : Une bête de course pour passionnés, combinant les switches Hall Effect MGX Hyperdrive de Corsair (actuation réglable de 0,3mm à 3,6mm) avec un taux de polling de 8000Hz et un châssis en aluminium premium.",
    kb3_price: "~249,99 $",
    kb4_name: "Razer Huntsman V3 Pro Mini",
    kb4_data: "Les données : Classé par Eneba comme un choix haut de gamme pour les joueurs compétitifs — switches optiques analogiques ultra-réactifs avec actuation Rapid Trigger réglable de 0,1mm à 4,0mm, dans un format compact 60%.",
    kb4_price: "~180 $",
    kb5_name: "Keychron K2 HE",
    kb5_data: "Les données : L'option Hall Effect la plus abordable — switches magnétiques Gateron à double rail avec Rapid Trigger réglable et support QMK/VIA complet, disponible sans fil et compatible open-source.",
    kb5_price: "~109,99 $+",
    gear_price_note: "* Les prix indiqués sont des prix habituels en USD et peuvent varier selon la région ou le revendeur. Cliquez sur « Voir en direct » pour le prix Amazon réel du jour.",
  },

  zh: {
    nav_home: "首页",
    nav_services: "服务",
    nav_pricing: "价格",
    nav_process: "工作流程",
    nav_contact: "联系我们",

    hero_eyebrow: "由玩家打造,由玩家出售。",
    hero_title: "由玩家打造,为玩家而生,价格公道的游戏电脑!",
    hero_subtitle: "我们为您配置、组装并优化游戏电脑——没有隐藏费用,也绝不使用未声明的二手配件。",
    hero_cta_primary: "获取免费报价",
    hero_cta_secondary: "查看价格",

    strip1_num: "100%",
    strip1_label: "全新原装配件",
    strip2_num: "24小时",
    strip2_label: "平均组装时间",
    strip3_num: "12个月",
    strip3_label: "服务保修",

    services_title: "我们提供的服务",
    services_subtitle: "无论是从零开始还是只想升级,我们都能帮您在预算内获得最佳性能。",
    service1_title: "定制游戏电脑",
    service1_desc: "我们根据您的游戏需求和预算挑选合适的配件,然后组装并测试整套系统。",
    service2_title: "升级您现有的电脑",
    service2_desc: "我们检查您当前的配置,准确告诉您哪些升级最值得投资,不做无谓花费。",
    service3_title: "高性价比配置",
    service3_desc: "我们在市场上寻找性价比最高的配件,并亲自检验每一个。",
    service4_title: "免费咨询",
    service4_desc: "不知道从何入手?我们解答您的问题,帮您做出选择,绝不推销施压。",

    pricing_title: "真实配置,真实价格",
    pricing_subtitle: "这些都是我们亲自核算过价格的真实配件清单——并非占位规格。提供两种选择的配置可任选 AMD 或 Intel + Nvidia 版本。下单前会确认最终报价。",
    part_cpu: "处理器",
    part_gpu: "显卡",
    part_mobo: "主板",
    part_ram: "内存",
    part_storage: "存储",
    part_psu: "电源",
    part_cooler: "散热器",
    part_case: "机箱",
    opt_or: "或",
    edition_amd: "AMD 版",
    edition_intel: "Intel + Nvidia 版",
    tier0_name: "超值入门版",
    tier0_price: "起价 758 欧元 / 882 美元",
    tier1_name: "入门版",
    tier1_desc: "两款入门配置,适合电竞和1080p游戏——超值入门版助你轻松开始,或选择入门版获得更强性能,并可在AMD或Intel之间任选。",
    tier1_price: "起价 1,044 欧元 / 1,214 美元",
    tier1_gpu_note: "(Nvidia 版本 +23 欧元 / +25 美元)",
    tier1_case_note: "(含3个ARGB风扇)",
    tier2_name: "中端版",
    tier2_desc: "1440p高帧率,直播无压力。",
    tier2_amd_price: "1,868 欧元 / 2,171 美元",
    tier2_intel_price: "1,882 欧元 / 2,187 美元",
    tier2_case_note: "(含2个140mm风扇,另加1个Aspect 12风扇)",
    tier2_upsell: "想要更强的游戏性能?可将 AMD 版处理器升级为 Ryzen 7 9800X3D,加收 100 欧元 / 100 美元。",
    tier2_gpu_upsell: "想要更强的显卡性能?可将 AMD 版显卡升级为 Radeon RX 9070 XT 16GB,或将 Intel + Nvidia 版显卡升级为 RTX 5070 12GB,加收 190 欧元 / 222 美元。",
    tier3_name: "高端版",
    tier3_desc: "4K / 高刷新率,毫不妥协。",
    tier3_amd_price: "3,744 欧元 / 4,350 美元",
    tier3_intel_price: "4,204 欧元 / 4,888 美元",
    tier_cta: "索取报价",
    pricing_note: "* 价格以欧元/美元显示,可能会因下单时的汇率和配件供应情况略有变动。每台电脑另收取25美元/25欧元的组装与保修服务费(不含配件费用)。确切报价将在简短沟通后确认。",
    amazon_link_text: "查看实时价格 →",

    process_title: "工作流程",
    step1_title: "告诉我们您的需求",
    step1_desc: "预算、喜欢的游戏、可用空间——这些都会影响配件的选择。",
    step2_title: "获取报价",
    step2_desc: "我们会发给您明确的配置方案和真实价格,没有隐藏费用。",
    step3_title: "组装与测试",
    step3_desc: "我们组装系统、进行压力测试,并在发货前检查温度。",
    step4_title: "交付与保修",
    step4_desc: "您将收到一台可以直接开玩的电脑,并享有保修和售后支持。",

    why_title: "为什么选择 CheapWay PC",
    why1_title: "完全透明",
    why1_desc: "您可以清楚看到自己购买了哪些配件,以及每个配件的价格。",
    why2_title: "绝不施加销售压力",
    why2_desc: "我们只推荐真正适合您预算和游戏需求的方案。",
    why3_title: "真正的玩家,而非销售员",
    why3_desc: "我们团队真的在玩我们所组装电脑对应的游戏——我们清楚知道帧数真正取决于什么,而不只是包装盒上的参数。",
    why4_title: "交付后持续支持",
    why4_desc: "您收到电脑后,我们仍会持续为您解答问题并提供维护支持。",

    contact_title: "一起打造您的电脑吧",
    contact_subtitle: "告诉我们您的需求详情,我们会尽快回复您专属报价。",
    contact_name_label: "姓名",
    contact_email_label: "电子邮箱",
    contact_message_label: "您在寻找什么?(预算、游戏、需求)",
    contact_send_btn: "发送请求",
    contact_direct_label: "或直接联系我们:",
    contact_edit_note: "(请在 contact.html 中将邮箱和电话替换为您的真实信息)",

    cta_banner_title: "准备好打造您梦想中的电脑了吗?",
    cta_banner_pricing: "查看价格",
    cta_banner_contact: "索取报价",

    footer_rights: "版权所有。",
    footer_note: "网站由 GitHub Pages 免费托管。",

    // --- FAQ / chat / gear (added) ---
    nav_gear: "装备",
    nav_faq: "常见问题",
    faq_page_title: "常见问题",
    faq_page_subtitle: "没找到答案?使用角落的聊天助手,或直接联系我们。",
    chat_header_title: "问我们任何问题",
    chat_greeting: "你好!可以问我关于价格、保修、发货或其他任何问题——我会尽力帮助你。",
    chat_placeholder: "输入您的问题...",
    chat_send: "发送",
    chat_fallback: "这个问题我不太确定——试着换个说法,或直接联系我们,会有真人为您解答。",
    chat_budget_below_a: "这个预算比我们配置的起价(758欧元/882美元起)稍低一些——不过每个预算情况都不同!请在联系页面告诉我们详情,我们看看能做些什么。",
    chat_budget_super_budget_a: "这个预算正好适合超值入门版——最实惠的选择,拥有稳固的1080p电竞性能,起价758欧元/882美元。可以在价格页面查看完整配件清单,或直接索取报价。",
    chat_budget_tier1_a: "这个预算正好落在入门版区间——适合1080p/电竞的稳定配置,起价1,044欧元/1,214美元。可以在价格页面查看完整配件清单,或直接索取报价。",
    chat_budget_tier2_a: "这个预算正好适合中端版——1440p高帧率,起价1,868欧元/2,171美元。看看价格页面,或直接索取报价。",
    chat_budget_tier3_a: "很棒,这是高端版区间——我们最好的4K/高刷新率配置,起价3,744欧元/4,350美元。可以在价格页面查看完整配置,或直接索取报价。",
    chat_faq_link: "查看所有常见问题 →",
    faq_payment_q: "你们接受哪些付款方式?",
    faq_payment_a: "本地订单我们接受银行转账和货到付款(现金)。如需刷卡付款可按需求安排——在索取报价时告诉我们即可。",
    faq_build_time_q: "组装我的电脑需要多长时间?",
    faq_build_time_a: "配件齐全后,大多数配置大约需要24小时完成组装。之后的发货时间取决于您所在的地区。",
    faq_warranty_q: "保修包含哪些内容?",
    faq_warranty_a: "每台电脑均享有12个月的服务保修,涵盖正常使用下的组装问题和配件故障。组装+保修服务费为每台电脑固定25美元/25欧元(不含配件费用)。交付后我们也会持续提供支持。",
    faq_custom_parts_q: "我可以要求特定品牌或配件吗?",
    faq_custom_parts_a: "当然可以。告诉我们您偏好的品牌或配件,只要符合您的预算和需求,我们就会以此为基础进行配置。",
    faq_shipping_q: "你们发货到罗马尼亚以外的地区吗?",
    faq_shipping_a: "可以,我们可以安排国际发货——运费和送达时间取决于您所在的国家。请在索取电脑报价的同时向我们询问运费。",
    faq_damaged_q: "如果电脑到货时损坏了怎么办?",
    faq_damaged_a: "每台电脑在出货前都经过测试并精心包装。如果运输途中出现损坏,请立即联系我们,我们会在保修范围内免费维修或更换。",
    faq_peripherals_q: "我需要自备显示器、键盘或鼠标吗?",
    faq_peripherals_a: "不需要——我们可以在订单中包含显示器、键盘、鼠标或电竞椅。请查看我们的「装备」页面,了解不同预算下的推荐产品。",
    faq_quote_q: "如何获取报价?",
    faq_quote_a: "请在联系页面填写您的预算和喜欢的游戏,我们会回复一份清晰、按配件列明的报价。",
    faq_upgrade_existing_q: "你们能只帮我升级现有电脑,而不是组装新电脑吗?",
    faq_upgrade_existing_a: "可以——我们经常为现有电脑升级,包括从商店购买的电脑。我们会准确告诉您哪些升级最值得投资以提升性能。",
    faq_no_budget_q: "如果我还不知道自己的预算怎么办?",
    faq_no_budget_a: "没关系——告诉我们您想玩的游戏以及电脑的使用方式,我们会为您推荐几种不同价位的方案。",
    gear_title: "推荐装备",
    gear_subtitle: "为每种类型的玩家精选真实产品——从休闲到竞技——真实数据、真实来源,并附亚马逊当前价格链接。",
    gear_chairs_title: "2026年最佳电竞椅",
    gear_th_model: "型号",
    gear_th_price: "价格",
    gear_th_durability: "耐用性",
    gear_th_mesh: "网布支持",
    chair1_name: "SIHOO M57",
    chair1_price: "200美元",
    chair1_durability: "低",
    chair1_mesh: "是",
    chair2_name: "COLAMY Atlas",
    chair2_price: "280美元",
    chair2_durability: "中",
    chair2_mesh: "部分",
    chair3_name: "Steelcase Series 1",
    chair3_price: "500美元",
    chair3_durability: "高",
    chair3_mesh: "部分",
    chair4_name: "Herman Miller Aeron",
    chair4_price: "1,725美元",
    chair4_durability: "非常高",
    chair4_mesh: "是",
    chair5_name: "Herman Miller Embody",
    chair5_price: "2,045美元",
    chair5_durability: "非常高",
    chair5_mesh: "否",
    gear_chairs_note: "* 价格为基础配置的起价(美元)——实际价格会因面料/网布选择、配置和地区而异。",
    gear_mice_title: "五大游戏鼠标榜单",
    mouse1_name: "Razer Viper V4 Pro",
    mouse1_data: "数据:目前被PC Gamer评为综合排名第一的游戏鼠标。50K DPI光学传感器,仅49克重,真正的8000Hz无线轮询表现完美无瑕。",
    mouse1_price: "约159美元",
    mouse2_name: "Logitech G Pro X2 Superstrike",
    mouse2_data: "数据:TechPowerUp和Tom's Hardware均证实这款61克重的鼠标支持高达8000Hz的无线轮询。其亮点是感应式点击系统,具有可调节的触发点,实现超低点击延迟。",
    mouse2_price: "约180美元",
    mouse3_name: "Razer Viper V3 Pro",
    mouse3_data: "数据:Razer援引Prosettings.net的使用数据,将其称为电竞职业选手中使用最多的鼠标——证明了其在最高竞技水平下的可靠性和追踪一致性。",
    mouse3_price: "约159美元",
    mouse4_name: "G-Wolves Lycan",
    mouse4_data: "数据:为极致轻量化爱好者打造——TechPowerUp测得Lycan仅约29克重。采用PixArt 3950传感器,有线和无线模式均可实现经验证的8000Hz轮询。",
    mouse5_name: "Pulsar ZywOo The Chosen Mouse Gen 2",
    mouse5_data: "数据:专为竞技FPS玩家设计。通过Link 8K加密狗支持真正的8000Hz轮询,配备超低延迟光学微动和出色的滑动手感——限量仅5,000台。",
    mouse5_price: "139.95美元",
    gear_kb_title: "五大Rapid Trigger/磁轴(Hall Effect)键盘榜单",
    kb1_name: "Wooting 80HE",
    kb1_data: "数据:Wooting开创了Rapid Trigger浪潮,其Wootility软件依然是可调节性和近乎零延迟方面的黄金标准——被Eurogamer/Digital Foundry等媒体持续评为最佳Rapid Trigger键盘之一。",
    kb1_price: "约199.99美元",
    kb2_name: "SteelSeries Apex Pro TKL(第三代)",
    kb2_data: "数据:被广泛认为是Wooting之外最好的主流替代品。其OmniPoint 3.0超磁轴和GG软件套件支持每个按键的触发点在0.2mm到3.8mm之间调节。",
    kb2_price: "约200美元",
    kb3_name: "Corsair MAKR PRO 75",
    kb3_data: "数据:一款发烧级重装备,结合了Corsair的MGX Hyperdrive磁轴(可调节触发点0.3mm-3.6mm)、8000Hz轮询率以及高级铝合金机身。",
    kb3_price: "约249.99美元",
    kb4_name: "Razer Huntsman V3 Pro Mini",
    kb4_data: "数据:被Eneba评为竞技玩家的顶级之选——超灵敏模拟光轴,配备可在0.1mm到4.0mm之间调节的Rapid Trigger触发,机身紧凑仅为60%配列。",
    kb4_price: "约180美元",
    kb5_name: "Keychron K2 HE",
    kb5_data: "数据:更实惠的磁轴之选——Gateron双轨磁轴,支持可调节Rapid Trigger以及完整的QMK/VIA支持,可选无线并对开源友好。",
    kb5_price: "约109.99美元起",
    gear_price_note: "* 所示价格为典型价格(美元),可能因地区或商家而异。点击「查看实时价格」获取亚马逊今日真实价格。",
  }
};

const LANG_STORAGE_KEY = "cheapway-lang";
const THEME_STORAGE_KEY = "cheapway-theme";

let currentLang = "en";

// Regiune Amazon: limba germană → amazon.de, restul → amazon.com.
// (Schimbă aici dacă vrei altă regulă, ex. RO -> amazon.de pentru livrare în UE.)
function amazonDomainForLang(lang) {
  return lang === "de" ? "www.amazon.de" : "www.amazon.com";
}

function buildAmazonUrl(query, lang) {
  const domain = amazonDomainForLang(lang);
  return `https://${domain}/s?k=${encodeURIComponent(query)}`;
}

function updateAmazonLinks(lang) {
  document.querySelectorAll(".amazon-link").forEach((link) => {
    const query = link.getAttribute("data-amazon-query");
    if (query) link.href = buildAmazonUrl(query, lang);
  });
}

// --------------------- Asistent de chat (căutare pe cuvinte cheie în FAQ) ---------------------
// Nu e un AI real — un chatbot AI ar necesita un backend plătit, imposibil pe hosting
// static gratuit. În schimb, acesta caută cuvinte cheie în întrebarea vizitatorului
// și afișează cel mai potrivit răspuns din FAQ. Editează FAQ_KEYWORDS ca să adaugi
// cuvinte noi, sau adaugă un id nou și în FAQ_ORDER + traduceri (faq_<id>_q / faq_<id>_a).
const FAQ_ORDER = [
  "payment", "build_time", "warranty", "custom_parts", "shipping",
  "damaged", "peripherals", "quote", "upgrade_existing", "no_budget",
];

const FAQ_KEYWORDS = {
  ro: {
    payment: ["plata", "plată", "card", "cash", "numerar", "transfer bancar", "factura"],
    build_time: ["cat dureaza", "cât durează", "timp", "durata", "cand e gata", "zile", "ore"],
    warranty: ["garantie", "garanție", "acopera", "defect", "reparatie"],
    custom_parts: ["marca", "marcă", "piesa specifica", "aleg piesele", "prefer o marca"],
    shipping: ["livrare", "livrati", "international", "strainatate", "afara romaniei"],
    damaged: ["deteriorat", "stricat la transport", "nu porneste", "nu functioneaza", "ajuns spart"],
    peripherals: ["monitor", "tastatura", "mouse", "accesorii", "scaun"],
    quote: ["oferta", "ofertă", "pret", "preț", "cum comand", "incep"],
    upgrade_existing: ["upgrade", "pc-ul actual", "pc existent", "cumparat din magazin"],
    no_budget: ["nu stiu bugetul", "nu știu bugetul", "cat ar trebui sa cheltui", "fara buget"],
  },
  en: {
    payment: ["payment", "pay", "card", "cash", "bank transfer", "invoice"],
    build_time: ["how long", "time", "build time", "when ready", "days", "hours"],
    warranty: ["warranty", "guarantee", "cover", "repair"],
    custom_parts: ["specific brand", "specific part", "request part", "choose parts", "prefer brand"],
    shipping: ["ship", "shipping", "deliver", "international", "outside romania", "abroad"],
    damaged: ["damaged", "arrived broken", "broken in transit", "not working", "doesn't turn on"],
    peripherals: ["monitor", "keyboard", "mouse", "peripherals", "chair", "accessories"],
    quote: ["quote", "offer", "price", "how to order", "get started", "contact"],
    upgrade_existing: ["upgrade", "existing pc", "current pc", "prebuilt", "store bought"],
    no_budget: ["no budget", "don't know budget", "how much should i spend", "not sure budget"],
  },
  de: {
    payment: ["zahlung", "bezahlen", "karte", "bar", "überweisung", "rechnung"],
    build_time: ["wie lange", "zeit", "bauzeit", "wann fertig", "tage", "stunden"],
    warranty: ["garantie", "abdecken", "defekt", "reparatur"],
    custom_parts: ["bestimmte marke", "bestimmtes teil", "teile wählen", "marke bevorzugen"],
    shipping: ["versand", "liefern", "international", "ausland", "außerhalb rumäniens"],
    damaged: ["beschädigt", "transportschaden", "geht nicht an", "funktioniert nicht", "kaputt angekommen"],
    peripherals: ["monitor", "tastatur", "maus", "zubehör", "stuhl"],
    quote: ["angebot", "preis", "wie bestellen", "loslegen", "kontakt"],
    upgrade_existing: ["aufrüsten", "aktueller pc", "vorhandener pc", "laden gekauft"],
    no_budget: ["kein budget", "budget nicht kennen", "wie viel ausgeben", "unsicher budget"],
  },
  es: {
    payment: ["pago", "pagar", "tarjeta", "efectivo", "transferencia", "factura"],
    build_time: ["cuanto tarda", "tiempo", "montaje", "cuando esta listo", "dias", "horas"],
    warranty: ["garantia", "cubre", "defecto", "reparacion"],
    custom_parts: ["marca especifica", "pieza especifica", "elegir piezas", "prefiero marca"],
    shipping: ["envio", "enviar", "internacional", "extranjero", "fuera de rumania"],
    damaged: ["dañado", "daño en transporte", "no enciende", "no funciona", "llego roto"],
    peripherals: ["monitor", "teclado", "raton", "ratón", "accesorios", "silla"],
    quote: ["presupuesto", "precio", "como pedir", "empezar", "contacto"],
    upgrade_existing: ["mejorar", "pc actual", "pc existente", "comprado en tienda"],
    no_budget: ["sin presupuesto", "no se cuanto gastar", "no estoy seguro del presupuesto"],
  },
  fr: {
    payment: ["paiement", "payer", "carte", "especes", "espèces", "virement", "facture"],
    build_time: ["combien de temps", "delai", "montage", "quand pret", "jours", "heures"],
    warranty: ["garantie", "couvre", "panne", "reparation"],
    custom_parts: ["marque specifique", "piece specifique", "choisir les pieces", "preferer une marque"],
    shipping: ["livraison", "livrer", "international", "etranger", "hors roumanie"],
    damaged: ["endommage", "casse pendant transport", "ne demarre pas", "ne fonctionne pas", "arrive casse"],
    peripherals: ["ecran", "clavier", "souris", "accessoires", "fauteuil"],
    quote: ["devis", "prix", "comment commander", "commencer", "contact"],
    upgrade_existing: ["ameliorer", "pc actuel", "pc existant", "achete en magasin"],
    no_budget: ["pas de budget", "je ne connais pas mon budget", "combien depenser"],
  },
  zh: {
    payment: ["付款", "支付", "刷卡", "现金", "转账", "发票"],
    build_time: ["多长时间", "时间", "组装时间", "什么时候好", "天", "小时"],
    warranty: ["保修", "保证", "包含", "故障", "维修"],
    custom_parts: ["特定品牌", "特定配件", "选择配件", "偏好品牌"],
    shipping: ["发货", "运输", "国际", "国外", "罗马尼亚以外"],
    damaged: ["损坏", "运输损坏", "无法开机", "不能用", "到货损坏"],
    peripherals: ["显示器", "键盘", "鼠标", "配件", "电竞椅"],
    quote: ["报价", "价格", "如何下单", "开始", "联系"],
    upgrade_existing: ["升级", "现有电脑", "当前电脑", "商店购买"],
    no_budget: ["没有预算", "不知道预算", "该花多少钱"],
  },
};

// Extra personality: random openers + varied fallbacks so the bot doesn't sound
// robotic/repetitive. Not part of `translations` (no key-parity requirement) —
// just plain JS data, one array per language, picked at random each reply.
const CHAT_OPENERS = {
  ro: ["Bună întrebare! ", "Cu plăcere — ", "Sigur! ", ""],
  en: ["Good question! ", "Happy to help — ", "Sure thing! ", ""],
  de: ["Gute Frage! ", "Gerne — ", "Klar! ", ""],
  es: ["¡Buena pregunta! ", "Con gusto — ", "¡Claro! ", ""],
  fr: ["Bonne question ! ", "Avec plaisir — ", "Bien sûr ! ", ""],
  zh: ["好问题!", "很高兴帮忙——", "没问题!", ""],
};

const CHAT_FALLBACKS = {
  ro: [
    "Nu sunt sigur la asta — încearcă să reformulezi, sau scrie-ne direct și îți răspunde un om.",
    "Hmm, nu am un răspuns bun pentru asta încă. Vrei să încerci pagina de Contact?",
    "Asta depășește ce pot răspunde acum — un mesaj rapid pe pagina de Contact îți aduce un răspuns real.",
  ],
  en: [
    "I'm not sure about that one — try rephrasing, or contact us directly and a real person will help.",
    "Hmm, I don't have a good answer for that yet. Want to try the Contact page instead?",
    "That one's outside what I can answer right now — a quick message on the Contact page will get you a real answer.",
  ],
  de: [
    "Da bin ich mir nicht sicher — versuch es anders zu formulieren oder schreib uns direkt, dann antwortet dir ein Mensch.",
    "Hmm, darauf habe ich noch keine gute Antwort. Versuchst du es über die Kontaktseite?",
    "Das geht über das hinaus, was ich gerade beantworten kann — eine kurze Nachricht auf der Kontaktseite bringt dir eine echte Antwort.",
  ],
  es: [
    "No estoy seguro de esa — intenta reformularla, o contáctanos directamente y te ayudará una persona real.",
    "Mmm, todavía no tengo una buena respuesta para eso. ¿Probamos con la página de Contacto?",
    "Esa se sale de lo que puedo responder ahora — un mensaje rápido en la página de Contacto te dará una respuesta real.",
  ],
  fr: [
    "Je ne suis pas sûr pour celle-ci — essayez de reformuler, ou contactez-nous directement et une vraie personne vous répondra.",
    "Hmm, je n'ai pas encore une bonne réponse à ça. On essaie la page Contact ?",
    "Celle-là dépasse ce que je peux répondre pour l'instant — un message rapide sur la page Contact vous donnera une vraie réponse.",
  ],
  zh: [
    "这个问题我不太确定——试着换个说法,或直接联系我们,会有真人为您解答。",
    "嗯,这个我暂时还没有好答案。要不试试联系页面?",
    "这个超出了我现在能回答的范围——在联系页面留言,会有真人给你准确答复。",
  ],
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Budget-aware recommendation: if the visitor states a budget with an explicit
// currency (RON/lei, EUR/€, USD/$), normalize it to RON (using the same
// reference rates as the Pricing page: 1 RON = 0.190383 EUR = 0.22136 USD)
// and suggest the matching tier. Requires an explicit currency to avoid
// guessing wrong on a bare number.
function normalizeNumber(numStr) {
  // Strip thousands separators: a "." or "," immediately followed by exactly
  // 3 digits with no more digits after (e.g. "5.000" / "5,000" -> "5000").
  let s = numStr.trim().replace(/[.,](\d{3})(?!\d)/g, "$1");
  s = s.replace(",", ".");
  return parseFloat(s);
}

function detectBudgetRon(text) {
  const t = text.toLowerCase();
  const patterns = [
    { re: /(\d[\d.,]*)\s*(?:ron|lei)\b/i, currency: "RON" },
    { re: /\b(?:ron|lei)\s*(\d[\d.,]*)/i, currency: "RON" },
    { re: /(\d[\d.,]*)\s*罗马尼亚列伊/i, currency: "RON" },
    { re: /(\d[\d.,]*)\s*(?:eur|euro|euros)\b/i, currency: "EUR" },
    { re: /€\s*(\d[\d.,]*)/i, currency: "EUR" },
    { re: /(\d[\d.,]*)\s*€/i, currency: "EUR" },
    { re: /(\d[\d.,]*)\s*欧元/i, currency: "EUR" },
    { re: /(\d[\d.,]*)\s*(?:usd|dollars?|dolari)\b/i, currency: "USD" },
    { re: /\$\s*(\d[\d.,]*)/i, currency: "USD" },
    { re: /(\d[\d.,]*)\s*\$/i, currency: "USD" },
    { re: /(\d[\d.,]*)\s*美元/i, currency: "USD" },
  ];
  for (const p of patterns) {
    const m = t.match(p.re);
    if (m) {
      const num = normalizeNumber(m[1]);
      if (!isNaN(num) && num > 0) {
        if (p.currency === "EUR") return num / 0.190383;
        if (p.currency === "USD") return num / 0.22136;
        return num;
      }
    }
  }
  return null;
}

function recommendTier(ron) {
  if (ron < 3983) return "below";
  if (ron < 5484) return "super_budget";
  if (ron < 9809) return "tier1";
  if (ron < 19663) return "tier2";
  return "tier3";
}

function matchFaq(input, lang) {
  const text = input.toLowerCase();
  const kw = FAQ_KEYWORDS[lang] || FAQ_KEYWORDS.en;
  let bestId = null;
  let bestScore = 0;
  FAQ_ORDER.forEach((id) => {
    const words = kw[id] || [];
    let score = 0;
    words.forEach((w) => {
      if (text.includes(w.toLowerCase())) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  });
  return bestId;
}

function appendChatMessage(role, text) {
  const log = document.getElementById("chat-log");
  if (!log) return;
  const bubble = document.createElement("div");
  bubble.className = "chat-msg chat-msg-" + role;
  bubble.textContent = text;
  log.appendChild(bubble);
  log.scrollTop = log.scrollHeight;
}

const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

if (chatToggle && chatPanel) {
  chatToggle.addEventListener("click", () => {
    const willOpen = !chatPanel.classList.contains("is-open");
    chatPanel.classList.toggle("is-open", willOpen);
    if (willOpen && chatInput) chatInput.focus();
  });
}
if (chatClose && chatPanel) {
  chatClose.addEventListener("click", () => {
    chatPanel.classList.remove("is-open");
  });
}
if (chatForm && chatInput) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = chatInput.value.trim();
    if (!value) return;
    appendChatMessage("user", value);
    chatInput.value = "";
    const t = translations[currentLang];
    const budgetRon = detectBudgetRon(value);
    let answer;
    if (budgetRon !== null) {
      const tier = recommendTier(budgetRon);
      answer = t["chat_budget_" + tier + "_a"];
    } else {
      const id = matchFaq(value, currentLang);
      answer = id
        ? t["faq_" + id + "_a"]
        : pickRandom(CHAT_FALLBACKS[currentLang] || CHAT_FALLBACKS.en);
    }
    const opener = pickRandom(CHAT_OPENERS[currentLang] || CHAT_OPENERS.en);
    setTimeout(() => appendChatMessage("bot", opener + answer), 250);
  });
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = translations[lang][key];
    if (text !== undefined) el.setAttribute("placeholder", text);
  });

  const langSelect = document.getElementById("lang-select");
  if (langSelect) langSelect.value = lang;

  updateAmazonLinks(lang);

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage indisponibil (ex: mod privat) — ignorăm, site-ul funcționează normal */
  }
}

function getStoredLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && translations[stored]) return stored;
  } catch (e) {}
  return "en";
}

// --------------------- Comutator temă (alb / negru) ---------------------
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = theme === "light" ? "🌙" : "☀️";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {}
}

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {}
  return "dark";
}

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });
}

// Language switch (dropdown)
const langSelectEl = document.getElementById("lang-select");
if (langSelectEl) {
  langSelectEl.addEventListener("change", () => applyLanguage(langSelectEl.value));
}

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });
}

// Contact form -> mailto fallback (no backend needed on GitHub Pages)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("c-name").value;
    const email = document.getElementById("c-email").value;
    const message = document.getElementById("c-message").value;

    const subject = encodeURIComponent(`Cerere ofertă PC — ${name}`);
    const body = encodeURIComponent(
      `Nume: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`
    );

    // TODO: schimbă adresa de mai jos cu emailul tău real
    window.location.href = `mailto:contact@cheapwaypc.ro?subject=${subject}&body=${body}`;
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Init — folosim limba și tema salvate de vizitator (dacă a mai vizitat site-ul),
// altfel implicit: română + temă "night" (întunecată).
applyTheme(getStoredTheme());
applyLanguage(getStoredLang());
