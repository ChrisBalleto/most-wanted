
function searchByEyeColor(eyeColor, people){
  return people.filter(function(person){
    return eyeColor.toLowerCase() == person.eyeColor.toLowerCase();
});
}
function searchByAge(age, people){
  return people.filter(function(person){
    return age == getAgeFromDob(person.dob);
  });
}
function searchByAgeRange(range, people){
  return people.filter(function(person){
    return getAgeRangeStart(range) <= getAgeFromDob(person.dob) && getAgeRangeEnd(range) >= getAgeFromDob(person.dob);
  });
}
function searchByWeight(weight, people){
  return people.filter(function(person){
    return parseInt(weight) == person.weight;
    });
}
function searchByHeight(height, people){
  return people.filter(function(person){
    return convertFeetInchestoInchesString(height) == person.height;
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
function getSpouse(personId, people, family=[]){
  return people.filter(function(person){
    return(personId === person.currentSpouse);
  });
}
function getChildren(id,people,family=[]){
  return people.filter(function(person){
    return (person.parents.includes(id));
  });
}
function getParents(person,people,family=[]){
  return people.filter(function(personInPeople){
    return (person.parents.includes(personInPeople.id) && person.parents != []);
  });
}
function getSiblings(person, people,family=[]){
  return people.filter(function(personInPeople){
    return (personInPeople.parents.length > 0  && person.parents[1] == personInPeople.parents[1] && person.id != personInPeople.id);
  });
}
function getBloodAuntUncle(person, people, parents=[]){
  parents = getParents(person, people);
  for(var i = 0; i <parents.length;i++){
    return getSiblings(parents[i], people);
  }
}
function getBloodAuntUncleSpouse(person, people, spouses){
  for(var i = 0; i <spouses.length;i++){
    return getSpouse(spouses[i], people);
  }
}
function getGrandParents(person, people){
  var personParents = getParents(person, people);
  for(var i = 0; i < personParents.length;i++){
    return getParents(personParents[i], people);
}
}
function getGreatGrandParents(person, people){
  var personGrandParents = getGrandParents(person, people);
  for(var i = 0; i < personGrandParents.length;i++){
    return getParents(personGrandParents[i], people);
}
}
function getGrandChildren(person, people){
  var personChildren = getChildren(person, people);
    for(var i = 0; i < personChildren.length; i++){
      return getChildren(personChildren[i], people);
    }
  }
  function getGreatGrandChildren(person, people){
    var personGrandChildren = getGrandChildren(person, people);
      for(var i = 0; i < personGrandChildren.length; i++){
        return getChildren(personGrandChildren[i], people);
      }
    }
function removeUndefinded(subset){
  var cleanArray = new Array();
  for (var i = 0; i < subset.length;i++){
    if(subset[i]){
      cleanArray.push(subset[i]);
    }else{
      return cleanArray;
    }
  }
}

function getNephewNeice(person, people, auntsUncles=[]){
  var nephewNeice = [];
  auntsUncles = [];
  var parentsSiblings = [];
  parentsSiblings = getSiblings(person, people);
  auntsUncles = auntsUncles.concat(parentsSiblings);

  auntsUncles.forEach(function(el){
   nephewNeice = nephewNeice.concat(getChildren(el.id, people)); //changed auntsUncles from people
 });
 return nephewNeice;
}
function getKin(person, people, kin=[]){
  var personSiblings = [];
  personSiblings = personSiblings.concat(getSiblings(person, people));
  var personParents = [];
  personParents = personParents.concat(getParents(person,people));
  var bloodAuntUncle = [];
  bloodAuntUncle = getBloodAuntUncle(person, people);
  var personParentsSiblingsSpouses = [];
  personParentsSiblingsSpouses = getBloodAuntUncleSpouse(person, people, bloodAuntUncle);
  var personNeiceNephew =  getNephewNeice(person, people);
  var grandParents = getGrandParents(person, people);
  var grandChildren = getGrandChildren(person, people);
  var greatGrandParents = getGreatGrandParents(person, people);
  var greatGrandChildren = getGreatGrandChildren(person, people);
  kin = kin.concat(getFamily(person, people), grandChildren, grandParents, personNeiceNephew, bloodAuntUncle);
  displayResultsVertical(people, removeUndefinded(kin));
}
function getFamily(person, people, family=[]){ //use .id for person parameter
  family = family.concat(getSpouse(person.id, people), getChildren(person.id, people), getParents(person, people), getSiblings(person, people));
    return family;
}
function getPersonArrayByName(fName, lName, people){
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
        traitPrompt(people, subset, searchType);
    }else if (descendantInput.includes(input.toLowerCase())) {
        var person = getPersonArrayByName(getFirstName(), getLastName(), people);
        var descendants = (getDescendants(person[0].id, people));
        displayResultsVertical(people, descendants);
    }else if(familyInput.includes(input.toLowerCase())){
        person = getPersonArrayByName(getFirstName(), getLastName(), people);
        var family = (getFamily(person[0], people));
        displayResultsVertical(people, family);
    }else if (kinInput.includes(input.toLowerCase())) {
        person = getPersonArrayByName(getFirstName(), getLastName(), people);
        getKin(person[0], people);
    }else{
        alert("Please enter correct value");
        openPrompt(people);
    }
}
function getTraitPrompt(trait){
  return prompt("Please enter the " + trait);
}
function traitPrompt(people, subset, searchType) {
  var input = prompt("What trait would you like to " + searchType+"? (G)ender, (H)eight, (W)eight, (E)ye Color, (O)ccupation, (A)ge, or Age (R)ange");
  if(input.toLowerCase() == "g"){
    var trait = "gender.";
    displayResultsVertical(people, searchByGender(getTraitPrompt(trait), people));
  }else if(input.toLowerCase() == "h"){
    trait = "height in #'#\".";
    displayResultsVertical(people, searchByHeight(getTraitPrompt(trait), people));
  }else if(input.toLowerCase() == "w"){
    trait = "weight in pounds.";
    displayResultsVertical(people, searchByWeight(getTraitPrompt(trait), people));
  }else if(input.toLowerCase() == "e"){
    trait = "eye color.";
    displayResultsVertical(people, searchByEyeColor(getTraitPrompt(trait), people));
  }else if(input.toLowerCase() == "o"){
    trait = "occupation.";
    displayResultsVertical(people, searchByOccupation(getTraitPrompt(trait), people));
  }else if(input.toLowerCase() == "a"){
    trait = "age in years.";
    displayResultsVertical(people, searchByAge(getTraitPrompt(trait), people));
  }else if(input.toLowerCase() == "r"){
    trait = "age range. (##-##)";
    var range = getTraitPrompt(trait);
    displayResultsVertical(people, searchByAgeRange(getAgeRangeStart(range), getAgeRangeEnd(range), people));
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
function getAgeFromDob(dob){
  var splitDob = dob.split('/');
  var ageMonth = parseInt(splitDob[0]);
  var ageDay = parseInt(splitDob[1]);
  var ageYear = parseInt(splitDob[2]);
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth();
  var todayDay = today.getDate();
  var age = todayYear - ageYear;
  if( todayMonth < (ageMonth - 1)){
    age--;
  }else if (((ageMonth - 1) == todayMonth) && (todayDay < ageDay)){
    age--;
  }
  return age;
}
function convertFeetInchestoInchesString(height){
  var cleanHeight = height.replace(/['"]/g, "");
  var feet = cleanHeight.slice(0, 1);
  var inches = cleanHeight.slice(1, 2);
  var totalInches = (parseInt(feet)*12)+parseInt(inches);
  return totalInches;
}
function convertInchesToNumberAndFeetInches(inches){
  inches = parseInt(inches);
  var feet = Math.floor(inches / 12);
  inches %= 12;
  return feet+"'"+inches+'"';
}
function getFirstName(){
  return prompt("Enter First Name");
}
function getAgeRangeStart(range){
  var rangeStart = parseInt(range.split('-')[0]);
  return rangeStart;
}
function getAgeRangeEnd(range){
  var rangeEnd = parseInt(range.split('-')[1]);
  return rangeEnd;
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
    var dob = getAgeFromDob(object.dob);
    var height = convertInchesToNumberAndFeetInches(object.height);
    var weight = object.weight;
    var eyeColor = object.eyeColor;
    var occupation = object.occupation;
    alert("Here is the only result..." + '\n'+'\n' + firstName + " " + lastName + '\n' + "Gender: " + gender + '\n' + "Age: " + dob + '\n' + "Weight: " + weight + " lbs" + '\n' + "Height: " + height + '\n'+ "Eye Color: " + eyeColor + '\n'+ "Occupation: " + occupation);
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
    openPrompt(subset, subset, searchType);
  }else if(input.toLowerCase() == "n"){
    openPrompt(people);
  }
}
