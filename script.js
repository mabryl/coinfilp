function flip () {
    let face = document.getElementById("coin");
    let result = Math.floor(Math.random() * 2);
    if (result == 0) {
        face.removeAttribute("class");
        face.classList.add("heads");
        document.getElementById("result").innerHTML = "Heads";
    }
    else {
        face.removeAttribute("class");
        face.classList.add("tails");
        document.getElementById("result").innerHTML = "Tails";
    } 
}