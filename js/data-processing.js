//alert("hello from data-processing");


const queryString = window.location.search;
console.log(queryString);

let myData = "";
if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach(function(value, key) {

      if(key == "Cart"){//cart
        alert("Cart Item: " + value);
      } else{//shipping label
       //swaps underscore for space
       key = key.split("_").join(" ");

       myData += `<p>${key}: ${value}</p>`;
      }
      
      //console.log(key, value);
    });

    myData += '<p><a href="index.html">CLEAR</a></p>';

    document.getElementById('output').innerHTML = myData;
}