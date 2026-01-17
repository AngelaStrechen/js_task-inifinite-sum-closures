'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0; // зберігає поточну суму

  function adder(...args) {
    // Якщо виклик без аргументів — повертаємо результат
    if (args.length === 0) {
      const result = sum;

      sum = 0; // скидаємо суму

      return result;
    }

    // Додаємо ВСІ передані аргументи
    for (const value of args) {
      sum += value;
    }

    // Повертаємо саму функцію для ланцюгових викликів
    return adder;
  }

  return adder;
}

module.exports = makeAdder;
