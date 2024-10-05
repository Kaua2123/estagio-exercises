const string = 'banana'; // entrada
const string2 = 'testea' // entrada
let characterCounter = 0;

for (let i=0; i < string2.length; i++) {
    if (string2[i].includes('a')) {
        characterCounter = characterCounter + 1; 
    }
}   
console.log(`A string fornecida tem ${characterCounter} letras "a"`); // saida
