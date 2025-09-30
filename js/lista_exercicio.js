//Lista Final de Exercícios//
//FUNÇÕES//
//1//
// function contarVogais(str) {
//     const vogais = 'aeiouAEIOU';
//     let contador = 0;

//     for (let char of str) {
//         if (vogais.includes(char)) {
//             contador++;
//         }
//     }

//     return contador;
// }

// console.log(contarVogais("Vai corinthians!"));



//2//
// function fibonacci(ate) {
//     const sequencia = [0, 1];
//     let proximo = 1;

//     while (proximo <= ate) {
//         sequencia.push(proximo);
//         let tamanho = sequencia.length;
//         proximo = sequencia[tamanho - 1] + sequencia[tamanho - 2];
//     }

//     return sequencia.filter(n => n <= ate);
// }

// console.log(fibonacci(10)); 


//3//
//4//



//CLASSES SIMPLES//
//5//
class produto{
    contructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
}


