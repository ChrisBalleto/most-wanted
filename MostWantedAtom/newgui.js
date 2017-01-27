
function searchByEyeColor(eyeColor, people){
  return people.filter(function(person){
    return eyeColor.toLowerCase() == person.eyeColor.toLowerCase();
});
}
function searchByWeight(weight, people){
  return people.filter(function(person){
    return weight == person.weight;
    });
}
function searchByHeight(height, people){
  return people.filter(function(person){
    return height == person.height;
    });
}
function searchByOccupation(occupation, people){
    return people.filter(function(person){
      return occupation.toLowerCase() == person.occupation.toLowerCase();
});
}
function searchByGender(gender, people){
    return people.filter(function(person){
      return gender.toLowerCase() == person.gender.toLowerCase();
});
}
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
function getDescendants(id, people, descendants=[], counter=-1){
   var temporaryArray = people.filter(function(person){
    return (person.parents.includes(id));
  });
    descendants = descendants.concat(temporaryArray);
    if (counter !=descendants.length - 1){
      counter++;
      getDescendants(descendants[counter].id, people, descendants, counter);
    }else{
      displayResultsVertical(people, descendants);
  }
}
function getSpouse(id, people, family=[]){
  return people.filter(function(person){
    return(id == person.currentSpouse);
  });
}
function getChildren(id,people,family=[]){
  return people.filter(function(person){
    return (person.parents.includes(id));
  });
}
function getParents(person,people,family=[]){
  return people.filter(function(personInPeople){
    return (person.parents.includes(personInPeople.id));
  });
}
function getFamily(person, people, family=[]){ //use .id for person parameter
  family = family.concat(getParents(person, people), getSpouse(person.id, people), getChildren(person.id, people));
  displayResultsVertical(people, family);
}
function getIdByName(fName, lName, people){
  return people.filter(function(person){
    return (fName.toLowerCase() == person.firstName.toLowerCase() && lName.toLowerCase() == person.lastName.toLowerCase());
});
}
function openPrompt(people, subset=[], searchType="search") {
    var input = prompt("What would you like to "+searchType+"? (N)ame, (T)raits, (D)escendants, (F)amily, (K)in");
    var nameInput = ["name", "nam","n"];
    var traitInput = ["trait","traits", "triats", "triat", "t"];
    var familyInput = ["fam","family", "f", "famly"];
    var kinInput = ["kin","next of kin", "kins", "k"];
    var descendantInput = ["des", "descendants", "descendant", "children", "kids", "spawn", "desc","d"];
    if (nameInput.includes(input.toLowerCase())) {
        searchByNamePrompt(people);
    }else if (traitInput.includes(input.toLowerCase())) {
        traitPrompt(people);
    }else if (descendantInput.includes(input.toLowerCase())) {
        var person = getIdByName(getFirstName(), getLastName(), people);
        var descendants = (getDescendants(person[0].id, people));
        displayResultsVertical(people, descendants);
    }else if(familyInput.includes(input.toLowerCase())){
        person = getIdByName(getFirstName(), getLastName(), people);
        var family = (getFamily(person[0], people));
    }else{
        alert("Please enter correct value");
        openPrompt(people);
    }
}
function getTrait(trait){
  return prompt("Please enter the " + trait);
}
function descendantPrompt(){
  return prompt("Please enter First and Last name of person you would like decendants of:");
}
function traitPrompt(people, subset) {
  var input = prompt("What trait would you like to search? (G)ender, (H)eight, (W)eight, (E)ye Color, (O)ccupation, (A)ge");
  if(input.toLowerCase() == "g"){
    var trait = "gender.";
    displayResultsVertical(people, searchByGender(getTrait(trait), people));
  }else if(input.toLowerCase() == "h"){
    trait = "height in #'#\".";
    displayResultsVertical(people, searchByHeight(getTrait(trait), people));
  }else if(input.toLowerCase() == "w"){
    trait = "weight in pounds.";
    displayResultsVertical(people, searchByWeight(getTrait(trait), people));
  }else if(input.toLowerCase() == "e"){
    trait = "eye color.";
    displayResultsVertical(people, searchByEyeColor(getTrait(trait), people));
  }else if(input.toLowerCase() == "o"){
    trait = "occupation.";
    displayResultsVertical(people, searchByOccupation(getTrait(trait), people));
  }else if(input.toLowerCase() == "a"){
    trait = "age in years.";
    displayResultsVertical(people, initSearchByFirstAndLastName(getTrait(trait), people));
  }else{
    alert("please enter a valid respsonse");
    searchByNamePrompt(people);
  }
}
function searchByNamePrompt(people) {
    var input = prompt("Do you know the (F)irst Name, (L)ast name, or (B)oth?");
    if(input.toLowerCase() == "f"){
      displayResultsVertical(people, initSearchByFirstName(getFirstName(), people));
    }else if(input.toLowerCase() == "l"){
      displayResultsVertical(people, initSearchByLastName(getLastName(), people));
    }else if(input.toLowerCase() == "b"){
      displayResultsVertical(people, initSearchByFirstAndLastName(getFirstName(), getLastName(), people));
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
function displaySingleResult(people, subset){
  var temporaryArray = subset;
  for (var i=0; i<temporaryArray.length;i++){
    var object = subset[i];
    var firstName = object.firstName;
    var lastName = object.lastName;
    var gender = object.gender;
    var dob = object.dob;
    var height = object.height;
    var weight = object.weight;
    var eyeColor = object.eyeColor;
    var occupation = object.occupation;
    alert("Here is the only result..." + '\n'+'\n' + firstName + " " + lastName + '\n' + "Gender: " + gender + '\n' + "Date of Birth: " + dob + '\n' + "Weight: " + weight + " lbs" + '\n' + "Height: " + height + '\n'+ "Eye Color: " + eyeColor + '\n'+ "Occupation: " + occupation);
  }
  openPrompt(people);
}
function displayResultsVertical(people, subset){
  var temporaryArray = [];
  for (var i=0; i<subset.length;i++){
    temporaryArray[i] = subset[i].firstName + ' ' + subset[i].lastName;
  }
  if(subset.length == 0){
    alert("No results returned, thank you for searching!");
    openPrompt(people);
  }else if(subset.length == 1){
    displaySingleResult(people, subset);
  }
  alert(temporaryArray.join("\n"));
  filterFurtherPrompt(people, subset);
}
function filterFurtherPrompt(people, subset){
  var input = prompt("Would you like to filter these results further? Y or N?");
  if(input.toLowerCase() == "y"){
    var searchType = "filter";
    openPrompt(subset, searchType);
  }else if(input.toLowerCase() == "n"){
    openPrompt(people);
  }
}
