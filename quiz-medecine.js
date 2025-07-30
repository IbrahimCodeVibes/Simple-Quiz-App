const questions = [
  { question: "Combien d'os dans le corps humain adulte ?", answers: ["206", "201", "220", "198"], correct: 0 },
  { question: "Quel organe est responsable de la filtration du sang ?", answers: ["Reins", "Foie", "Poumons", "Cœur"], correct: 0 },
  { question: "Le cœur a combien de cavités ?", answers: ["2", "3", "4", "5"], correct: 2 },
  { question: "Quel est le plus grand organe du corps ?", answers: ["Peau", "Foie", "Poumon", "Cerveau"], correct: 0 },
  { question: "Quelle est la fonction principale des globules rouges ?", answers: ["Combattre les infections", "Transporter l'oxygène", "Produire des hormones", "Filtrer les toxines"], correct: 1 },
  { question: "Quel est le rôle du pancréas ?", answers: ["Produire l'insuline", "Filtrer le sang", "Réguler la température", "Digérer les protéines"], correct: 0 },
  { question: "Quelle est la structure de base du système nerveux ?", answers: ["Os", "Neurone", "Capillaire", "Globule blanc"], correct: 1 },
  { question: "Quelle vitamine est produite par la peau au soleil ?", answers: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine K"], correct: 2 },
  { question: "Combien de dents a un adulte en général ?", answers: ["28", "30", "32", "34"], correct: 2 },
  { question: "Quel est le nom du virus responsable du COVID-19 ?", answers: ["SARS-CoV-2", "H1N1", "HIV", "Ebola"], correct: 0 }
];

let index = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[index];
  questionContainer.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="answers">
      ${q.answers.map((ans, i) => `<button onclick="selectAnswer(${i})">${ans}</button>`).join("")}
    </div>
  `;
}

function selectAnswer(i) {
  if (i === questions[index].correct) score++;
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    questionContainer.innerHTML = `<h2>Votre score : ${score}/${questions.length}</h2>`;
    nextBtn.style.display = "none";
  }
}

nextBtn.addEventListener("click", showQuestion);
showQuestion();
