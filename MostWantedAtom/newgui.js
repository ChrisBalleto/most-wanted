
function initSearchByFirstAndLastName(fName, lName, people) {
  return people.filter(function(person){
    return fName.toLowerCase() == person.firstName.toLowerCase() && lName.toLowerCase() == person.lastName.toLowerCase();
});
}
function initSearchByFirstName(fName, people) {
  return people.filter(function(person){
    return fName.toLowerCase() == person.firstName.toLowerCase();
});
}
function initSearchByLastName(lName, people) {
  return people.filter(function(person){
    return  lName.toLowerCase() == person.lastName.toLowerCase();
});
}
function getDescendants(id, people, descendants=[]){
   return people.filter(function(person){
    return (person.parents.includes(id));
  });

}
function getIdByName(fName, lName, people){
  return people.filter(function(person){
    return (fName.toLowerCase() == person.firstName.toLowerCase() && lName.toLowerCase() == person.lastName.toLowerCase());
});
}

function openPrompt(people) {
    var input = prompt("What would you like to search by? (name, traits, descendants, family, kin)");
    var nameInput = ["name", "nam"];
    var traitInput = ["trait","trait"];
    var descendantInput = ["des", "descendants", "descendant", "children", "kids", "spawn", "desc"];
    if (nameInput.includes(input.toLowerCase())) {
        searchByNamePrompt(people);
    }
    else if (traitInput.includes(input.toLowerCase())) {
        traitPrompt(people);
    }
    else if (descendantInput.includes(input.toLowerCase())) {
        var descendants = [];
        var person = getIdByName(getFirstName(), getLastName(), people);
        descendants = (getDescendants(person[0].id, people));
        //descendants = (getDescendants(descendants[0].id, people, descendants));
        displayResults(people, descendants);
    }
    else {
        alert("Please enter correct value");
        openPrompt(people);
    }
}
function descendantPrompt(){
  return prompt("Please enter First and Last name of person you would like decendants of:");
}
function traitPrompt() {

}
function searchByNamePrompt(people) {
  var personSearch = [];
    var input = prompt("Do you know the (F)irst Name, (L)ast name, or (B)oth?");
    if(input.toLowerCase() == "f"){
      displayResults(people, initSearchByFirstName(getFirstName(), people));
    }else if(input.toLowerCase() == "l"){
      displayResults(people, initSearchByLastName(getLastName(), people));
    }else if(input.toLowerCase() == "b"){
      displayResults(people, initSearchByFirstAndLastName(getFirstName(), getLastName(), people));
    }else{
      alert("please enter a valid respsonse");
      searchByNamePrompt();
    }
}
function getFirstName(){
  return prompt("Enter First Name");
}
function getLastName(){
  return prompt("Enter Last Name");
}
function displayResults(people, subset){
  var temporaryArray = subset;
  for (var i=0; i<temporaryArray.length;i++){
    var object = subset[i];
    var firstName = object.firstName;
    var lastName = object.lastName;
    alert(firstName + " " + lastName + '\n' );
  }
  filterFurtherPrompt(subset, people);
}
function filterFurtherPrompt(subset, people){
  return prompt("Would you like to filter these results further?");
}
function isNumeric() {

}
function getAge(){

}
function getHeight(){

}
function getWeight(){

}
function getEye(){

}
function getOccupation(){

}
