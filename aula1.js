//                      Desafio 1
// class Pessoa{
//     constructor(nome, altura, apelido, idade){
//         this.nome = nome
//         this.altura = altura
//         this.apelido = apelido
//         this.idade = idade
//     }
//     apresentar(apresentacao){
//         console.log(apresentacao);
//     }
// }
// let carol = new Pessoa("Carol", 1.2, "Of T Bells", 90)
// console.log(carol);

// carol.apresentar(`Oii, eu sou a ${carol.nome} e tenho ${carol.idade} anos`);

//                      Desafio 2
// class Produto{
//     constructor(nome, preco, quantidade){
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }
//     mostraDados(){
//         console.log(`O produto: ${this.nome} possui ${this.quantidade} unidades`);
//     }
//     vender(qtd){
//         if(quantidade>=qtd){
//             this.quantidade-=qtd;
//             console.log(`Venda de ${qtd} unidades de ${this.nome} realizada`);
//         }else{
//             console.log(`Estoque insuficiente para realizar a venda`);
//         }
//         this.mostraDados()

//     }
//     repor(qtd){
//         this.quantidade+=qtd;
//         console.log(`eósito de ${qtd} unidades de ${this.nome} realizada`);
//         this.mostraDados()
//     }
// }
// let maca = new Produto("Maçã", 4.5, 10);
// maca.mostraDados()

// maca.vender(10)
// maca.repor(20)

// Desafio 3
class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    verSaldo(){
        console.log(`O titular: ${this.titular} possui R$${this.saldo}`);
    }
    saque(valor){
        if(this.saldo>=valor){
            this.saldo-=valor;
            console.log(`Saque de R$${valor} realizada`);
        }else{
            console.log(`Saldo insuficiente para realizar o Saque`);
        }
        this.verSaldo()

    }
    deposito(valor){
        this.saldo+=valor;
        console.log(`Depósito de R$${valor} realizado`);
        this.verSaldo()
    }
}
let ana = new Produto("Ana", 2500);
ana.verSaldo()
ana.saque(100)
ana.deposito(200)