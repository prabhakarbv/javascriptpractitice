function *generatorSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;  
    yield 5;
    yield 6;
    return 10;
}

let g = generatorSequence();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


let generator = generatorSequence();
let one = generator.next();
console.log(one)
let two = generator.next();
console.log(two)
let three = generator.next();
console.log(three)
let four = generator.next();
console.log(four)

for(let val of g){
    console.table(" the generators "+val)
}


let seq = [...generatorSequence()]
console.log(seq);

