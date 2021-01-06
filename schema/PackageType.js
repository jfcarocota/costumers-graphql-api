import graphql from 'graphql';
import ParcelType from './ParcelType.js';
import Parcel from '../models/Parcel.js';

const {GraphQLObjectType, GraphQLString, GraphQLID}  = graphql;

const PackageType = new GraphQLObjectType({
    name: 'Package',
    fields: ()=>({
        id:{type: GraphQLID},
        account: {type: GraphQLString},
        password: {type: GraphQLString},
        costumerId: {type: GraphQLID},
        deleted: {type: GraphQLString},
        parcel: {
            type: ParcelType,
            resolve(parent, args){
                return Parcel.findById(parent.parcelId);
            }
        }
    })
});

export default PackageType;