const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 30

if (sexo === 'M' && contribuicao >= 35) {
    if((idade + contribuicao) >= 95){
        console.log('Você é homem e está apto para se aposentar.')
    } else {
        console.log('Você é homem mas ainda não pode se aposentar, devido à regra 85-95.')
    }
} else if (sexo === 'F' && contribuicao >= 30){
    if ((idade + contribuicao) >= 85) {
        console.log('Você é mulher e está apta para se aposentar.')
    } else {
        console.log('Você é uma mulher mas ainda não pode se aposentar, devido à regra 85-95.')
    }
} else {
    console.log('Você ainda não está apto a se aposentar.')
}
