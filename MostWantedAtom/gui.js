function initSearch(people){
	var input = prompt("What would you like to search by? (name, traits, descendants, family, kin)");
	var yesInput = ["yes", "y", "yeah", "ya"];
	var nameInput = ["name", "nam"];
	var traitInput = ["height"];
	var descendantInput = ["des", "descendants", "descendant", "children", "kids", "spawn", "desc"]
	if (nameInput.includes(input.toLowerCase())) {
		initSearchByName(people);
	}
	else if(traitInput.includes(input.toLowerCase())){
		alert("Please enter correct value");
		initSearch(people);
	}
	else if (descendantInput.includes(input.toLowerCase())) {
		descendantPrompt(people);
	}
}

function initSearchByName(people){
	var inputName = prompt("Please enter name to search:");
	var results = [];
	var isFirstLast = inputName.split(" ");
	if (isFirstLast.length > 1){
		var fName = inputName.split(" ", 1);
		var lName = inputName.split(" ", 2);
		fName = fName.toString();
		lName = lName.slice(1, 2);
		for (var i = 0; i < people.length; i++) {
			if (people[i]["firstName"].toLowerCase() == fName[0].toLowerCase() && people[i]["lastName"].toLowerCase() == lName.toLowerCase()){
				displayResults(people, i);
			}
		}
		}else {
		for (var j = 0; j < people.length;j++) {
			if (people[i]["firstName"].toLowerCase() == inputName.toLowerCase() || people[i]["lastName"].toLowerCase() == inputName.toLowerCase()){
				displayResults(people, i);
			}
		}
	}
}

function getIndexByName(people, input){
	var inputName = input;
	var results = [];
	var isFirstLast = inputName.split(" ");
	if (isFirstLast.length > 1){
		var fName = input.split(" ", 1);
		var lName = input.split(" ", 2);
		fName = fName.toString();
		lName = lName.slice(1, 2);
		for (var i = 0; i < people.length; i++) {
			if (people[i]["firstName"].toLowerCase() == fName[0].toLowerCase() && people[i]["lastName"].toLowerCase() == lName[0].toLowerCase()) {
				return i;
			}
		}
		}else{
		for (var i = 0; i < people.length; i++) {
			if (people[i]["firstName"].toLowerCase() == inputName.toLowerCase() || people[i]["lastName"].toLowerCase() == inputName.toLowerCase()){
				return i;
			}
		}
	}
	return i;
}
function findName(people, input) {
	var peopleMatch = people.filter(function(el)){
	if(el.firstName.toLowerCase() == )

}
}
function descendantPrompt(people) {
	var input = prompt("Enter who's descendants you would like to Search for (first and last name)");
	searchByDescendants(input, people)
}

function searchByDescendants(input, people, descendants=[]) {
	var personIndex = (getIndexByName(people, input) - 1);
	var fullName = input.split(" ");
	if (fullName.length > 1) {
		var fName = input.split(" ", 1);
		var lName = input.split(" ", 2);
		fName = fName.toString();
		lName = lName.slice(1,2);
	} else {
		alert("Must enter both First and Last name");
		descendantPrompt(people);
	}
	return descendants = people.filter(function(person){
		if(person.parents === people[personIndex].id){
			return true;
		}
		else
		{
			return false;
		}
	})
}




function initSearchByTraits(){
	;
}
function displayResults(people, i) {

	alert(people[i]["firstName"] + ' ' + people[i]["lastName"]);
	//var output = '';
	//for (var property in people[i]) {
	//    output += property + ': ' + people[i][property] + ';';
	//}
	//alert(output);

	////str = JSON.stringify(people[i])
	////alert(str);
}
function isNumeric() {
	;
}
function getAge(){
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}
//fucntion seearchByName(fname,lmane
//    return poeple.filter(function(person){
//    }))
function getDescendants(id, people, descendants=[]){
   var temporaryArray = people.filter(function(person){
    return (person.parents.includes(id));
  });
    //descendants = descendants.concat(temporaryArray);
    if (temporaryArray.length > 0){
      descendants = descendants.concat(temporaryArray);
      for (var i = 0;i <temporaryArray.length;i++){
        var temp = getDescendants(temporaryArray[i].id, people, descendants);
          if (temp.length > descendants.length){
            descendants = temp;
            break;
          }
      }
    }else if (temporaryArray.length == 0){
    }
    return descendants;
}
