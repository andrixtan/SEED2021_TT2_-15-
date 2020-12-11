//Login API call

/*

var myHeaders = new Headers();
myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"username":"Group15","password":"WoAzAGZv_RGnusp"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/



  //View accounts API call

/*
var myHeaders = new Headers();
myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"custID":15});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/


  //Update account API call

/*
  var myHeaders = new Headers();
myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"custID":15,"amount":66});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  */

//Get Transactions API call

/*

var myHeaders = new Headers();
myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"custID":15});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  */

  // Add Transaction API call

  /*

  var myHeaders = new Headers();
myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"custID":15,"payeeID":16,"dateTime":"2020-03-28T12:24:11.017Z","amount":555,"expensesCat":"Insurance","eGift":true,"message":"Testing"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/add", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  */

  // Get all users

  /*

  var myHeaders = new Headers();
myHeaders.append("x-api-key", "UvNtOZVEB61nTaqAj9x9640XEK81qnHN7fSrEOMF");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  */