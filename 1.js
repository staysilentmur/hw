let x = prompt("Введите число:");
let number = +x;
if (typeof number === 'number') {
  if (number % 2 === 0) {
    console.log(number + " - четное число");
  } else {
    console.log(number + " - нечетное число");
  }
} else if (number===NaN) {
  // Если введено не числовое значение
  console.log("Упс, кажется, вы ошиблись. Введите число.");
} else {
  // Если введено не число
  console.log("Упс, кажется, вы ошиблись. Введите число.");
}