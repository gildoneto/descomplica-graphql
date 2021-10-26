const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

// knex('alunos').insert({
//     nome: 'Ena Guimaraes',
//     cpf: '01476515426',
//     email: 'ena.guimaraes@descomplica.com.br'
// }).then(data => console.log(data))

//knex('alunos').first().then(result => console.log(result))
// knex('alunos').then(result => console.log(result))
// knex('alunos').select('*').then(result => console.log(result))
// knex('alunos').where({id: 1}).then(result => console.log(result))

module.exports = knex