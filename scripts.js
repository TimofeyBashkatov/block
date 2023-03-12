var a = Number(prompt("1 число:"));
var b = Number(prompt("2 число:"));
var operation = prompt("Действие:");
if (operation == "+") {
    alert(a+b);
}
if (operation == "-") {
    alert(a-b);
}
if (operation == "*") {
    alert(a*b);
}
if (operation == "/") {
    alert(a/b);
}
else{
    alert("ERROR");  
}