var count = 0;

function calculate(){
var a = document.getElementById('coeff_a').value;
var b = document.getElementById('coeff_b').value;
var c = document.getElementById('coeff_c').value;
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Неверные данные")
        a="Ошибка!"
        b="Ошибка!"
        c="Ошибка!"
        x1="Неверные данные"
        x2="Неверные данные"
    } else if((a&&b)==0){
        alert("Неверные Данные");
        x1="Неверные данные"
        x2="Неверные данные"
    }else if(a==0){
        alert ("не квадратное уравнение");
        x1=(-c/b).toFixed(3);
        x2="Нет второго корня"
    }else{
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    var d=b*b-4*a*c;
    if(d==0){
        var x1=((-b)/(2*a)).toFixed(3);
        var x2=x1;
    }else if(d>0){
        var x1=((-b - Math.sqrt(d)) / (2 * a)).toFixed(3);
        var x2= ((-b + Math.sqrt(d)) / (2 * a)).toFixed(3);
    }else {
        var x1="Комплексный корень";
        var x2=x1;
        }
    }
    show(a,b,c,x1,x2);
    
}

function show(a,b,c,x1,x2){
    var table = document.getElementById('table');
    
    //Сделаю записи
    var res1 = document.createTextNode(count);
    var res2 = document.createTextNode("("+a+")"+"x^2+"+"("+b+")"+"x+"+"("+c+")"+"=0");
    var res3 = document.createTextNode(x1);
    var res4 = document.createTextNode(x2);
    
    count++;
    
    //Создам строку
    var line = document.createElement('tr');
    
    
    var number = document.createElement('td');
    var equalization = document.createElement('td');
    var column_x1 = document.createElement('td');
    var column_x2 = document.createElement('td');
    

    //добавлю элементы    
    number.appendChild(res1);
    equalization.appendChild(res2);
    column_x1.appendChild(res3);
    column_x2.appendChild(res4);
    
    line.appendChild(number);
    line.appendChild(equalization);
    line.appendChild(column_x1);
    line.appendChild(column_x2);
    
    
    table.parentNode.insertBefore(line, table.nextSibling);
    
    //удаление строки
    line.addEventListener('click', function(e){
        line.remove();
    })
    
}


