const addBoxButton = document.querySelector(".add-box-button")
addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    const secboxContainer = document.querySelector(".second-box-container");
    boxContainer.innerHTML += `<div class="box"></div>`;

    const boxList = document.querySelectorAll(".box")

    for(let i = 0; i < boxList.length; i++) {
        boxList[i].onclick = () => {
            let isBlueBox = boxList[i].classList.contains("blue-box");
            let isRedBox = boxList[i].classList.contains("red-box");
            if(isBlueBox) {
                boxList[i].classList.remove("blue-box")
                boxList[i].classList.add("red-box")
            }
            else if(isRedBox) {
                boxContainer.removeChild(boxList[i])
                secboxContainer.appendChild(boxList[i])
            }
            else {
                boxList[i].classList.add("blue-box")
            }
        }
    }
}