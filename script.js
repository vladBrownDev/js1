let inp = prompt("Введите 1 символ")


if(inp == null) {
    document.write("Ввод отменен")
}

let conf = inp.length > 1 || inp.length == 0 ? " " : inp.toLowerCase()


    switch(conf) {
        case "a":
        case "e":
        case "o":
            alert(conf.toUpperCase())
            break

        case "x":
        case "y":
            alert(conf + conf)
            break


        case "s":
        case "q":
        case "d":
        case "m":
            let rand = Math.trunc(Math.random() * 10 + Math.random() * 10)
            randResult = rand
            
            if(rand == 0) {
                randResult = 1
            }

            alert(randResult)
            break


        case " ":
            alert(Boolean(conf))
            break
        default: 
            var rand1 = Math.trunc(Math.random() * 10)
            var rand2 = Math.trunc(Math.random() * 10)
            var rand3 = Math.trunc(Math.random() * 10)
            alert(Math.max(rand1, rand2, rand3))
    }
