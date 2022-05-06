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

  // filtra lo que no quieres en tu contraseña
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

    //este ciclo se hace tantas veces como caracteres pidas en tu contraseña
    do {  

      //crea un numero trandom que lleva al switch donde se genera el caracter para la contraseña
      option = Math.floor((Math.random() * (filtrar.length)));

      //checar es un arreglo que almacena los random para verificar que la contraseña tenga todo lo solicitado por el usuario
      checar[numfiltrar] = filtrar[option];

      //cada case genera diferentes tipos de caracteres aleatorios
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


    // aqui se recorre la arreglo checar para verificar que la contraseña contengo todo lo solicitado
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

  //se pide la cantidad de caracteres y se valida que este dentro del rango permitido
  do{
    criteria[0] = prompt("choose a length of at least 8 characters and no more than 128 characters");

    if( criteria[0] >=8 && criteria[0] <=128 ){
      bandera = false;
    }else{
      alert("invalid length");
    }

  }while(bandera);

  //este do while pregunta y verifica que al menos seleccionaste una de las criterias 
  do{

    //pregunta si quieres lowercase characters y verifica que introduscas una respuesta valida
    do {
      criteria[1] = prompt("do you want to include lowercase characters in your passsword? yes or no");
      if (criteria[1] != "no" && criteria[1] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[1] != "no" && criteria[1] != "yes");

    //pregunta si quieres uppercase characters y verifica que introduscas una respuesta valida
    do {
      criteria[2] = prompt("do you want to include uppercase characters in your passsword? yes or no");
      if (criteria[2] != "no" && criteria[2] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[2] != "no" && criteria[2] != "yes");

    //pregunta si quieres special characters y verifica que introduscas una respuesta valida
    do {
      criteria[3] = prompt("do you want to include special characters in your passsword? yes or no");
      if (criteria[3] != "no" && criteria[3] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[3] != "no" && criteria[3] != "yes");

    //pregunta si quieres numbers y verifica que introduscas una respuesta valida
    do {
      criteria[4] = prompt("do you want to include numbers in your passsword? yes or no");
      if (criteria[4] != "no" && criteria[4] != "yes") {
        alert("please use yes or no as an answer");
      }
    } while (criteria[4] != "no" && criteria[4] != "yes");

    //verifica que se seleccione minimo una de las criterias de no ser asi repite de do while
    if(criteria[1] == "no" && criteria[2] == "no" && criteria[3] == "no" && criteria[4] == "no"){
      alert("at least one character type should be selected")
    }else{
      bandera = true;
    }
  }while(!bandera);
}


