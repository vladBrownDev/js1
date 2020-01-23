let inp = prompt("Введите 1 символ")

console.log(inp, typeof(inp))

if(inp == null) {
    document.write("Ввод отменен")
}

if(inp.length > 1 || inp.length == 0) {
    let inp = " "
}
else {
    let inpLower = inp.toLowerCase()
    switch(inp) {
        case "a":
        case "e":
        case "o":
            alert(inpLower.toUpperCase())
        break

        case "x":
        case "y":
            alert(inp + inp)
        break
        case "s":
        case "q":
        case "d":
        case "m":
            let rand = Math.trunc(Math.random() * 10 + Math.random() * 10)
            
            if(rand == 0) {
                let rand = 1
            }

            alert(rand)
        break
        case " ":
            alert(Boolean(inp))
        default: 
            var rand1 = Math.trunc(Math.random() * 10)
            var rand2 = Math.trunc(Math.random() * 10)
            var rand3 = Math.trunc(Math.random() * 10)
            alert(Math.max(rand1, rand2, rand3))
    }
}