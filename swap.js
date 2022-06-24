

let y = 100;
let z = 300;

let box = y;

y = z;
z = box;

console.log(y,z);


// --------------------------------------------------------

let a = 500;
let b = 700;

[a,b] = [b,a];

console.log(a,b);

