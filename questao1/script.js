const n1 = parseInt(prompt("Digite o primeiro numero:"))
const n2 = parseInt(prompt("Digite o segundo numero"))
const operacao = prompt("Escolha a operação ( +, - , *, / )")
let resultado
switch(operacao){
    case "+":
        resultado = n1 + n2
        break;
    case "-":
        resultado = n1 - n2
        break;
    case "*":
        resultado = n1 * n2
        break;
    case "/":
        resultado = n1 / n2
        break;
    default:
        alert("Opção invalida")
        break;
}