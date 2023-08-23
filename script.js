let a = ''; // first number
let b = ''; // secont number
let sign = ''; // знак операции
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран 
const out = document.querySelector('.calc-screen p');

// Функция очистки

function clearAll () {
    a = ''; //
    b = '';
    sign = ''; 
    finish = false;
    out.textContent = 0;  // выводим 0
}
//  Навешиваю оброботчик событий на кнопку  AC,

document.querySelector('.ac').onclick = clearAll; 

// Навешиваем оброботчик событий на кнопки нашего Diva
document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю содержание нажатой кнопки
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            out.textContent = a;  // Если Б пустая и  знак пустой то заполняем А
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b; //  Если А не пустая и Б не пустая и финиш тру  заполняем Б
        }
        else {
            b += key;
            out.textContent = b;//заполняем Б
        }
        return;
    }

     // если нажата клавиша + - / *
     if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    // если нажата клавиша =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'ПУТИН ХУЙЛО'; // проверка деления на 0
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }

}
// Навешиваю оброботчик событий на кнопку delete при промощи свойства onclick и стреорчной функции
document.querySelector('.delete').onclick = () => {
    if (finish) {
    // если финиш тру  то очищаем экран
        clearAll();
        return;
    }
// Проверка второго числа на пустоту, если != "" то  при помощи метода slice() возвращаем  новый масив -1 элемент
if (b !== '') {
        b = b.slice(0, -1);
        out.textContent = b;
        
}
// Проверка второго числа на пустоту, если != "" то  при помощи метода slice() возвращаем  новый масив -1 элемент
if (b !== '') {
    } else if (sign !== '') {
        sign = '';
        out.textContent = a;
    } else if (a !== '') {
        a = a.slice(0, -1);
        out.textContent = a;
    }
}
