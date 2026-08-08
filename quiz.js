// ============ QUIZ DATA ============
const quiz = [
{question:"Which of these is not a characteristic of fitness?",options:["Fitness is environment-specific.","Fitness is species-specific.","Higher reproductive rate means higher fitness.","Fitness should be measured across several generations."],correct:"Higher reproductive rate means higher fitness."},
{question:"Who amongst these is considered the father of Biogeography?",options:["Theophrastus","Linnaeus","Malthus","Humboldt"],correct:"Humboldt"},
{question:"In the Greek word root of Ecology, Oikos refers to",options:["household","preservation","environment","study"],correct:"household"},
{question:"In the Greek word root of Ecology, logos refers to",options:["household","preservation","environment","study"],correct:"study"},
{question:"Which of these is not a step in natural selection?",options:["variation","underpopulation","struggle for existence","survival of the fittest"],correct:"underpopulation"},
{question:"Ecology is the scientific study of                      that determine the distribution and abundance of organisms. (Fill in the blanks)",options:["statics","interactions","dynamics","habitat"],correct:"interactions"},
{question:"Which of these is not a characteristic of fitness?",options:["Fitness is environment-specific.","Fitness is species-specific.","Fitness works on traits such as size and speed.","Fitness should be measured across several generations."],correct:"Fitness works on traits such as size and speed."},
{question:"Ecology is the scientific study of interactions among organisms and their                  . (Fill in the blanks)",options:["habitat","niche","environment","population"],correct:"environment"},
{question:"\"Enquiry into plants\" is a book written by",options:["Theophrastus","Linnaeus","Malthus","Humboldt"],correct:"Theophrastus"},
{question:"Which of these is not a kind of selection",options:["directional","stochastic","disruptive","stabilising"],correct:"stochastic"},
{question:"Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are..........",options:["perfect","imperfect","stable","unstable"],correct:"stable"},
{question:"The hierarchical system was given by",options:["Simon","Watson","Hutchinson","Humboldt"],correct:"Simon"},
{question:"The emergent principle can be stated as",options:["Whole = sum of parts","Whole < sum of parts","Whole > sum of parts","None of these"],correct:"Whole > sum of parts"},
{question:"\"the diversity that exists within an ecosystem\" is",options:["alpha (α) biodiversity","beta (β) biodiversity","gamma (γ) biodiversity","delta (δ) biodiversity"],correct:"alpha (α) biodiversity"},
{question:"The mitochondrion is a / an",options:["Sub-cellular organelle","Cell","Tissue","Organ"],correct:"Sub-cellular organelle"},
{question:"For more biodiversity, the level of disturbance should be",options:["less","intermediate","more","none of these"],correct:"intermediate"},
{question:"There is more biodiversity in areas with",options:["less competition, less predation","less competition, more predation","more competition, more predation","more competition, less predation"],correct:"more competition, more predation"},
{question:"\"the diversity that exists among different geographies\" is",options:["alpha (α) biodiversity","beta (β) biodiversity","gamma (γ) biodiversity","delta (δ) biodiversity"],correct:"gamma (γ) biodiversity"},
{question:"The laboratory approach to Ecology uses",options:["equations","models","observations","experiments"],correct:"experiments"},
{question:"\"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups\" is a definition of",options:["cells","species","ecosystems","biomes"],correct:"species"},
{question:"I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",options:["tick hunting","auto grooming","allo grooming","foraging"],correct:"allo grooming"},
{question:"The scientific study of animal behaviour is called",options:["behaviourism","ecology","ethology","prey-predator dynamics"],correct:"ethology"},
{question:"Hamilton's rule can be stated as",options:["rB < C","rB > C","rB = C","rB + C = 0"],correct:"rB > C"},
{question:"Harmonious interactions occur where",options:["at least one participant is benefited","at least one participant is unharmed","both participants are benefitted","both participants are unharmed"],correct:"both participants are unharmed"},
{question:"The interaction between exotic shrubs and trees through the action of seed predators is an example of",options:["infraspecific competition","apparent competition","disguised competition","harmonious competition"],correct:"apparent competition"},
{question:"An inventory of behaviours exhibited by an animal during a behaviour exercise is called",options:["ecogram","ethogram","behaviourogram","animalogram"],correct:"ethogram"},
{question:"Trampling of grass due to the movement of animals is an example of",options:["mutualism","amensalism","commensalism","protocooperation"],correct:"amensalism"},
{question:"I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",options:["tick hunting","auto grooming","allo grooming","foraging"],correct:"allo grooming"},
{question:"Birds on giraffe are an example of",options:["colony","commensalism","protocooperation","allelopathy"],correct:"protocooperation"},
{question:"Egrets with buffaloes are an example of",options:["colony","commensalism","protocooperation","allelopathy"],correct:"commensalism"},
{question:"If we all became vegetarians, we'll be able to support our large populations. This can be explained through",options:["10% rule","1% rule","trophic cascade","biodiversity"],correct:"10% rule"},
{question:"Net primary productivity is given by",options:["APAR × LUE","APAR + LUE","APAR - LUE","APAR / LUE"],correct:"APAR × LUE"},
{question:"Trees → Birds → Parasites → Hyperparasites represents",options:["upright pyramid of numbers","inverted pyramid of numbers","spindle pyramid of numbers","dumb-bell pyramid of numbers"],correct:"inverted pyramid of numbers"},
{question:"Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. As we move up the food chain,",options:["available energy decreases","available energy increases","available energy remains same","available energy is zero everywhere"],correct:"available energy decreases"},
{question:"Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",options:["frog is producer","frog is consumer and carnivore","frog is consumer and herbivore","frog is decomposer"],correct:"frog is consumer and carnivore"},
{question:"Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",options:["more number of hawks than grasshoppers can be supported","more number of grasshoppers than hawks can be supported","equal number of hawks and grasshoppers can be supported","none of these"],correct:"more number of grasshoppers than hawks can be supported"},
{question:"At the compensation point,",options:["photosynthesis = respiration","photosynthesis < respiration","photosynthesis > respiration","photosynthesis = 0"],correct:"photosynthesis = respiration"},
{question:"Glacial lakes are typical examples of",options:["eutrophic lakes","hypereutrophic lakes","oligotrophic lakes","mesotrophic lakes"],correct:"oligotrophic lakes"},
{question:"Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",options:["hawk is producer","hawk is consumer and carnivore","hawk is consumer and herbivore","hawk is decomposer"],correct:"hawk is consumer and carnivore"},
{question:"Tree → Frugivorous birds → Hawk represents",options:["upright pyramid of numbers","inverted pyramid of numbers","spindle pyramid of numbers","dumb-bell pyramid of numbers"],correct:"spindle pyramid of numbers"},
{question:"Which of these is true?",options:["Physiological longevity > Ecological longevity","Physiological longevity = Ecological longevity","Physiological longevity < Ecological longevity","a or b"],correct:"a or b"},
{question:"A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",options:["Simple random sampling","Systematic sampling","Stratified sampling","Multistage sampling"],correct:"Simple random sampling"},
{question:"Cover board surveys are typically used for sampling",options:["herpetofauna","fishes","large mammals","carnivores"],correct:"herpetofauna"},
{question:"_________ is how close the measured values are to the correct value.",options:["Accuracy","Precision","Bias","Variance"],correct:"Accuracy"},
{question:"The logistic growth equation, when plotted, appears",options:["I shaped","J shaped","S shaped","O shaped"],correct:"S shaped"},
{question:"The minimum replacement level fertility for a population to grow should be greater than",options:["1","2","3","4"],correct:"2"},
{question:"The juvenile mortality rate is the annual number of deaths of juveniles per",options:["100 births","1000 births","100 live births","1000 live births"],correct:"1000 live births"},
{question:"_______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start.",options:["Simple random sampling","Systematic sampling","Stratified sampling","Multistage sampling"],correct:"Systematic sampling"},
{question:"Pan traps are used for sampling",options:["bees","butterflies","non-pollinator insects","pollinator insects"],correct:"pollinator insects"},
{question:"Which of these is not a measure of absolute population density?",options:["total count","pelt count","capture-recapture method","removal method"],correct:"pelt count"},
{question:"Which of these is correct? a. b. c. d.",options:["Fundamental niche > Realised niche","Fundamental niche = Realised niche","Fundamental niche < Realised niche","a or b"],correct:"a or b"},
{question:"Which of these is not a characteristic of pioneer species",options:["ability to grow on bare rocks","ability to tolerate extreme temperatures","large size","short life span"],correct:"large size"},
{question:"A climax caused by wildfires is an example of",options:["climatic climax","edaphic climax","disclimax","catastrophic climax"],correct:"catastrophic climax"},
{question:"Importance value varies from",options:["0 to 10","0 to 50","0 to 100","0 to 300"],correct:"0 to 300"},
{question:"When compared to generalist species, specialist species have",options:["narrower niches","broader niches","same-size niches","none of these"],correct:"narrower niches"},
{question:"The climax near Tindni village is being controlled by disturbance by cattle. This is an example of a. b. c. d.",options:["climatic climax","edaphic climax","disclimax","catastrophic climax"],correct:"disclimax"},
{question:"Lithosere is an example of",options:["hydrosere","xerosere","psammosere","halosere"],correct:"xerosere"},
{question:"A species found most frequently in a particular community, but also present occasionally in others is called",options:["accidental species","indifferent species","selective species","exclusive species"],correct:"selective species"},
{question:"Which of these depicts correctly the lithosere primary succession?",options:["Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax","Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax","Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax","Rock → Crustose lichen → Foliose lichen → shrub → Herbaceous stage → Moss → woodland → climax"],correct:"Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax"},
{question:"Importance value can be written as",options:["Relative density + Relative frequency X Relative dominance","Relative density X Relative frequency + Relative dominance","Relative density + Relative frequency + Relative dominance","Relative density X Relative frequency X Relative dominance"],correct:"Relative density + Relative frequency + Relative dominance"},
{question:"Which of these is not a physical factor of habitat?",options:["soil","moisture","predators","temperature"],correct:"predators"},
{question:"The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",options:["translocation","migration","dispersal","drifting"],correct:"dispersal"},
{question:"The movement of lions across the Gir landscape is an example of",options:["diffusion","secular dispersal","jump dispersal","drifting"],correct:"diffusion"},
{question:"I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",options:["autophagy","allelophagy","autopathy","allelopathy"],correct:"allelopathy"},
{question:"The regular, seasonal movement of animals, often along fixed routes is called",options:["translocation","migration","dispersal","drifting"],correct:"migration"},
{question:"\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",options:["Liebig's law of the minimum","Liebig's law of the maximum","Shelford's law of tolerance","Shelford's law of intolerance"],correct:"Liebig's law of the minimum"},
{question:"\"Quick movement over large distances, often across unsuitable terrain\" is a description of",options:["diffusion","secular dispersal","jump dispersal","drifting"],correct:"jump dispersal"},
{question:"\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",options:["Liebig's law of the minimum","Liebig's law of the maximum","Shelford's law of tolerance","Shelford's law of intolerance"],correct:"Shelford's law of tolerance"},
{question:"Good climate is a",options:["chemical factor","demographic factor","push factor","pull factor"],correct:"pull factor"},
{question:"Scarcity of food is a",options:["chemical factor","demographic factor","push factor","pull factor"],correct:"push factor"},
{question:"Zoo is an example of",options:["in-situ conservation","ex-situ conservation","in-situ preservation","ex-situ preservation"],correct:"ex-situ conservation"},
{question:"The \"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of",options:["habitat","ecosystem","biome","biosphere"],correct:"habitat"},
{question:"Which of these correctly represents the process of habitat fragmentation and loss?",options:["Original forest → Dissection → Perforation → Fragmentation → Attrition","Original forest → Dissection → Attrition → Fragmentation → Perforation","Original forest → Dissection → Perforation → Attrition → Fragmentation","Original forest → Dissection → Fragmentation → Perforation → Attrition"],correct:"Original forest → Dissection → Perforation → Fragmentation → Attrition"},
{question:"The acronym HIPPO does not include",options:["habitat loss","invasive species","pollination","pollution"],correct:"pollination"},
{question:"We prefer those areas for the creation of a conservation reserve where the level of threat is",options:["very high","medium","very low","non-existent"],correct:"medium"},
{question:"The acronym HIPPO does not include",options:["habitat loss","habitat enhancement","invasive species","human over-population"],correct:"habitat enhancement"},
{question:"According to Leopold, which of these is not a tool of habitat management?",options:["fire","gun","cattle","sickle"],correct:"sickle"},
{question:"Captive breeding is an example of",options:["in-situ conservation","ex-situ conservation","in-situ preservation","ex-situ preservation"],correct:"ex-situ conservation"},
{question:"Which of these is a stochastic factor?",options:["birth rate","death rate","population structure","environmental fluctuation"],correct:"environmental fluctuation"},
{question:"Which of these is a deterministic factor?",options:["environmental variation","forest fire","death rate","diseases"],correct:"death rate"},
{question:"Which of these is a positive check according to Malthus?",options:["late marriage","war","celibacy","moral restraint"],correct:"war"},
{question:"________ determines which projects or developments require a full or partial impact assessment study.",options:["screening","scoping","reporting","review"],correct:"screening"},
{question:"Which of these is a pillar of sustainability",options:["social sustainability","industrial sustainability","agricultural sustainability","trans-boundary sustainability"],correct:"social sustainability"},
{question:"Which of these is not a pillar of sustainability?",options:["environmental sustainability","economic sustainability","trans-boundary sustainability","social sustainability"],correct:"trans-boundary sustainability"},
{question:"The book \"An Essay on the Principle of Population\" was written by",options:["Darwin","Malthus","Spencer","Owens"],correct:"Malthus"},
{question:"According to Malthusian model,",options:["Population grows in geometric progression, food supply increases in arithmetic progression","Population grows in geometric progression, food supply increases in geometric progression","Population grows in arithmetic progression, food supply increases in arithmetic progression","Population grows in arithmetic progression, food supply increases in geometric progression"],correct:"Population grows in geometric progression, food supply increases in arithmetic progression"},
{question:"The quantum of human impacts is given by",options:["I = P × A × T","I = P + A + T","I = P + A - T","I = P - (A + T)"],correct:"I = P × A × T"},
{question:"____________is used to identify which potential impacts are relevant to assess.",options:["screening","scoping","reporting","review"],correct:"scoping"},
{question:"The demographic transition sees a society move from",options:["high birth rate, low death rate to low birth rate, low death rate","low birth rate, high death rate to low birth rate, low death rate","high birth rate, high death rate to low birth rate, low death rate","high birth rate, high death rate to low birth rate, high death rate"],correct:"high birth rate, high death rate to low birth rate, low death rate"},
{question:"Which of these is a preventive check according to Malthus?",options:["foresight","vice","misery","flood"],correct:"foresight"},
{question:"Which of these is not a climatic forcing for Earth?",options:["changes in plate tectonics","changes in Earth's orbit","changes in Sun's orbit","changes in Sun's strength"],correct:"changes in Sun's orbit"},
{question:"\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition for",options:["adaptive response","adaptive capacity","mitigative response","mitigative capacity"],correct:"adaptive capacity"},
{question:"Which of these is not a principle of ecological restoration?",options:["ecological integrity","short-term sustainability","benefits and engages society","informed by past and future"],correct:"short-term sustainability"},
{question:"Mesodebris in the context of plastic debris has fragments of size",options:["> 20 mm","5 - 20 mm","< 5 mm","< 1 mm"],correct:"5 - 20 mm"},
{question:"\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition for",options:["adaptation","mitigation","maladaptation","malmitigation"],correct:"maladaptation"},
{question:"Which of these is not a principle of ecological restoration?",options:["ecological integrity","long-term sustainability","benefits and engages scientists","informed by past and future"],correct:"benefits and engages scientists"},
{question:"Which of these is not a climatic forcing for Earth?",options:["changes in plate tectonics","changes in Earth's orbit","changes in Moon's orbit","changes in Sun's strength"],correct:"changes in Moon's orbit"},
{question:"Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",options:["adaptation","mitigation","deceleration","maladaptation"],correct:"adaptation"},
{question:"Macrodebris in the context of plastic debris has fragments of size",options:["> 20 mm","5 - 20 mm","< 5 mm","< 1 mm"],correct:"> 20 mm"},
{question:"The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",options:["adaptation","mitigation","deceleration","maladaptation"],correct:"mitigation"},
{question:"Ludwig's ratchet predicts",options:["decreasing harvesting rate","constant harvesting rate","increasing harvesting rate","fluctuating harvesting rate"],correct:"increasing harvesting rate"},
{question:"A pest population is called controlled when",options:["it is not increasing","it is decreasing ","it is not causing any economic damage","it is not causing excessive economic damage"],correct:"it is not causing excessive economic damage"},
{question:"Which of these is not an impact of toxic chemicals?",options:["lethal effects","sub-lethal effects","reduction of existing stressors","reduced fecundity"],correct:"reduction of existing stressors"},
{question:"Which of these is correct?",options:["The maximum sustainable yield is near the beginning of the sigmoidal curve.","The maximum sustainable yield is near the mid-point of the sigmoidal curve.","The maximum sustainable yield is near the end of the sigmoidal curve.","None of these"],correct:"The maximum sustainable yield is near the mid-point of the sigmoidal curve."},
{question:"A root zone treatment plant is an example of",options:["phytoremediation","biological control","biomagnification","bioaccumulation"],correct:"phytoremediation"},
{question:"A pest population is called uncontrolled when",options:["it is increasing","it is not decreasing","it is causing some economic damage","it is causing excessive economic damage"],correct:"it is causing excessive economic damage"},
{question:"The impact of El Nino on fishery collapse in Peru is explained by",options:["match hypothesis","mismatch hypothesis","match-mismatch hypothesis","none of these"],correct:"match-mismatch hypothesis"},
{question:"A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",options:["recovery","restoration","enhancement"],correct:"restoration"},
{question:"A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",options:["recovery","restoration","enhancement","replacement"],correct:"replacement"},
{question:"Which of these is correct?",options:["R + G = M + F","R + M = G + F","R + F = M + G","R + G + M + F = 0"],correct:"R + G = M + F"}
];

