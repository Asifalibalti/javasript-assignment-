// chapter no 3
var myAge = 17;
console.log(myAge);
alert("I am " + myAge +" years old.");


var birthYear = 2006;

document.write("My birth year is " + birthYear + "\n" + "Data type of my declared variable is " + typeof(birthYear));



var visitorName = prompt("Enter your name.");
var productTitle = prompt("What do you want to purchase?");
var quantity = prompt("Explain the quantity");
var storeName = ("daraz.pk");

document.write("\n" + visitorName + " ordered" + " " + quantity + " " + productTitle + " on " + storeName)

// chapter no 4
var name1 = prompt("What's your name!\nMy name is Shahzaib\nI'll greet anyone with the same name as mine especially!")
var myName = ("Shahzaib")

if (name1 == myName){
    document.write("Assalam-o-Alaikum Brother, MashaAllah you have the same name as mine.")
}else{
    document.write("")
}