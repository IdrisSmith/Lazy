var canvas = document.getElementById("aye")
var namespace = "http://www.w3.org/2000/svg"
var turn = 0
var piece1 = 0
var piece2 = 0
var piece3 = 0
var piece4 = 0
var piece5 = 0
var piece6 = 0
var piece7 = 0
var piece8 = 0
var piece9 = 0
function function1(){
if(piece1 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 50)
mine.setAttribute("cy", 50)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece1 = piece1 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 40)
mine.setAttribute("y", 40)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece1 = piece1 + 2
}
}
}
function function2(){
if(piece2 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 183)
mine.setAttribute("cy", 50)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece2 = piece2 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 173)
mine.setAttribute("y", 40)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece2 = piece2 + 2
}
}
}
function function3(){
if(piece3 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 313)
mine.setAttribute("cy", 50)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece3 = piece3 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 306)
mine.setAttribute("y", 40)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece3 = piece3 + 2
}
}
}
function function4(){
if(piece4 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 50)
mine.setAttribute("cy", 183)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece4 = piece4 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 40)
mine.setAttribute("y", 173)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece4 = piece4 + 2
}
}
}
function function5(){
if(piece5 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 183)
mine.setAttribute("cy", 183)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece5 = piece5 + 2
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 173)
mine.setAttribute("y", 173)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece5 = piece5 + 2
}
}
}
function function6(){
if(piece6 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 316)
mine.setAttribute("cy", 183)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece6 = piece6 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 306)
mine.setAttribute("y", 173)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece6 = piece6 + 2
}
}
}
function function7(){
if(piece7 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 50)
mine.setAttribute("cy", 316)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece7 = piece7 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 40)
mine.setAttribute("y", 306)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece7 = piece7 + 2
}
}
}
function function8(){
if(piece8 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 183)
mine.setAttribute("cy", 316)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece8 = piece8 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 173)
mine.setAttribute("y", 306)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece8 = piece8 + 2
}
}
}
function function9(){
if(piece9 == 0){
if (turn == 0){
var mine = document.createElementNS(namespace, "circle")
mine.setAttribute("cx", 316)
mine.setAttribute("cy", 316)
mine.setAttribute("r", 20)
mine.setAttribute("fill", "orange")
canvas.appendChild(mine)
turn = turn + 1
piece9 = piece9 + 1
}else if (turn == 1){
var mine = document.createElementNS(namespace, "rect")
mine.setAttribute("x", 306)
mine.setAttribute("y", 306)
mine.setAttribute("width", 20)
mine.setAttribute("height", 20)
canvas.appendChild(mine)
turn = turn - 1
piece9 = piece9 + 2
}
}
}
function finished(){
location.reload();
}
