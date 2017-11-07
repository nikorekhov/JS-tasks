var link = prompt('Введите адрес к файлу', '/github.html');
document.write("Ваше адрес: " + link);

 
function reverse(s) {
    return s.split('').reverse().join('');
}

link = reverse(link);
var htmlString = 'lmth';
linkSubstring = link.substring(0,4);
var answer = true;

if(htmlString === linkSubstring){
    answer;
}
else{
    answer = false;
}

document.write(" Результат: " + answer);