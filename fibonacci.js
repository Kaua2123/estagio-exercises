// seguidno a formula de fibonacci
//  F(n + 2) = F(n + 1) + F(n) 

const numberInput = 8;
let f0 = 0;
let f1 = 1;
let result = f0;
let isNumberInFibonaci = false;

for (let i = 0; i <= numberInput; i++) {
    let f = f1 + f0; // f2
    f0 = f1;
    f1 = f;
    result = f;  

    if (f == numberInput)
        console.log(`${numberInput} está presente na sequencia de fibonacci.`);
}


console.log(result);