/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    mainMenu(searchByName(), people);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;    
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  //let foundPerson = filteredPeople[0];

  for(i = 0; i < filteredPeople.length; i++){
    if(filteredPeople == 0){
      alert("Person not found!");
      app();
  }
    else if(filteredPeople == 1){
      mainMenu(foundPerson, people);
    }
  }
  

}

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
  });

  return newArray;
}

function searchByHeight(people) {
  let userInputHeight = prompt("How tall is this person?")

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight){
      return true;
    }
  });

  return newArray;
}

function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What color is this person's eyes?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
  });

  return newArray;
}

function searchByGender(people) {
  let userInputGender = prompt("What gender is the person?");

  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
  });

  return newArray;
}

function searchByAge(people) {
  let userInputAge = prompt("How old is the person?");
  calculateAge();

  let newArray = people.filter(function (el) {
    if(el.dob == userInputAge) {
      return true;
    }
  });

  return newArray;
}

function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the person's occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
  });

  return newArray;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    getPersonDescendants();
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(person){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  
    for(let i = 0;i < data.length; i++){
      if(data[i].firstName === firstName && data[i].lastName === lastName){
        return data[i];
      }
    }
  // TODO: find the person using the name they entered

}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Age: " + person.age + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Kids: " + person.kids + "\n";
  personInfo += "Current Spouse: " + person.currentSpouse + "\n";
    // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

//age
// function searchByAge(people){
//  let userInputAge = prompt("Do you know the person's date of birth: ");
//  let newArray = people.filter(function (el) {
//    if(el.dob == userInputAge) {
//      return true;
//    }
// });

// }


// function userInputAge(year, month, day){
//  let currentDate = searchByAge();
//  let currentYear = currentDate.getFullYear();
//  let currentMonth = currentMonth.getUTCMonth() + 1;
//  let currentDay = currentDate.getUTCDay();
//  let age = currentYear - year;
//  if (currentMonth > month) {
//     return age;
//  } 
//  else {
//      if (currentDay >= day) {
//        return age;
//      } 
//      else {
//        age--;
//        return age;
//      }
//  }
// }

function calculateAge(dob){
	var dobValue = [];
	if (dob != null){
	dobValue = dob.split('/');
	born = new Date(dobValue[2]-1900, dobValue[0]-1, dobValue[1]);
	today = new Date();
	var age =  Math.floor((today.getTime() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
	
		return age;
	}
	
}

