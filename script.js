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

  for (let i = 1; i < 5; i++) {
    if (criteria[i] == "yes") {
      filtrar[numfiltrar] = i;
      numfiltrar += 1;
    }
  }

  numfiltrar = 0;
  do {
    password = "";
    numfiltrar = 0;
    checar = [];
    do {  

      option = Math.floor((Math.random() * (filtrar.length)));
      checar[numfiltrar] = filtrar[option];
      //console.log(option);

      switch (filtrar[option]) {
        case 1:
          password += String.fromCharCode(Math.floor((Math.random() * 26) + 97));
          break;
        case 2:
          password += String.fromCharCode(Math.floor((Math.random() * 26) + 65));
          break;
        case 3:
          password += String.fromCharCode(Math.floor((Math.random() * 15) + 33));
          break;
        case 4:
          password += String.fromCharCode(Math.floor((Math.random() * 10) + 48));
          break;
        default:
          break;
      }
      numfiltrar += 1;
    } while (numfiltrar < criteria[0]);

    //console.log(filtrar, checar);

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

  do{
    criteria[0] = prompt("choose a length of at least 8 characters and no more than 128 characters");

    if( criteria[0] >=8 && criteria[0] <=128 ){
      bandera = false;
    }else{
      alert("invalid length");
    }

  }while(bandera);

  do{
    criteria[1] = prompt("do you want to include lowercase characters in your passsword? yes or no");
    criteria[2] = prompt("do you want to include uppercase characters in your passsword? yes or no");
    criteria[3] = prompt("do you want to include special characters in your passsword? yes or no");
    criteria[4] = prompt("do you want to include numeric characters in your passsword? yes or no");

    /*if (lowercase != "no" && lowercase != "yes") {
      alert("please use yes or no as an answer");
    }

    if (lowercase != "no" && lowercase != "yes") {
      alert("please use yes or no as an answer");
    }

    if (lowercase != "no" && lowercase != "yes") {
      alert("please use yes or no as an answer");
    }

    if (lowercase != "no" && lowercase != "yes") {
      alert("please use yes or no as an answer");
    }*/

    if(criteria[1] == "no" && criteria[2] == "no" && criteria[3] == "no" && criteria[4] == "no"){
      alert("at least one character type should be selected")
    }else{
      bandera = true;
    }
  }while(!bandera);

}


