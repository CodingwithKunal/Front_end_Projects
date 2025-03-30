const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Add button function when you click on button
function addTask() {
    if (inputBox.value === '') {
        alert("Please Enter Something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        
        // Here we add date & time when you click on add to task . 
        //Get current date and time
        let now = new Date();
        let formattedDate = now.toLocaleDateString(); // Format: MM/DD/YYYY (default)
        let formattedTime = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
        // Add time to the list item
        let time = document.createElement("p")
        time.textContent = `${formattedDate} at ${formattedTime}`
        li.appendChild(time);

        // Here we add cross icon 
        let span = document.createElement("span")
        span.innerHTML = `<img src="https://pixsector.com/cache/6ecfa54e/avd0879fcbf810d38dc8e.png" alt="Close">`;
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // this function help to save your data whether you click on refresh button or not. 

}

// Click event listener for checking/unchecking tasks or removing them .
listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
        e.target.closest("li").remove();
        saveData(); // this function help to save your data whether you click on refresh button or not.
    }

}, false)

// Here we write funtion on saving the data on Browser even you refres the browser or not your data still save.
function saveData() {
    let data = listcontainer.innerHTML;
    localStorage.setItem("data", data);
} // This Function first save all data in localstorage 
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask(); // And this function show the all task after that you save the data in localstorage 
