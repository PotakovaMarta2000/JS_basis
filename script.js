'use strict';


//Переменные
//Ключевое слово var, let, const
//Имя переменной начинается с латинских букв,цифр, со спец символов $, _, 
//Формат lowerCamelCase (верблюжья аннотация)
//Не используются зарезервированные слова const,else,alert,prompt,break идр

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
    
console.log(pi); 

//Типы данных, классификация

//Примитивный тип данных

//Строка string
let string = 'Hello';
console.log(string);

//Числа number
let number = 5;
console.log(number);

//Логический тип данных boolean (true,false)
let boolean = true;

//тип данных, для создания уникальных идентификаторов Symbol()
let sym = Symbol();

//Специальный тип данных
null //специальное значение, которое представляет отсутствующий объект
console.log(something);

undefined //представляет значение переменной, которая еще не была инициализирована
let num;
console.log(num);

NaN //специальное значение "не число", которая говорит о том, что была выполнена бессмысленная операция
console.log('string' * 4);

//infinity //бесконечность, известная ошибка при делении на ноль
console.log(4/0);

//Абстрактный тип данных object{}, это набор свойств и значений
let obj = {};

let persone = {
    name: 'Jack',
    age: 25,
    isMarried: false
};
console.log(persone['age']);

//Массив
let arr = ['plum.jpeg', 'apple.bmp', 'orange.png'];
console.log(arr[0]);

//Простое общение с пользователем

alert("Hello World!");
let answer = confirm('Are you here?');
console.log(answer);
let answer = +prompt('Есть ли вам 18?', 'Да');
console.log(typeof(answer));

//Операторы JS
// унарный +               
console.log('arr'+ '-object');
console.log(4 + '- object');

//Инкремент и декремент
// ++ префиксный инкремент
// постфиксный декремент --

let incr = 10;
    decr = 10;

console.log(incr++);
console.log(decr--);

// Остаток от деления

console.log(5%2);

// = присваивание
// == проверка на равенство

console.log('2' == 2);

// === строгая проверка по типу данных

console.log('5' === 5);

// оператор && (И)

let isChecked = true;
    isClosed = true;
console.log(isChecked && isClosed);

// оператор || (ИЛИ)
// оператор отрицания ! 

let isChecked = false;
    isClosed = false;
console.log(isChecked || !isClosed);