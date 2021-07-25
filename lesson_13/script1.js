function createcalcObject(privatecalc) {
  let count = privatecalc;

  function addcalc(value) {
    count += value;
  }

  function multcalc(value) {
    count *= value;
  }

  function subcalc(value) {
    count -= value;
  }

  function divcalc(value) {
    count /= value;
  }

  function setcalc(value) {
    count = value;
  }

  return {
    add: function (value) {
      addcalc(value);
      return count;
    },

    mult: function (value) {
      multcalc(value);
    },

    mult: function (value) {
      multcalc(value);
    },

    sub: function (value) {
      subcalc(value);
    },

    div: function (value) {
      divcalc(value);
    },

    set: function (value) {
      setcalc(value);
    },

    value: function () {
      return count;
    }
  };
}

const calc = createcalcObject(10);
calc.add(5);
console.log(calc.value());
calc.mult(10);
console.log(calc.value());
calc.sub(40);
console.log(calc.value());
calc.div(10);
console.log(calc.value());
calc.set(100);
console.log(calc.value());