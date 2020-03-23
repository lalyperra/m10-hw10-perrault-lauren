// It is always helpful to use comments in your code!
class Temp {
   this.boiling-temp = boiling-temp;
   this.freezing-temp = freezing-temp;
   this.water-temp = water-temp;
}

var Temp = () => {
    //number “212” immediately prints inside of the span with the ID "boiling-temp" using an arrow function
    document.getElementById('boiling-temp').innerHTML += 212;
    //number “32” immediately prints inside of the span with the ID "freezing-temp" using an arrow function
    document.getElementById('freezing-temp').innerHTML += 32;
    //"88" immediately prints inside of the span with the ID "water-temp" using an arrow function
    document.getElementById('water-temp').innerHTML += 73;
}; 

//timeout 

setTimeout(function() {
    document.getElementById('boiling').classList.add('show');
    document.getElementById('boiling').classList.remove('hide');
}, 3000);


