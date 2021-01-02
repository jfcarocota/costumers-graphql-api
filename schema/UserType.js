import graphql, { GraphQLList } from 'graphql';
import RoleType from './RoleType.js';
import Role from '../models/Role.js';

const {GraphQLObjectType, GraphQLString, GraphQLID}  = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ()=>({
        id:{type: GraphQLID},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        role: {
            type: RoleType,
            resolve(parent, args){
                return Role.findById(parent.roleId);
            }
        }
    })
});

export default UserType;