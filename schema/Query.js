import graphql from 'graphql';
import CostumerType from './CostumerType.js';
import Costumer from '../models/Costumer.js';
import RoleType from './RoleType.js';
import Role from '../models/Role.js';
import Permission from '../models/Permission.js';
import PermissionType from './PermissionType.js';
import UserType from './UserType.js';
import User from '../models/User.js';
import SessionType from './SessionType.js';
import Package from '../models/Package.js';
import PackageType from './PackageType.js';
import Parcel from '../models/Parcel.js';
import ParcelType from './ParcelType.js';

const {GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString}  = graphql;

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        // Costumers
        costumer: {
            type: CostumerType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                const {id} = args;
                return Costumer.findById(id);
            }
        },
        costumers: { 
            type: new GraphQLList(CostumerType),
            resolve(parent, args){
                return Costumer.find( {deleted: null} );
            }
        },
        costumersSearch: {
            type: new GraphQLList(CostumerType),
            args: {
                fullName: {type: GraphQLString}
            },
            resolve(parent, args){
                return Costumer.find( { fullName: {$regex: args.fullName} } );      // Búsqueda en formate where like
            }
        },

        // Packages
        package: {
            type: PackageType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                const {id} = args;
                return Package.findById(id);
            }
        },
        packages: {
            type: new GraphQLList(PackageType),
            resolve(parent, args){
                return Package.find( {deleted: null} );
            }
        },

        // Parcels
        parcel: {
            type: ParcelType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                const {id} = args;
                return Parcel.findById(id);
            }
        },
        parcels: {
            type: new GraphQLList(ParcelType),
            resolve(parent, args){
                return Parcel.find( {deleted: null} );
            }
        },

        // Roles
        role: {
            type: RoleType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                const {id} = args;
                return Role.findById(id);
            } 
        },
        roles: {
            type: new GraphQLList(RoleType),
            resolve(parent, args){
                return Role.find();
            }
        },

        // Permissions
        permission: {
            type: PermissionType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                const {id} = args;
                return Permission.findById(id);
            }
        },
        permissions: {
            type: new GraphQLList(PermissionType),
            resolve(parent, args){
                return Permission.find();
            }
        },

        // Users
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                const {id} = args;
                return User.findById(id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find( {deleted: null} );
            }
        },

        // Login
        login: {
            type: SessionType,
            args:{
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parent, args){
                const user = User.findOne(args);   
                return user;        
            }
        }
    }
});

export default Query;