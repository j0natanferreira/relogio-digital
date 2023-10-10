function relogio(){
    let date = new Date()

    let h = date.getHours().toString().padStart(2, "0")
    let m = date.getMinutes().toString().padStart(2, "0")
    let s = date.getSeconds().toString().padStart(2, "0")

    document.querySelector(".hora").innerHTML = h
    document.querySelector(".minutos").innerHTML = m
    document.querySelector(".segundos").innerHTML = s
}

setInterval(relogio, 0)
