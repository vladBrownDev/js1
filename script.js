// 1st task

//rectangle square
let a = 2.4
let b = 3.3 
let square = a * b
let fixedSquare = +square.toFixed(1)
console.log(fixedSquare, typeof(fixedSquare))

//my name is polina

let name = "Polina"
let age = 25
let year = 2020

console.log(`My name is ${name} i was born in ${year} and im ${age} years old`)

//circle radius

let radius = parseInt("5.67cm")
let circleRadius = radius*radius*3.14
console.log(`Circle radius is ${circleRadius} cm `)

//2nd task

// % 2
let userNumber = +prompt("проверить число на кратность двум")

if (userNumber) {
    if(userNumber % 2 === 0) {
        alert("четное")
    }
    else {
        alert("нечетное")
    }

}
else {
    alert("введите число")
}

// % 3

let userNumber2 = +prompt("проверить число на кратность трем")


if(userNumber2 < 0) {
    if (userNumber2 % 3 === 0) {
    userNumber2 = userNumber2 * userNumber2
    }
    else {
    userNumber2 = userNumber2 % 8
    }  
}

console.log(userNumber2)

if (userNumber2 > 0) {
    userNumber2 = Math.sqrt(userNumber2)
    if (Math.ceil(userNumber2) > 1){
        userNumber2 = Math.ceil(userNumber2) * Math.ceil(userNumber2)
    }
    else {
        userNumber2 = userNumber2 - 0.5
    }
}

if (userNumber2 === 0) {
    userNumber2 = String(userNumber2)
}

console.log(userNumber2)


//igra
$: confirm = confirm("Вам есть 18?")
if(confirm) {
    let userGameNumber = prompt("Игра угадайте число от 0 до 10")
    let random = Math.round(Math.random() * 10)
    if(random == userGameNumber) {
        alert("Вы угадали!")
    }

    else {
        alert("Вы не угадали")
    }
}

else {
    alert("Вам нет 18")
}








