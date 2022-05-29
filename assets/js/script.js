// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteria = new Array(5);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  criterias();

  let filtrar = [];
  let numfiltrar = 0;
  let password = "";
  let checar = [];
  let bandera = true;
  let option = 0;

  // filters what you don´t need in your password
  for (let i = 1; i < 5; i++) {
    if (criteria[i] == "yes") {
      filtrar[numfiltrar] = i;
      numfiltrar += 1;
    }
  }

  do {
    password = "";
    numfiltrar = 0;
    checar = [];

    //this cicle repeats itself as many times as the length you input
    do {  

      //generates a random number that enters the switch to generate a character
      option = Math.floor((Math.random() * (filtrar.length)));

      //checar is an array that stores the random to verify that the password has everything requested by the user
      checar[numfiltrar] = filtrar[option];

      //each case generates a different type of character
      switch (filtrar[option]) {

        case 1: //lowercase
          password += String.fromCharCode(Math.floor((Math.random() * 26) + 97));
          break;

        case 2: //uppercase
          password += String.fromCharCode(Math.floor((Math.random() * 26) + 65));
          break;

        case 3: //special chararcters
          password += String.fromCharCode(Math.floor((Math.random() * 15) + 33));
          break;

        case 4: //numbers
          password += String.fromCharCode(Math.floor((Math.random() * 10) + 48));
          break;

        default:
          break;
      }
      numfiltrar += 1;
    } while (numfiltrar < criteria[0]);


    //verifies that the password has the necessary requirements by checking checar
    for (let i = 0; i < filtrar.length; i++) {
      for (let j = 0; j < checar.length; j++) {
        if (filtrar[i] == checar[j]) {
          bandera = true;
          break;
        }else {
          bandera=false;
        }
      }
      if (bandera == false) {
        break;
      }
    }
  } while (!bandera);
    
  return password;

}


function criterias(){

  var contador = 0;
  var bandera = true;

  //ask for the length of the password and validates that the value is correct
  do{
    criteria[0] = prompt("choose a length of at least 8 characters and no more than 128 characters");

    if( criteria[0] >=8 && criteria[0] <=128 ){
      bandera = false;
    }else{
      alert("invalid length");
    }

  }while(bandera);

  //the do while verifies that at least one option is selected
  do{

    //asks if the user wants lowercase and verifies if the value is correct
    do {
      criteria[1] = prompt("do you want to include lowercase characters in your passsword? yes or no");
      if (criteria[1] != "no" && criteria[1] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[1] != "no" && criteria[1] != "yes");

    //asks if the user wants uppercase and verifies if the value is correct
    do {
      criteria[2] = prompt("do you want to include uppercase characters in your passsword? yes or no");
      if (criteria[2] != "no" && criteria[2] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[2] != "no" && criteria[2] != "yes");

    //asks if the user wants special characters and verifies if the value is correct
    do {
      criteria[3] = prompt("do you want to include special characters in your passsword? yes or no");
      if (criteria[3] != "no" && criteria[3] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[3] != "no" && criteria[3] != "yes");
    
    //asks if the user wants numbers and verifies if the value is correct
    do {
      criteria[4] = prompt("do you want to include numbers in your passsword? yes or no");
      if (criteria[4] != "no" && criteria[4] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[4] != "no" && criteria[4] != "yes");

    //verifies that at least one value is selected
    if(criteria[1] == "no" && criteria[2] == "no" && criteria[3] == "no" && criteria[4] == "no"){
      alert("at least one character type should be selected")
    }else{
      bandera = true;
    }
  }while(!bandera);
}


