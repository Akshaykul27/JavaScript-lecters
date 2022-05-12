/*  
 Take input of bank balances of 5 acc. holder as input

 if balance > 2L => add interest  of 10%  and deduct 0.2% maintainance charge

 if balance > 1L => add interest  of 5%  and deduct 0.05% maintainance charge

 if any balance less than or equal => add 4% interest

 log/alert updated arra of balance
*/

// let bankBalance1 = document.getElementById('bank-balance-1').value
// console.log(bankBalance1);




// // let bankBalances = prompt('Enter all bank balances seperated by a "," ').split(',')
// //100001,120000,210000,1000,300000

// // let bankBalances = [249389, 34561, 3462, 242442, 100001]

// for( let i=0; i< bankBalances.length; i++){
//     bankBalances[i] = Number(bankBalances[i])

//     if(bankBalances[i] > 200000){
//         bankBalances[i] = bankBalances[i] + 0.1 * bankBalances[i]  // 0.1 = 10/100
//         bankBalances[i] = bankBalances[i] - 0.002 * bankBalances[i] //0.002 = 0.2/100

//     }
//     else if(bankBalances[i] > 100000){
//         bankBalances[i] = bankBalances[i] + 0.05 * bankBalances[i]  // 0.05 = 5/100
//         bankBalances[i] = bankBalances[i] - 0.0005 * bankBalances[i] //0.0005 = 0.05/100
//     }
//     else{
//         bankBalances[i] = Number(bankBalances[i])
//         bankBalances[i] = bankBalances[i] + 0.04 * bankBalances[i] 
//     }
    
// }

// console.log(bankBalances) 


function CalculateInterest(){
    let bankBalance1 = Number(document.getElementById('bank-balance-1').value)
    let bankBalance2 = Number(document.getElementById('bank-balance-2').value)
    let bankBalance3 = Number(document.getElementById('bank-balance-3').value)

    // console.log(bankBalance1,bankBalance2,bankBalance3);
    let updatedBankBalance1 = document.getElementById('updated-bank-balance-1')
    let updatedBankBalance2 = document.getElementById('updated-bank-balance-2')
    let updatedBankBalance3 = document.getElementById('updated-bank-balance-3')
    let bankBalances = [bankBalance1, bankBalance2, bankBalance3]

    // console.log(bankBalances);

        for( let i=0; i< bankBalances.length; i++){
            bankBalances[i] = Number(bankBalances[i])
        
            if(bankBalances[i] > 200000){
                bankBalances[i] = bankBalances[i] + 0.1 * bankBalances[i]  // 0.1 = 10/100
                bankBalances[i] = bankBalances[i] - 0.002 * bankBalances[i] //0.002 = 0.2/100
        
            }
            else if(bankBalances[i] > 100000){
                bankBalances[i] = bankBalances[i] + 0.05 * bankBalances[i]  // 0.05 = 5/100
                bankBalances[i] = bankBalances[i] - 0.0005 * bankBalances[i] //0.0005 = 0.05/100
            }
            else{
                bankBalances[i] = Number(bankBalances[i])
                bankBalances[i] = bankBalances[i] + 0.04 * bankBalances[i] 
            }
            
        }

        // console.log(bankBalances);
        updatedBankBalance1.value = bankBalances[0]
        updatedBankBalance2.value = bankBalances[1]
        updatedBankBalance3.value = bankBalances[2]
}
