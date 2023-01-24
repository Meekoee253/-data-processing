//alert("hello from data-processing");


const queryString = window.location.search;
console.log(queryString);


function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}            

let myData = "";
if(key == "Cart"){//cart
  //alert("Cart Item: " + value);

    switch(value){
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

}else{//shipping label
  //swaps underscores for space
  key = key.split("_").join(" ");
  if((key == "FirstName")  (key == "LastName")  (key == "City") || (key == "Address")) {
    myData += <p>${key}: ${toTitleCase(value)}</p>;
  } else {
    myData += <p>${key}: ${value}</p>;
  }
}



//console.log(key, value);

    myData += '<p><a href="index.html">CLEAR</a></p>';

    document.getElementById('output').innerHTML = myData;
