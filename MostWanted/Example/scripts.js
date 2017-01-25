function addSixTo(x){
  return x + 6;
}
function searchByName(firstName, lastName, people){
  var subset = people.filter(function(person){
    if(firstName == person.firstName && lastName == person.lastName){
      return true
    }else{
      return false;
    }
  })
  return subset;
}
function SearchByName2(firstName, lastName, people){
  return people.filter(function(person){
    return firstName == person.firstName && lastName == person.lastName;
  });
}
