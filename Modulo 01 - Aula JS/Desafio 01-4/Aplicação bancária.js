const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

const transactions = {
    type: 'credit',
    value: 50.5
}

function createTransaction({type, value}) {
    user.transactions.push({type, value})

    if (type == 'credit')
        user.balance += value
    else
        user.balance -= value
}

function getHigherTransactionByType(type){
    let greater = 0;

    for(let i=0; i < user.transactions.length; i++){
        if (user.transactions[i].type == type && user.transactions[i].value > greater){
            greater += user.transactions[i].value
        }
    }

    return console.log(`The Higher transaction of ${type} is $${greater}`)
}

function getAverageTransactionValue(user){
    let sum = 0

    for (let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount(user){
    let credit = 0, debit = 0

    for(let transaction of user.transactions){
        if (transaction.type == 'credit')
            credit++
        else
            debit++
    }

    return {credit: credit, debit: debit}
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }

getAverageTransactionValue(user) // 70

getTransactionsCount(user) // { credit: 2, debit: 2 }