// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let textContent = document.getElementById('content');
textContent.innerText;
// -- отримує текст з блоку з id "rules"
let textRules = document.getElementById('rules');
textRules.innerText;
// -- замініть текст параграфа з id 'content' на будь-який інший
textContent.innerText = 'текст успішно змінений:)';
// -- замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerText = 'текст успішно змінений:)';
// -- змініть кожному елементу колір фону на червоний
let elements = document.getElementsByClassName('fc_rules')
for (const element of elements) {
    element.style.backgroundColor = 'red'
}
// -- змініть кожному елементу колір тексту на синій
for (const element of elements) {
    element.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let target = document.querySelectorAll('#rules');
console.log(target)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const element of elements) {
    element.style.color = 'red'
}