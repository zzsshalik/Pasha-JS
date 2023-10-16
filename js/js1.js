console.log('Hello');
const randomValue = Math.floor(Math.random() * 51) //случайное число от 0 до 50
const result = ((2 * Math.pow(randomValue, randomValue)) - Math.abs(randomValue - 90)) / randomValue; //формула, Math.abs() - для поиска модуля. Math.pow(x, y) - возводит x в степени y, в нашем случае x возводится в степени рандомного числа
console.log(`Случайное число: ${randomValue}`); //случайное число, полученное при генерации
console.log(`Результат формулы: ${result}`); //результат формулы