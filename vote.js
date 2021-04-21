// document.getElementsByClassName("left").onmousemove = function(event)
// {myFunction(event)};

// function myFunction(yessir) {
//     var x = yessir.clientX;
//     var y = yessir.clientY;

//     var text = "Bro, Are You Sure?";
//     document.getElementById("forR").innerHTML= text;
// }

// document.getElementsByClassName("richard").onmouseover = function() {mouseOver()};
// document.getElementsByClassName("richard").onmouseout = function() {mouseOut()};

// function mouseOver() {
//     document.getElementsByClassName("richard").style.color = "green";
// }

// function mouseOut() {
//     document.getElementsByClassName("richard").style.color = "red";
// }

//-----------------//
//letting the user know their vote has not been submitted
function myFunction() {
    alert("You are about to vote for George Mcgovern, Are you Sure?")
}

//Removed context menu//

window.addEventListener('contextmenu',
function (e){
    e.preventDefault();
}, false);