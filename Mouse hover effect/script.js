const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('mouseenter', () => {
    myDiv.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('mouseleave', () => {
    myDiv.style.backgroundColor = 'blue';
});
