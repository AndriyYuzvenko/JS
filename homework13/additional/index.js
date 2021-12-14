// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const product = JSON.parse(localStorage.getItem('product')) || [];

let id = 0
let content = (product) => {
    let form = document.productShop

    class Users {
        constructor(productName, productNumber, productPrice, productImage, id) {
            this.productName = productName;
            this.productNumber = productNumber;
            this.productPrice = productPrice;
            this.productImage = productImage;
            this.id = id
        }
    }

    product.push(new Users(`${form.productName.value}`, `${form.productNumber.value}`, `${form.productPrice.value}`, `${form.productImage.value}`, `${id += 1}`));
    let string = JSON.stringify(product)
    localStorage.setItem('product', string)
}
let a = document.getElementById('productSave')

a.onclick = () => {
    content(product)
    console.log(product)
}

