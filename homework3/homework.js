/*
1)--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
/*let arrOne = [1, 2, 3, 4, 5]
let arrTwo = ['a', 'b', 'c', 'd', 'e']
let arrThree = [true, false, true, false, true]
let arrFour = [arrOne, arrTwo, arrThree]
console.log(arrOne, arrTwo, arrThree, arrFour)*/
/*
- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
/*let arr=[]
for (let i=0;i<3;i++){
    arr.push('item')
    console.log(arr)
}*/
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
/*for (let i=0;i<10;i++){
    document.write(`<div>item</div>`)
}*/
/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>item ${i}</div>`)
}*/
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
/*let i=0
while (i<20){
    document.write(`<h1>item</h1>`)
    i++
}*/
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
*/
/*
let i=0
while (i<20){
    document.write(`<h1>item ${i}</h1>`)
    i++
}*/
/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let arr=[1,2,3,4,5,6,7,8,9,0]
    for(let user of arr){
    console.log(user)
}*/
/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let arr=['1','2','3','4','5','6','7','8','9','0']
for(let user of arr){
    console.log(user)
}*/
/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/

/*
let arr=[1,'df',true,false,undefined,null]
for(let user of arr){
    console.log(user)
}
*/


/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/
/*let arr = [12, 3, 4, 'fds', 'dgd', 'hytrgf', true, false, true]
for (let user of arr) {
    if (typeof user === "boolean") {
        console.log(user)
    }
}*/
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/
/*let arr = [12, 3, 4, 'fds', 'dgd', 'hytrgf', true, false, true]
for (let user of arr) {
    if (typeof user === "number") {
        console.log(user)
    }
}*/
/*
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/
/*let arr = [12, 3, 4, 'fds', 'dgd', 'hytrgf', true, false, true]
for (let user of arr) {
    if (typeof user === "string") {
        console.log(user)
    }
}*/



/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
/*let arr=[]
for(let i=0;i<1;i++){
    arr.push(1,2,34,5,'dsf','sfgsdg','sfdgsd',true,false,true)
    console.log(arr)
}*/
/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*for(let i=0;i<10;i++){
    console.log(i)
    document.write(i)
}*/
/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*for(let i=0;i<100;i++){
    console.log(i)
    document.write(`<h1>${i}</h1>`)
}*/
/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
/*for(let i=0;i<100;i+=2){
    console.log(i)
    document.write(`<h1>${i}</h1>`)
}*/
/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
/*for(let i=0;i<10;i++){
    if(i%2==0) {
        console.log(i)
        document.write(`<h1>${i}</h1>`)
    }
}*/
/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

/*
for(let i=1;i<100;i+=2){
        console.log(i)
        document.write(`<h1>${i}</h1>`)
}
*/