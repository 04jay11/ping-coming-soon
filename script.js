const email = document.querySelector("#email");
const errorMsg = document.querySelector("#err-msg");

function validar(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

email.focus();

function notify() {
  if (validar(email.value) == false || email.lenght == 0) {
    errorMsg.style.display = "block";
    email.style.border = "1px solid red";
  } else {
    errorMsg.style.display = "none";
    email.style.border = "";
    alert("Subscription completed successfully! Thank you! 😊");
    email.value = "";
    email.focus();
  }
}
