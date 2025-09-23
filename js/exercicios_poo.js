//CLASSE PRODUTO
// class Produto {
//      constructor (nome, preco, quantidade){
//           this.nome = nome
//           this.preco = preco
//           this.quantidade = quantidade
//      }
//      valor_total(){
//           return`O produto é ${this.nome }, e a quantidade é de ${this.preco * this.quantidade}`
//      }
// }

// const produto1 = new Produto("Camisa", 25, 100);
// produto1.valor_total()
// console.log(produto1.valor_total())


//CLASSE FILME
// class Filme {
//      constructor (titulo, ano_lancamento, diretor){
//           this.titulo = titulo
//           this.diretor = diretor
//           this.ano_lancamento = ano_lancamento

//      }
//      frase(){
//           return`O filme ${this.titulo} foi lançado em ${this.ano_lancamento} dirigido por ${this.diretor}`
//      }
// }
// const filme1 = new Filme("Matrix", 1999, "Wachowski")
// console.log(filme1.frase())


//CLASSE AUNO
// class Aluno {
//     constructor(nome, nota1, nota2) {
//         this.nome = nome;
//         this.nota1 = nota1;
//         this.nota2 = nota2;
//     }
//     media() {
//          let total = (this.nota1 + this.nota2) / 2;
//     if (total >= 7) {
//         return"Você está aprovada!"
//     }
//     if (total <= 6){
//      return`Você está reprovada.`
//     }
//     }
// }
// const Aluno1 = new Aluno("Lais", 7, 9);
// console.log(Aluno1.media());


//CLASSE RETANGULO
// class Retangulo {
//      constructor(base, altura) {
//           this.base = base;
//           this.altura = altura;
//      }
//      area(){
//           return`A area do retangulo é: ${this.base * this.altura}`
//      }
//      perimetro(){
//           return`O perimetro do retangulo é: ${(this.base + this.altura) * 2}`
//      }
// }
// const retangulo1 = new Retangulo (8,5);
// console.log(retangulo1.area())
// console.log(retangulo1.perimetro())


//CLASSE CARRO
// class Carro {
//      constructor(marca, modelo, combustivel){
//           this.marca = marca;
//           this.modelo = modelo;
//           this.combustivel = combustivel;
//      }
//      abastecer(litros){
//           this.combustivel += litros
//           return this.combustivel
// }
//      dirigir(Km){
//           this.combustivel -= (Km / 10)
//      }
// }
// let = carro1 = new Carro("Mitsubishi", "ASX", 10)
// carro1.abastecer (20)
// console.log(carro1.combustivel)
// carro1.dirigir(80)
// console.log(carro1.combustivel)


