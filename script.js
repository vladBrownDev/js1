//1st task
"use strict"
function timeFunc() {
    let time=new Date()
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    minutes=checkTime(minutes)
    seconds=checkTime(seconds)
    hours=checkTime(hours)
    document.body.innerHTML=hours+":"+minutes+":"+seconds
    setTimeout(timeFunc,500)
}
function checkTime(i) {
    if (i<10) {
        i="0" + i
    }
    return i
}

//2nd task

const timerId = setTimeout(() => {
  console.log('Im a delayed function')
}, 3500)

//3rd task


function bubbleSortFunc(arr) {

    let length = arr.length
    for (let i = 0; i < length-1; i++) {
        for (let j = 0; j < length-1-i; j++) {
            if (arr[j+1] < arr[j]){
                let t = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = t
            }
        }
     }                     
    return arr;    
}

let randArr1 = []
let randArr2 = []
let randArr3 = []
function randInt () {
    let rand = Math.trunc(-1000 + Math.random() * (1000 + 1000))
    return rand
}

for(let i=0; i<10; i++) {
    randArr1[i] = randInt ()
}
for(let i=0; i<100; i++) {
    randArr2[i] = randInt ()
}
for(let i=0; i<1000; i++) {
    randArr3[i] = randInt ()
}
let randArrSort1 = randArr1
let randArrSort2 = randArr2
let randArrSort3 = randArr3

console.time('buble 10 symb')
bubbleSortFunc(randArr1)
console.timeEnd('buble 10 symb')
console.log(randArr1.length)

console.time('buble 100 symb')
bubbleSortFunc(randArr2)
console.timeEnd('buble 100 symb')
console.log(randArr2.length)

console.time('buble 1000 symb')
bubbleSortFunc(randArr3)
console.timeEnd('buble 1000 symb')
console.log(randArr3.length)

console.time('sort 10 symb')
randArrSort1.sort((prev,next) => {
    return next - prev
})
console.timeEnd('sort 10 symb')

console.time('sort 100 symb')
randArrSort2.sort((prev,next) => {
    return next - prev
})
console.timeEnd('sort 100 symb')

console.time('sort 1000 symb')
randArrSort3.sort((prev,next) => {
    return next - prev
})
console.timeEnd('sort 1000 symb')


