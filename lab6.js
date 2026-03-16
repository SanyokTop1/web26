// Завдання 1: Змінні та математичні операції

let a = 10;
let b = 5;

console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);

// Завдання 2: Робота з рядками

let firstName = "Іван";
let lastName = "Іванов";

let fullName = firstName + " " + lastName;

console.log("Привіт, " + fullName + "!");

// Завдання 3: Умовний оператор if/else

let age = 20;

if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}

// Завдання 4: Цикл for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Завдання 5: Функції

function square(number) {
    return number * number;
}

let result = square(5);
console.log("Квадрат числа 5:", result);

// Завдання 6: Робота з масивами

let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango");

console.log("Масив фруктів:", fruits);