module.exports = function getZerosCount(number, base) {
  var b = base, res = number;

  for (var i = 2; i <= base; i++) {
    if (b % i != 0) { continue; }

    var pow = 0;
    while (b % i == 0) {
      pow += 1;
      b /= i;
    }

    var counter = 0, currentPow = i, currentNumber = number;

    while ((number / currentPow) > 0) {
      counter += ~~(currentNumber / currentPow);
      currentPow *= i;
    }

    var countPow = counter / pow;
    res = (res < countPow) ? res : countPow;
  }
  return ~~(res);
}
