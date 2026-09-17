// ALL VARIABLES AND DOC SELECTION

let addNote = document.querySelector("#addNote");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#down")
// 1. Form and Overlay Container
const noteForm = document.querySelector("#noteForm");

// 2. Individual Input Fields (using CSS nth-of-type selector)
const imageInput = noteForm.querySelector('.form-group:nth-of-type(1) input');
const fullNameInput = noteForm.querySelector('.form-group:nth-of-type(2) input');
const homeTownInput = noteForm.querySelector('.form-group:nth-of-type(3) input');
const purposeInput = noteForm.querySelector('.form-group:nth-of-type(4) input');

// 3. Category Checkboxes
const categoryCheckboxes = noteForm.querySelectorAll(".pill-checkbox");

// Specific category checkboxes if you need them individually:
const emergencyCheckbox = noteForm.querySelector(".pill-emergency").previousElementSibling;
const importantCheckbox = noteForm.querySelector(".pill-important").previousElementSibling;
const urgentCheckbox = noteForm.querySelector(".pill-urgent").previousElementSibling;
const noRushCheckbox = noteForm.querySelector(".pill-norush").previousElementSibling;

// 4. Form Action Buttons
const createBtn = noteForm.querySelector(".btn-create");
const closeFormBtn = document.querySelector("#closeFormBtn");

// 5. Stack & Controls selection
let stack = document.querySelector("#stack");
let currentIndex = 0;

// CODE STARTS HERE

function saveToLocalStorage(obj) {
    let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

addNote.addEventListener("click", function() {
    formContainer.style.display = "initial";
});

closeForm.addEventListener("click", function() {
    formContainer.style.display = "none";
});

formContainer.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const imageUrl = imageInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;
    categoryCheckboxes.forEach(function(cat) {
        if (cat.checked) {
            selected = cat.value;
        }
    });

    if (imageUrl === "") {
        alert("Please enter an Image URL.");
        return;
    }

    if (fullName === "") {
        alert("Please enter your Full Name.");
        return;
    }

    if (homeTown === "") {
        alert("Please enter your Home Town.");
        return;
    }

    if (purpose === "") {
        alert("Please enter your Purpose.");
        return;
    }

    if (!selected) {
        alert("Please select a category.");
        return;
    }

    saveToLocalStorage({
        imageUrl,
        fullName,
        purpose,
        homeTown,
        selected,
    });

    noteForm.reset(); // Fixed: changed 'form' to 'noteForm'
    formContainer.style.display = "none";
    showCards(); // Update UI after saving new card
});

function showCards() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    stack.innerHTML = "";

    if (tasks.length === 0) return;

    let count = Math.min(4, tasks.length);

    for (let i = 0; i < count; i++) {
        let index = (currentIndex + i) % tasks.length;
        let todo = tasks[index];

        let card = document.createElement("div");
        card.classList.add("card");

        let top = document.createElement("div");
        top.classList.add("top");

        let avatar = document.createElement("div");
        avatar.classList.add("avatar");

        if (todo.imageUrl) {
            let img = document.createElement("img");
            img.src = todo.imageUrl;
            img.alt = "avatar";
            avatar.appendChild(img);
        } else {
            avatar.textContent = todo.fullName ? todo.fullName.charAt(0).toUpperCase() : "?";
        }

        let title = document.createElement("div");
        title.classList.add("title");
        title.textContent = todo.fullName;

        top.appendChild(avatar);
        top.appendChild(title);

        let row1 = document.createElement("div");
        row1.classList.add("row");

        let label1 = document.createElement("span");
        label1.classList.add("label");
        label1.textContent = "Category";

        let value1 = document.createElement("span");
        value1.classList.add("value");
        value1.textContent = todo.selected || "N/A";

        row1.appendChild(label1);
        row1.appendChild(value1);

        let row2 = document.createElement("div");
        row2.classList.add("row");

        let label2 = document.createElement("span");
        label2.classList.add("label");
        label2.textContent = "Purpose";

        let value2 = document.createElement("span");
        value2.classList.add("value");
        value2.textContent = todo.purpose || "N/A";

        row2.appendChild(label2);
        row2.appendChild(value2);

        let actions = document.createElement("div");
        actions.classList.add("actions");

        let primaryBtn = document.createElement("button");
        primaryBtn.classList.add("btn-primary");
        primaryBtn.textContent = "✓ Complete";

        let secondaryBtn = document.createElement("button");
        secondaryBtn.classList.add("btn-secondary");
        secondaryBtn.textContent = "Edit";

        actions.appendChild(primaryBtn);
        actions.appendChild(secondaryBtn);

        card.appendChild(top);
        card.appendChild(row1);
        card.appendChild(row2);
        card.appendChild(actions);

        stack.appendChild(card);
    }
}

showCards();

function updateStack(){
    const cards = document.querySelectorAll(".stack .card");

    for( let i = 0; i < 3; i++){
        card.style.zIndex = 3 - index;
        card.style.transform = `transformY(${index * 10}px) scale(${1 - index * 0.02})`
        card.style.opacity = `${1 -i} * 0.02}`;
    }
}

upBtn.addEventListener("click",function(){
    let lastChild = stack.lastElementChild;
    if(lastChild){
        stack.insertBefore(lastChild, stack.firstElementChild);
        //update
        updateStack();
    }
});
downBtn.addEventListener("click",function(){
    const firstChild = stack.firstElementChild;
    if(firstChild){
        stack.appendChild(firstChild);
    //update
    updateStack();
    }
});