function Teacher(name, salary) {
    this.name = name;
    this.salary = salary;
}

var math = new Teacher('Nick', 3000);
var phys = new Teacher('Mike', 2000);
var progr = new Teacher('Antony', 1000);

document.write("Первоначальный массив: </br>");
var teachers = [ math, phys, progr];
for(var i = 0; i < teachers.length; i++){
    document.write(teachers[i].name);
    document.write(" " + teachers[i].salary + "</br>");
}

var result = teacherSort(teachers);
document.write("Итоговый массив(ЗП<1000): ");

function teacherSort(teachers){
    var resultArray = [];
    for(var i = 0; i < teachers.length; i++){
        if(teachers[i].salary > 1000){
            resultArray.push(teachers[i]);
        }
    }
    return resultArray;
}

var result = teacherSort(teachers);
//Вывод массива
for(var i = 0; i < result.length; i++){
    document.write(" " + result[i].name);
}
document.write("</br>");