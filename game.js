let currentColor = null;
let score = 0;
let level = 1;
let timer = 15;
let bottles = document.querySelectorAll('.bottle');
let scoreElement = document.getElementById('score-value');
let levelElement = document.getElementById('level-value');
let timeElement = document.getElementById('time-value');
let gameTitle = document.getElementById('game-title');
let gameInterval, timerInterval;

document.querySelectorAll('.color').forEach(button => {
  button.addEventListener('click', () => {
    currentColor = button.style.backgroundColor;
  });
});

bottles.forEach((bottle, index) => {
  bottle.addEventListener('click', () => {
    if (currentColor && !bottle.classList.contains('filled')) {
      bottle.style.backgroundColor = currentColor;
      bottle.classList.add('filled');
      updateScore();
    }
  });
});

function updateScore() {
  score += 10;
  scoreElement.textContent = score;

  if (score >= 30) {
    levelUp();
  }
}

function levelUp() {
  level++;
  levelElement.textContent = level;

  // Reset bottles for the next level
  bottles.forEach(bottle => {
    bottle.style.backgroundColor = '#e0e0e0';
    bottle.classList.remove('filled');
  });

  score = 0;
  scoreElement.textContent = score;
  timer = 15;
  timeElement.textContent = timer;

  clearInterval(gameInterval);
  startGame();
}

function startGame() {
  gameInterval = setInterval(() => {
    timer--;
    timeElement.textContent = timer;

    if (timer <= 0) {
      clearInterval(gameInterval);
      alert('Game Over! You reached Level ' + level);
    }
  }, 1000);
}

function redirect() {
  window.open('https://www.example.com', '_blank');
}

function startRedirectTimer() {
  setInterval(redirect, 15000);
}

// Initialize game
startGame();
startRedirectTimer();
