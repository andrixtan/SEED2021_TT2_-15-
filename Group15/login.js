"use strict";

// async Calling() {
// 	const response = await fetch('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login');
// 	var data = await response.json();
// }

function Calling() {
	fetch('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view')
	  	.then(response => {
	  		return response.json()})
	  	.then(data => {
	  		console.log(data)
	  	})
}

document.getElementById("button").onclick = Calling