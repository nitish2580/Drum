
var selector=document.querySelectorAll(".drum");
// console.log(selector[]);
for(var i=0;i<=selector.length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttom=this.innerHTML;
    switch (buttom) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
        var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
});
}
var auido=new Audio('sounds/tom-1.mp3');
    auido.play();