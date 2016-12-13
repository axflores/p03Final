//Axel flores JS
window.onload = getCookie;
  var choices = [];

function determine(){
  var workout = document.getElementById("workout").value;
  choices.push(workout);
    if (workout == "chest"){
      window.alert("Bench Press, Push Ups and Flys!!");
   }
   else if (workout == "back"){
   window.alert("Deadlifts are recommended for a full workout");
   }
   else if (workout == "shoulders"){
    window.alert("This is a TOUGH one!");
}
}
function loadArray(){
  var loadedcookie = getCookie("previousworkout");
  var cookieArray = loadedcookie.split(",");
  choices = cookieArray;
}
function saveArray (){
  var wholeArray = "";
  for (var i = 0; i < choices.length; ++i){
    wholeArray += choices[i] + ",";
  }
  wholeArray = wholeArray.slice(0, wholeArray.length -1);
  setCookie("previousworkout", wholeArray,1000);
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
