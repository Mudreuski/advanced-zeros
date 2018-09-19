module.exports = function getZerosCount(number, base) {
  let enumPrime = {};
  let massSol = [];
  let cache = base;

  for (let i = 2; i <= cache; i++) {
    
    while (cache % i == 0) {
      
      if (enumPrime[i]) {
        enumPrime[i] = enumPrime[i] + 1;
      }
      else{
        enumPrime[i] = 1;
      }

      cache /= i;
    }
    
  }

  for (const key in enumPrime) {
    massSol.push( solutions(number, +key, enumPrime[key]) );
  }

  return Math.min.apply(0, massSol);
};

function solutions(number, enumPrime, quantity) {
  let cache = 0;

  while (number > 0) {
    number = Math.floor(number / enumPrime);
    cache += number;
  }

  return Math.floor(cache / quantity);
}