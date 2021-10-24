const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const alunosAttribs = `
    id: ID
    nome: String!
    cpf: String!
    email: String!
`

const typeDefs = `
    type Aluno {
        ${alunosAttribs}
    }

    type Query {
        getAluno(id : ID!): Aluno
        getAlunos: [Aluno]
    }

    input AlunoInput {
        ${alunosAttribs}
    }

    type Mutation {
        createAluno(input: AlunoInput): Aluno
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs, 
    resolvers
})