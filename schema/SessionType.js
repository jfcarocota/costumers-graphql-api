import graphql from 'graphql';
import jwt from 'jsonwebtoken';

const {GraphQLObjectType, GraphQLString, GraphQLID}  = graphql;

const SessionType = new GraphQLObjectType({
    name: 'Session',
    fields: ()=>({
        //email: {type: GraphQLString},
        token: {
            type: GraphQLString,
            resolve(parent, args){
                //return parent.email;
                return jwt.sign({email: parent.email}, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_LIVE});
            }
        }
    })
});

export default SessionType;