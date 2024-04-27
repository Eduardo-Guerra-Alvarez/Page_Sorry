const btnNot = document.getElementById("not")
const btnYes =  document.getElementById("yes")
const afirmation = document.getElementById("afirmation")

const message = ["Di que si", "Andale por favor", "Te amo más que ayer", "Intentalo una vez mas",
"porfavorcito", "Ya di que si", "Te dare muchos besitos"]
let ind = 0

const bigButton = () => {
    btnYes.style.width = btnYes.offsetWidth + 100 + "px"
    btnYes.style.height = btnYes.offsetHeight + 100 + "px"
    btnYes.innerHTML = message[ind]
    console.log(message[ind])
    ind = (ind + 1) % message.length
}

const clickYes = () => {
    afirmation.style.display = "block"
    btnYes.style.display="none"
    btnNot.style.display="none"
}

btnNot.addEventListener("click", bigButton)
btnYes.addEventListener("click", clickYes)

