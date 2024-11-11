var a = Number(prompt("1 санды енгізініз"));
var s = Number(prompt("2 санды енгізініз"));
var d = Number(prompt("3 санды енгізініз"));

if (a > s && s > d) {
  alert(a - d);
} else if (a < s && s < d) {
  alert(d - a);
} else if (s > a && a > d) {
  alert(s - d);
} else if (s < a && a < d) {
  alert(d - s);
} else if (a < d && d < s) {
  alert(s - a);
} else if (a > d && d > s) {
  alert(a - s);
} else {
  alert("Қате енгізілген мәндер");
}
