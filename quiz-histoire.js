const questions = [
  { question: "Qui était Napoléon Bonaparte ?", answers: ["Un roi", "Un empereur", "Un peintre", "Un philosophe"], correct: 1 },
  { question: "Quand a eu lieu la Révolution française ?", answers: ["1492", "1789", "1914", "1848"], correct: 1 },
  { question: "Qui a découvert l'Amérique ?", answers: ["Galilée", "Christophe Colomb", "Newton", "Vasco de Gama"], correct: 1 },
  { question: "Quel mur est tombé en 1989 ?", answers: ["Mur de Chine", "Mur de Berlin", "Mur de Pise", "Mur d'Hadrien"], correct: 1 },
  { question: "Où est née la démocratie ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 1 },
  { question: "Qui a été le premier président des USA ?", answers: ["Lincoln", "Obama", "Washington", "Jefferson"], correct: 2 },
  { question: "En quelle année a commencé la 1ère Guerre mondiale ?", answers: ["1945", "1914", "1815", "1939"], correct: 1 },
  { question: "Quel pays a colonisé l'Algérie ?", answers: ["Espagne", "Italie", "France", "Portugal"], correct: 2 },
  { question: "Quand a été signée la Déclaration des droits de l'homme ?", answers: ["1789", "1918", "1945", "2000"], correct: 0 },
  { question: "Où se situe la pyramide de Khéops ?", answers: ["Rome", "Le Caire", "Mexico", "Athenes"], correct: 1 }
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
