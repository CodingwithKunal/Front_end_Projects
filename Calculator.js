
// Select all button elements on the page
let buttons = document.querySelectorAll("button");
// Define the operations that we can click one time on button.. 
const OPERATIONS = ['+', '-', '*', '/', '%', '.'];
// Initialize the calculator string
let string = "";



// Add event listener to each button
Array.from(buttons).forEach((Button) => {
    Button.addEventListener("click", (e) => {
        console.log(e.target)

        // 1 Handle equals button
        if (e.target.innerHTML == '=') {
            string = eval(string)
            // Update the input field with the modified string
            document.querySelector('input').value = string;
        }


        // 2 Handle clear button
        else if (e.target.innerHTML == 'C') {
            string = '';
            document.querySelector("input").value = string;
        }


        // 3 Handle square button
        else if (e.target.innerHTML == "x^2") {
            string = string * 2;
            document.querySelector('input').value = string;

        }

        // 4 Check if the clicked element is an operation and if the input string ends with that operation click one time only on operations
        else if (OPERATIONS.includes(e.target.innerHTML) && string.endsWith(e.target.innerHTML)) {

            string = string.slice(0, -1);
            document.querySelector('input').value = string;

        }

        // 5 Handle backspace button
        else if (e.target.innerHTML == "X") {
            // Remove the last character from the input string both are same condition
            // 1 condi..
             string = string.slice(0, -1);
             // 2
            // string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;

        }

        // Handle number buttons
        else {
            let text = e.target.innerHTML;
            string += text
            document.querySelector("input").value = string;
        }



    }
    )
})

