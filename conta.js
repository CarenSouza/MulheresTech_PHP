class Conta{
    constructor(titular,numConta,saldo=0){
        // this-> palavra reservada para indicar que a variável/função perten à Classe em questão

        this.titular= titular
        this.numConta= numConta
        this.saldo = saldo
    }
depositar(valor){
    if(valor > 0){
        this.saldo = this.saldo + valor
        console.log("Deposito realizado com sucesso")
    }
    }
realizarSaque(valor){
    if (valor<=0){
        console.log("Digite um valor válido")

}
else if (valor > this.saldo){
    console.log("Saldo Insuficiente")
}
// aqui realiza o saque
else{
    this.saldo = this.saldo - valor
    console.log("Saque Realizado")

}
}
    transferencia(valor, conta){
        console.log('Inicio da transferencia')
        this.realizarSaque(valor)
        conta.depositar(valor)
        console.log('Fim da transferencia')
    }
}
conta1 = new Conta ('Caren' , '10235', 100.50)

console.log(conta1.saldo)
conta1.depositar(50)
console.log(conta1.saldo)
conta1.realizarSaque(50)

conta2 = new Conta('Senac', '10582', 500)
conta2.transferencia(200,conta1)

console.log(conta1.saldo)