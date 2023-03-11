document.write("<script src='./sys46.js'></script>")
var StartButtonOpened = false;
var StartButtons = document.getElementById("StartButton")
function StartButtonClicked(){
    if(StartButtonOpened){
        StartButtonOpened = false;
        StartButtons.setAttribute("style","border-style:outset;");
    }else{
        StartButtonOpened = true;
        StartButtons.setAttribute("style","border-style:inset;");
    }
}