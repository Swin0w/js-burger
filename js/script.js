// Il .value serve solamente quando ho bisogno di prendere un dato
var priceT = 10; //Prezzo totale con solo il nome del panino
var calcBtn = document.getElementById("calculate"); //Bottone di calcolo del prezzo
var discount = ["free50", "happyburger","eatall20"];

calcBtn.addEventListener("click", function() {
  var burgerName = document.getElementById("burger-name").value;
  if (burgerName != "") {
    document.getElementById("price").innerHTML = priceT;
    var checkbox = document.getElementsByClassName("ingred");
    // console.log(checkbox);
    for (var i=0;i < checkbox.length; i++) {
      var addIngred = checkbox[i];
      //Se checkbox è 1 allora aggiungi data-price
      if (addIngred.checked) {
        priceT = priceT + parseInt(addIngred.dataset.price); //con il metodo elemento.dataset.price                                            //prelevo l'attributo data dell'input
      }                                                       // prelevo l'attributo data dell'input
      document.getElementById("price").innerHTML = priceT;
    }
    var code = document.getElementById("burger-coupon").value;
    for (i=0;i<discount.length;i++) {
      if(code == discount[i]) {
        priceT = priceT - (priceT * 0.2);
      }
      document.getElementById("price").innerHTML = priceT;
    }
  } else {
    alert("Non hai inserito il nome del panino");
  }
});
