describe('function searchByWeight', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it(156, function(){
    var expected = [{
      "id": 159819275,
      "firstName": "Jasmine",
      "lastName": "Bob",
      "gender": "female",
      "dob": "12/18/1969",
      "height": 58,
      "weight": 156,
      "eyeColor": "blue",
      "occupation": "assistant",
      "parents": [409574486, 260451248],
      "currentSpouse": 951747547
    }];
    expect(searchByWeight(156, people)).toEqual(expected);
  });
});

describe('function searchByAge', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it(29, function(){
    var expected = [
      {
        "id": 313998000,
        "firstName": "Joey",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/02/1987",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [313207561, 313997561],
        "currentSpouse": null
      }
    ];
    expect(searchByAge(29, people)).toEqual(expected);
  });
});

describe('function getNephewNeice', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}],
    person = {
      "id": 969837479,
      "firstName": "Eloise",
      "lastName": "Madden",
      "gender": "female",
      "dob": "12/11/1961",
      "height": 63,
      "weight": 241,
      "eyeColor": "brown",
      "occupation": "assistant",
      "parents": [693243224, 888201200],
      "currentSpouse": null
    };
  });
  it('Eloise Madden', function(){
    var expected = [
      {
        "id": 313998000,
        "firstName": "Joey",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/02/1987",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [313207561, 313997561],
        "currentSpouse": null
      }
    ];
    expect(getNephewNeice(person, people)).toEqual(expected);
  });
});

describe('function getAgeFromDob', function(){
  it('12/23/1969', function(){
    expect(getAgeFromDob('12/23/1969')).toEqual(47);
  });
});

describe('function convertFeetInchestoInchesString', function(){
  it("6"+'"'+'7'+"'", function(){
    expect(convertInchesToNumberAndFeetInches(81)).toEqual("6"+"'"+'9'+'"');
  });
});

describe('function convertInchesToNumberAndFeetInches', function(){
  it("6"+'"'+'7'+"'", function(){
    expect(convertFeetInchestoInchesString("6"+"'"+'7'+'"')).toEqual(79);
  });
});

describe('function getAgeRangeEnd', function(){
  it("45-98", function(){
    expect(getAgeRangeEnd("45-98")).toEqual(98);
  });
});

describe('function getAgeRangeStart', function(){
  it("45-98", function(){
    expect(getAgeRangeStart("45-98")).toEqual(45);
  });
});

describe('function searchByAgeRange', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("40-60", function(){
    var expected = [
      {
        "id": 878013758,
        "firstName": "Jill",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "2/8/1972",
        "height": 74,
        "weight": 118,
        "eyeColor": "brown",
        "occupation": "programmer",
        "parents": [401222887],
        "currentSpouse": 294874671
      },
      {
        "id": 951747547,
        "firstName": "Ralph",
        "lastName": "Bob",
        "gender": "male",
        "dob": "12/23/1969",
        "height": 66,
        "weight": 179,
        "eyeColor": "blue",
        "occupation": "nurse",
        "parents": [401222887],
        "currentSpouse": 159819275
      },
      {
        "id": 159819275,
        "firstName": "Jasmine",
        "lastName": "Bob",
        "gender": "female",
        "dob": "12/18/1969",
        "height": 58,
        "weight": 156,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [409574486, 260451248],
        "currentSpouse": 951747547
      },
      {
        "id": 348457184,
        "firstName": "Annie",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "11/4/1970",
        "height": 62,
        "weight": 235,
        "eyeColor": "hazel",
        "occupation": "landscaper",
        "parents": [629807187, 464142841],
        "currentSpouse": null
      },
      {
        "id": 294874671,
        "firstName": "Dave",
        "lastName": "Pafoy",
        "gender": "male",
        "dob": "8/5/1967",
        "height": 61,
        "weight": 112,
        "eyeColor": "green",
        "occupation": "doctor",
        "parents": [629807187, 464142841],
        "currentSpouse": 878013758
      },
      {
        "id": 931247228,
        "firstName": "Amii",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "3/13/1963",
        "height": 74,
        "weight": 184,
        "eyeColor": "brown",
        "occupation": "landscaper",
        "parents": [629807187, 464142841],
        "currentSpouse": null
      },
      {
        "id": 822843554,
        "firstName": "Regina",
        "lastName": "Madden",
        "gender": "female",
        "dob": "7/26/1959",
        "height": 71,
        "weight": 249,
        "eyeColor": "brown",
        "occupation": "nurse",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 969837479,
        "firstName": "Eloise",
        "lastName": "Madden",
        "gender": "female",
        "dob": "12/11/1961",
        "height": 63,
        "weight": 241,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 313207561,
        "firstName": "Mattias",
        "lastName": "Madden",
        "gender": "male",
        "dob": "2/19/1966",
        "height": 70,
        "weight": 110,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": 313997561
      },
      {
        "id": 313997561,
        "firstName": "Ellen",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/19/1970",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": 313207561
      },
    ];
    expect(searchByAgeRange("40-60", people)).toEqual(expected);
  });
});

