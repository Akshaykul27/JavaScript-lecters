// let bankBalance1 = Number(prompt("Enter the first bank balance"))
// let bankBalance2 = Number(prompt("Enter the second bank balance"))
// let bankBalance3 = Number(prompt("Enter the third bank balance"))
// let bankBalance4 = Number(prompt("Enter the forth bank balance"))
// let bankBalance5 = Number(prompt("Enter the fifth bank balance"))


let bankBalances = Number(prompt('Enter all bank balances seperated by a ", " '))

console.log(bankBalances.split(','));
// let bankBalance1s = [249389, 34561, 3462, 242442, 100001]

for( let i=0; i< bankBalances.length; i++){
    if(bankBalances[i] > 200000){
        bankBalances[i] = Number(bankBalances[i])
        bankBalances[i] = bankBalances[i] + 0.1 * bankBalances[i]  // 0.1 = 10/100
        bankBalances[i] = bankBalances[i] - 0.002 * bankBalances[i] //0.002 = 0.2/100

    }
    // // else if(bankBalances[i] > 100000){
    //     bankBalances[i] = Number(bankBalances[i])
    //     bankBalances[i] = bankBalances[i] + 0.05 * bankBalances[i]  // 0.05 = 5/100
    //     bankBalances[i] = bankBalances[i] - 0.0005 * bankBalances[i] //0.0005 = 0.05/100

    // }
    // else{
    //     bankBalances[i] = Number(bankBalances[i])
    //     bankBalances[i] = bankBalances[i] + 0.04 * bankBalances[i] 
    // }
}

console.log(bankBalances);