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
        // Here we add cross icon 
        let span = document.createElement("span")
        span.innerHTML = `<img src="https://pixsector.com/cache/6ecfa54e/avd0879fcbf810d38dc8e.png" alt="Close">`;
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();

}

// Click event listener for checking/unchecking tasks or removing them
listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
        e.target.closest("li").remove();
        saveData();
    }

}, false)

// Here we write funtion on saving the data on Browser even you refres the browser or not your data still save.
function saveData() {
    let data = listcontainer.innerHTML;
    localStorage.setItem("data", data);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
