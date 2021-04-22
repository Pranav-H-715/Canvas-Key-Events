var canvas=document.getElementById("canvas")
var context=canvas.getContext("2d")
var rh=90
var rw=100
var rx=10
var ry=10
var bg,r
function add(){
    bg=new Image()//creating new image and storing it in variable
    bg.onload=uploadbg//uploadbg function should be called only when the bg loads
    bg.src="mars.jpg"
    r=new Image()
    r.onload=uploadr
    r.src="rover.png"
}
function uploadbg(){
    context.drawImage(bg,0,0,canvas.width,canvas.height)
}
function uploadr(){
    context.drawImage(r,rx,ry,rw,rh)
}
window.addEventListener("keydown",kd)
function kd(e){
    var kcode=e.keyCode
    if (kcode=="37"){
        left()
    }
    else if (kcode=="38"){
        up()
    }
    else if (kcode=="39"){
        right()
    }
    else if (kcode=="40"){
        down()
    }
}
function left(){
    if (rx>=0){
        rx=rx-5
        uploadbg()
        uploadr()
    }
}
function up(){
    if (ry>=0){
        ry=ry-5
        uploadbg()
        uploadr()
    }
}
function right(){
    if (rx<=700){
        rx=rx+5
        uploadbg()
        uploadr()
    }
}
function down(){
    if (ry<=360){
        ry=ry+5
        uploadbg()
        uploadr()
    }
}