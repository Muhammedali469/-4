var Option = prompt("1-12 ай аралықтарын таңдаңыз");
switch (Option) {
  case "3":
  case "4":
  case "5":
    alert("Көктем");
    break;
  case "6":
  case "7":
  case "8":
    alert("Жаз");
    break;
  case "9":
  case "10":
  case "11":
    alert("Күз");
    break;
  case "12":
  case "1":
  case "2":
    alert("Қыс");
    break;
  default:
    alert("Қате мән. 1-12 ай арасындағы мәнді енгізіңіз.");
}
