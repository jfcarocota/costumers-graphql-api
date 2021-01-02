import graphql from 'graphql';
import PackageType from './PackageType.js';
import Package from '../models/Package.js';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList}  = graphql;

const CostumerType = new GraphQLObjectType({
    name: 'Costumer',
    fields: ()=>({
        id:{type: GraphQLID},
        firstName: {type: GraphQLString},
        middleName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        secondLastName: {type: GraphQLString},
        phonNumber: {type: GraphQLString},
        email: {type: GraphQLString},
        packages: {
            type: new GraphQLList(PackageType),
            resolve(parent, args){
                return Package.find({costumerId: parent.id});
            }
        }
    })
});

export default CostumerType;