// ============ STATE ============
let currentMode = 1; // 0=read, 1=quiz, 2=test
let questionOrder = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let currentStreak = 0;
let bestStreak = 0;
let quizAnswered = false;
let quizStartTime = null;
let quizTimerInterval = null;
let quizTimeRemaining = 0;

// Test mode state
let testOrder = [];
let testIndex = 0;
let testAnswers = {};
let testTimer = null;
let testSeconds = 20 * 60;
let testSubmitted = false;
let testStartTime = null;

// Theme state
let isDarkTheme = true;

// Settings
let settings = {
    quizTimer: 0,        // 0 = no timer
    questionCount: 100,  // number of questions
    shuffleQuestions: true,
    shuffleOptions: true
};

// Keyboard state
let keyBuffer = [];

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    document.getElementById('total-questions').textContent = quiz.length;
    switchMode(1);
    setupKeyboardShortcuts();
});

// ============ SETTINGS ============
function loadSettings() {
    const saved = localStorage.getItem('wildlifeQuizSettings');
    if (saved) {
        try {
            settings = { ...settings, ...JSON.parse(saved) };
        } catch(e) {}
    }
    // Update UI
    document.getElementById('quiz-timer-setting').value = settings.quizTimer;
    document.getElementById('quiz-count-setting').value = settings.questionCount;
    document.getElementById('shuffle-questions-setting').value = settings.shuffleQuestions;
    document.getElementById('shuffle-options-setting').value = settings.shuffleOptions;
}