describe('function getSpouse', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it(982411429, function(){
    var expected = [
      {
        "id": 595767575,
        "firstName": "Missuz",
        "lastName": "Potatoo",
        "gender": "female",
        "dob": "10/28/1948",
        "height": 59,
        "weight": 137,
        "eyeColor": "blue",
        "occupation": "architect",
        "parents": [],
        "currentSpouse": 982411429
      }
    ];
    expect(getSpouse(982411429, people)).toEqual(expected);
  });
});

describe('function getPersonArrayByName', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("Billy Bob", function(){
    var expected = [
      {
        "id": 272822514,
        "firstName": "Billy",
        "lastName": "Bob",
        "gender": "male",
        "dob": "1/18/1949",
        "height": 71,
        "weight": 175,
        "eyeColor": "brown",
        "occupation": "programmer",
        "parents": [],
        "currentSpouse": 401222887
      }
    ];
    expect(getPersonArrayByName("Billy", "Bob", people)).toEqual(expected);
  });
});

describe('function getBloodAuntUncle', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
    person = {
      "id": 313998000,
      "firstName": "Joey",
      "lastName": "Madden",
      "gender": "female",
      "dob": "2/02/1987",
      "height": 67,
      "weight": 100,
      "eyeColor": "blue",
      "occupation": "doctor",
      "parents": [313207561, 313997561],
      "currentSpouse": null
    };
  });
  it("Joey Madden", function(){
    var expected = [
      {
        "id": 822843554,
        "firstName": "Regina",
        "lastName": "Madden",
        "gender": "female",
        "dob": "7/26/1959",
        "height": 71,
        "weight": 249,
        "eyeColor": "brown",
        "occupation": "nurse",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 819168108,
        "firstName": "Hana",
        "lastName": "Madden",
        "gender": "female",
        "dob": "10/7/1953",
        "height": 70,
        "weight": 187,
        "eyeColor": "brown",
        "occupation": "politician",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 969837479,
        "firstName": "Eloise",
        "lastName": "Madden",
        "gender": "female",
        "dob": "12/11/1961",
        "height": 63,
        "weight": 241,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      }
    ];
    expect(getBloodAuntUncle(person, people)).toEqual(expected);
  });
});

describe('function getParents', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
    person = {
      "id": 313998000,
      "firstName": "Joey",
      "lastName": "Madden",
      "gender": "female",
      "dob": "2/02/1987",
      "height": 67,
      "weight": 100,
      "eyeColor": "blue",
      "occupation": "doctor",
      "parents": [313207561, 313997561],
      "currentSpouse": null
    };
  });
  it("Joey Madden", function(){
    var expected = [
      {
        "id": 313207561,
        "firstName": "Mattias",
        "lastName": "Madden",
        "gender": "male",
        "dob": "2/19/1966",
        "height": 70,
        "weight": 110,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": 313997561
      },
      {
        "id": 313997561,
        "firstName": "Ellen",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/19/1970",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": 313207561
      }
    ];
    expect(getParents(person, people)).toEqual(expected);
  });
});

