function *generatior(){
    yield 1;
    yield 2;
    yield 3;
    return "done1"
}

let gen = generatior();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

for(var i of generatior()){
    console.log(" this is done "+i);
}

console.log([1,2,3,4,...generatior()]);

// const iterableObj = {
//     [Symbol.iterator]() {
//       let step = 0;
//       return {
//         next() {
//           step++;
//           if (step === 1) {
//             return { value: 'This', done: false};
//           } else if (step === 2) {
//             return { value: 'is', done: false};
//           } else if (step === 3) {
//             return { value: 'iterable.', done: false};
//           }
//           return { value: '', done: true };
//         }
//       }
//     },
//   }
//   for (const val of iterableObj) {
//     console.log(val);
//   }

  

  


  function * naturalNumbers() {
    let num = 1;
    while (true) {
      yield num;
      num = num + 1
    }
    console.log(num)
  }

  console.log(take(10,naturalNumbers()))


  function * take(n, iter) {
    let index = 0;
    for (const val of iter) {
      if (index >= n) {
        return;
      }
      index = index + 1;
      yield val;
    }
  }