import graphql from 'graphql';
import Permission from '../models/Permission.js';

const {GraphQLObjectType, GraphQLString, GraphQLID}  = graphql;

const PermissionType = new GraphQLObjectType({
    name: 'Permission',
    fields: ()=>({
        id:{type: GraphQLID},
        name: {type: GraphQLString}
    })
});

export default PermissionType;