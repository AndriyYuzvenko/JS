/*- Дано натуральное число n. Выведите все числа от 1 до n.*/
/*for (let i = 0; i < 20; i++) {
    console.log(i)
}*/
/*- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.*/
/*let a = 10;
let b = 10;
if (a < b) {
    for (let i = a; i <= b; i++) {
        console.log(i)
    }
} else {
    for (let j = a; j >= b; j--) {
        console.log(j)
    }
}*/


/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]*/

/*let arr = [9, 8, 0, 4];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);*/
/*
- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]*/
/*
const arr = [1, 0, 6, 0, 3];
let moveZeros = (item) => {
    let number = item.length;
    for (let i = 0; i < number; i++) {
        if (item[i] === 0) {
            item.push(0);
            item.splice(i, 1);
            number--;
            i--;
        }
    }
    console.log(item)
    return item;
}
moveZeros(arr)*/
