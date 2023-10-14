// <============================sign Up js================================>

var yourName = document.querySelector(".nameInput");
var yourEmail = document.querySelector(".emailInput");
var yourPassword = document.querySelector(".passwordInput");
var successText = document.querySelector(".successText");
var rebeatEmail = document.querySelector(".rebeatEmail");
// <============================sign in js================================>
var emailSingnIn = document.getElementById("email");
var passwordSingnIn = document.getElementById("password");
var btnSignin = document.getElementById("btnSignin ");
var layer = document.querySelector(".layer");
var btnLogout = document.getElementById("btnLogout");

// ============================================================

var cardContiner = [];
console.log(cardContiner);
if (localStorage.getItem("card") != null) {
  cardContiner = JSON.parse(localStorage.getItem("card"));
}

var btnSigUp = document.querySelector(".btnSigUp");
btnSigUp.addEventListener("click", function () {
  singnUp();
});

function singnUp() {
  if (regexYourName() && regexyourEmail() && regexyourPass()) {
    card = {
      name: yourName.value,
      email: yourEmail.value,
      password: yourPassword.value,
    };
    cardContiner.push(card);
        localStorage.setItem("card", JSON.stringify(cardContiner));
    }

    // if (cardContiner.toString().includes(yourEmail.value)) {
    //
    // } else {
    //   cardContiner.push(card);
    //   localStorage.setItem("card", JSON.stringify(cardContiner));
    // }
    // console.log(cardContiner);
  }

  // clear()

function clear() {
  yourName.value = "";
  yourEmail.value = "";
  yourPassword.value = "";
}
function regexYourName() {
  var arrorText = document.querySelector(".arrorText");
  var regex = /^[A-Z][a-z ]{3,15}$/;
  if (regex.test(yourName.value)) {
    // successText.classList.replace("d-none", "d-block");
    arrorText.classList.replace("d-block", "d-none");

    return true;
  } else {
    arrorText.classList.replace("d-none", "d-block");
    // successText.classList.replace("d-block", "d-none");
    return false;
  }
}
function regexyourEmail() {
  var arrorEmail = document.querySelector(".arrorEmail");
  var regex = /^[a-z0-9]{3,15}@gmail\.com$/;
  if (regex.test(yourEmail.value)) {
    // successText.classList.replace("d-none", "d-block");
    arrorEmail.classList.replace("d-block", "d-none");
    dublication();
    return true;
  } else {
    arrorEmail.classList.replace("d-none", "d-block");
    // successText.classList.replace("d-block", "d-none");
    return false;
  }
}
function regexyourPass() {
  var arrorpass = document.querySelector(".arrorpass");
  var regex = /^[A-Za-z0-9]{8,12}$/;
  if (regex.test(yourPassword.value)) {
    // successText.classList.replace("d-none", "d-block");
    arrorpass.classList.replace("d-block", "d-none");
    return true;
  } else {
    // successText.classList.replace("d-block", "d-none");
    arrorpass.classList.replace("d-none", "d-block");
    return false;
  }
}


function dublication() {
  for (var i = 0; i < cardContiner.length; i++) {
    if(cardContiner[i].email===yourEmail.value){
      rebeatEmail.classList.replace("d-none", "d-block");
      successText.classList.replace('d-block','d-none')
    }
    else
    {
      successText.classList.replace('d-none','d-block')
      rebeatEmail.classList.replace("d-block", "d-none");

    }

  }
}

// btnSignin.addEventListener('click', function(){
//     comberData(cardContiner)
// })

function comberData(cardArry) {
  var massige = document.querySelector(".layer h3");

  var emailSingin = emailSingnIn.value;
  var passSingin = passwordSingnIn.value;
  var errorMassige = document.querySelector(".errorMassige");
  var nameUser;

  for (var i = 0; i < cardArry.length; i++) {
    if (emailSingin == cardArry[i].email && passSingin == cardArry[i].password) {
      layer.classList.replace("d-none", "d-block");
      nameUser = cardArry[i].name;
      console.log(nameUser);
      massige.innerHTML = "Hello" + " " + nameUser;
      errorMassige.classList.replace("d-block", "d-none");
    } else {
      errorMassige.classList.replace("d-none", "d-block");
    }
  }
}
// btnLogout.addEventListener("click",function(){
//     logOut()
// })

function logOut() {
  layer.classList.replace("d-block", "d-none");
}
