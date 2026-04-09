// console.log("\n=== Деструктуризация массивов ===")
// const colors = ["red", "green", "blue"]
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов")

const user = {
  name: "Алиса",
  age: 25,
  city: "Москва",
};

// const userName = user.name;
// const userNameAge = user.age;
// console.log(userName, userNameAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");


// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//   name: "Костюм Сейлор Мун",
//   price: 10,
//   category: "Интересы Женька",
//   inStock: true
// };

// const { name, price, category, inStock } = product;
// console.log("Извлечённые свойства:");
// console.log("Название:", name);
// console.log("Цена:", price);
// console.log("Категория:", category);
// console.log("В наличии:", inStock);

// console.log("");

// function printProduct({ name, price, category, inStock }) {
//   console.log("Информация о продукте:");
//   console.log(`Название: ${name}`);
//   console.log(`Цена: ${price} ₽`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }

// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");

// const person = {
//   name: "Иван",
//   age: 30,
// };

// const address = {
//   city: "Санкт-Петербург",
//   street: "Невский проспект",
// };

// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0)
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const numbers1 = [10, 20, 30];
// const numbers2 = [40, 50, 60];

// const combinedNumbers = [...numbers1, ...numbers2];
// console.log("Объединённый массив:", combinedNumbers);

// function findMax(...numbers) {
//     return Math.max(...numbers);
// }

// console.log(findMax(5, 12, 8, 23, 17));
// console.log(findMax(45, 67, 23, 89, 12, 54));

// const obj1 = {
//     name: "Женек",
//     surname: "Журавский",
//     born: 2007
// };

// const obj2 = {
//     fav_color: "light blue",
//     fav_anime: "Сейлор Мун",
//     dream: "Станцевать в костюме Сейлор Сатурн перед преподавателями колледжа"
// };

// const obied = { ...obj1, ...obj2 };
// console.log("Объединённый объект:", obied);


// import { greet, add, PI} from "./utils.js";

// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

import { square, cube, E } from "./math.js";

console.log("Квадрат числа 5:", square(5));
console.log("Куб числа 3:", cube(3));
console.log("Число E:", E);