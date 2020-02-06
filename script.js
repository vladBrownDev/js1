var randArray = []
const randomIntArea = 30 + Math.random() * (50 - 30)
for (let i=randomIntArea; i>0; i-- ) {
    randArray.push(Math.floor(-100 + Math.random() * (100 + 100)))
}

console.log(randArray)

// for (i=randArray.length - 1 ; i>=0; i--) {
//     randArray[i] = randArray[i] + 2
// }


const plusTwoArray = []

randArray.forEach(function(element){
    plusTwoArray.push(element + 2)
})


console.log("plus two",plusTwoArray)



let mid = Math.floor(randArray.length/2)
let midVal = randArray[mid]
console.log(midVal)



delete randArray[0]
randArray[0] = randArray[mid]
console.log(randArray)




const biggerThanZero = (item, index, array) => {
    if(item<0) {
        return true
    }
    else {
        return false
    }
}

console.log("biggerThanZero",randArray.every(biggerThanZero))



const equalZero = (item, index, array) => {
    if(item === 0) {
        return true
    }
    else {
        return false
    }
}

console.log("eqal zero", randArray.some(equalZero))



let string = 'Lorem ipsum dolor sit amet'
let reversed = string.split('').reverse().join('')
console.log(reversed)



let secString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let splitSecString = secString.split(". ")
console.log(splitSecString)



splitSecString[splitSecString.length - 1] = (splitSecString[splitSecString.length - 1]).toUpperCase()
console.log(splitSecString)



let newString = splitSecString.join("\n")
console.log(newString)


let firstArray = []
for(let i=0; i<10; i++) {
    firstArray[i] = (Math.floor(Math.random() * 10)) 
}
console.log(firstArray)

let secondArray = []
for(let i=0; i<10; i++) {
    secondArray[i] = (-10 + Math.floor(Math.random() * 10)) 
}
console.log(secondArray)

let unitedArray = firstArray.concat(secondArray)
console.log(unitedArray)

function funcMap (element,index,array) {
    return element / 5
}

let divisedArray = unitedArray.map(funcMap)
console.log(divisedArray)

function sortFunc (next, prev) {
    return prev - next
}
divisedArray.sort(sortFunc)
console.log(divisedArray)

function filtFunc(num) {
    return (num ^ 0) === num

}

let filteredArray = divisedArray.filter(filtFunc)
console.log(filteredArray)

filteredArray.splice(0,filteredArray.length);
console.log(filteredArray)