const questions = [
    {
        question: `I betänkandet "Skola for bildning" beskrevs fyra olika kunskapsformer. De är: Fakta, Förståelse, Fördjupning och Färdighet.`,
        answers: [
            { text: `Sant`, correct: false },
            { text: `Falskt`, correct: true }
        ]
    },
    {
        question: `När undervisningen är intentionell så innebär det att den är riktad, planerad och målbestämd i förhallande till ett undervisningsinnehåll. Undervisningen syftar till kunskapsutveckling hos den lärande.`,
        answers: [
            { text: `Sant`, correct: true },
            { text: `Falskt`, correct: false }
        ]
    },
    {
        question: `När man planerar undervisning behöver man ta hänsyn till olika saker, som till exempel tillgång till lokaler, styrdokument, ekonomi, schemalagd tid, gruppstorlekar mm. Vad kallas dessa givna förutsattningar med ett gemensamt begrepp?`,
        answers: [
            { text: `Strukturfaktorer`, correct: false },
            { text: `Systemfaktorer`, correct: false },
            { text: `Planfaktorer`, correct: false },
            { text: `Strategifaktorer`, correct: false },
            { text: `Översiktsfaktorer`, correct: false },
            { text: `Ramfaktorer`, correct: true }
        ]
    },
    {
        question: `Vad kan beskriva ett lärandemål?`,
        answers: [
            { text: `Det är ett betygskriterium omvandlat till syfte.`, correct: false },
            { text: `Det är ett centralt innehåll och en metod.`, correct: false },
            { text: `Det ar ett innehall och nagot elevens ska kunna gora med innehallet, till exempel sammanfatta, använda eller beskriva.`, correct: true },
            { text: `Det är ett innehall och en formativ kontrollstation, till exempel ordforstaelsetest, diagnoser eller kunskapsquiz.`, correct: false },
            { text: `Det är en metod och uppgifter kopplade till betygskriterier.`, correct: false },
        ]
    },
    {
        question: `Marsvin är fantastiskt läraktiga små varelser. Så fort Rolf öppnar kylskåpsdörren hemma, springer marsvinen fram och börjar pipa glatt, redan innan han har plockat fram någon mat. Man skulle kunna beskriva detta som att marsvinen genom betingning har lärt sig att "ljudet av kylskåpsdörren" betyder "snart får vi mat" och därför förbereder sig för att börja äta. Vad skiljer den obetingade responsen (OR) från den betingade responsen (BR) i fall som detta?`,
        answers: [
            { text: `OR är naturlig medan BR är artificiell.`, correct: false },
            { text: `OR handlar om ljud medan BR handlar om beteende.`, correct: false },
            { text: `OR består medan BR kan upphöra om associationen till kylskåpet upphör.`, correct: true },
            { text: `OR kan betingas medan BR utgör en naturlig reflex som inte kan förändras.`, correct: false },
            { text: `OR avser klassisk betingning medan BR avser instrumentell betingning.`, correct: false },
            { text: `OR kan förstärkas genom upprepning medan BR beror på styrkan i det stimuli som presenteras.`, correct: false }
        ]
    },
    {
        question: `Vilket av följande är centralt för behavioristiskt lärande?`,
        answers: [
            { text: `Det unikt mänskliga`, correct: false },
            { text: `Individens upplevelser och föreställningar`, correct: false },
            { text: `Scaffolding`, correct: false },
            { text: `Beteenden oberoende av situationen`, correct: false },
            { text: `Att alla lär sig på samma sätt.`, correct: true },
            { text: `Individens kognitiva utveckling i olika stadier`, correct: false }
        ]
    },
    {
        question: `Vilket av nedanstående alternativ beskriver elevers kunskapsutveckling utifrån ett sociokulturellt perspektiv?`,
        answers: [
            { text: `Eleverna arbetar aktivt med språket i olika situationer för att lära sig hur man kan förstå samma problem på flera olika sätt. Särskilt viktigt blir för läraren att belysa kulturella skillnader i sådan förståelse.`, correct: false },
            { text: `Eleverna får arbeta i olika sociala situationer som de kan anses klara av, i sitt nuvarande utvecklingsstadium. Utifrån sin didaktiska kompetens väljer läraren uppgifter som anpassas till vad alla elever kan klara av med stöttning av sina kamrater.`, correct: false },
            { text: `Eleverna får använda olika redskap och utveckla färdigheter med fokus på vad som utgör en meningsfull aktivitet för dem själva. Läraren stöttar elevernas val av aktivitet.`, correct: false },
            { text: `Eleverna ges möjlighet att arbeta med sådant de ännu inte kan, tillsammans med andra som är mer kunniga. Eleven "lånar kompetens" av sina kompisar och stöttas av lärare.`, correct: true },
            { text: `Eleverna får lära sig teoretiska begrepp och procedurer som sedan tillämpas på en konkret, praktisk situation såsom problemlösning. Eleverna tillägnar sig därigenom lärarens kunskaper, om dessa förklaras på elevernas nivå.`, correct: false }
        ]
    },
    {
        question: `Den utbildning som ges i skolan bygger på idén om att de kunskaper eller färdigheter som lärs in i klassrumsmiljön ska kunna överföras till andra sammanhang där kunskaperna är relevanta. Vilket begrepp bygger antagandet ovan på?`,
        answers: [
            { text: `Negativ transfer`, correct: false },
            { text: `Appropriering`, correct: false },
            { text: `Negativ förstärkning`, correct: false },
            { text: `Adaption`, correct: false },
            { text: `Konkreta operationer`, correct: false },
            { text: `Positiv transfer`, correct: true },
            { text: `Formella operationer`, correct: false },
            { text: `Positiv förstärknin`, correct: false },
        ]
    },
    {
        question: `Konstruktivisterna Piaget och Vygotskij skiljde sig i sina perspektiv på lärande men hade också vissa likheter. Hur då?`,
        answers: [
            { text: `De hade olika syn på adaptation som förutsättning för lärande men förenades i synen på individens sociala förutsättningar.`, correct: false },
            { text: `De hade olika syn på vilka tidigare erfarenheter som ligger till grund för ny kunskap, men ansåg båda att barnets kunskapsutveckling är starkt situationsberoende.`, correct: false },
            { text: `De hade olika syn på lärandets sociala förutsättningar men betonade båda att den lärande inte är en passiv mottagare av kunskap.`, correct: true },
            { text: `De hade olika syn på om lärandet skulle beskrivas i termer av adaptation eller appropriering, men framhöll båda att eleven måste konstruera sin kunskap på egen hand.`, correct: false },
            { text: `De hade olika syn på om eleven utvecklas i en "zon" eller ett "stadium" men framhöll båda att det finns diskreta faser som lärandet utvecklas enligt.`, correct: false },
            { text: `De hade olika syn på lärarens roll men var båda kritiska mot synen på den lärande som en ensam mottagare av kunskap.`, correct: false }
        ]
    },
    {
        question: `Vilket av följande påståenden stämmer bäst överens med ett kognitivt perspektiv på lärande i dagens samhälle?`,
        answers: [
            { text: `Genom att utveckla elevers digitala kompetens kommer de att kunna processa och lagra mer information.`, correct: false },
            { text: `Genom att ställa eleven inför utmaningar när de undersöker världen försätts de i kognitiv konflikt för att ackommodera och utveckla nya tankemönster.`, correct: false },
            { text: `Genom undervisningen ska eleven försättas i sin proximala utvecklingszon för att motiveras i sitt eget lärande.`, correct: false },
            { text: `Genom intermittent förstärkning motiveras elever till att utforska sin omvärld och skapa en lust till det livslånga lärandet.`, correct: false },
            { text: `Genom ökad undervisningstid och en obligatorisk grundskola ges eleven ökade möjligheter att inhämta mer kunskap.`, correct: false },
            { text: `Genom ett undersökande arbetssätt där eleven formulerar och provar hypoteser ges eleven en verktygslåda för att förstå kunskapsbildningens processer.`, correct: true },

        ]
    },
    {
        question: `Lindström och Pennlert hänvisar i sin bok till Bengtsson och Kroksmarks (1994) modell över det didaktiska fältet. Vilka är de olika didaktiktyperna i den modellen?`,
        answers: [
            { text: `Allmandidaktik, Ämnesdidaktik och Processdidaktik`, correct: false },
            { text: `Praktisk didaktik 1, Praktisk didaktik 2, Teoretisk didaktik 1, Teoretisk didaktik 2`, correct: true },
            { text: `Praktisk didaktik, teoretisk didaktik och tillämpad didaktik`, correct: false },
            { text: `Pedagogik, didaktik och metodik`, correct: false }
        ]
    },
    {
        question: `Lindström och Pennlert skriver om didaktisering av ämnesinnehåll, vad kan det innebära?`,
        answers: [
            { text: `Att läraren strukturerar ämnesinnehållet i en grundkurs för alla elever och en fördjupning för några.`, correct: true },
            { text: `Att ämnesinnehållet förenklas och omformas för att bli mer tillgängligt och begripligt för eleverna.`, correct: true },
            { text: `Att ämnesinnehållet bibehålls i sin ursprungliga form utan några förändringar.`, correct: false },
            { text: `Att läraren presenterar ämnesinnehållet i den form som anges i kursplanens centrala innehåll.`, correct: false },
            { text: `Att läraren skapar en undervisningsmodell för ett ämnesinnehåll och följer planen utan justeringar.`, correct: false },
            { text: `Att ämnesinnehållet struktureras för att skapa en tydlig progression i lärandet.`, correct: true }
        ]
    },
    {
        question: `Vilka två av nedanstående alternativ är exempel på konservation enligt Piaget?`,
        answers: [
            { text: `Ett barn som förstår att volymen på en vätska är densamma även om man häller över den från ett högt, smalt glas till ett lågt glas som är bredare.`, correct: true },
            { text: `Ett barn som kan känna igen och tolka olika symboler som till exempel siffror och bokstäver.`, correct: false },
            { text: `Ett barn som förstår att godiset finns i skafferiet trots att dörren är stängd så att barnet inte kan se godiset.`, correct: false },
            { text: `Ett barn som förstår att om man rullar en lerklump till en lång, smal orm så är mängden lera fortfarande densamma.`, correct: true },
            { text: `Ett barn som kan räkna ut en matematisk uppgift utan att vara beroende av konkreta objekt.`, correct: false },
            { text: `Ett barn som har förmåga att se saker ur andras perspektiv.`, correct: false }
        ]
    },
    {
        question: `Hur kan man förklara relationen mellan faktakunskaper och förmågan att kunna analysera och förstå, ur ett kognitivt perspektiv?`,
        answers: [
            { text: `Minneskunskaper och förståelse är oberoende av varandra.`, correct: false },
            { text: `Ju mer kunskap vi har i långtidsminnet, desto lättare kan vi fylla i "luckor" eftersom vi uppmärksammar sådant vi inte redan kan.`, correct: false },
            { text: `Minneskunskaperna är talande för långtidsminnets kapacitet och blir därmed viktigare.`, correct: false },
            { text: `Ju mer kunskap vi har i långtidsminnet, desto mer kapacitet kan vi frigöra i arbetsminnet för att fokusera på andra saker, inklusive analys och förståelse.`, correct: true },
            { text: `Faktakunskap utvecklar vår minneskapacitet, medan förståelse utgör färdigheter som vi lättare glömmer.`, correct: false },
            { text: `Faktakunskaper lagras i långtidsminnet och fungerar som en bas för att jämföra och tolka ny information.`, correct: true }
        ]
    },
    {
        question: `Vilka två av följande påståenden beskriver begreppet appropriering ur ett sociokulturellt perspektiv?`,
        answers: [
            { text: `Appropriering innebär att en individ internaliserar kunskap och färdigheter genom social interaktion och användning av kulturella verktyg.`, correct: true },
            { text: `Appropriering är en process där en individ lär sig genom att isolera sig.`, correct: false },
            { text: `Genom appropriering gör individer ny kunskap till sin egen och kan använda den i nya sammanhang.`, correct: true },
            { text: `Appropriering innebär att kunskap överförs direkt från en expert utan elevens aktiva deltagande.`, correct: false },
            { text: `Appropriering handlar om att tillfälligt använda kunskap utan att förstå den.`, correct: false },
            { text: `Appropriering sker genom samarbete och deltagande i kulturella och sociala aktiviteter.`, correct: false }
        ]
    },
    {
        question: `Vilka två av följande påståenden stämmer bäst överens med pragmatismen och Deweys pedagogiska idéer?`,
        answers: [
            { text: `Kunskap är något statiskt och oföränderligt.`, correct: false },
            { text: `Lärande ska vara praktiskt, erfarenhetsbaserat och kopplat till verkliga problem och situationer.`, correct: true },
            { text: `Skolans främsta uppgift är att förmedla fakta utan hänsyn till elevens intressen.`, correct: false },
            { text: `Eleven lär sig bäst genom att aktivt utforska och lösa problem i samspel med andra.`, correct: true },
            { text: `Dewey menade att undervisning bör fokusera på disciplin och memorering.`, correct: false },
            { text: `Enligt pragmatismen är lärande en process som bygger på interaktion mellan individ och miljö.`, correct: false }
        ]
    },
    {
        question: `Lindström och Pennlert har beskrivit tre områden i lärarens yrkeskunnande. De är didaktisk kompetens, social kompetens och ämneskompetens/innehållskompetens. Vilka av följande är exempel på social kompetens?`,
        answers: [
            { text: `Främja och upprätthålla god kommunikation med eleverna.`, correct: true },
            { text: `Ta reda på hur elever tanker och frågar kring ett innehåll och anpassa undervisningen efter detta.`, correct: false },
            { text: `Visa respekt för elever och deras familjer.`, correct: true },
            { text: `Lärare har kunskaper om ämnet, till exempel om hur ämnet ar uppbyggt och har utvecklats.`, correct: false },
            { text: `Visa flexibilitet i mötet med individer och grupper.`, correct: true },
            { text: `Formulera uppgifter som elever förstår.`, correct: false },
            { text: `Lärare har relevanta kunskaper i ämnet och kan transformera egna kunskaper till innehåll i undervisning.`, correct: false },
            { text: `Utifran egna reflekterade praktikerfarenheter, utveckla sitt arbete i samverkan med andra.`, correct: false }
        ],
        hiddenAmount: true
    },
    {
        question: `Skolan ska enligt Skollagen verka för en likvärdig utbildning. Vilka påståenden är korrekta om likvärdig utbildning?`,
        answers: [
            { text: `Skolan ska ge alla elever lika möjligheter till goda studieresultat, efter sina olika förutsättningar.`, correct: true },
            { text: `En likvärdig utbildning innebär att undervisningen ska vara likadan för alla elever och att kunskap ska prövas på lika sätt.`, correct: false },
            { text: `Skolor ska vara likadana i fråga om resurser, undervisning och lokaler.`, correct: false },
            { text: `En likvärdig utbildning innebär att alla elever ska ha samma resurser oavsett skolans geografiska läge.`, correct: false },
            { text: `Elever är olika och har olika förutsättningar, skolans uppgift är att kompensera för detta så långt det är möjligt.`, correct: true },
            { text: `En likvärdig utbildning innebär att undervisningen ska utformas lika för alla.`, correct: false }
        ],
        hiddenAmount: true
    },
    {
        question: `Vilket/vilka av följande påståenden förklarar att vi kan minnas mer om vi både lyssnar och tittar på ny information, exempelvis någon som pratar till en bild, än information som vi enbart ser eller enbart hör?`,
        answers: [
            { text: `Hörselintryck är mer effektiva än visuella intryck när det gäller att skapa långsiktiga minnesspår.`, correct: false },
            { text: `Visuella intryck bearbetas i arbetsminnet medan hörselintryck bearbetas i långtidsminnet vilket förstärker inlärningen.`, correct: false },
            { text: `Visuella och auditiva intryck bearbetas på olika ställen i hjärnan och kan därför samverka med varandra vilket stärker inlärningen.`, correct: true },
            { text: `Informationsöverflöde stimulerar hjärnan att lagra fler detaljer i långtidsminnet.`, correct: false },
            { text: `Multimodal presentation av information ökar hjärnans kognitiva belastning och ökar därmed minneskapaciteten.`, correct: false },
            { text: `Samtidig aktivering av arbetsminnets olika delar förbättrar informationsintegrationen och lagringen.`, correct: true },
            { text: `Arbetsminnet har en större kapacitet än långtidsminnet, vilket gör att kombinerad information lättare kan`, correct: false }
        ],
        hiddenAmount: true
    },
    {
        question: `En lärare önskar att skapa vissa beteenden hos sina elever som till exempel att räcka upp handen när de ska prata, arbeta flitigt på lektionerna, inte störa sina klasskamrater under lektionen eller göra läxorna. I vilket eller vilka av nedanstående alternativ använder läraren sig av negativ förstärkning för att påverka elevernas beteende? Vi antar i denna uppgift att eleverna gillar att ha rast, helst inte vill ha läxor och älskar sina mobiltelefoner.`,
        answers: [
            { text: `Eleverna tvingas stå över rasten om de pratar utan att räcka upp handen.`, correct: false },
            { text: `Eleverna slipper hemläxa om de arbetar lugnt och effektivt på lektionen.`, correct: true },
            { text: `Eleverna får längre rast om de arbetar duktigt på lektionen.`, correct: false },
            { text: `Eleverna blir bjudna på tårta, vilket alla gillar, om klassen skriver bra på provet.`, correct: false },
            { text: `Eleverna slipper att lämna ifrån sig mobilerna när de kommer till skolan som de brukar, om de har gjort läxan.`, correct: true },
            { text: `Eleverna får hemläxa om de inte har arbetat koncentrerat på lektionen.`, correct: false },
            { text: `Eleverna får skäll av läraren om de inte har gjort läxan.`, correct: false }
        ],
        hiddenAmount: true
    },
    {
        question: `Vilket eller vilka av följande påståenden beskriver bäst vad som menas med situerat lärande?`,
        answers: [
            { text: `Kunskap är kontextberoende och utvecklas bäst i autentiska miljöer där den ska användas.`, correct: true },
            { text: `Kunskap är universell och kan tillämpas på samma sätt oavsett sammanhang.`, correct: false },
            { text: `Lärande är en individuell process som sker främst genom repetition och förstärkning.`, correct: false },
            { text: `Det centrala i situerat lärande är att memorera fakta för att kunna lösa problem senare.`, correct: false },
            { text: `Lärande sker i interaktion med andra och bygger på en välplanerad undervisning där lärandemålen problematiseras.`, correct: false },
            { text: `Lärande sker genom att observera och delta i en social gemenskap eller praktik.`, correct: true }
        ],
        hiddenAmount: true
    },
    {
        question: `Vilket eller vilka av följande alternativ är korrekta angående medierande redskap ur ett sociokulturellt perspektiv?`,
        answers: [
            { text: `Medierande redskap är både fysiska och symboliska verktyg som människor använder för att förstå och förändra sin omvärld.`, correct: true },
            { text: `Medierande redskap inkluderar endast teknologiska hjälpmedel som datorer och appar.`, correct: false },
            { text: `Språk, gester och matematiska symboler är exempel på medierande redskap.`, correct: true },
            { text: `Medierande redskap används för att eliminera behovet av social interaktion i lärandeprocessen.`, correct: false },
            { text: `Medierande redskap bidrar till att strukturera och förstärka tänkande och kommunikation.`, correct: true },
            { text: `Medierande redskap är helt oberoende av kultur och samhälle.`, correct: false }
        ],
        hiddenAmount: true
    }]