describe('function getParents', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
    person =
    {
      "id": 822843554,
      "firstName": "Regina",
      "lastName": "Madden",
      "gender": "female",
      "dob": "7/26/1959",
      "height": 71,
      "weight": 249,
      "eyeColor": "brown",
      "occupation": "nurse",
      "parents": [693243224, 888201200],
      "currentSpouse": null
    };
  });
  it("Joey Madden", function(){
    var expected = [
      {
        "id": 693243224,
        "firstName": "Joy",
        "lastName": "Madden",
        "gender": "female",
        "dob": "4/20/1939",
        "height": 69,
        "weight": 199,
        "eyeColor": "hazel",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": null
      },
      {
        "id": 888201200,
        "firstName": "Mader",
        "lastName": "Madden",
        "gender": "male",
        "dob": "5/6/1937",
        "height": 76,
        "weight": 205,
        "eyeColor": "black",
        "occupation": "landscaper",
        "parents": [],
        "currentSpouse": null
      }
    ];
    expect(getParents(person, people)).toEqual(expected);
  });
});

describe('function getChildren', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
    person =
    {
      "id": 888201200,
      "firstName": "Mader",
      "lastName": "Madden",
      "gender": "male",
      "dob": "5/6/1937",
      "height": 76,
      "weight": 205,
      "eyeColor": "black",
      "occupation": "landscaper",
      "parents": [],
      "currentSpouse": null
    };
  });
  it("Mader Madden", function(){
    var expected = [
      {
        "id": 822843554,
        "firstName": "Regina",
        "lastName": "Madden",
        "gender": "female",
        "dob": "7/26/1959",
        "height": 71,
        "weight": 249,
        "eyeColor": "brown",
        "occupation": "nurse",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 819168108,
        "firstName": "Hana",
        "lastName": "Madden",
        "gender": "female",
        "dob": "10/7/1953",
        "height": 70,
        "weight": 187,
        "eyeColor": "brown",
        "occupation": "politician",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 969837479,
        "firstName": "Eloise",
        "lastName": "Madden",
        "gender": "female",
        "dob": "12/11/1961",
        "height": 63,
        "weight": 241,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 313207561,
        "firstName": "Mattias",
        "lastName": "Madden",
        "gender": "male",
        "dob": "2/19/1966",
        "height": 70,
        "weight": 110,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": 313997561
      }
    ];
    expect(getChildren(person.id, people)).toEqual(expected);
  });
});

describe('function getChildren', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
    person =
    {
      "id": 313207561,
      "firstName": "Mattias",
      "lastName": "Madden",
      "gender": "male",
      "dob": "2/19/1966",
      "height": 70,
      "weight": 110,
      "eyeColor": "blue",
      "occupation": "assistant",
      "parents": [693243224, 888201200],
      "currentSpouse": 313997561
    };
  });
  it("Mader Madden", function(){
    var expected = [
      {
        "id": 313998000,
        "firstName": "Joey",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/02/1987",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [313207561, 313997561],
        "currentSpouse": null
      }
    ];
    expect(getChildren(person.id, people)).toEqual(expected);
  });
});

describe('function initSearchByFirstName', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("Michael", function(){
    var expected = [
      {
        "id": 409574486,
        "firstName": "Michael",
        "lastName": "Walkens",
        "gender": "male",
        "dob": "5/9/1951",
        "height": 76,
        "weight": 250,
        "eyeColor": "brown",
        "occupation": "landscaper",
        "parents": [],
        "currentSpouse": 260451248
      }
    ];
    expect(initSearchByFirstName("Michael", people)).toEqual(expected);
  });
});

