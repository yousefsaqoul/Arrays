let mainShift = ["banana", "orange", "mango", "apfel"];
console.log(mainShift)

function clickMe() {

    mainShift.shift("1");

    console.log(mainShift)

}
// -------------------------------------------------------------------

let meinAdresse = ["RathelbeckStraße", "40627", "Düsseldorf", "Nord-Rhein Westfallen"];
let bestFreunde = ["Marwan", "Khalil", "Omar"]
let person = ["Yousef", "Saqoul", "Abu Mero", "37", "Fotografieren", "3.7.1983", "Super Code"]
let myList = ["meinAdresse", "bestFreunde", "person"]
console.log((person.length))


let meineTrainer1 = ["anas", "hakan", "alein", "goerg"]
console.log((meineTrainer1))
let meineTrainer2 = ["georg", "Anaas", "Elaine", "hakan"]
console.log((meineTrainer2))
let meineTrainer3 = new Array()
meineTrainer3[0] = "Anass"
meineTrainer3[1] = "Georg"
meineTrainer3[2] = "Elain"
meineTrainer3[3] = "hakan"
console.log(meineTrainer3)
// -------------------------------------------------------------------

// -----------------1-3 index

let myNumber = [5, 6, 7, 8, 9, 10];
console.log(myNumber[4])
console.log(myNumber[0])
console.log(myNumber[5])


// ---------------- split
const meinText1 = "hallo welt ich wünsche euch allen einen guten";
const meinText2 = "wie geht es dir heute ?";
const meinText3 = "heute ist einen grosser tag für uns";
const split1 = meinText1.split();
const split2 = meinText1.split("")
const split3 = meinText1.split(" ")
console.log(split1)
console.log(split2)
console.log(split3)


const split4 = meinText2.split();
const split5 = meinText2.split("");
const split6 = meinText2.split(" ");
console.log(split4)
console.log(split5)
console.log(split6)

const split7 = meinText3.split();
const split8 = meinText3.split("");
const split9 = meinText3.split(" ");
console.log(split7)
console.log(split8)
console.log(split9)
// -------------------------------------------------------------------


// -------------Push

let mySongs = ["Omer Diab", "Kazem Elsaher", "Sabah Fakhry"]
console.log(mySongs)

mySongs.push("Goerg Wassouf")
console.log(mySongs)

let heroUndEnemy = ["batman", "the jocker",]
let heroUndEnemy1 = ["professor", "Magneto"]
let heroUndEnemy2 = ["thor", "loki"]
let pushList = ["heroUndEnemy", "heroUndEnemy1", "heroUndEnemy2"]
console.log(pushList)
pushList.push("heroUndEnemy3")
console.log(pushList)
heroUndEnemy2.push("superman", "lex luther")
console.log(heroUndEnemy2)
heroUndEnemy1.pop(1)

console.log(heroUndEnemy1.pop())
// -------------------------------------------------------------------


// --------------------unshift

let deutscheGerichte = ["Speckkuchen", "Thüringer Rotbratwust", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.unshift("salad", "Kartofel")
console.log(deutscheGerichte)


// -----------shift
let myShift = ["text", "nummber", "ddff", "dsss"]
myShift.shift()
console.log(myShift)


// ---------Splice
let arraySplice = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
arraySplice.splice(4, 4, "Yousuf", "saqoul")
console.log(arraySplice)
// -------------------------------------------------------------------


// ----------slices ----------
let arrySlice = ["Mango", "Appel", "Banana", "Orangen"]
arrySlice.slice(1, 2)
console.log(arrySlice.slice(1, 2))
// -------------------------------------------------------------------






// -------sort
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
console.log(languages)
languages.reverse()
console.log(languages)
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2)
numArray2.reverse();
console.log(numArray2)
// -------------------------------------------------------------------


// --------- join
let meinText11 = ["hello", "world"]
let meinText22 = ["Anass", "Elaine", "Eric", "Georg"]
let meinText33 = ["superman", "wonderwoman", "Hulk", "Batmann", "Spiderman"]

let join11 = meinText11.join()
let join22 = meinText11.join("")
let join33 = meinText11.join(" ")
let join44 = meinText11.join("+")


console.log(join11)
console.log(join22)
console.log(join33)
console.log(join44)
// -------------------------------------------------------------------



// ------------------------ reverse word
function string_reverse(str) {
    return str.split("").reverse().join("")
}
console.log(string_reverse("saqoul"))

// oder 

wordReverse = (str) => str.split("").reverse().join("")
console.log(wordReverse("Syrien"))

// ------------ function 2 reverse 
function reverse(str) {
    console.log(str.split('').reverse().join(''))
}
reverse('Ich Probiere')

reverse = (str) => console.log(str.split('').reverse().join(''))
reverse('Ich Probiere2')
// ---------------------------







// ---------------map
let arrayMyMap = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
console.log(arrayMyMap)
rechnen = (elt) => elt * 2
let newArray = arrayMyMap.map(rechnen)
console.log(newArray)
console.log(newArray.sort(forSort = (a, b) => a - b))
// ----------------------------------------------------------------


// -------------------forEach---------------------


let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
getraenke.sort()
let drink = str => {
    console.log(str)
    document.write(str + "<br>")
}
getraenke.forEach(drink)
// ----------------------------------------------------------------



// --------map
let getraenkeUpperCase = getraenke.map(elt => elt.toUpperCase() + elt.slice(0))
console.log(getraenkeUpperCase)
//  oder
getraenke.map = (elt) => elt.toUpperCase().map(0)
console.log(getraenkeUpperCase)

// ----------------------------------------------------------------



// ---------------------------map mit math.round
let fahrenheit2 = [0, 32, 45, 50, 75, 80, 99, 120];
let celsius2 = elem => Math.round(((elem - 32) / 1.8).toFixed(2))
let celsius3 = fahrenheit2.map(celsius2)

console.log(celsius3)









// // ------------------------ reverse word
// function string_reverse(str) {
//     return str.split("").reverse().join("")
// }
// console.log(string_reverse("saqoul"))

// // oder 

// wordReverse = (str) => str.split("").reverse().join("")
// console.log(wordReverse("Syrien"))

// // ------------ function 2 reverse 
// function reverse(str) {
//     console.log(str.split('').reverse().join(''))
// }
// reverse('Ich Probiere')

// reverse = (str) => console.log(str.split('').reverse().join(''))
// reverse('Ich Probiere2')
// // ---------------------------

// for (i = 0; i <= 6; i++) {
//     console.log('hi ' + i)
//     document.write('<h1> hallo world i am For' + i + '</h1>')
//     document.write('<input type="text"> </input>' + i)
// }
