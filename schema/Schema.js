import graphql from 'graphql';
import Query from './Query.js';
import Mutation from './Mutation.js';

const {GraphQLSchema}  = graphql;

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation
})