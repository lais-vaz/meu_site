class Pessoa {
    constructor (Nome, idade){
        this.nome = nome;
        this.idade = idade
}
saudacao(){   //saudacao é um metodo
    return `olá, meu nome é ${this.nome} e tenho ${this.idade} anos`
}
}

//criandoum objeto a partir da classe pessoa
const pessoa1 = new Pessoa("João, 25");

//chamado o metodo do objeto
pessoa1.saudacao();


