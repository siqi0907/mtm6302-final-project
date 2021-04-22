let _pic = document.getElementById("pic")
let _text = document.getElementById("text")
let _btn = document.getElementById('btn')
let _title = document.getElementById("title")
let onoff = false
let _hello = document.getElementById("hello")

if(localStorage.getItem("text")){
	_btn.innerText = 'close day of the week'
	onoff = true
}else{
	_btn.innerText = 'show day of the week'
}


_btn.onclick = function () {
	if(onoff){
		localStorage.removeItem("text")
	_btn.innerText = 'show day of the week'

	}else{
		localStorage.setItem("text","show day of the week")
	_btn.innerText = 'close day of the week'

	}
	onoff = !onoff

}
function check(val) {
	if (val < 10) {
		return "0" + val;
	} else {
		return val;
	}
}

setInterval(function ShowTime() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds();
	let timestr = null
	let str = "";
	let week = new Date().getDay();
	if (week == 0) {
		str = "Sunday";
	} else if (week == 1) {
		str = "Monday";
	} else if (week == 2) {
		str = "Tuesday";
	} else if (week == 3) {
		str = "Wednesday";
	} else if (week == 4) {
		str = "Thursday";
	} else if (week == 5) {
		str = "Friday";
	} else if (week == 6) {
		str = "Saturday";
	}
	if(hour < 8 && hour > 0){
		_hello.innerText = "good morning!!!!"
	}else if(hour >= 8 && hour <= 14){
		_hello.innerText = "good noon!!!"
	}else if(hour >= 14 && hour <= 17){
		_hello.innerText = "good afternoon!!!"
	}else if(hour > 17 && hour <= 24){
		_hello.innerText = "good night!!!"
	}
	if (onoff) {
		timestr = year + "/" + month + "/" + day + "&nbsp;" + str + "&nbsp;"+ + check(hour) + ":" + check(minutes) + ":" + check(second);
	} else {
		timestr = year + "-" + month + "-" + day + "&nbsp;" + check(hour) + ":" + check(minutes) + ":" + check(second);
	}
	document.getElementById("clock").innerHTML = timestr;


}, 1000)



fetch('https://api.nasa.gov/planetary/apod?api_key=yv0vnApRPxfcguvgdbRMmOUHJnBMtsDxiar6VDKA')
	.then(function (response) {
		return response.json()
	}).then(function (data) {
		console.log(data)
		_pic.src = data.url
		_text.innerText = data.explanation
		_title.innerText = data.title
	})
