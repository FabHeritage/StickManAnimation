const btn = document.getElementById("startAnim")
let isClicked = false

btn.addEventListener("click", ()=>{
    isClicked != isClicked
    console.log(isClicked)

    if(!isClicked) {btn.innerHTML = "Begin"; isClicked = true} else{ btn.innerHTML = "End"; isClicked = false} //simplify fabio
})