document.addEventListener('DOMContentLoaded', function () {
  let progressBar = document.querySelector('.skill__bar-progress--html');
  progressBar.style.setProperty('--progress-width', '95%');
});

document.addEventListener('DOMContentLoaded', function () {
  let progressBar = document.querySelector('.skill__bar-progress--css');
  progressBar.style.setProperty('--progress-width', '90%');
});

document.addEventListener('DOMContentLoaded', function () {
  let progressBar = document.querySelector('.skill__bar-progress--scss');
  progressBar.style.setProperty('--progress-width', '80%');
});

document.addEventListener('DOMContentLoaded', function () {
  let progressBar = document.querySelector('.skill__bar-progress--js');
  progressBar.style.setProperty('--progress-width', '30%');
});

document.addEventListener('DOMContentLoaded', function () {
  let progressBar = document.querySelector('.skill__bar-progress--russian');
  progressBar.style.setProperty('--progress-width', '95%');
});

document.addEventListener('DOMContentLoaded', function () {
  let progressBar = document.querySelector('.skill__bar-progress--english');
  progressBar.style.setProperty('--progress-width', '20%');
});

function greeting(name) {
  const greetings = ['Hello', 'Hi', 'Welcome'];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const randomGreeting = greetings[randomIndex];
  return `${randomGreeting} ${name}`;
}

function greeting(name) {
  const greetings = ['Hello', 'Hi', 'Welcome'];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const randomGreeting = greetings[randomIndex];
  return `${randomGreeting} ${name}`;
}