function saveSettings() {
    localStorage.setItem('wildlifeQuizSettings', JSON.stringify(settings));
}

function applySettings() {
    settings.quizTimer = parseInt(document.getElementById('quiz-timer-setting').value);
    settings.questionCount = parseInt(document.getElementById('quiz-count-setting').value);
    settings.shuffleQuestions = document.getElementById('shuffle-questions-setting').value === 'true';
    settings.shuffleOptions = document.getElementById('shuffle-options-setting').value === 'true';
    saveSettings();
    // Restart current quiz if in quiz mode
    if (currentMode === 1) {
        restartQuiz();
    }
    toggleSettings();
}

function resetSettings() {
    settings = {
        quizTimer: 0,
        questionCount: 100,
        shuffleQuestions: true,
        shuffleOptions: true
    };
    saveSettings();
    loadSettings();
    if (currentMode === 1) {
        restartQuiz();
    }
}

function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('hidden');
}

// ============ THEME ============
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const body = document.body;
    const icon = document.getElementById('theme-btn').querySelector('i');
    
    if (isDarkTheme) {
        body.className = "bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950 text-white min-h-screen";
        icon.className = "fa-solid fa-moon";
    } else {
        body.className = "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-900 min-h-screen";
        icon.className = "fa-solid fa-sun";
    }
}

