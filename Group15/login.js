"use strict";
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  Calling();
  window.location.href = "accpage.html";
});

function Calling() {
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
  myHeaders.append("Content-Type", "application/json");
  const username1 = loginForm.username.value;
  const password1 = loginForm.password.value;

  var raw = JSON.stringify({ username: username1, password: password1 });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl =
      "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";

  if (username1 === "Group15" && password1 === "WoAzAGZv_RGnusp") {
    fetch(proxyUrl + targetUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // window.location.href = "./accpage.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
}
