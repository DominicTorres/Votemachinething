// document.getElementsByClassName("left").onmousemove = function(event)
// {myFunction(event)};

// function myFunction(yessir) {
//     var x = yessir.clientX;
//     var y = yessir.clientY;

//     var text = "Bro, Are You Sure?";
//     document.getElementById("forR").innerHTML= text;
// }

document.getElementsByClassName("richard").onmouseover = function() {mouseOver()};
document.getElementsByClassName("richard").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementsByClassName("richard").style.color = "green";
}

function mouseOut() {
    document.getElementsByClassName("richard").style.color = "red";
}