///HERANÇA///
///1///
// class instrumentoMusical{
//     tocar (){
//         return 'som'
//     }
// } 
// class Violao extends instrumentoMusical{
//     tocar (){
//         console.log ('tocando violão🎻')
// }
// }
// let vio = new Violao()
// vio.tocar()

// class Piano extends instrumentoMusical{
//     tocar (){
//         console.log ('tocando piano🎹')
// }
// }
// let pia = new Piano()
// pia.tocar()




///2///
// class Funcionario {
//     constructor(nome, salario){
//         this.nome = nome
//         this.salario = salario
//     }           
// }

// class Gerente extends Funcionario{
//     constructor(nome, salario, bonus){
//         super (nome, salario)
//         this.bonus= bonus
// }
// }
// let func = new Funcionario ('Marcia', 2500)
// let geren = new Gerente ('Rosana', 3200, "70%" )

// console.log (`O funcionario ${func.nome} tem um salario de ${func.salario}.`)

// console.log (`o gerente ${geren.nome} tem um salario de ${geren.salario} e possui um atributo de ${geren.bonus}.`)




///3///
// class Veiculos{
//     constructor(marca, ano){
//         this.marca = marca
//         this.ano = ano
//     }
// }

// class Carro extends Veiculos{
//     constructor(marca, ano, portas){
//         super(marca, ano)
//         this.portas = portas
//     }
// }

// class Moto extends Veiculos{
//     constructor (marca, ano, cilindradas){
//         super(marca, ano)
//         this.cilindradas = cilindradas
//     }
// }
// let car = new Carro ('Jeep Avangaer', 2023, 'quatro portas' )
// let mot = new Moto ('Honda' ,2024, '650cc' )

// console.log(`O carro ${car.marca} é do ano de ${car.ano} e possui ${car.portas}.`)

// console.log(`A moto ${mot.marca} é do ano de ${mot.ano} e possui ${mot.cilindradas}.`)




///4///
// class Funcionarios{
//     constructor(salario){
//         this.salario = salario
//     }
//     calcularSalario(){
//         return salario + 0
//     }
// }

// class Gerente extends Funcionarios{
//     constructor (salario){
//         super(salario)
//     }
//     calcularSalario(){
//         return this.salario + (this.salario * 30 / 100)
//     }
// }

// class Desenvolvedor extends Funcionarios{
//     constructor(salario){
//         super(salario)
//     }
//     calcularSalario(){
//         return this.salario + (this.salario * 20 / 100)
//     }
// }

// let geren = new Gerente(3500)
// let desen = new Desenvolvedor (2000)

// console.log(`O gerente ganha ${geren.calcularSalario()}`)
// console.log(`O desenvolvedor ganha ${desen.calcularSalario()}`)





///5///
// class ContaBancaria{
//     constructor (titular,saldo){
//         this.titular = titular
//         this.saldo = saldo
//     }

//     depositar(){
//         return "deposito"
//     }

//     sacar(){
//         return"saque"
//     }
// }

// class ContaCorrente extends ContaBancaria{
//     constructor(titular, saldo, saque){
//         super(titular,saldo)
//         this.saque = saque
//     }
//     sacar(){
//         return this.saque + 2
//     }
// }

// class ContaPoupanca extends ContaBancaria{
//         constructor(titular, saldo, valor){
//             super(titular, saldo)
//             this.valor = valor
//         }      
//             AtualizarSaldo(valor){
//                 return this.valor + (this.valor * 5 / 100)

// }
// }

// let cor = new ContaCorrente ('José', 3000, 30)
// let pou = new ContaPoupanca ('Marcio', 4000, 40)

// console.log(`O ${cor.titular} tem ${cor.saldo} de saldo e vai sacar ${cor.sacar()}.`)

// console.log(`O ${pou.titular} tem ${pou.saldo} de saldo e tem uma renda de ${pou.AtualizarSaldo()}.`)




///ENCAPSULAMENTO///
///6///
// class Produto{
//     #nome
//     #preco
//     constructor(nome, preco){
//         this.#preco = preco
//         this.nome = nome 
//     }
//     get getnome (){
//         return this.#nome
//     }
//     get getpreco(){
//         return this.#preco
//     }
//     set setPreco(value){
//         return this.#preco = value
//     }
// }
// let pro = new Produto ('cama', 1500)
// pro.valuesetPreco = 5890
// console.log(`O ${pro.nome} custa ${pro.getpreco}`)



///7///
// class Carro{
//     #velocidade  //atributo privado
//     constructor(velocidade){
//         this.#velocidade = velocidade
//     }
//     get getvelocidade (){
//         return this.#velocidade
//     }
//     set setvelocidade(value){
//         return this.#velocidade
//     }
//     acelerar(){
//         return this.#velocidade + 10
//     }       
//     frear(){
//         if (this.#velocidade > 0){
//             return this.#velocidade -10 
//         }
//     }
// }
// let car = new Carro (80)
// console.log (car.frear())
// console.log (car.acelerar())



