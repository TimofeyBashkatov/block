/* Переменные */
var a = Number(prompt("1 число:"));
var b = Number(prompt("2 число:"));
var operation = prompt("Действие:");
/* Сложение */
if (operation == "+") {
    alert(a+b);
    console.log(a + "+" + b + "=" + (a+b));
}
/* Вычитание */
if (operation == "-") {
    alert(a-b);
    console.log(a + "-" + b + "=" + (a-b));
}
/* Вычитание */
if (operation == "*") {
    alert(a*b);
    console.log(a + "*" + b + "=" + (a*b));
}
/* Деление */
if (operation == "/") {
    alert(a/b);
    console.log(a + "/" + b + "=" + (a/b));
}
/* Сообщение об ошибке */
else {
    alert("ERROR");
}