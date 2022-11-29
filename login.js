const defaultUser = "rogerio.diogines@ifce.com.br";
const defaultPwd = "rogerio#123";

var buttonLogin = document.querySelector("#button");
var attempt = 3;

buttonLogin.addEventListener("click", validate);

function validate(event) {
  event.preventDefault(); //Previne recarregamento da página

  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;
  var message = document.getElementById("message");
  var hasAttempt = attempt !== 0;

  if (email == "" || pwd == "") {
    message.textContent = "Preencha todos os campos!";
  } else if (
    email.includes("@") &&
    email == defaultUser &&
    pwd == defaultPwd &&
    hasAttempt
  ) {
    window.location = "initialPage.html"; // Redireciona para página principal.
    return false;
  } else {
    attempt--; // Decrementa tentativas.

    var msg1 = "Você tem apenas mais " + attempt + " tentativa!";
    var msg2 =
      "Suas tentativas acabaram! Recarregue a página e tente novamente.";

    message.textContent = msg1;

    // Desabilita os campos após 3 tentativas.
    if (attempt === 0) {
      message.textContent = msg2;
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("button").disabled = true;
      return false;
    }
  }
}

//Adiciona estilos diferente aos inputs, caso esse tenha ou não valor
let inputs = document.getElementsByClassName("input-form");

for (let input of inputs) {
  function transparentText() {
    var value = input.value.trim();

    value != ""
      ? input.classList.add("has-val")
      : input.classList.remove("has-val");
  }

  input.addEventListener("blur", transparentText);
}
