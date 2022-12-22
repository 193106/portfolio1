/*
 You can change anything in these files--HTML tags, CSS styles, JavaScript functions, etc. 
 Do what you need to do to make it suitable for your STEM problem.

 The getInput function will take user input from the textbox with id="input1" on the page. 
 It will run when the user clicks on the GO button.
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the span element that has id="output1" on the page. 
 You can call this function from your code and give it your result.
*/

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
function getInput() {
  let inputField = document.querySelector("#input1");
  let inputField2 = document.querySelector("#input2");
  let input = inputField.value;
  let input2 = inputField2.value;

  // do something with the input
  writeOutput(input, input2); // <-- replace this with YOUR CODE
}

// This function will write some text to the output span on the page.
function writeOutput(a, b) {
var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = c;
}


document.querySelector("#buttonGo").addEventListener("click", getInput);
