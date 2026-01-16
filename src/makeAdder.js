'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0; // скидаємо суму після виклику без аргументів

      return result;
    }

    sum += args[0]; // додаємо перший аргумент

    return adder; // повертаємо саму себе для ланцюгового виклику
  }

  return adder;
}

module.exports = makeAdder;
