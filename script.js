//1st task

let intString = ""

outloop:for (i=0; i<=25; i++) {
    let randInt = 65 + Math.round(Math.random() * (122 - 65))
    intString = intString + String.fromCharCode(randInt)
    if(randInt == "w" || randInt == "E") {
        break outloop
    }
    
}
console.log(intString)

let intStringNumber = Math.round(Math.random() * (intString.length - 0))


console.log(String(intString.charAt(intStringNumber)))

if(intString.length < 5) {
    for(i=0; i<=4; i++) {
        console.log(intString)
    }
}
else {
    console.log(intString.substring(5))
}

//2nd task

let secResult = 12

let num = 11

let side2 = 1

for(i=0, fact = 12; i!==12; i++) {

    secResult = secResult * num
    num--  
    console.log(secResult)  
    
}


//3rd task

for(i=1; i<=4; i++) {
    console.log("#".repeat(i))
}

//4th task

let score = 4

let testStr = "    "

while(score!==0) {

    switch(score) {
        case 4:
            newStr = testStr.replace("    ", "   #");
            console.log(newStr)
            break;
        case 3:
            newStr = testStr.replace("    ", "  ##");
            console.log(newStr)
            break;
        case 2:
            newStr = testStr.replace("    ", " ###");
            console.log(newStr)
            break;
        case 1:
            newStr = testStr.replace("    ", "####");
            console.log(newStr)
            break;
        default :
            break;
    }
    score--
}