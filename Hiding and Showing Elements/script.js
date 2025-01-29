const paragraph = document.getElementById('paragraph');
const button = document.getElementById('toggleButton');

button.addEventListener('click', function() {
  if (paragraph.style.visibility === 'hidden') {

    paragraph.style.visibility = 'visible';
    button.textContent = 'Hide Paragraph';
  } else {
    paragraph.style.visibility = 'hidden';
    button.textContent = 'Show Paragraph';
  }
});