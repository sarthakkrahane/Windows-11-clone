let taskbaricons = document.getElementsByClassName("taskbaricons")[0]
let start = document.getElementsByClassName("start")[0]

taskbaricons.addEventListener("click", () => {
    if (start.style.bottom == "50px") {
        start.style.bottom = "-655px"
    }
    else {
        start.style.bottom = "50px"
    }
})

document.addEventListener('contextmenu', event => event.preventDefault());