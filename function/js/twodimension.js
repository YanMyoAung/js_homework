let num = prompt('ersrs');
let outer = '';
for(let i = 1; i < num ; i++){
    let output = '';
    for(let j = 1 ; j < num ; j++){
        output += ' ' + j;
    }
    outer += output + '\n';
}
console.log(outer);