
let users = JSON.parse(localStorage.getItem("users")) || [];

let form = document.querySelector("form");

function displayCards() {

    document.querySelector(".cards").innerHTML = "";

    users.forEach(function(user, index) {



        // crads 1 create
        let card1 = document.createElement("div");
        card1.classList.add("card1");

        let p = document.createElement("p");
        p.textContent = user.category;
        card1.append(p);


        // img

        let img = document.createElement("img");
        img.src = user.image;
        img.style.width = "70px";
        img.style.height = "70px";
        img.style.borderRadius = "50%";
        img.style.objectFit = "cover";
        card1.append(img);

        let h1 = document.createElement("h1");
        h1.textContent = user.name;
        card1.append(h1);

        let h5 = document.createElement("h5");
        h5.textContent = user.email;
        card1.append(h5);

        let h3 = document.createElement("h3");
        h3.textContent = user.phone;
        card1.append(h3);

        let del = document.createElement("button");
        del.classList.add("del");
        del.innerText = "Delete";
        card1.append(del);

        del.addEventListener("click", function() {
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            displayCards();
        });

        document.querySelector(".cards").append(card1);

    });

}


// FORM SUBMIT

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let select = document.querySelector("select");
    let input = document.querySelector("#contact-image");

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");

    if (input.files.length === 0) {
        alert("Please select an image");
        return;
    }

    let reader = new FileReader();

    reader.onload = function() {

        let user = {
            category: select.value,
            image: reader.result,
            name: name.value,
            email: email.value,
            phone: phone.value
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        displayCards();

        form.reset();

    };

    reader.readAsDataURL(input.files[0]);

});


// SHOW SAVED CARDS AFTER RELOAD

displayCards();


// FRIENDS FILTER

let friend = document.querySelector("#Friends");

friend.addEventListener("click", function() {

    let cards = document.querySelectorAll(".card1");

    cards.forEach(function(card) {

        let p = card.querySelector("p");

        if (p.textContent === "friends") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// FAMILY FILTER

let family = document.querySelector("#Family");

family.addEventListener("click", function() {

    let cards = document.querySelectorAll(".card1");

    cards.forEach(function(card1) {

        let p = card1.querySelector("p");

        if (p.textContent === "family") {
            card1.style.display = "block";
        } else {
            card1.style.display = "none";
        }

    });

});


// WORK FILTER

let work = document.querySelector("#work");

work.addEventListener("click", function() {

    let cards = document.querySelectorAll(".card1");

    cards.forEach(function(element) {

        let p = element.querySelector("p");

        if (p.textContent === "work") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }

    });

});


// SEARCH FILTER

let search = document.querySelector("#search-wala");
let btn = document.querySelector("#all");

btn.addEventListener("click", function() {

    let inputSearch = search.value.toLowerCase().trim();

    let card1 = document.querySelectorAll(".card1");

    card1.forEach(function(e) {

        let title = e.querySelector("h1").innerText.toLowerCase();

        if (title.includes(inputSearch)) {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }

    });

});