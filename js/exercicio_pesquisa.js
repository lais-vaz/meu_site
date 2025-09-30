// // Exemplo de classe abstrata
class Animal {
    constructor() {
        if (new.target === Animal) {
            console.log("Não é permitido criar um objeto diretamente da classe Animal.");
            return;
        }
    }

    fazerSom() {
        console.log("O método fazerSom deve ser implementado na classe filha.");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Miau");
    }
}
const cachorro = new Cachorro();
cachorro.fazerSom(); //

const gato = new Gato();
gato.fazerSom();
const animal = new Animal();


// // classe interna//
// class Carro {
//     constructor() {
//         this.modelo = "Fusca";
//         this.motor = new Motor(this);
//     }

//     mostrarModelo() {
//         console.log("Modelo do carro: " + this.modelo);
//     }
// }

// class Motor {
//     constructor(carro) {
//         this.carro = carro;
//     }

//     ligar() {
//         console.log("Motor ligado.");
//         this.carro.mostrarModelo();
//     }
// }

// const meuCarro = new Carro();
// meuCarro.motor.ligar();


//Classe anonima
// function criarObjeto(objeto){
//   objeto.dizerCorinthians();
// }

// criarObjeto(new class {
//   dizerCorinthians (){
//     console.log("objeto de classe anonima");
//   }
// });