// ============ MODE SWITCHING ============
function switchMode(mode) {
    // Save current progress if in quiz mode
    if (currentMode === 1 && !quizAnswered) {
        // Could save here
    }

    // Update tab styles
    for (let i = 0; i < 3; i++) {
        const tab = document.getElementById(`tab-${i}`);
        if (i === mode) {
            tab.classList.add('tab-active');
        } else {
            tab.classList.remove('tab-active');
        }
    }

    // Hide all modes
    document.getElementById('mode-0').classList.add('hidden');
    document.getElementById('mode-1').classList.add('hidden');
    document.getElementById('mode-2').classList.add('hidden');
    document.getElementById('stats-bar').classList.add('hidden');

    // Show selected mode
    document.getElementById(`mode-${mode}`).classList.remove('hidden');
    currentMode = mode;

    // Initialize mode content
    if (mode === 0) {
        loadReadMode();
    } else if (mode === 1) {
        startQuiz();
    } else if (mode === 2) {
        startTest();
    }
}

// ============ READ MODE ============
function loadReadMode() {
    const readList = document.getElementById('read-list');
    readList.innerHTML = '';

    quiz.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 card animate-fade-in';
        card.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="text-emerald-400 font-mono text-sm mt-1 bg-emerald-500/10 px-2 py-1 rounded">Q${index + 1}</span>
                <div class="flex-1">
                    <p class="text-white font-medium mb-3">${q.question}</p>
                    <div class="space-y-2">
                        ${q.options.map(opt => `
                            <div class="flex items-center gap-2 text-sm text-emerald-200/80">
                                <i class="fa-solid fa-chevron-right text-xs text-emerald-500/50"></i>
                                <span>${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        readList.appendChild(card);
    });
}

// ============ QUIZ MODE ============
function startQuiz() {
    // Determine question count
    const count = Math.min(settings.questionCount, quiz.length);
    
    // Create question order
    questionOrder = [...Array(quiz.length).keys()];
    if (settings.shuffleQuestions) {
        shuffleArray(questionOrder);
    }
    // Trim to selected count
    questionOrder = questionOrder.slice(0, count);

    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    currentStreak = 0;
    bestStreak = 0;
    quizAnswered = false;
    quizTimeRemaining = settings.quizTimer;
    
    quizStartTime = Date.now();
    
    // Reset timer display
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    
    const timerDisplay = document.getElementById('quiz-timer-display');
    if (settings.quizTimer > 0) {
        timerDisplay.classList.remove('hidden');
        updateQuizTimerDisplay();
        quizTimerInterval = setInterval(() => {
            quizTimeRemaining--;
            updateQuizTimerDisplay();
            if (quizTimeRemaining <= 0) {
                clearInterval(quizTimerInterval);
                quizTimerInterval = null;
                // Auto-advance on timer
                if (!quizAnswered) {
                    selectQuizAnswer(null, quiz[questionOrder[currentIndex]].correct, quiz[questionOrder[currentIndex]].options, true);
                }
            }
        }, 1000);
    } else {
        timerDisplay.classList.add('hidden');
    }

    loadQuizQuestion();
    updateStats();
}

function restartQuiz() {
    startQuiz();
}

function updateQuizTimerDisplay() {
    const mins = Math.floor(quizTimeRemaining / 60);
    const secs = quizTimeRemaining % 60;
    document.getElementById('quiz-timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    // Warning colors
    const timerEl = document.getElementById('quiz-timer');
    if (quizTimeRemaining <= 10) {
        timerEl.classList.add('text-red-400', 'pulse-glow');
    } else if (quizTimeRemaining <= 30) {
        timerEl.classList.add('text-yellow-400');
        timerEl.classList.remove('text-red-400', 'pulse-glow');
    } else {
        timerEl.classList.remove('text-red-400', 'pulse-glow', 'text-yellow-400');
    }
}

function loadQuizQuestion() {
    if (currentIndex >= questionOrder.length) {
        showQuizScore();
        return;
    }

    quizAnswered = false;
    const q = quiz[questionOrder[currentIndex]];
    
    if (settings.shuffleOptions) {
        shuffleArray(q.options);
    }

    // Update progress
    document.getElementById('q-num').textContent = currentIndex + 1;
    document.getElementById('q-total').textContent = questionOrder.length;

    // Set question with animation
    const questionEl = document.getElementById('quiz-question');
    questionEl.classList.remove('animate-fade-in');
    void questionEl.offsetWidth; // Trigger reflow
    questionEl.textContent = q.question;
    questionEl.classList.add('animate-fade-in');

    // Render options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = `option w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-left font-medium hover:bg-white/10 hover:border-emerald-400/50 transition-all flex items-center gap-3 animate-slide-in`;
        btn.style.animationDelay = `${idx * 50}ms`;
        btn.innerHTML = `
            <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">${labels[idx]}</span>
            <span class="flex-1">${option}</span>
        `;
        btn.onclick = () => selectQuizAnswer(btn, q.correct, q.options, false);
        btn.setAttribute('data-index', idx);
        optionsContainer.appendChild(btn);
    });

    // Hide feedback
    document.getElementById('quiz-feedback').classList.add('hidden');

    // Update question nav
    updateQuestionNav();
}

function selectQuizAnswer(btn, correctAnswer, allOptions, timedOut = false) {
    if (quizAnswered) return;
    quizAnswered = true;

    // Clear timer if running
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const optionsContainer = document.getElementById('quiz-options');
    const allButtons = optionsContainer.querySelectorAll('button');
    allButtons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-white/10', 'hover:border-emerald-400/50');
    });

    const labels = ['A', 'B', 'C', 'D'];
    let selectedText = '';
    let selectedIdx = -1;

    if (btn) {
        selectedText = btn.querySelector('span:last-child').textContent;
        selectedIdx = parseInt(btn.getAttribute('data-index'));
        // Highlight selected
        btn.classList.add('bg-emerald-600', 'border-emerald-500', 'text-white', 'scale-[1.02]');
        btn.querySelector('span:first-child').classList.add('bg-emerald-500', 'text-white');
    }

    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (timedOut) {
        // Timer ran out
        wrongCount++;
        currentStreak = 0;
        
        // Highlight correct answer
        allButtons.forEach((b, idx) => {
            if (b.querySelector('span:last-child').textContent === correctAnswer) {
                b.classList.add('bg-emerald-600', 'border-emerald-500', 'text-white');
                b.querySelector('span:first-child').classList.add('bg-emerald-500', 'text-white');
            }
        });

        feedback.innerHTML = `
            <div class="flex items-center gap-3 p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-300 animate-fade-in">
                <i class="fa-solid fa-clock text-orange-400 text-xl"></i>
                <span>Time's up! The correct answer is highlighted.</span>
            </div>
        `;
    } else if (selectedText === correctAnswer) {
        // Correct answer
        correctCount++;
        currentStreak++;
        if (currentStreak > bestStreak) bestStreak = currentStreak;
        
        btn.classList.add('bg-emerald-600', 'border-emerald-500', 'text-white', 'scale-[1.02]');
        btn.querySelector('span:first-child').classList.add('bg-emerald-500', 'text-white');

        feedback.innerHTML = `
            <div class="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-300 animate-fade-in">
                <i class="fa-solid fa-check-circle text-emerald-400 text-xl"></i>
                <span>Correct! Well done.</span>
            </div>
        `;
    } else {
        // Wrong answer
        wrongCount++;
        currentStreak = 0;
        
        btn.classList.add('bg-red-600', 'border-red-500', 'text-white', 'shake');
        btn.querySelector('span:first-child').classList.add('bg-red-500', 'text-white');

        // Highlight correct answer
        allButtons.forEach(b => {
            const text = b.querySelector('span:last-child').textContent;
            if (text === correctAnswer) {
                b.classList.add('bg-emerald-600', 'border-emerald-500', 'text-white');
                b.querySelector('span:first-child').classList.add('bg-emerald-500', 'text-white');
            }
        });

        feedback.innerHTML = `
            <div class="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-300 animate-fade-in">
                <i class="fa-solid fa-times-circle text-red-400 text-xl"></i>
                <span>Incorrect. The correct answer is highlighted in green.</span>
            </div>
        `;
    }

    updateStats();
    updateQuestionNav();

    setTimeout(() => {
        currentIndex++;
        loadQuizQuestion();
    }, timedOut ? 2000 : 1200);
}

function updateStats() {
    document.getElementById('stats-correct').textContent = correctCount;
    document.getElementById('stats-wrong').textContent = wrongCount;
    document.getElementById('stats-streak').textContent = bestStreak;
}

function updateQuestionNav() {
    const navGrid = document.getElementById('q-nav-grid');
    navGrid.innerHTML = '';

    for (let i = 0; i < questionOrder.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'q-grid-btn';
        btn.textContent = i + 1;
        
        if (i === currentIndex) {
            btn.classList.add('active');
        }
        
        if (i < currentIndex) {
            // Already answered - check if correct or wrong
            // We'd need to track this per question for full functionality
            btn.classList.add('answered');
        }
        
        btn.onclick = () => jumpToQuestion(i);
        navGrid.appendChild(btn);
    }
}

function jumpToQuestion(index) {
    if (index >= 0 && index < questionOrder.length) {
        currentIndex = index;
        loadQuizQuestion();
    }
}

function toggleQuestionNav() {
    const nav = document.getElementById('question-nav');
    const testNav = document.getElementById('test-question-nav');
    const testNavBtn = document.getElementById('test-nav-btn');
    
    nav.classList.toggle('hidden');
    if (currentMode === 2) {
        testNav.classList.toggle('hidden');
        if (testNav.classList.contains('hidden')) {
            testNavBtn.innerHTML = '<i class="fa-solid fa-grid-2"></i> Navigate';
        } else {
            testNavBtn.innerHTML = '<i class="fa-solid fa-times"></i> Close';
        }
    }
}

function showQuizScore() {
    // Clear timer
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const timeTaken = Math.floor((Date.now() - quizStartTime) / 1000);
    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;
    const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;

    document.getElementById('quiz-question').textContent = 'Quiz Completed!';
    document.getElementById('quiz-options').innerHTML = '';
    document.getElementById('quiz-feedback').classList.remove('hidden');
    
    const percentage = Math.round((correctCount / questionOrder.length) * 100);
    let emoji = '📚';
    let title = 'Keep Practicing!';
    let ringColor = '#ef4444';
    
    if (percentage >= 90) {
        emoji = '🏆';
        title = 'Outstanding!';
        ringColor = '#22c55e';
    } else if (percentage >= 80) {
        emoji = '🎉';
        title = 'Excellent!';
        ringColor = '#22c55e';
    } else if (percentage >= 70) {
        emoji = '👏';
        title = 'Great Job!';
        ringColor = '#22c55e';
    } else if (percentage >= 60) {
        emoji = '👍';
        title = 'Good Effort!';
        ringColor = '#eab308';
    } else if (percentage >= 40) {
        emoji = '💪';
        title = 'Keep Trying!';
        ringColor = '#f97316';
    }

    document.getElementById('quiz-feedback').innerHTML = `
        <div class="text-center py-6">
            <div class="text-5xl mb-4">${emoji}</div>
            <h2 class="text-2xl font-bold text-white mb-2">${title}</h2>
            <p class="text-emerald-300 mb-2">You got <span class="text-emerald-400 font-bold">${correctCount}</span> correct out of <span class="text-white font-bold">${questionOrder.length}</span> questions</p>
            <p class="text-sm text-white/50 mb-4">Time taken: ${timeStr} | Best streak: ${bestStreak}</p>
            <div class="w-full bg-white/10 rounded-full h-4 mb-4">
                <div class="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style="width: ${percentage}%"></div>
            </div>
            <p class="text-sm text-white/50">Score: ${percentage}%</p>
            <button onclick="restartQuiz()" class="mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-medium transition-colors">
                <i class="fa-solid fa-rotate mr-2"></i> Try Again
            </button>
        </div>
    `;

    document.getElementById('q-num').textContent = '✓';
    document.getElementById('q-total').textContent = '';
    updateStats();
}

// ============ TEST MODE ============
function startTest() {
    testOrder = [...Array(quiz.length).keys()];
    shuffleArray(testOrder);
    testIndex = 0;
    testAnswers = {};
    testSubmitted = false;

    // Reset timer
    if (testTimer) clearInterval(testTimer);
    testSeconds = 20 * 60;
    testStartTime = Date.now();
    updateTestTimerDisplay();

    testTimer = setInterval(() => {
        testSeconds--;
        updateTestTimerDisplay();
        if (testSeconds <= 0) {
            clearInterval(testTimer);
            testTimer = null;
            submitTest();
        }
    }, 1000);

    document.getElementById('submit-test').classList.add('hidden');
    loadTestQuestion();
    updateTestNav();
}

function updateTestTimerDisplay() {
    const mins = Math.floor(testSeconds / 60);
    const secs = testSeconds % 60;
    const timerEl = document.getElementById('test-timer');
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (testSeconds < 60) {
        timerEl.classList.add('text-red-400', 'pulse-glow');
    } else if (testSeconds < 300) {
        timerEl.classList.add('text-yellow-400');
        timerEl.classList.remove('text-red-400', 'pulse-glow');
    } else {
        timerEl.classList.remove('text-red-400', 'pulse-glow', 'text-yellow-400');
    }
}

function loadTestQuestion() {
    if (testIndex >= quiz.length) {
        testIndex = quiz.length - 1;
    }

    const q = quiz[testOrder[testIndex]];
    if (settings.shuffleOptions) {
        shuffleArray(q.options);
    }

    document.getElementById('test-progress').textContent = `${testIndex + 1} of ${quiz.length}`;

    const questionEl = document.getElementById('test-question');
    questionEl.classList.remove('animate-fade-in');
    void questionEl.offsetWidth;
    questionEl.textContent = q.question;
    questionEl.classList.add('animate-fade-in');

    const optionsContainer = document.getElementById('test-options');
    optionsContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((option, idx) => {
        const isSelected = testAnswers[testOrder[testIndex]] === idx;
        const btn = document.createElement('button');
        btn.className = `w-full px-6 py-4 rounded-2xl border transition-all flex items-center gap-3 animate-slide-in ${isSelected ? 'bg-emerald-600/20 border-emerald-400 text-emerald-300' : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-emerald-400/50'}`;
        btn.style.animationDelay = `${idx * 50}ms`;
        btn.innerHTML = `
            <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 font-mono font-bold shrink-0">${labels[idx]}</span>
            <span class="flex-1">${option}</span>
            ${isSelected ? '<i class="fa-solid fa-check-circle text-emerald-400"></i>' : ''}
        `;
        btn.onclick = () => selectTestAnswer(idx);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('next-btn').innerHTML = testIndex === quiz.length - 1 
        ? 'Finish<i class="fa-solid fa-chevron-right ml-2"></i>' 
        : 'Next<i class="fa-solid fa-chevron-right ml-2"></i>';

    if (testIndex === quiz.length - 1) {
        document.getElementById('submit-test').classList.remove('hidden');
    } else {
        document.getElementById('submit-test').classList.add('hidden');
    }

    updateTestNav();
}

function selectTestAnswer(optionIndex) {
    if (testSubmitted) return;
    testAnswers[testOrder[testIndex]] = optionIndex;
    loadTestQuestion();
}

function nextTestQuestion() {
    if (testSubmitted) return;

    if (testIndex < quiz.length - 1) {
        testIndex++;
        loadTestQuestion();
    } else {
        submitTest();
    }
}

function prevTestQuestion() {
    if (testSubmitted) return;

    if (testIndex > 0) {
        testIndex--;
        loadTestQuestion();
    }
}

function updateTestNav() {
    const navGrid = document.getElementById('test-q-nav-grid');
    navGrid.innerHTML = '';

    for (let i = 0; i < quiz.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'q-grid-btn';
        btn.textContent = i + 1;
        
        const qIdx = testOrder[i];
        if (testAnswers[qIdx] !== undefined) {
            btn.classList.add('answered');
        }
        
        if (i === testIndex) {
            btn.classList.add('active');
        }
        
        btn.onclick = () => jumpToTestQuestion(i);
        navGrid.appendChild(btn);
    }
}

function jumpToTestQuestion(index) {
    if (index >= 0 && index < quiz.length) {
        testIndex = index;
        loadTestQuestion();
    }
}

function submitTest() {
    if (testSubmitted) return;
    testSubmitted = true;

    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }

    const timeTaken = Math.floor((Date.now() - testStartTime) / 1000);
    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;
    const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;

    let correct = 0;
    testOrder.forEach((qIdx, pos) => {
        const selected = testAnswers[qIdx];
        if (selected !== undefined) {
            const q = quiz[qIdx];
            if (q.options[selected] === q.correct) {
                correct++;
            }
        }
    });

    const percentage = Math.round((correct / quiz.length) * 100);
    let emoji = '📚';
    let title = 'Keep Practicing!';
    let ringColor = '#ef4444';
    
    if (percentage >= 90) {
        emoji = '🏆';
        title = 'Outstanding!';
        ringColor = '#22c55e';
    } else if (percentage >= 80) {
        emoji = '🎉';
        title = 'Excellent!';
        ringColor = '#22c55e';
    } else if (percentage >= 70) {
        emoji = '👏';
        title = 'Great Job!';
        ringColor = '#22c55e';
    } else if (percentage >= 60) {
        emoji = '👍';
        title = 'Good Effort!';
        ringColor = '#eab308';
    } else if (percentage >= 40) {
        emoji = '💪';
        title = 'Keep Trying!';
        ringColor = '#f97316';
    }

    // Hide navigation elements
    document.getElementById('test-question').innerHTML = '';
    document.getElementById('test-options').innerHTML = '';
    document.getElementById('test-progress').textContent = 'Test Complete!';
    document.getElementById('test-timer').textContent = '00:00';
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-test').classList.add('hidden');
    document.getElementById('test-question-nav').classList.add('hidden');
    document.getElementById('test-nav-btn').classList.add('hidden');

    // Show results modal
    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = quiz.length - correct;
    document.getElementById('result-time').textContent = timeStr;
    document.getElementById('result-percentage').textContent = `${percentage}%`;
    
    // Set progress ring
    const ring = document.getElementById('result-ring');
    const circumference = 283;
    const offset = circumference - (percentage / 100) * circumference;
    ring.style.stroke = ringColor;
    ring.style.strokeDashoffset = offset;

    document.getElementById('results-modal').classList.remove('hidden');
}

function closeResults() {
    document.getElementById('results-modal').classList.add('hidden');
}

function retryQuiz() {
    closeResults();
    switchMode(1);
}

// ============ UTILITY ============
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ============ KEYBOARD SHORTCUTS ============
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
            return;
        }

        const key = e.key.toLowerCase();
        
        // Quiz mode shortcuts
        if (currentMode === 1 && !quizAnswered) {
            // Number keys 1-4
            if (/^[1-4]$/.test(e.key)) {
                const idx = parseInt(e.key) - 1;
                const buttons = document.getElementById('quiz-options').querySelectorAll('button');
                if (buttons[idx]) {
                    buttons[idx].click();
                }
            }
            // Letter keys A-D
            else if (/^[a-d]$/.test(key)) {
                const idx = key.charCodeAt(0) - 97; // a=0, b=1, etc.
                const buttons = document.getElementById('quiz-options').querySelectorAll('button');
                if (buttons[idx]) {
                    buttons[idx].click();
                }
            }
            // Enter to continue
            else if (key === 'enter') {
                // The selectQuizAnswer already handles the flow
            }
        }
        
        // Test mode shortcuts
        else if (currentMode === 2 && !testSubmitted) {
            if (key === 'n') {
                nextTestQuestion();
            } else if (key === 'p') {
                prevTestQuestion();
            }
            // Number/letter to select
            else if (/^[1-4]$/.test(e.key)) {
                const idx = parseInt(e.key) - 1;
                const buttons = document.getElementById('test-options').querySelectorAll('button');
                if (buttons[idx]) {
                    buttons[idx].click();
                }
            } else if (/^[a-d]$/.test(key)) {
                const idx = key.charCodeAt(0) - 97;
                const buttons = document.getElementById('test-options').querySelectorAll('button');
                if (buttons[idx]) {
                    buttons[idx].click();
                }
            }
        }

        // Global shortcuts
        if (key === 'r' && currentMode === 1) {
            restartQuiz();
        } else if (key === 't') {
            toggleTheme();
        } else if (key === '?' || key === '/') {
            toggleShortcuts();
        }
    });
}

function toggleShortcuts() {
    document.getElementById('shortcuts-modal').classList.toggle('hidden');
}

function closeShortcuts() {
    document.getElementById('shortcuts-modal').classList.add('hidden');
}

// Close modals on backdrop click
document.getElementById('results-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeResults();
    }
});

document.getElementById('shortcuts-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeShortcuts();
    }
});