describe('function initSearchByLastName', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("Potatoo", function(){
    var expected = [
      {
        "id": 982411429,
        "firstName": "Mister",
        "lastName": "Potatoo",
        "gender": "male",
        "dob": "12/18/1952",
        "height": 66,
        "weight": 170,
        "eyeColor": "hazel",
        "occupation": "architect",
        "parents": [],
        "currentSpouse": 595767575
      },
      {
        "id": 595767575,
        "firstName": "Missuz",
        "lastName": "Potatoo",
        "gender": "female",
        "dob": "10/28/1948",
        "height": 59,
        "weight": 137,
        "eyeColor": "blue",
        "occupation": "architect",
        "parents": [],
        "currentSpouse": 982411429
      }
    ];
    expect(initSearchByLastName("Potatoo", people)).toEqual(expected);
  });
});

describe('function searchByHeight', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("5"+"'"+"2"+"'", function(){
    var expected = [
      {
        "id": 260451248,
        "firstName": "Jon",
        "lastName": "Walkens",
        "gender": "male",
        "dob": "9/6/1945",
        "height": 62,
        "weight": 115,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [],
        "currentSpouse": 409574486
      },
      {
        "id": 348457184,
        "firstName": "Annie",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "11/4/1970",
        "height": 62,
        "weight": 235,
        "eyeColor": "hazel",
        "occupation": "landscaper",
        "parents": [629807187, 464142841],
        "currentSpouse": null
      }
    ];
    expect(searchByHeight("5"+"'"+"2"+"'", people)).toEqual(expected);
  });
});

describe('function searchByOccupation', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("Assistant", function(){
    var expected = [
      {
        "id": 401222887,
        "firstName": "Uma",
        "lastName": "Bob",
        "gender": "female",
        "dob": "4/1/1947",
        "height": 65,
        "weight": 162,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [],
        "currentSpouse": 272822514
      },
      {
        "id": 260451248,
        "firstName": "Jon",
        "lastName": "Walkens",
        "gender": "male",
        "dob": "9/6/1945",
        "height": 62,
        "weight": 115,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [],
        "currentSpouse": 409574486
      },
      {
        "id": 159819275,
        "firstName": "Jasmine",
        "lastName": "Bob",
        "gender": "female",
        "dob": "12/18/1969",
        "height": 58,
        "weight": 156,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [409574486, 260451248],
        "currentSpouse": 951747547
      },
      {
        "id": 969837479,
        "firstName": "Eloise",
        "lastName": "Madden",
        "gender": "female",
        "dob": "12/11/1961",
        "height": 63,
        "weight": 241,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 313207561,
        "firstName": "Mattias",
        "lastName": "Madden",
        "gender": "male",
        "dob": "2/19/1966",
        "height": 70,
        "weight": 110,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": 313997561
      },
    ];
    expect(searchByOccupation("assistant", people)).toEqual(expected);
  });
});

describe('function searchByEyeColor', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("Black", function(){
    var expected = [
      {
        "id": 629807187,
        "firstName": "Jack",
        "lastName": "Pafoy",
        "gender": "male",
        "dob": "3/16/1938",
        "height": 70,
        "weight": 207,
        "eyeColor": "black",
        "occupation": "nurse",
        "parents": [],
        "currentSpouse": 464142841
      },
      {
        "id": 464142841,
        "firstName": "Jen",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "4/10/1940",
        "height": 72,
        "weight": 256,
        "eyeColor": "black",
        "occupation": "student",
        "parents": [],
        "currentSpouse": 629807187
      },
      {
        "id": 888201200,
        "firstName": "Mader",
        "lastName": "Madden",
        "gender": "male",
        "dob": "5/6/1937",
        "height": 76,
        "weight": 205,
        "eyeColor": "black",
        "occupation": "landscaper",
        "parents": [],
        "currentSpouse": null
      },
    ];
    expect(searchByEyeColor("Black", people)).toEqual(expected);
  });
});

