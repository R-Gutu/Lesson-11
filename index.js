/* var myCurrentAge = prompt("How old are you?", 18);
var youngStr = "I am under 25";
var oldStr = "I am over 25 years old";
var result;
result = myCurrentAge <=25 ? (result=youngStr) : (result=oldStr);
alert(result);

var isAdmin = confirm("Вы - администратор?");

alert( isAdmin );
*/
/*
var day = prompt("Please enter day", "monday");
switch (day) {
  case "friday":
      case "sunday":
          case "tuesday":
              case "wednesday":
                  case "monday":
    alert("Working day");
    break;
    case "saturaday":
        case "sunday":
    alert("Weekend");
    break;

  default:
    alert("I don't know this day");
    break;
}
*/

var day = prompt("Please enter day", 1);
var yourDay;
switch (day) {
  case "1":
    var yourDay="Monday";
    break;
    case "2":
    alert("Tuesday");
    break;
    case "3":
    alert("Wednesday");
    break;
    case "4":
    alert("Thursday");
    break;
    case "5":
    alert("Friday");
    break;
  default:
    alert("I don't know this number ");
    break;
}
