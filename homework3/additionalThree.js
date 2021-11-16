/*1. Створити пустий масив та :*/
/*let a = []*/
/*   a. заповнити його 50 парними числами за допомоги циклу.*/

/*for (i = 0; i < 100; i+=2) {
    a.push(i)
    console.log(a )
}*/
/*b. заповнити його 50 непарними числами за допомоги циклу.*/
/*for (i = 1; i < 100; i+=2) {
    a.push(i)
    console.log(a )
}*/
/* c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/
/*for (let i = 0; i < 20; i++) {
    a.push(Math.round(Math.random() * 200));
}
console.log( a );*/
/*d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/
/*
for (let i = 0; i < 20; i++) {
    a.push(Math.round( 8+Math.random() * (732  - 8)));
}
console.log( a );*/
/*2. Вивести за допомогою console.log кожен третій елемен*/
/*let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]*/
/*for (let i=0;i<a.length;i+=3){
    console.log(i)
}*/
/*3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
/*
for (let i=0;i<a.length;i+=3){
    if(i%2===0){
    console.log(i)}
}*/
/*4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/
/*let aNew = [];*/

/*
for (let i=0;i<a.length;i+=3){
    if(i%2===0){
        aNew.push(i)
        console.log(aNew)
    }
}*/
/*
5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/
let Array=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for(let i=0;i<Array.length;i++){
    if(Array[i]%2===0){
        console.log(Array[i-1])
    }
}

/*
6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/
/*let num = [100, 250, 50, 168, 120, 345, 188]
let aa = 0
for (let i = 0; i < num.length; i++) {
    aa += num[i]/num.length
    console.log(aa)
}*/
/*
7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/
/*
let numNew=[]
for(let i=0;i<num.length;i++){
    aa=num[i]*5
    numNew.push(aa)
    console.log(numNew)
}*/
/*
8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/
/*
let num=[1,'ds',12,'fsd',true,42]
let numNew=[]
for(let i=0;i<num.length;i++){
    if(typeof num[i]=== 'number'){
        numNew.push(num[i])
        console.log(numNew)
    }
}*/

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив*/

/*let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = []
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j]
        }

    }
}
usersWithCities.push(usersWithId)
console.log(usersWithCities)*/
/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/
/*
let num=[1,2,3,4,5,6,7,8,9,0]
for(let i=0;i<num.length;i++){
    if(num[i]%2){
        console.log(i)
    }
}*/
/*
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/
/*
let num=[1,2,3,4,5,6,7,8,9,0]
let numNew=[]

for(let i=0;i<num.length;i++){
    numNew.push(num[i])
    console.log(numNew)
}*/
/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/

/*let str = ['a', 'b', 'c']
let string = ''*//*
for (let i=0;i<str.length;i++) {
    string += str[i]
    console.log(string)
}*/
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
/*let i=0;
while (i<str.length){
    string += str[i]
    console.log(string)
    i++
}*/
/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
/*for(let user of str){
    string += user
    console.log(string)
}*/
