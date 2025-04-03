const readline = require('node:readline')
const {stdin: input, stdout: output} = require( 'node:process');

const rl = readline.createInterface({input, output});



rl.question('Digite numero A: ', (n1) => {
    const numero1 = parseInt(n1,10)
    console.log(n1)

    rl.question('Digite numero B: ', (n2) => {
        const numero2 = parseInt(n2,10)
        console.log(n2)
        rl.question('Digite sua operação (+,-,*,/)', (op) =>{
            console.log(op)
            rl.close();       
        })
    })
    
});
