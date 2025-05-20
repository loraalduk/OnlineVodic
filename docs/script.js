const questions = [
  {
    question: "U kojem su povijesnom razdoblju živjeli Vučedolci?",
    answers: ["Kameno doba", "Rimsko doba", "Rano brončano doba", "Srednji vijek"],
    correct: 2
  },
  {
    question: "Koje je glavno arheološko nalazište Vučedolske kulture?",
    answers: ["Karanac", "Vučedol", "Ilok", "Osijek"],
    correct: 1
  },
  {
    question: "Koji su materijali korišteni za gradnju kuća u Vučedolu?",
    answers: ["Beton i cigla", "Drvo, glina i slama", "Kamen i staklo", "Željezo i čelik"],
    correct: 1
  },
  {
    question: "Čime su se bavili Vučedolci?",
    answers: ["Samo ribolovom", "Samo pisanjem i crtanjem", "Poljoprivredom, stočarstvom i obradom metala", "Rudarstvom i trgovinom zlata"],
    correct: 2
  },
  {
    question: "Koji je najpoznatiji keramički predmet Vučedolske kulture?",
    answers: ["Vučedolski sat", "Vučedolska jarebica", "Vučedolska šalica", "Vučedolski tanjur"],
    correct: 1
  },
  {
    question: "U kojem je muzeju danas izložena Vučedolska jarebica?",
    answers: ["Etnografski muzej u Osijeku", "Muzej vučedolske kulture", "Hrvatski povijesni muzej", "Arheološki muzej u Zagrebu"],
    correct: 3
  },
  {
    question: "Gdje su Vučedolci smještali svoja naselja?",
    answers: ["U špiljama", "Na uzvisinama uz rijeke", "U pustinji", "Na planinskim vrhovima"],
    correct: 1
  },
  {
    question: "Koji su poslovi bili podijeljeni između muškaraca i žena?",
    answers: ["Svi su radili sve", "Muškarci su tkali, žene su lovile", "Muškarci su obrađivali metal, žene su izrađivale keramiku", "Djeca su radila sve poslove"],
    correct: 2
  },
  {
    question: "Što su Vučedolci koristili za određivanje godišnjih doba?",
    answers: ["Pješčani sat", "Zvijezde i zviježđa", "Suncokrete", "Raspored plime i oseke"],
    correct: 1
  },
  {
    question: "Zašto je Vučedolska kultura danas važna?",
    answers: ["Jer je najmlađa kultura Europe", "Jer je izumila papir", "Jer pokazuje napredak ljudi u prapovijesti", "Jer se temelji na grčkoj mitologiji"],
    correct: 2
  },
  {
    question: "Što je predstavljala Vučedolska jarebica?",
    answers: ["Posudu za vodu", "Simbol vlasti", "Obrednu posudu, možda božanstvo plodnosti", "Igračku za djecu"],
    correct: 2
  },
  {
    question: "Koje je zviježđe imalo važnu ulogu u vučedolskoj astronomiji?",
    answers: ["Veliki medvjed", "Orion", "Kasiopeja", "Andromeda"],
    correct: 1
  }
];

let current = 0;
let correctAnswers = 0;

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");

function showQuestion() {
  nextBtn.style.display = "none";
  const q = questions[current];
  questionText.textContent = `Pitanje ${current + 1}: ${q.question}`;
  answersContainer.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const q = questions[current];
  const buttons = answersContainer.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === q.correct) {
    correctAnswers++;
  }

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizContainer").style.display = "none";
  result.style.display = "block";
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  result.innerHTML = `<h2>Rezultat</h2><p>Točno si odgovorio/la na ${correctAnswers} od ${questions.length} pitanja (${percentage}%).</p>`;
}

showQuestion();