///8///
// class Conta{
//     #saldo
//     constructor(saldo){
//         this.#saldo = saldo
//     }
//     get getSaldo(){
//         return this.#saldo
//     }
//     depositar(valor){
//         this.#saldo += valor
//         return this.#saldo
//     }
//     sacar(valor){
//         if (valor <= this.#saldo){
//             this.#saldo - valor
//             return this.#saldo
//         }
//     }
// }    
// let con = new Conta (-230)
// con.depositar(500)
// console.log (`O saldo da conta é ${con.getSaldo}`)



///9///
// class Usuario {
//     #senha
//     constructor (senha){
//         this.#senha = senha
//     }
//     get retornaSenha(){
//         return this.#senha
//     }
//     validarSenha(senhaDigitada){
//         return senhaDigitada == this.#senha
//     }
// }
// const usu = new Usuario ("12345678")
// console.log (usu.validarSenha("12345678"))
// console.log (usu.validarSenha("1234"))



///10///
// class Retangulo {
//     #largura
//     #altura

//     constructor(largura, altura) {
//         this.#largura = largura
//         this.#altura = altura
//     }

//     getArea() {
//         return this.#largura * this.#altura
//     }

//     getPerimetro() {
//         return 2 * (this.#largura + this.#altura)
//     }
// }

// const retan = new Retangulo(6, 27)

// console.log(retan.getArea())
// console.log(retan.getPerimetro())



///POLIMORFISMO///
///11///
// class Forma {
//     calcularArea() {
//         return 0;
//     }
// }
// class Quadrado extends Forma {
//     constructor(lado)  {
//         super();
//         this.lado = lado;
//     }
//     calcular(){
//         return this.lado * this.lado
//     }
// }

// class Retangulo extends Forma {
//     constructor(largura,altura) {
//         super();
//         this.largura = largura;
//         this.altura = altura; 
//     }
//     calcular(){
//         return this.largura * this.altura
//     }
// }

// class Circulo extends Forma {
//     constructor(raio){
//         super();
//         this.raio = raio;
//     }
//     calcular(){
//         return this.raio * this.raio
//     }
// }

// const quadra = new Quadrado (5)
// const retan = new Retangulo (4,5)
// const circ = new Circulo (2)

// console.log (`A área do quadrado é: ${quadra.calcular().toFixed(2)}`)
// console.log (`a área do retângulo é: ${retan.calcular()}`)
// console.log (`A área do círculo é: ${circ.calcular().toFixed(2)}`)



///13///
//  class Pagamento {
//     realizarPagamento() {
//         return "Realizando pagamento"
//     }
// }
// class CartaoCredito extends Pagamento {
//     realizarPagamento() {
//         return "Pagamento com o cartão de crédito"
//     }
// }
// class Boleto extends Pagamento {
//     realizarPagamento() {
//         return "Pagamento com o boleto"
//     }
// }
// class Pix extends Pagamento {
//     realizarPagamento() {
//         return "Pagamento com Pix"
//     }
// }
// const cart = new CartaoCredito()
// const bole = new Boleto()
// const pix1 = new Pix()
// console.log (cart.realizarPagamento())
// console.log (bole.realizarPagamento())
// console.log (pix1.realizarPagamento())



///14///
// class Transporte {
//     mover() {
//         return "O transporte está se movendo"
//     }
// }
// class Carro extends Transporte {
//     mover() {
//         return "O carro anda pela estrada"
//     }
// }
// class Bicicleta extends Transporte {
//     mover() {
//         return "A bicicleta anda pela ciclovia"
//     }
// }
// class Aviao extends Transporte {
//     mover() {
//         return "O avião voa pelo céu"
//     }
// }
// const car = new Carro()
// const bici = new Bicicleta()
// const avi = new Aviao()
// const tran = [car, bici, avi]
// tran.forEach(transporte => {
//     console.log(transporte.mover())
// })



///15///
// class Mensagem{
//     enviar(){
//         return "Enviando a mensagem"
//     }
// }
// class Email extends Mensagem{
//     enviar(){
//         return "Enviando email"
//     }
// }
// class SMS extends Mensagem{
//     enviar(){
//         return "Enviando SMS"
//     }   
// }
// class WhatsApp extends Mensagem{
//     enviar(){
//         return "enviando mensagem pelo WhatsApp"
//     }   
// }
// const email1 = new Email()
// const sms1 = new SMS()
// const whatsapp1 = new WhatsApp()
// console.log (email1.enviar())
// console.log (sms1.enviar())
// console.log (whatsapp1.enviar())