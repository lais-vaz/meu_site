// class ContaBancaria{
// #saldo
// numeroConta

// constructor(saldo, numeroConta){
//     this.#saldo = 
//     this.numeroConta = numeroConta
//     }
// }


//HERANÇA
class Animal{
    nome
    constructor(nome){
        this.nome = nome
    }
    fazerSom(){
        console.log('emite um som generico')
    }
}
class Cachorro extends Animal{
    constructor(nome){
        super(nome) 
    }
    fazerSom(){
        return "au au"
    }
}
let dog = new Cachorro('Rex'); //CRIANDO UM OBJETO DA CLASSE CACHORRO
console.log (`o meu cachorro ${dog.nome} faz ${dog.fazerSom()}`)

