"use strict"
let objMethods = {
    splice : true,
    slice : false,
    concat : false,
    filter:false,
    map:false,
    reverse:true,
    push: true,
    sort:true,
    split:false,
    join:false
}
function createMainFunc () {
    let createMain = document.createElement("main")
    document.body.append(createMain)
}
function main () {
    let counter = 0
    createMainFunc ()
    let createTable = document.createElement("table")
    document.querySelector("main").append(createTable)
    createTheadFunc ()
    createTbodyFunc ()
    createRow("methodRowClass")
    createRow ("rowIsMutable")
    for (let key in objMethods) {
        document.querySelector(".methodRowClass").append(createTr (`methodTrClass${counter}`))
        document.querySelector(`.methodTrClass${counter}`).innerText = key
        document.querySelector(".rowIsMutable").append(createTr (`isMutableTrClass${counter}`))
        document.querySelector(`.isMutableTrClass${counter}`).innerText = objMethods[key]
        if(objMethods[key] === !false) {
            document.querySelector(`.isMutableTrClass${counter}`).classList.add("redValue")
            document.querySelector(`.methodTrClass${counter}`).classList.add("redValue")
        }
        else {
            document.querySelector(`.isMutableTrClass${counter}`).classList.add("greenValue")
            document.querySelector(`.methodTrClass${counter}`).classList.add("greenValue")
        }
        counter++
      }
}
function createTbodyFunc (){
    let createTbody = document.createElement("tbody")
    document.querySelector("table").append(createTbody)

}
function createTheadFunc () {
    let createThead = document.createElement("thead")
    document.querySelector("table").append(createThead)
    let row = document.createElement("td")
    let row2 = document.createElement("td")
    document.querySelector("thead").append(row)
    document.querySelector("thead").append(row2)
    row.classList.add("headMethod")
    row2.classList.add("headMutation")
    document.querySelector(`.headMethod`).innerText = "Array method"
    document.querySelector(`.headMutation`).innerText = "Mutable?"

}
function createRow (className) {
    let row = document.createElement("td")
    document.querySelector("tbody").append(row)
    row.classList.add(className)
}
function createTr (className) {
    let createTr = document.createElement("tr")
    // document.querySelector("td").append(createTr)
    createTr.classList.add(className)
    return createTr


}
function changeRedColor () {
    let toChange = document.querySelectorAll(".redValue")
    toChange.forEach(element => element.classList.toggle("lowOpacityRed"))
    
}
function dissapearFunc () {
    document.querySelector("main").classList.add("dissapear")
}
function cursiveFunc () {
    let toChange = document.querySelectorAll(".redValue")
    toChange.forEach(element => element.classList.toggle("cursive"))
}
main()
setInterval(changeRedColor, 3000)
setTimeout(cursiveFunc, 5000)
setTimeout(cursiveFunc, 10000)
setTimeout(dissapearFunc, 90000)

