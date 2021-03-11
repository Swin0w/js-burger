var calcBtn = document.getElementById("calculate");

calcBtn.addEventListener("click", function() {
  var burgerName = document.getElementById("burger-name").value;
  if (burgerName != "") {
    var checkbox = document.getElementsByClassName("ingred").value;
    for (var i=0;i < checkbox.length; i++) {
      var checkbox = checkbox[i];
      console.log(checkbox[i]);
    }
  } else {
    alert("Non hai inserito il nome del panino");
  }
});
