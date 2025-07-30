const questions = [
  { question: "Quel est l'élément chimique H ?", answers: ["Hélium", "Hydrogène", "Hafnium", "Heliumium"], correct: 1 },
  { question: "Combien de planètes dans le système solaire ?", answers: ["8", "9", "7", "10"], correct: 0 },
  { question: "L'eau bout à quelle température ?", answers: ["90°C", "100°C", "80°C", "120°C"], correct: 1 },
  { question: "Quel organe pompe le sang ?", answers: ["Le foie", "Le cerveau", "Le cœur", "Les reins"], correct: 2 },
  { question: "Quel gaz respirons-nous ?", answers: ["Oxygène", "Hydrogène", "Hélium", "Azote"], correct: 0 },
  { question: "Combien de dents a un adulte ?", answers: ["28", "32", "30", "36"], correct: 1 },
  { question: "Quelle planète est la plus proche du Soleil ?", answers: ["Vénus", "Mercure", "Mars", "Terre"], correct: 1 },
  { question: "Quelle est la formule de l'eau ?", answers: ["O2", "H2", "H2O", "OH"], correct: 2 },
  { question: "Quel est l'os le plus long du corps ?", answers: ["Fémur", "Tibia", "Humérus", "Radius"], correct: 0 },
  { question: "Quel scientifique a formulé la théorie de la relativité ?", answers: ["Einstein", "Newton", "Darwin", "Tesla"], correct: 0 }
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
