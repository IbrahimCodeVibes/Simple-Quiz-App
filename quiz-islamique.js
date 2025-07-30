const quiz = {
  title: "Quiz Islamique",
  questions: [
    {
      question: "Quel est le premier pilier de l'Islam ?",
      options: ["La prière", "Le jeûne", "La profession de foi", "Le pèlerinage"],
      answer: "La profession de foi"
    },
    {
      question: "Combien de prières obligatoires y a-t-il par jour ?",
      options: ["3", "4", "5", "6"],
      answer: "5"
    },
    {
      question: "Quel mois est dédié au jeûne chez les musulmans ?",
      options: ["Rajab", "Ramadan", "Shawwal", "Dhou al-hijja"],
      answer: "Ramadan"
    },
    {
      question: "Quel prophète a reçu le Coran ?",
      options: ["Moussa", "Issa", "Mohammed", "Ibrahim"],
      answer: "Mohammed"
    },
    {
      question: "Quel est le livre sacré de l'Islam ?",
      options: ["La Torah", "La Bible", "Le Coran", "Les Psaumes"],
      answer: "Le Coran"
    },
    {
      question: "Combien de sourates contient le Coran ?",
      options: ["100", "112", "114", "120"],
      answer: "114"
    },
    {
      question: "Quel est le nom de l'ange qui a transmis le Coran ?",
      options: ["Israfil", "Mika'il", "Jibril", "Azra'il"],
      answer: "Jibril"
    },
    {
      question: "Où se situe la Kaaba ?",
      options: ["Médine", "Jérusalem", "La Mecque", "Bagdad"],
      answer: "La Mecque"
    },
    {
      question: "Combien de fois un musulman doit-il faire le pèlerinage s’il en a les moyens ?",
      options: ["Une fois dans sa vie", "Chaque année", "Tous les 10 ans", "Trois fois"],
      answer: "Une fois dans sa vie"
    },
    {
      question: "Quel est le jour le plus sacré de la semaine pour les musulmans ?",
      options: ["Samedi", "Dimanche", "Jeudi", "Vendredi"],
      answer: "Vendredi"
    }
  ]
};

const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quiz.questions[currentQuestion];
  questionTitle.textContent = q.question;
  optionsContainer.innerHTML = '';
  q.options.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = opt;
    div.onclick = () => selectOption(div, opt === q.answer);
    optionsContainer.appendChild(div);
  });
  nextBtn.style.display = 'none';
}

function selectOption(element, isCorrect) {
  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.onclick = null);
  element.style.backgroundColor = isCorrect ? '#C7F464' : '#FF6B6B';
  if (isCorrect) score++;
  nextBtn.style.display = 'inline-block';
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionTitle.textContent = `${quiz.title} terminé !`;
  optionsContainer.innerHTML = '';
  nextBtn.style.display = 'none';
  scoreDisplay.innerHTML = `🎉 Vous avez obtenu <strong>${score}/${quiz.questions.length}</strong> bonnes réponses.`;
}

loadQuestion();
