import graphql from 'graphql';
import Permission from '../models/Permission.js';
import PermissionType from  './PermissionType.js'

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList}  = graphql;

const RoleType = new GraphQLObjectType({
    name: 'Role',
    fields: ()=>({
        id:{type: GraphQLID},
        name: {type: GraphQLString},
        permissions: {
            type: new GraphQLList(PermissionType),
            resolve(parent, args){
                return parent.permissionsIds.map(permissionId => Permission.findById(permissionId));
            }
        }
    })
});

export default RoleType;