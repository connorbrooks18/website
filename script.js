// age 
const age_span = document.querySelector("span#age");
let age = new Date(new Date() - new Date("May 18 2007"));
age = Math.abs(age.getUTCFullYear() - 1970)
age_span.innerText = age;

// time
let options = {
	timeZone: 'US/Central',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
},
formatter = new Intl.DateTimeFormat([], options);

// set time
setInterval(
	() => {
		document.querySelector("#time").innerText = formatter.format(new Date());
	}
, 1000)
