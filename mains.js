const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
document.getElementById("error").hidden = true;

submit.addEventListener("click", () => {
  if (username.value == "") {
    alert("enter usrname");
  } else if (password.value == "") {
    alert("enter password");
  } else if (username.value == "admin" && password.value == "admin") {
    document.getElementById("error").hidden = true;
    window.location.href = "./wellcome.html";
    console.log("success");
  } else {
    document.getElementById("error").hidden = false;
  }
});
