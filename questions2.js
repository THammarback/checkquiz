const questions = [
  {
    "question": "Skollagen definierar begreppet utbildning på följande sätt: 'Den verksamhet inom vilken undervisning sker utifrån bestämda mål.' Är det sant eller falskt?",
    "answers": [
      { "text": "Sant", "correct": true },
      { "text": "Falskt", "correct": false }
    ]
  },
  {
    "question": "Skollagen definierar begreppet undervisning på följande sätt: 'Processer som leds av lärare och har som syfte att främja utveckling, lärande samt förvärv och fördjupning av kunskaper.' Är det sant eller falskt?",
    "answers": [
      { "text": "Sant", "correct": true },
      { "text": "Falskt", "correct": false }
    ]
  },
  {
    "question": "När man planerar sin undervisning enligt principen konstruktiv länkning utgår man först och främst ifrån ämnets",
    "answers": [
      { "text": "Metod", "correct": false },
      { "text": "Mål", "correct": true },
      { "text": "Centrala innehåll", "correct": false },
      { "text": "Betygskriterier", "correct": false },
      { "text": "Syfte", "correct": false },
      { "text": "Redovisningsform", "correct": false }
    ]
  },
  {
    "question": "Lindström och Pennlert menar att lärare kan använda sig av didaktisk analys för att utveckla sin undervisning. Vilket påstående stämmer i förhållande till didaktisk analys?",
    "answers": [
      { "text": "För att göra en didaktisk analys behöver man fokusera främst på styrdokumentens intentioner.", "correct": false },
      { "text": "Didaktisk analys är både ett sätt att planera sin undervisning och att reflektera över den i efterhand.", "correct": true },
      { "text": "Didaktisk analys är en standardiserad process som alltid ser likadan ut.", "correct": false },
      { "text": "Didaktisk analys är en process för att utvärdera lärarens prestation efter lektionen.", "correct": false },
      { "text": "Didaktisk analys är relevant för nyblivna lärare, men efterhand som man är mer erfaren slutar det vara relevant.", "correct": false },
      { "text": "Didaktisk analys handlar om att samla in data och statistik om elevernas prestationer.", "correct": false }
    ]
  },
  {
    "question": "Hur skulle en person som är behaviorist uttrycka sig kring hur lärande sker?",
    "answers": [
      { "text": "Lärande sker genom att nya beteenden skapas genom betingningsprocesser.", "correct": true },
      { "text": "Lärande sker i samspel med omgivningen.", "correct": false },
      { "text": "Lärande sker genom att information bearbetas i hjärnan liknande processorn i en dator.", "correct": false },
      { "text": "Lärande sker genom att delta i praxisgemenskaper.", "correct": false },
      { "text": "Lärande sker när en människa ställs inför ett problem.", "correct": false },
      { "text": "Lärande sker genom att en person som är mer kunnig kan stötta den lärande.", "correct": false }
    ]
  },
  {
    "question": "Att utdela bestraffningar... har i allmänhet visat sig inte vara så effektivt... Hur då, enligt forskningen om bestraffning?",
    "answers": [
      { "text": "Undvik belöningar och avvakta med tillrättavisningar...", "correct": false },
      { "text": "Beröm elevens skolprestationer på ett annat område...", "correct": false },
      { "text": "Belöna det beteende som eleven helst vill göra...", "correct": false },
      { "text": "Undertryck det problematiska beteendet genom att kombinera negativ förstärkning...", "correct": false },
      { "text": "Ignorera det oönskade beteendet och belöna ett alternativt, prosocialt beteende...", "correct": true },
      { "text": "Bryt ner elevens beteende i mindre delar...", "correct": false }
    ]
  },
  {
    "question": "Vad innebär positiv transfer?",
    "answers": [
      { "text": "Positiv transfer innebär att ny kunskap helt ersätter tidigare inlärd kunskap.", "correct": false },
      { "text": "Positiv transfer innebär att man enbart kan använda kunskap i det sammanhang där den lärdes in.", "correct": false },
      { "text": "Positiv transfer innebär att tidigare inlärning förhindrar eller försämrar förmågan...", "correct": false },
      { "text": "Positiv transfer innebär att kunskap eller färdigheter som lärs i ett sammanhang förbättrar eller underlättar lärandet i ett annat.", "correct": true },
      { "text": "Positiv transfer innebär att lärande är beroende av belöning...", "correct": false },
      { "text": "Positiv transfer innebär att kunskaper från olika individer sammanförs...", "correct": false }
    ]
  },
  {
    "question": "Hur kan man förklara att faktakunskaper och minne hör ihop med analysförmåga och förståelse, ur ett kognitivt perspektiv?",
    "answers": [
      { "text": "Minneskunskaper och förståelse är oberoende av varandra.", "correct": false },
      { "text": "Minneskunskaperna är talande för långtidsminnets kapacitet.", "correct": false },
      { "text": "Ju mer kunskap vi har i långtidsminnet, desto lättare kan vi fylla i 'luckor'.", "correct": false },
      { "text": "Ju mer kunskap vi har i långtidsminnet, desto mer kapacitet kan vi frigöra i arbetsminnet för analys och förståelse.", "correct": true },
      { "text": "Minneskunskaper är talande för vår abstraktionsförmåga.", "correct": false },
      { "text": "Faktakunskap utvecklar vår minneskapacitet...", "correct": false }
    ]
  },
  {
    "question": "Piaget och Vygotskij skilde sig åt i sina perspektiv på lärande men hade också vissa likheter. Hur då?",
    "answers": [
      { "text": "De hade olika syn på lärandets stadier men var båda socialkonstruktivister.", "correct": false },
      { "text": "De hade olika syn på om eleven utvecklas i en 'zon' eller ett 'stadium'...", "correct": false },
      { "text": "De hade olika syn på lärarens roll men var båda kritiska mot 'assisterat lärande'.", "correct": false },
      { "text": "De hade olika syn på adaptation som förutsättning för lärande...", "correct": false },
      { "text": "De hade olika syn på lärandets sociala förutsättningar men betonade båda att den lärande är aktiv.", "correct": true },
      { "text": "De hade olika på syn på vilka tidigare erfarenheter som ligger till grund...", "correct": false }
    ]
  },
  {
    "question": "Vad menas med ZPD (Zone of Proximal Development), enligt Vygotskij?",
    "answers": [
      { "text": "I den närmaste utvecklingszonen finns de kompetenser som ligger inom räckhåll, men där barnet ännu behöver stöd utifrån.", "correct": true },
      { "text": "I den närmaste utvecklingszonen finns de kompetenser som barnet kan uppnå på egen hand.", "correct": false },
      { "text": "Den närmaste utvecklingszonen är den utvecklingsnivå som närmast följer efter den barnet befinner sig i.", "correct": false },
      { "text": "Den närmaste utvecklingszonen är den utvecklingsnivå som konstrueras socialt.", "correct": false },
      { "text": "Den närmaste utvecklingszonen avser den utvecklings- eller mognadsnivå som ligger till grund.", "correct": false },
      { "text": "I den närmaste utvecklingszonen finns de kompetenser som i nuläget ligger utom räckhåll.", "correct": false }
    ]
  },
  {
    "question": "Lindström och Pennlert beskriver en utvecklad didaktisk triangel. I den uttrycks fyra relationer. Vilka är de?",
    "answers": [
      { "text": "Relationen elev - pedagogik, lärare - elev, lärare - ämnesdidaktik, lärare - elev", "correct": false },
      { "text": "Relationen elev - undervisningsinnehåll, lärare - elev och elev - elev, lärare - undervisningsinnehåll, lärare - elevens lärande", "correct": true },
      { "text": "Relationen student - ämnesinnehåll, elev - elev, lärare - didaktik, lärare - elevens lärande", "correct": false },
      { "text": "Relationen elev - innehåll, lärare - elev, lärare - undervisningsinnehåll, skolsystemet - elevens lärande", "correct": false },
      { "text": "Relationen skolsystemet - undervisningsinnehåll, lärare elev och elev - elev, lärare - undervisningsinnehåll, undervisningsinnehåll - elevens lärande", "correct": false }
    ]
  },
  {
    "question": "Vad menas med progression? (3 rätta svar)",
    "answers": [
      { "text": "att undervisningen bygger på tidigare lärande och leder till ökad svårighetsgrad över tid.", "correct": false },
      { "text": "att eleverna först arbetar med teoretiskt material...", "correct": false },
      { "text": "att man går från det enklare till det mer komplexa i ett ämnesinnehåll.", "correct": true },
      { "text": "att urvalet bygger på elevernas förkunskaper och att de får sträcka sig efter ny kunskap.", "correct": true },
      { "text": "att undervisningen ska vara densamma under hela kursen...", "correct": false },
      { "text": "att läraren håller en snabb takt...", "correct": false }
    ]
  },
  {
    "question": "Vilka tre kognitiva färdigheter kan barnet förväntas klara av i det konkret-operationella stadiet? (3 rätta svar)",
    "answers": [
      { "text": "Att förstå konservering av mängd.", "correct": true },
      { "text": "Att utföra hypotetiska resonemang om abstrakta problem.", "correct": false },
      { "text": "Att lösa problem som kräver att flera dimensioner beaktas samtidigt.", "correct": true },
      { "text": "Att föra symboliska resonemang baserade på bilder och ord.", "correct": false },
      { "text": "Att genomföra formella operationer.", "correct": false },
      { "text": "Att skapa logiska resonemang kring konkreta objekt och händelser.", "correct": true },
      { "text": "Att förstå att ett objekt existerar trots att det inte är synligt.", "correct": false }
    ]
  },
  {
    "question": "Vilka två alternativ visar på hur lärarens roll betraktas i experimentsituationer ur ett sociokulturellt perspektiv? (2 rätta svar)",
    "answers": [
      { "text": "Läraren betraktas främst som en övervakare.", "correct": false },
      { "text": "Lärarens stödjande roll betonas och den gradvisa processen tillsammans med eleven.", "correct": true },
      { "text": "Lärarens roll tonas ner så att barn på samma nivå upptäcker kunskap.", "correct": false },
      { "text": "Lärarens roll betonas som experimentledare och förebild.", "correct": false },
      { "text": "Lärarens roll betraktas som antingen passiv eller aktiv beroende på kontext.", "correct": false },
      { "text": "Lärarens roll är central och kan t.ex. ställa frågor som guidar eleven.", "correct": true }
    ]
  },
  {
    "question": "Vilka två skäl anförs ofta till varför behaviorismen representerar en vetenskapligt alltför snäv syn på lärande? (2 rätta svar)",
    "answers": [
      { "text": "Att man behöver ta hänsyn till den fysiska omgivningen.", "correct": false },
      { "text": "Att behaviorismen betraktar kunskaper som förprogrammerade.", "correct": false },
      { "text": "Att behaviorismen inte tar hänsyn till viktiga inre processer och motivationsfaktorer.", "correct": true },
      { "text": "Att behaviorismen inte tar hänsyn till skillnader mellan individer.", "correct": false },
      { "text": "Att behaviorismen inte är så objektiv som naturvetenskaperna.", "correct": false },
      { "text": "Att behaviorismen behandlar lärande som en individuell process oberoende av kontext.", "correct": true }
    ]
  },
  {
    "question": "Vilka två påståenden beskriver appropriering och assimilering ur ett sociokulturellt perspektiv? (2 rätta svar)",
    "answers": [
      { "text": "Appropriering innebär att en individ aktivt tar till sig och omformar kunskap från sin omgivning för att göra den till sin egen.", "correct": true },
      { "text": "Appropriering sker enbart genom imitation av andra människor.", "correct": false },
      { "text": "Assimilering är processen där en individ förkastar ny kunskap som inte passar in.", "correct": false },
      { "text": "Appropriering är en mekanisk överföring av kunskap från en expert till en novis.", "correct": false },
      { "text": "Assimilering och appropriering är synonyma begrepp som båda beskriver passivt lärande.", "correct": false },
      { "text": "Assimilering handlar om att integrera ny kunskap i redan existerande scheman, utan att de förändras.", "correct": true }
    ]
  },
  {
    "question": "Att analysera är ett exempel på något elever ska kunna göra, vilka av följande beskrivningar är uttryck för att kunna analysera?",
    "answers": [
      { "text": "Kunna formulera relevanta frågor", "correct": true },
      { "text": "Kunna visa på mönster", "correct": true },
      { "text": "Kunna ge konstruktiv kritik", "correct": false },
      { "text": "Kunna använda", "correct": false },
      { "text": "Kunna jämföra olika företeelser", "correct": false },
      { "text": "Kunna argumentera", "correct": false }
    ]
  },
  {
    "question": "Lindström och Pennlert har beskrivit tre områden i lärares yrkeskunnande. Vilka av följande är exempel på didaktisk kompetens?",
    "answers": [
      { "text": "Problematisera och strukturera ett innehåll", "correct": true },
      { "text": "Variera metoder för undervisning och lärande", "correct": true },
      { "text": "Visa respekt för elever och deras familjer", "correct": false },
      { "text": "Lärare har kunskaper om ämnet...", "correct": false },
      { "text": "Visa flexibilitet i mötet med individer och grupper", "correct": false },
      { "text": "Reflektera över sig själv som social och pedagogisk ledare", "correct": false },
      { "text": "Formulera uppgifter som elever förstår", "correct": true }
    ]
  },
  {
    "question": "Vilket eller vilka perspektiv på lärande passar in på följande påstående: 'Vårt tänkande och vår hjärna är inte en avgränsad del från den värld som vi agerar i, utan lärande sker i samspel med andra människor.'",
    "answers": [
      { "text": "Sociokulturellt perspektiv på lärande", "correct": false },
      { "text": "Behavioristiskt perspektiv på lärande", "correct": false },
      { "text": "Individualkonstruktivistiskt perspektiv på lärande", "correct": false },
      { "text": "Pragmatismens syn på lärande", "correct": true },
      { "text": "Situerat perspektiv på lärande", "correct": false },
      { "text": "Positivistiskt perspektiv på lärande", "correct": false }
    ]
  },
  {
    "question": "Vilken eller vilka av nedanstående idéer inom skola och utbildning stämmer överens med Deweys syn på kunskap och bildning?",
    "answers": [
      { "text": "Elever ska undervisas om demokrati men själva skolarbetet bör styras hierarkiskt.", "correct": false },
      { "text": "Lärande sker mest effektivt genom att eleven assimilerar lärarens kunskaper.", "correct": false },
      { "text": "Lärande sker genom ett undersökande arbetssätt där man ställs inför ett problem.", "correct": true },
      { "text": "Kunskaper är beständiga och läraren väljer ut ett relevant undervisningsstoff.", "correct": false },
      { "text": "Lärande sker genom strukturerad klassrumsundervisning...", "correct": false },
      { "text": "Skolan ska fungera som en demokratisk miljö där elever lär sig genom att delta i samarbete.", "correct": true },
      { "text": "Elever ska inte bara lära sig för att klara av tester...", "correct": false }
    ]
  },
  {
    "question": "Vilket eller vilka av nedanstående alternativ är exempel på 'kommunikativa stöttor' enligt Vygotskijs sociokulturella perspektiv på lärande?",
    "answers": [
      { "text": "Uppmuntran, ledtrådar, påminnelser och annan hjälp som gör eleven mer självständig.", "correct": true },
      { "text": "Sociala interaktioner mellan lärare och elev som understödjer kommunikationen.", "correct": true },
      { "text": "Arrangemang av lärmiljön så att eleven kan göra upptäckter på egen hand.", "correct": false },
      { "text": "Konkreta erfarenheter som möjliggör elevers egen konstruktion av kunskap.", "correct": false },
      { "text": "Hjälp med att dela upp en uppgift i flera steg eller frågor som guidar eleven.", "correct": true },
      { "text": "Återkoppling som visar på både styrkor och utvecklingsområden.", "correct": false }
    ]
  },
  {
    "question": "Vilket/vilka av följande påståenden förklarar att vi kan minnas mer om vi både lyssnar och tittar på ny information?",
    "answers": [
      { "text": "Kombinationen av visuella och auditiva intryck engagerar flera minnessystem samtidigt.", "correct": true },
      { "text": "Hörselintryck är mer effektiva än visuella intryck när det gäller långsiktiga minnesspår.", "correct": false },
      { "text": "Samtidig aktivering av arbetsminnets olika komponenter förbättrar informationsintegrationen.", "correct": true },
      { "text": "Informationsöverflöde stimulerar hjärnan att lagra fler detaljer.", "correct": false },
      { "text": "Multimodal presentation av information ökar hjärnans kognitiva belastning.", "correct": false },
      { "text": "Arbetsminnet har en större kapacitet än långtidsminnet.", "correct": false }
    ]
  }
]