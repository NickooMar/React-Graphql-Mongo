import { GraphQLServer } from "graphql-yoga";
import path  from "path";
import resolvers from "./graphql/resolvers";


export const server = new GraphQLServer ({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
    resolvers: resolvers
})

//importo el graphqlServer de graphql yoga, creo un nuevo squema y lo guardo en una constante, defino los Tipos de definicion
// y los resolver.
