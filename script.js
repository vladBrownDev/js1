function myPow () {
    num =  +prompt("Введите число")
    pow = +prompt("Введите степень")

    if(!num || !pow) {
        alert("Ошибка")
    }
    else {
        numSt = num
        do {
            num*=numSt
            pow-- 
            
        }
        while (pow!==1) {
            
        }

        alert(num)
    }
}

myPow()

//2nd task
let logArgsFunc = function() {
    if(arguments.length !== 0) {
       for(let i = 0; i < arguments.length; i++) {
           
           if(typeof arguments[i] == "function") {
               arguments[i]()
               document.write(`Function was called <br>`)
           }
           else{
                document.write(`${arguments[i]}, type: ${typeof(arguments[i])} <br>`)  
           }
            
        } 
    }
    else {
        document.write("No arguments in function <br>")
    }
    
}

function uselessFunction () {
    console.log('I am Function')
}

logArgsFunc ()

logArgsFunc (100)

logArgsFunc (100, "test", uselessFunction)







//3nd task

let palStr = prompt("проверка слова на симетричность")

let check = palStr.length - 1

function pal(Str) {
    let fstSymb = 0
    let secSymb = Str.length - 1

    for(let i=0;i!==Str.length - 1;i++) {

        if(Str[fstSymb] == Str[secSymb]) {
            check = true
            fstSymb++
            secSymb--
        
        }

        else {
            check = false
        }

        
    }
    return check


}
alert(pal(palStr))
