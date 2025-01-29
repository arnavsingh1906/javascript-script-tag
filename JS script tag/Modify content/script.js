const header = document.getElementById('header');
const intro = document.getElementById('intro');
const button = document.getElementById('btn');

function changeContent() {

  header.innerHTML = 'Welcome to JavaScript';
  
  intro.innerHTML = 'It is a javascript Example.';
  
  button.innerHTML = 'Content Changed!';
}

// button.addEventListener('click', changeContent);
