const path = "./assets/images"
const arrayImgs = []
let count = 0
// console.log(arrayImgs)

const animGen = () => {
    for (count; count <= 10; count++) {
        let stickImg = path + `/stick${count}.png`
        arrayImgs.push(stickImg)

    }
}

function displayFrames() {
    animGen()

    // img.src = path + "/finalLook.png"
    // console.log(arrayImgs)



    arrayImgs.forEach((value) => {
        let img = document.createElement("img")
        let divFinal = document.getElementById("StickmanContainer")
        img.src = value
        divFinal.appendChild(img)
        img.classList.add("stickmanImage")
    })
}

// function animationGenerator() {

//     // console.log(arrayImgs)
// }

window.addEventListener("load", displayFrames)
// window.addEventListener("load", animationGenerator)