describe('function searchByGender', function(){
  beforeEach(function(){
    people  =[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];
  });
  it("Female", function(){
    var expected = [
      {
        "id": 401222887,
        "firstName": "Uma",
        "lastName": "Bob",
        "gender": "female",
        "dob": "4/1/1947",
        "height": 65,
        "weight": 162,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [],
        "currentSpouse": 272822514
      },
      {
        "id": 464142841,
        "firstName": "Jen",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "4/10/1940",
        "height": 72,
        "weight": 256,
        "eyeColor": "black",
        "occupation": "student",
        "parents": [],
        "currentSpouse": 629807187
      },
      {
        "id": 595767575,
        "firstName": "Missuz",
        "lastName": "Potatoo",
        "gender": "female",
        "dob": "10/28/1948",
        "height": 59,
        "weight": 137,
        "eyeColor": "blue",
        "occupation": "architect",
        "parents": [],
        "currentSpouse": 982411429
      },
      {
        "id": 693243224,
        "firstName": "Joy",
        "lastName": "Madden",
        "gender": "female",
        "dob": "4/20/1939",
        "height": 69,
        "weight": 199,
        "eyeColor": "hazel",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": null
      },
      {
        "id": 878013758,
        "firstName": "Jill",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "2/8/1972",
        "height": 74,
        "weight": 118,
        "eyeColor": "brown",
        "occupation": "programmer",
        "parents": [401222887],
        "currentSpouse": 294874671
      },
      {
        "id": 159819275,
        "firstName": "Jasmine",
        "lastName": "Bob",
        "gender": "female",
        "dob": "12/18/1969",
        "height": 58,
        "weight": 156,
        "eyeColor": "blue",
        "occupation": "assistant",
        "parents": [409574486, 260451248],
        "currentSpouse": 951747547
      },
      {
        "id": 348457184,
        "firstName": "Annie",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "11/4/1970",
        "height": 62,
        "weight": 235,
        "eyeColor": "hazel",
        "occupation": "landscaper",
        "parents": [629807187, 464142841],
        "currentSpouse": null
      },
      {
        "id": 931247228,
        "firstName": "Amii",
        "lastName": "Pafoy",
        "gender": "female",
        "dob": "3/13/1963",
        "height": 74,
        "weight": 184,
        "eyeColor": "brown",
        "occupation": "landscaper",
        "parents": [629807187, 464142841],
        "currentSpouse": null
      },
      {
        "id": 822843554,
        "firstName": "Regina",
        "lastName": "Madden",
        "gender": "female",
        "dob": "7/26/1959",
        "height": 71,
        "weight": 249,
        "eyeColor": "brown",
        "occupation": "nurse",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 819168108,
        "firstName": "Hana",
        "lastName": "Madden",
        "gender": "female",
        "dob": "10/7/1953",
        "height": 70,
        "weight": 187,
        "eyeColor": "brown",
        "occupation": "politician",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 969837479,
        "firstName": "Eloise",
        "lastName": "Madden",
        "gender": "female",
        "dob": "12/11/1961",
        "height": 63,
        "weight": 241,
        "eyeColor": "brown",
        "occupation": "assistant",
        "parents": [693243224, 888201200],
        "currentSpouse": null
      },
      {
        "id": 313997561,
        "firstName": "Ellen",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/19/1970",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [],
        "currentSpouse": 313207561
      },
      {
        "id": 313998000,
        "firstName": "Joey",
        "lastName": "Madden",
        "gender": "female",
        "dob": "2/02/1987",
        "height": 67,
        "weight": 100,
        "eyeColor": "blue",
        "occupation": "doctor",
        "parents": [313207561, 313997561],
        "currentSpouse": null
      },
    ];
    expect(searchByGender("Female", people)).toEqual(expected);
  });
});
