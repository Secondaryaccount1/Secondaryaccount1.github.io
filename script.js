const questions = [
  {
    question: "LA NORMA UNI CEI EN ISO/IEC 17021 DEL 2015 E UNIIENISO 19011 DEL 2018",
    answers: [
      { text: "deve essere applicata da chi è certificato ISO 9001", correct: false },
      { text: "deve essere applicata integralmente da chi conduce audit interni", correct: false },
      { text: "deve essere necessariamente utilizzata da chi conduce audit di terza parte", correct: false },
      { text: "niente di quanto sopra (concetti generici che si applicano a tutti gli auditor)", correct: true },
    ]
  },
  {
    question: "IL CAMPO DI APPLICABILITÀ DELLA ISO IEC 17021 E ISO 19011",
    answers: [
      { text: "la serie di norme ISO 9000", correct: false },
      { text: "la serie di norme ISO 14000", correct: false },
      { text: "tutto quanto sopra", correct: false },
      { text: "tutti gli audit di sistema di gestione", correct: true },
    ]
  },
  {
    question: "GLI AUDIT DI PRIMA PARTE",
    answers: [
      { text: "sono sinonimo di audit interni", correct: true },
      { text: "sono esclusivamente condotti da personale interno", correct: false },
      { text: "sono esclusivamente condotti da personale esterno", correct: false },
      { text: "niente di quanto sopra", correct: false },
    ]
  },
  {
    question: "ESCLUSIVAMENTE DIMOSTRATI",
    answers: [
      { text: "facendo condurre gli audit ai consulenti", correct: false },
      { text: "facendo condurre gli audit al responsabile di sistema", correct: false },
      { text: "facendo condurre gli audit a personale con assenza di responsabilità per l’attività oggetto di", correct: false },
      { text: "facendo condurre gli audit alla direzione", correct: false },
    ]
  },
  {
    question: "GLI AUDIT ESTERNI SONO QUELLI",
    answers: [
      { text: "eseguiti presso i fornitori dall’organizzazione oggetto dell’audit", correct: false },
      { text: "di terza e seconda parte", correct: true },
      { text: "esclusivamente di seconda parte", correct: false },
      { text: "esclusivamente seguite dagli enti di certificazione", correct: false },
    ]
  },
  {
    question: "AUDIT COMBINATO è LA DEFINIZIONE DI",
    answers: [
      { text: "audit contemporaneo di due o più sistemi di gestione di differenti discipline", correct: true },
      { text: "di un audit di cui si conoscono già in anticipo i risultati", correct: false },
      { text: "di un audit eseguito prima dell’audit ufficiale dell’ente di certificazione", correct: false },
      { text: "audit eseguito da uno o più organismi di audit", correct: false },
    ]
  },
  {
    question: "LE EVIDENZE DELL’AUDIT POSSONO ESSERE",
    answers: [
      { text: "registrazioni", correct: false },
      { text: "dichiarazioni verbali verificabili", correct: false },
      { text: "informazioni confidenziali", correct: false },
      { text: "risposta 1 + 2", correct: true },
    ]
  },
  {
    question: "LE RISULTANZE DELL’AUDIT SONO",
    answers: [
      { text: "esito dell’audit", correct: false },
      { text: "risultati della valutazione delle evidenze dell’audit", correct: true },
      { text: "risposta 1 + 2", correct: false },
      { text: "nessuna risposta", correct: false },
    ]
  },
  {
    question: "IL GRUPPO DI AUDIT DEVE ESSERE ALMENO COMPOSTO DALLE SEGUENTI FIGURE",
    answers: [
      { text: "responsabile del gruppo + auditor", correct: false },
      { text: "responsabile del gruppo", correct: true },
      { text: "auditor + esperto tecnico", correct: false },
      { text: "auditor + guida", correct: false },
    ]
  },
  {
    question: "LA FIGURA DELL’ESPERTO TECNICO",
    answers: [
      { text: "può agire come valutatore", correct: false },
      { text: "può agire come responsabile del gruppo", correct: false },
      { text: "non può agire come valutatore", correct: true },
      { text: "niente di quanto sopra", correct: false },
    ]
  },
  {
    question: "IL PROGRAMMA DI AUDIT DEFINISCE",
    answers: [
      { text: "le attività e le disposizioni per la conduzione di un audit", correct: false },
      { text: "estensioni ai limiti di un audit", correct: false },
      { text: "risposta 1 + 2", correct: false },
      { text: "insieme di uno o più audit pianificati in un periodo temporale definito", correct: true },
    ]
  },
  {
    question: "L’ORGANIZZAZIONE OGGETTO DI AUDIT",
    answers: [
      { text: "è l’organizzazione che commissiona l’audit", correct: false },
      { text: "è l’organizzazione che paga l’audit", correct: false },
      { text: "è l’organizzazione sottoposta all’audit", correct: true },
      { text: "è l’organizzazione che esegue l’audit", correct: false },
      { text: "L’organismo di certificazione", correct: false },
      { text: "L’organizzazione stessa", correct: true },
      { text: "L’organismo di accreditamento", correct: false },
      { text: "Risposta 1 + 2+ 3", correct: false },
    ]
  },
  {
    question: "LA PRESENTAZIONE DEI RISULTATI DELL’AUDIT",
    answers: [
      { text: "È variabile perché l’audit è un processo soggettivo", correct: false },
      { text: "È variabile perché ci possono essere opposizioni da parte dell’organizzazione valutata", correct: false },
      { text: "Riporta fedelmente con precisione le risultanze e anche le opinioni divergenti non risolte tra", correct: false },
      { text: "Riporta fedelmente con precisione le risultanze ma non le opinioni divergenti non risolte tra", correct: false },
    ]
  },
  {
    question: "IL PROGRAMMA DI AUDIT COMPRENDE",
    answers: [
      { text: "La sequenza temporale degli audit", correct: false },
      { text: "La messa a disposizione delle risorse necessarie", correct: false },
      { text: "La definizione delle procedure per condurre gli audit", correct: false },
      { text: "Tutto quanto sopra", correct: true },
    ]
  },
  {
    question: "LA PROGRAMMAZIONE DEGLI AUDIT",
    answers: [
      { text: "È la sequenza temporale degli audit", correct: false },
      { text: "La sequenza temporale degli argomenti da verificare nella visita", correct: false },
      { text: "Un processo con i suoi input e output", correct: true },
      { text: "La definizione dei tempi di audit", correct: false },
    ]
  },
  {
    question: "GLI OBIETTIVI DI UN PROGRAMMA DI AUDIT POSSONO ESSERE FONDATI SU",
    answers: [
      { text: "Requisiti del cliente", correct: false },
      { text: "Requisiti cogenti (legislativi)", correct: false },
      { text: "Progetti commerciali", correct: false },
      { text: "Tutto quanto sopra", correct: true },
    ]
  },
  {
    question: "L’ESTENSIONE DI UN PROGRAMMA DI AUDIT PUÒ VARIARE IN FUNZIONE DI",
    answers: [
      { text: "Dimensioni, natura e complessità dell’organizzazione", correct: true },
      { text: "Dalla preparazione ed esperienza del responsabile del gruppo di valutazione", correct: false },
      { text: "Dalla composizione del gruppo di valutazione", correct: false },
      { text: "Non varia perché i risultati devono essere sempre gli stessi", correct: false },
    ]
  },
  {
    question: "LE RESPONSABILITÀ DEL PROGRAMMA DI AUDIT DEVONO NECESSARIAMENTE",
    answers: [
      { text: "essere affidate al responsabile del sistema di gestione", correct: false },
      { text: "devono essere affidate a persone che conoscono tecniche e pratiche relative agli audit", correct: true },
      { text: "tutto quanto sopra", correct: false },
      { text: "devono essere affidate a persone che conoscono le attività da sottoporre a verifica per", correct: false },
    ]
  },
  {
    question: "IDENTIFICAZIONE OCCORRE TENER CONTO DI",
    answers: [
      { text: "Della predisposizione caratteriale dell’organizzazione verificata", correct: false },
      { text: "Delle risorse economico finanziare necessarie", correct: true },
      { text: "Che le risorse economico finanziarie non sono un aspetto che preoccupa il responsabile di", correct: false },
      { text: "Che i tempi di viaggio e la sistemazione logistica sono fattori esterni da non tenere conto in", correct: false },
    ]
  },
  {
    question: "I RISCHI ASSOCIATI AD UN PROGRAMMA DI AUDIT POSSONO ESSERE",
    answers: [
      { text: "Controllo delle informazioni documentate", correct: false },
      { text: "Risorse", correct: false },
      { text: "Risposta 1 + 2+ 4", correct: true },
      { text: "Disponibilità e cooperazione da parte dell’organizzazione oggetto dell’audit", correct: false },
      { text: "La comunicazione del programma alle parti interessate", correct: false },
      { text: "La tenuta sotto controllo delle attività di audit", correct: false },
      { text: "La non comunicazione del programma alle parti interessate in quanti gli audit più efficaci sono", correct: false },
      { text: "Risposta 1 e 2", correct: true },
    ]
  },
  {
    question: "LE REGISTRAZIONI DEL PROGRAMMA DI AUDIT DEVONO ALMENO ESSERE",
    answers: [
      { text: "piani degli audit", correct: false },
      { text: "check list dell’audit", correct: false },
      { text: "rapporti di audit", correct: false },
      { text: "risposta 1 e 3", correct: true },
    ]
  },
  {
    question: "IL MONITORAGGIO DEL PROGRAMMA DI AUDIT",
    answers: [
      { text: "prevede che i risultati siano riportati all’alta direzione", correct: false },
      { text: "quanto affermato al punto 1 non è valido perché tale azione è relativa al riesame della", correct: false },
      { text: "prevede la verifica della coerenza delle prestazioni tra gruppi di audit in situazioni simili", correct: false },
      { text: "risposta 1 + 3", correct: true },
    ]
  },
  {
    question: "GLI OBIETTIVI DELL’AUDIT DEVONO ESSERE DEFINITI",
    answers: [
      { text: "dalla direzione", correct: false },
      { text: "dal committente dell’audit", correct: true },
      { text: "dal responsabile del gruppo di verifica", correct: false },
      { text: "dall’ente certificatore", correct: false },
    ]
  },
  {
    question: "IL GRUPPO DI AUDIT DEVE ESSERE COSTITUITO",
    answers: [
      { text: "da almeno 2 auditor", correct: false },
      { text: "da almeno un auditor che svolge tutti i compiti del responsabile del gruppo di audit", correct: false },
      { text: "da auditor capace di interagire in modo efficace con l’organizzazione verificata e di lavorare", correct: false },
      { text: "risposta 2 + 3", correct: true },
    ]
  },
  {
    question: "IL CONTATTO INIZIALE CON L’ORGANIZZAZIONE OGGETTO DI AUDIT",
    answers: [
      { text: "non può essere informale", correct: false },
      { text: "deve essere necessariamente effettuato dal responsabile del gruppo di verifica", correct: false },
      { text: "risposta 1 + 2", correct: false },
      { text: "deve stabilire canale di comunicazione con il rappresentante dell’organizzazione oggetto di", correct: false },
    ]
  },
  {
    question: "IL RIESAME DELLE INFORMAZIONI DOCUMENTATE",
    answers: [
      { text: "dovrebbe verificare le competenze dimostrate dalle persone facenti parte dell’organizzazione", correct: false },
      { text: "deve valutare le sole procedure e le registrazioni stabilite dal sistema di gestione per valutarne", correct: false },
      { text: "non comprende l’analisi del contesto dell’organizzazione", correct: false },
      { text: "ai fini di pervenire ad una visione di insieme circa l’estensione certificate per rilevare eventuali", correct: false },
    ]
  },
  {
    question: "IL PIANO DI AUDIT",
    answers: [
      { text: "Può essere modificato", correct: true },
      { text: "deve essere inviato solo al gruppo di audit", correct: false },
      { text: "non riporta la stima del tempo delle riunioni del gruppo di audit", correct: false },
      { text: "non riporta gli obiettivi dell’audit", correct: false },
    ]
  },
  {
    question: "L’ASSEGANZIONE DEI COMPITI AL GRUPPO DI AUDIT",
    answers: [
      { text: "è effettuata dal committente", correct: false },
      { text: "dal responsabile del gruppo di audit", correct: true },
      { text: "non è modificabile durante l’audit", correct: false },
      { text: "è effettuata dall’ente di certificazione", correct: false },
    ]
  },
  {
    question: "LA LISTA DI RISCONTRO (CHECK-LIST)",
    answers: [
      { text: "verificare e non permette di verificare altre attività non indicate", correct: false },
      { text: "è un aiuto per il valutatore", correct: true },
      { text: "deve sempre essere approvata dal committente dell’audit", correct: false },
      { text: "non può essere visionata dall’organizzazione oggetto dell’audit", correct: false },
    ]
  },
  {
    question: "LA RIUNIONE DI APERTURA PUÒ ESSERE",
    answers: [
      { text: "omessa in piccole organizzazioni", correct: false },
      { text: "deve essere sempre formale", correct: false },
      { text: "deve essere sempre eseguita (anche quella finale)", correct: true },
      { text: "non offre all’organizzazione oggetto dell’audit di porre domande", correct: false },
    ]
  },
  {
    question: "LA COMUNICAZIONE DURANTE GLI AUDIT",
    answers: [
      { text: "è attuata all’interno al gruppo di valutazione", correct: false },
      { text: "è attuata tra responsabile del gruppo e organizzazione valutata sul progredire dell’audit", correct: false },
      { text: "per i componenti del gruppo di valutazione è limitata alla riunione per la definizione delle", correct: false },
      { text: "risposta 1 + 2", correct: true },
    ]
  },
  {
    question: "SE GLI OBIETTIVI DELL’AUDIT SONO IRRAGGIUNGIBILI",
    answers: [
      { text: "il responsabile del gruppo può per sua iniziativa interrompere la visita", correct: false },
      { text: "il responsabile del gruppo può modificare il piano della visita", correct: false },
      { text: "il responsabile del gruppo riporta le ragioni al committente dell’audit", correct: true },
      { text: "risposta 1 + 2 + 3", correct: false },
    ]
  },
  {
    question: "LE GUIDE",
    answers: [
      { text: "possono fornire chiarimenti o assistenza sulla raccolta di informazioni", correct: false },
      { text: "sono le persone designate dall’organizzazione per assistere al gruppo di audit", correct: false },
      { text: "possono rispondere in luogo dell’intervistato", correct: false },
      { text: "risposta 1 + 2", correct: true },
    ]
  },
  {
    question: "LE INFORMAZIONI RACCOLTE DURANTE L’AUDIT",
    answers: [
      { text: "mantengono un elemento di incertezza", correct: true },
      { text: "sono corrette in quanto raccolte da persone qualificate ad eseguire questa attività", correct: false },
      { text: "possono anche non essere verificate", correct: false },
      { text: "risposta 2 + 3", correct: false },
    ]
  },
  {
    question: "LE FONTI DI INFORMAZIONI POSSONO ESSERE",
    answers: [
      { text: "informazioni di ritorno dal cliente", correct: false },
      { text: "informazioni pertinenti da parti esterne", correct: false },
      { text: "dichiarazioni di concorrenti", correct: false },
      { text: "risposta 1 + 2", correct: true },
    ]
  },
  {
    question: "LE INTERVISTE DOVREBBERO CONSIDERARE DI",
    answers: [
      { text: "rivedere i risultati con la persona intervistata", correct: true },
      { text: "di contattare sempre e solo il responsabile", correct: false },
      { text: "non essere eseguite sul luogo di lavoro abituale della persona intervistata affinchè questa non", correct: false },
      { text: "evitare di mettere a proprio agio la persona intervistata perché questo non è un obiettivo del", correct: false },
    ]
  },
  {
    question: "LE RISULTANZE DELL’AUDIT POSSONO INDICARE",
    answers: [
      { text: "Non conformità a fronte dei criteri dell’audit", correct: false },
      { text: "Opportunità di miglioramento se specificato negli obiettivi dell’audit", correct: false },
      { text: "Risposta 1 + 2", correct: true },
      { text: "Opportunità di miglioramento", correct: false },
    ]
  },
  {
    question: "NELLA RIUNIONE FINALE",
    answers: [
      { text: "Di un audit interno di una piccola organizzazione l’atteggiamento del gruppo deve comunque", correct: false },
      { text: "Le opinioni divergenti dovrebbero essere registrate", correct: true },
      { text: "Non ci possono essere opinioni divergenti perché la visita deve terminare con un unico", correct: false },
      { text: "Non è ammessa discussione con l’organizzazione oggetto dell’audit", correct: false },
    ]
  },
  {
    question: "IL RAPPORTO DI AUDIT DEVE RIPORTARE",
    answers: [
      { text: "Il nominativo delle persone intervistate", correct: false },
      { text: "In modo dettagliato tutta l’esecuzione dell’audit", correct: false },
      { text: "Le conclusioni dell’audit", correct: true },
      { text: "Risposta 1 e 3", correct: false },
    ]
  },
  {
    question: "IL RAPPORTO DI AUDIT",
    answers: [
      { text: "è di proprietà dell’organizzazione", correct: false },
      { text: "è di proprietà del committente dell’audit", correct: true },
      { text: "deve essere distribuito in riunione finale", correct: false },
      { text: "nel caso di visita di certificazione può essere dato in visione a terzi", correct: false },
    ]
  },
  {
    question: "UN AUDITOR DOVREBBE ESSERE",
    answers: [
      { text: "impositivo", correct: false },
      { text: "poco diplomatico perché deve raggiungere gli obiettivi prefissati", correct: false },
      { text: "tenace", correct: true },
      { text: "autoritario", correct: false },
    ]
  },
  {
    question: "UN AUDITOR DEI SISTEMI DI GESTIONE DOVREBBE CONOSCERE",
    answers: [
      { text: "tecniche di audit", correct: false },
      { text: "contesto organizzativo", correct: false },
      { text: "requisiti legali e contrattuali applicabili all’organizzazione oggetto di audit", correct: false },
      { text: "tutti ()", correct: true },
    ]
  },
];


let randomQuestions = shuffle(questions.slice());


const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion(){
    resetState();
    let currentQuestion = randomQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    })
  }
  
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++
    }else{
      selectedBtn.classList.add("incorrect")
    }
  
    Array.from(answerButtons.children).forEach(button =>{
      if(button.dataset.correct == "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
      
    });
    nextButton.style.display = "block";
    
  }
  
  function showScore(){
    resetState();
    questionElement.innerHTML = `Hai ottenuto un punteggio di ${score} su 20!`;
    nextButton.innerHTML = "Gioca Ancora";
    nextButton.style.display = "block"
  }
  

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 20) { // Change 20 to the desired number of questions
    showQuestion();
  } else {
    showScore();
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
  
  
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }
  }); 
  
  startQuiz();
