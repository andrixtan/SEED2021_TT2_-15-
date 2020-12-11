"use strict";
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  Calling();
  /*
  if (username === "user" && password === "web_dev") {
    alert("You have successfully logged in.");
    window.location = "accpage.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
  */
});

// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
// fetch(proxyUrl + targetUrl)
//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });

function Calling() {
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: "Group15",
    password: "WoAzAGZv_RGnusp",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl =
      "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";

  fetch(proxyUrl + targetUrl, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// function Calling() {
// 	fetch('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view')
// 	  	.then(response => {response.json()})
// 	  	.then(data => {
// 	  		console.log(data)
// 	  	})
// }

// document.getElementById("login-form-submit").onclick = Calling
