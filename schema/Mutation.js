import graphql from 'graphql';
import CostumerType from './CostumerType.js';
import Costumer from '../models/Costumer.js';
import RoleType from './RoleType.js';
import Role from '../models/Role.js'; 
import PermissionType from './PermissionType.js';
import Permission from '../models/Permission.js';
import UserType from './UserType.js';
import User from '../models/User.js';
import PackageType from './PackageType.js';
import Package from '../models/Package.js';
import Parcel from '../models/Parcel.js';
import ParcelType from './ParcelType.js';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLList}  = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        // Costumers
        addCostumer: {
            type: CostumerType,
            args: {
                firstName: {type: GraphQLString},
                middleName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                secondLastName: {type: GraphQLString},
                fullName: {type: GraphQLString},
                phonNumber: {type: GraphQLString},
                email: {type: GraphQLString}
            },
            resolve(parent, args){
                const costumer = new Costumer(args);
                return costumer.save();
            }
        },
        editCostumer: {
            type: CostumerType,
            args: {
                id: {type: GraphQLID},
                firstName: {type: GraphQLString},
                middleName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                secondLastName: {type: GraphQLString},
                phonNumber: {type: GraphQLString},
                email: {type: GraphQLString}
            },
            resolve(parent, args){
                return Costumer.findByIdAndUpdate(args.id, args);
            }
        },
        hideCostumer: {
            type: CostumerType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Costumer.findByIdAndUpdate(args.id, {deleted:"yes"});
            }
        },


        // Packages
        addPackage:{
            type: PackageType,
            args: {
                account: {type: GraphQLString},
                password: {type: GraphQLString},
                costumerId: {type: GraphQLID},
                parcelId: {type: GraphQLID}
            },
            resolve(parent, args){
                const packager = new Package(args);
                return packager.save();
            }
        },
        editPackage: {
            type: PackageType,
            args: {
                id: {type: GraphQLID},
                account: {type: GraphQLString},
                password: {type: GraphQLString},
                costumerId: {type: GraphQLID},
                parcelId: {type: GraphQLID}
            },
            resolve(parent, args){
                return Package.findByIdAndUpdate(args.id, args);
            }
        },
        hidePackage: {
            type: PackageType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Package.findByIdAndUpdate(args.id, {deleted:"yes"});
            }
        },
        
        // Parcels
        addParcel: {
            type : ParcelType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                const parcel = new Parcel(args);
                return parcel.save();
            }
        },
        editParcel: {
            type: ParcelType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                return Parcel.findByIdAndUpdate(args.id, args);
            }
        },
        hideParcel: {
            type: ParcelType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Parcel.findByIdAndUpdate(args.id, {deleted:"yes"});
            }
        },

        // Roles
        addRole: {
            type: RoleType,
            args: {
                name:{type: GraphQLString},
                permissionsIds: {type: new GraphQLList(GraphQLID)}
            },
            resolve(parent, args){
                let role = new Role(args);
                return role.save();
            }
        },
        editRole: {
            type: RoleType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                permissionsIds: {type: new GraphQLList(GraphQLID)}
            },
            resolve(parent, args){
                return Role.findByIdAndUpdate(args.id, args);
            }
        },

        // Permissions
        addPermission: {
            type: PermissionType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                let permission = new Permission(args);
                return permission.save(); 
            }
        },
        editPermission: {
            type: PermissionType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                return Permission.findByIdAndUpdate(args.id, args);
            }
        },

        // Users
        addUser: {
            type: UserType,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                roleId: {type: GraphQLID}
            },
            resolve(parent, args){
                let user = new User(args);
                return user.save();
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                roleId: {type: GraphQLID}
            },
            resolve(parent, args){
                return User.findOneAndUpdate(args.id, args);
            }
        },
        hideUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return User.findByIdAndUpdate(args.id, {deleted:"yes"});
            }
        },
    }
});

export default Mutation;