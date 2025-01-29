  const button = document.getElementById('clickButton');
  const clickCountDisplay = document.getElementById('clickCount');
  
  let clickCount = 0;

  button.addEventListener('click', function() {
    
    clickCount++;
    
    clickCountDisplay.textContent = `clicked the button ${clickCount} times.`;
  });

  // clickCountDisplay: This is typically a variable that stores a reference to a DOM element,
  // which could be something like a <div>, <span>, or any other HTML element.
  
  // .textContent: This is a property of the DOM element that allows you to get or 
  // set the text content inside that element. If you set textContent, it will replace
  // any existing text within the element with the new text you specify. If you get textContent,
  // it will return the current text inside the element.