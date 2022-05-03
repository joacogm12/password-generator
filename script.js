// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  criterias();
  
}

function criterias(){

  var contador = 0;
  var bandera = true;

  do{
    var length = prompt("choose a length of at least 8 characters and no more than 128 characters");

    if( length>=8 && length<=128 ){
      bandera = false;
    }else{
      alert("invalid length");
    }

  }while(bandera);

  do{
    var lowercase = prompt("do you want to include lowercase characters in your passsword? yes or no");
    var uppercase = prompt("do you want to include uppercase characters in your passsword? yes or no");
    var special = prompt("do you want to include special characters in your passsword? yes or no");
    var numeric = prompt("do you want to include numeric characters in your passsword? yes or no");

    if(lowercase == "no" && uppercase == "no" && special == "no" && numeric == "no"){
      alert("at least one character type should be selected")
    }else{
      bandera = true;
    }
    console.log(lowercase, uppercase, special, numeric);
  }while(!bandera);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
