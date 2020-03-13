const programador = {
    nome: 'Marco Aurélio',
    idade: 23,
    techs: [
        {nome: 'JavaScript', especialidade: 'Web'},
        {nome: 'C#', especialidade: 'Desktop'}
    ]
}
// const tecnologias = [
//     {
//         nome: 'C++',
//         especialidade: 'Desktop',
//     },
//     {
//         nome: 'Python',
//         especialidade: 'Data Science'
//     }, 
//     {
//         nome: 'JavaScript',
//         especialidade: 'Web/Mobile'
//     }
// ]

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.techs[0].nome} com especialidade em ${programador.techs[0].especialidade}`)