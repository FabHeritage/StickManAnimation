const path = "./assets/images"
const arrayImgs = []
let count = 0
// console.log(arrayImgs)

function displayFrames() {
    let img = document.createElement("img")
    img.classList.add("stickmanImage")
    let divFinal = document.getElementById("StickmanContainer")
    // img.src = path + "/finalLook.png"
    // console.log(arrayImgs)
    
    

    let itemStick = arrayImgs.forEach((value)=> console.log(value))
    console.log(itemStick)
}

function animationGenerator() {
    for (count; count <= 10; count++) {
        let stickImg = path + `/stick${count}.png`
        arrayImgs.push(stickImg)

    }
    // console.log(arrayImgs)
}

window.addEventListener("load", displayFrames)
window.addEventListener("load", animationGenerator)
