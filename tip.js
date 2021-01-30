<<<<<<< HEAD
<<<<<<< HEAD
=======
//  add some javaScript to create highly responsive interfaces that improve the user experience and provide dynamic functionality.
>>>>>>> c131a2336e894f50ba7805e1c7fa9c5fa1429925
=======
//  add some javaScript to create highly responsive interfaces that improve the user experience and provide dynamic functionality.
>>>>>>> c131a2336e894f50ba7805e1c7fa9c5fa1429925
function calculateTip() {
  var billAmt = document.getElementById("Bill").value;
  var servicequality = document.getElementById("servicequality").value;
  var tipTotal = document.getElementById("tipTotal").value;
  var billTotal = document.getElementById("billTotal").value;
  var shareBill = document.getElementById("share").value;
  var total = (billAmt * servicequality) / shareBill;
  var Total = parseFloat(billAmt) + parseFloat(total);
  document.getElementById("tipTotal").innerHTML = total;
  document.getElementById("billTotal").innerHTML = Total;
}
<<<<<<< HEAD
document.getElementById("calculate").onclick = function () {
  calculateTip();
=======
document.getElementById("calculate").onclick = function()
{
calculateTip();
<<<<<<< HEAD
>>>>>>> c131a2336e894f50ba7805e1c7fa9c5fa1429925
=======
>>>>>>> c131a2336e894f50ba7805e1c7fa9c5fa1429925
};
