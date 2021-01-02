import graphql from 'graphql';
import PackageType from './PackageType.js';
import Package from '../models/Package.js';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList}  = graphql;

const ParcelType = new GraphQLObjectType({
    name: 'Parcel',
    fields: ()=>({
        id:{type: GraphQLID},
        name: {type: GraphQLString}
    })
});

export default ParcelType;