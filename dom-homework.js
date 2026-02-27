document.addEventListener("DOMContentLoaded", function () {

    const div = document.getElementById("myDiv");
    const button = document.getElementById("addBtn");

    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to DOM homework";
    h1.classList.add("highlight");

    const p = document.createElement("p");
    p.textContent = "This is your first DOM homework assignment";

    const ul = document.createElement("ul");

    const listTexts = ["Iniya", "Beautiful", "Cool"];
    for (let i = 0; i < listTexts.length; i++) {
        const li = document.createElement("li");
        li.textContent = listTexts[i];
        ul.appendChild(li);
    }

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(ul);

    let number = 1;

    button.addEventListener("click", function () {
        const newItem = document.createElement("li");
        newItem.textContent = "New List Item " + number;
        newItem.style.color = randomColor();
        ul.appendChild(newItem);
        number++;
    });

    div.addEventListener("click", function () {
        div.style.backgroundColor = randomColor();
    });
});