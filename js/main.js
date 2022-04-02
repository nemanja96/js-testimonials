let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

// HTML Elementi
let img = document.getElementById("avatar");
let avatarName = document.getElementById("name");
let text = document.getElementById("text");
let job = document.getElementById("occupation");

let i = 0;

// Niz za avatar
let avatars = ["person1.png", "person2.png", "person3.png"];

// Niz za ime i prezime
let fullName = ["Nemanja Radivojević", "Tamara Perić", "Nikola Avramović"];

// Niz za tekst
let content = ["Jako zanimljiv JS program koji se pravi za desetak minuta.", "Veoma mi se sviđa jednostavan dizajn programa.", "Nadam se da će biti više ovakvih projekata."];

let occupation = ["Front-End Developer", "Preduzetnik", "Back-End Developer"]

let showPerson = () => {
    img.src = `img/${avatars[i]}`;
    avatarName.innerHTML = fullName[i];
    text.innerHTML = content[i];
    job.innerHTML = occupation[i];
}

rightArrow.addEventListener('click', function() {
    i++;
    if( i > 2 ){
        i = 0;
    }
    showPerson();
});

leftArrow.addEventListener('click', function() {
    i--;
    if( i < 0 ){
        i = 2;
    }
    showPerson();
});