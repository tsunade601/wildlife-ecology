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
{question:"\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",options:["Liebig’s law of the minimum","Liebig’s law of the maximum","Shelford’s law of tolerance","Shelford’s law of intolerance"],correct:"Liebig’s law of the minimum"},
{question:"\"Quick movement over large distances, often across unsuitable terrain\" is a description of",options:["diffusion","secular dispersal","jump dispersal","drifting"],correct:"jump dispersal"},
{question:"\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",options:["Liebig’s law of the minimum","Liebig’s law of the maximum","Shelford’s law of tolerance","Shelford’s law of intolerance"],correct:"Shelford’s law of tolerance"},
{question:"Good climate is a",options:["chemical factor","demographic factor","push factor","pull factor"],correct:"pull factor"},
{question:"Scarcity of food is a",options:["chemical factor","demographic factor","push factor","pull factor"],correct:"push factor"},
{question:"Zoo is an example of",options:["in-situ conservation","ex-situ conservation","in-situ preservation","ex-situ preservation"],correct:"ex-situ conservation"},
{question:"The “subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce” is the definition of",options:["habitat","ecosystem","biome","biosphere"],correct:"habitat"},
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
{question:"“The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences” is a definition for",options:["adaptive response","adaptive capacity","mitigative response","mitigative capacity"],correct:"adaptive capacity"},
{question:"Which of these is not a principle of ecological restoration?",options:["ecological integrity","short-term sustainability","benefits and engages society","informed by past and future"],correct:"short-term sustainability"},
{question:"Mesodebris in the context of plastic debris has fragments of size",options:["> 20 mm","5 - 20 mm","< 5 mm","< 1 mm"],correct:"5 - 20 mm"},
{question:"“Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead” is a definition for",options:["adaptation","mitigation","maladaptation","malmitigation"],correct:"maladaptation"},
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

let questionOrder = [...Array(quiz.length).keys()];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const restartBtn = document.getElementById("restart-btn");

function shuffleArray(arr){
  for(let i=arr.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffleOptions(question){
  shuffleArray(question.options);
}

function loadQuestion(){
  if(currentIndex >= quiz.length) return showScore();
  const q = quiz[questionOrder[currentIndex]];
  shuffleOptions(q);
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, q.correct);
    answersEl.appendChild(btn);
  });
  updateProgress();
}

function selectAnswer(btn, correctAnswer){
  const allButtons = answersEl.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);
  if(btn.textContent === correctAnswer){
    btn.classList.add("btn-correct");
    correctCount++;
  } else {
    btn.classList.add("btn-wrong");
    wrongCount++;
    allButtons.forEach(b => {
      if(b.textContent === correctAnswer) b.classList.add("btn-correct");
    });
  }
  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 1000);
}

function showScore(){
  questionEl.textContent = "Quiz Completed!";
  answersEl.innerHTML = "";
  scoreEl.textContent = `Correct: ${correctCount} | Wrong: ${wrongCount}`;
  progressBar.style.width = "100%";
  progressText.textContent = `Quiz Finished`;
  restartBtn.style.display = "inline-block";
}

function updateProgress(){
  const percent = ((currentIndex)/quiz.length)*100;
  progressBar.style.width = percent + "%";
  progressText.textContent = `Question ${currentIndex + 1} / ${quiz.length}`;
}

restartBtn.addEventListener("click", () => {
  shuffleArray(questionOrder);
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  scoreEl.textContent = "";
  restartBtn.style.display = "none";
  loadQuestion();
});

shuffleArray(questionOrder);
loadQuestion();
