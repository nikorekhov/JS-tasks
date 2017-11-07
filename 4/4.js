//Проверка на четность
var isEven = function(someNumber) {
    return (someNumber % 2 == 0) ? true : false;
}

//Удалить элемент
Array.prototype.remove = function(value) {
    var idx = this.indexOf(value);
    if (idx != -1) {
        // Второй параметр - число элементов, которые необходимо удалить
        return this.splice(idx, 1);
    }
    return false;
}

var number = prompt('Введите число', '');
var flag = isEven(number);
if(flag){
    document.write("Ваше число: четное</br>");
}
else{
    document.write("Ваше слово: нечетное</br>");
}

var numArray = [];

//Заполняем массив
for( var i = 0; i < 8; i++){
    numArray[i] = parseInt(prompt('Введите число', '3'));
}

document.write("Ваш массив:");
//Вывод массива
for(var i = 0; i < numArray.length; i++){
    document.write(" " + numArray[i]);
}

document.write("</br>");

//Сортировка четных элементов массива
for(var i = 0; i < numArray.length; i++){
    if(!isEven(numArray[i])){
        numArray.remove(numArray[i]);
    }
}
document.write("Массив четных чисел:");
//Вывод массива
for(var i = 0; i < numArray.length; i++){
    document.write(" " + numArray[i]);
}

document.write("</br>");