import graphql, { GraphQLList } from 'graphql';
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

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat}  = graphql;


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addCostumer: {
            type: CostumerType,
            args: {
                firstName: {type: GraphQLString},
                middleName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                secondLastName: {type: GraphQLString},
                phonNumber: {type: GraphQLString},
                email: {type: GraphQLString}
            },
            resolve(parent, args){
                const costumer = new Costumer(args);
                return costumer.save();
            }
        },
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
        addParcel: {
            type : ParcelType,
            args: {
                name: {type: GraphQLString},
            },
            resolve(parent, args){
                const parcel = new Parcel(args);
                return parcel.save();
            }
        },
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
                return User.findOneAndUpdate(args.roleId, args);
            }
        }
    }
});

export default Mutation;