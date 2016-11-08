var canvas = document.getElementById("aye")
var namespace = "http://www.w3.org/2000/svg"
var turn = 1
function function1(){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 50)
mine.setAttribute("cy", 50)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
}
