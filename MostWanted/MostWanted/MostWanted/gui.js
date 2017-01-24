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
function convertAge(age) {
    var ageNum = Date.now - age;
}
function toLower(x){
    return x.toLowerCase();
}
function initSearchByName(people){
    var inputName = prompt("Please enter name to search:");
    var results = [];
    if (inputName.split(" ") > 1){
        var fName = inputName.split(" ", 1).toString();
        var lName = inputName.split(" ", 2).toString();
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

function getIndexByName(people){
	var inputName = prompt("Please enter name to search:");
	var results = [];
	if (inputName.split(" ") > 1){
	    var fName = inputName.split(" ", 1);
	    var lName = inputName.split(" ", 2);
	    for (var i = 0; i < people.length; i++) {
	        if (people[i]["firstName"].toLowerCase() == fName.toLowerCase() && people[i]["lastName"].toLowerCase() == lName.toLowerCase()) {
	            return (i);
	        }
	    }
	    }else{
	    for (var i = 0; i < people.length; i++) {		
	        if (people[i]["firstName"].toLowerCase() == inputName.toLowerCase() || people[i]["lastName"].toLowerCase() == inputName.toLowerCase()){
	            return(i);
	        }			    
	    }	    
	}
}

function descendantPrompt(people) {
    var input = prompt("Enter who's descendants you would like to Search for (first and last name)");
    searchByDescendants(input, people)
}

//function searchByDescendants(input, people, descendants) {
//    var descendants = [];
//    var personIndex = getIndexByName(input);
//    var fullName = input.split();
//    if (fullName.length > 1) {
//        var fName = input.split(" ", 1);
//        var lName = input.split(" ", 2);
//    } else {
//        alert("Must enter both First and Last name");
//        descendantPrompt(people);
//    }
//    people.filter(function(person)){
//        person => person.id
//    }
//    for (var i = 0; i < people.length;i++)

//    for (var i = 0; i < people.length; i++) {
        
//    }

//}
function compareIdToDecendants(people){

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
