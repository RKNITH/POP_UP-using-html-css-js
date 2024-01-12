const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const pop = document.getElementById("pop");


openBtn.onclick = function () {
    pop.style.display = "block";
}

closeBtn.onclick = function () {
    pop.style.display = "none";
}