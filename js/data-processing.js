const queryString = window.location.search;
console.log(queryString);
 
if (queryString.length > 0) {
	const urlParams = new URLSearchParams(queryString);
 
	let myData = "";
	let myCart = "";
	let myTotal = 0; //will store total cost
	myCart += "<h3> Cart Contents</h3>";
 
	//title case//
	function toTitleCase(str) {
		return str
			.toLowerCase()
			.split(" ")
			.map(function (word) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			})
			.join(" ");
	}
 
	urlParams.forEach(function (value, key) {
		if (key === "Cart") {
			switch (value) {
				case "Widget":
					myCart += "<p>Widget: $3.99</p><br>";
					myTotal += 3.99;
					break;
				case "Sprocket":
					myCart += "<p>Sprocket: $5.99</p><br>";
					myTotal += 5.99;
					break;
				case "Thingy":
					myCart += "<p>Thingy: $1.99</p><br>";
					myTotal += 1.99;
					break;
			}
		} else {
			key = key.split("_").join(" ");
			if (
				key === "FirstName" ||
				key === "LastName" ||
				key === "City" ||
				key === "Address"
			) {
				myData += `<p>${toTitleCase(key)}: ${toTitleCase(value)}</p>`;
			} else {
				myData += `<p>${toTitleCase(key)}: ${value}</p>`;
			}
		}
	});
 
	myCart += "Total: " + myTotal + "<br>";
 
	myData = myCart + myData;
 
	myData += '<p><a href="index.html">CLEAR</a></p>';
	document.getElementById("output").innerHTML = myData;
}