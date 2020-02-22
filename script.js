"use strict"
currentDate ()
function getNodesTexts(selector) {
    const elementsList = document.querySelectorAll(selector);
    const elementsTextsList = [];
    for (const element of elementsList) {
      elementsTextsList.push(element.innerText);
    }
    return elementsTextsList;
  }
  
  function randomSortElementsTexts(targetArr) {
    return [...targetArr].sort(() => Math.random() - 0.5);
  }
  
  function constructElementsMarkup(tag, className, textsList) {
    return textsList.reduce((markupStr, element) => {
      const liMarkup = `<${tag} class="${className}">${element}</${tag}>`;
      markupStr += liMarkup;
      return markupStr;
    }, "");
  }
  
  function replaceMarkup(selector, markupString) {
    const element = document.querySelector(selector);
    element.innerHTML = markupString;
  }
  
  function firstTaskManager() {
    const SELECTOR_STR = "randomListItem";
    // 1 step: get all li tags texts
    setInterval(() => {
      const liElementsTextsList = getNodesTexts(`.${SELECTOR_STR}`);
      // step 2: random sort texts
      const sortedTextsList = randomSortElementsTexts(liElementsTextsList);
      // step 3: create markup
      const liMarkupString = constructElementsMarkup(
        "li",
        SELECTOR_STR,
        sortedTextsList
      );
      // set new markup to ol tag
      replaceMarkup(".randomList", liMarkupString);
    }, 5000);
  }
  

    firstTaskManager();
  

  
//2nd task

function userInfo (i) {
  let browser = navigator.userAgent.split(" ")[10]
  let screenWidth = `${window.screen.width} px`
  let screenHeight = `${window.screen.height} px`
  let userOS = `${navigator.userAgent.split(" ")[1]} ${navigator.userAgent.split(" ")[3]} `
  let infoArr = [browser,screenWidth,screenHeight,userOS]
  return infoArr[i]
}


console.log(document.querySelectorAll("li"))

function setInfo () {
  document.querySelectorAll("li:nth-child(1)")
  let counter = 0
  for(let i = 0;i<=4; i++) {
    counter++
    let dom = document.querySelector(`p:nth-child(${counter})`).innerText
    document.querySelector(`p:nth-child(${counter})`).innerText = dom.replace("unknown", userInfo(i))
    

  }
  
}
setTimeout(setInfo,4600)

//3rd task

function replaceFunc () {
  document.querySelector("h3").outerHTML = "<h1>NEW LIST HEADER</h1>"
}
setTimeout(replaceFunc,9600)

//4rd task

function currentDate () {
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  let date = new Date()
  let dateString = day[date.getDay()] + " " + mon[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
  document.querySelector("nav").innerText = dateString
  document.querySelector("nav").setAttribute("style", "color:gray")
}
