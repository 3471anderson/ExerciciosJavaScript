function createAdder(a) {
  return function add(b) {
    return a + b;
  };
}

const addTo2 = createAdder(2);
addTo2(5); // retorna 7
