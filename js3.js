var q = Number(prompt("1 санды енгізініз"));
var w = Number(prompt("2 санды енгізініз"));

if (q > w) {
  prompt("1 сан 2 саннан үлкен");
} else if (q < w) {
  prompt("2 сан 1 саннан үлкен");
} else if ((q = w)) {
  prompt("2 сан 1 мен тен");
}
