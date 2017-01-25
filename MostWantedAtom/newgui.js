
function initSearchByName() {
    ;
}
function initSearchByTraits() {
    ;
}
function displayResults() {
    ;
}
function isNumeric() {
    ;
}
function getAge() {
    ;
}
function getHeight() {
    ;
}
function getWeight() {
    ;
}
function getEye() {
    ;
}
function getOccupation() {
    ;
}
function openPrompt(people) {
    var input = prompt("What would you like to search by? (name, traits, descendants, family, kin)");
    var yesInput = ["yes", "y", "yeah", "ya"];
    var nameInput = ["name", "nam"];
    var traitInput = ["trait","trait"];
    var descendantInput = ["des", "descendants", "descendant", "children", "kids", "spawn", "desc"]
    if (nameInput.includes(input.toLowerCase())) {
        namePrompt(people);
    }
    else if (traitInput.includes(input.toLowerCase())) {
        traitPrompt(people);
    }
    else if (descendantInput.includes(input.toLowerCase())) {
        descendantPrompt(people);
    }
    else {
        alert("Please enter correct value");
        openPrompt(people)
    }
}
function traitPrompt() {
    ;
}
function searchByNamePrompt() {
    var input = prompt("What is the person's name you are searching for? enter first and/or last")
}