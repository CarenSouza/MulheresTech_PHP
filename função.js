saldo = 1500

deposito = 100

saldoFuturo = saldo + deposito

// saldo += deposito ( quer dizer saldo é igual ao deposito mais saldo)

function realizarDeposito(deposito, saldo){
saldo = saldo + deposito 
console.log(saldo)   
return saldo
}

saldo = realizarDeposito (10000 , saldo)
console.log(saldo)

