let arr = [1, 2, 3, '13', true];
console.log('Количество элементов:' + arr.length);

// Перебираем массив и выводим каждый элемент в консоль
for (let i = 0; i < arr.length; i++) {
  console.log( (i+1) + ': ' + arr[i]);
}