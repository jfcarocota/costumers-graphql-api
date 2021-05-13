import express from 'express';
import expressgraphql from 'express-graphql';
import mongoose from 'mongoose';
/*import {Mongo} from '@accounts/mongo';
import {AccountsServer } from '@accounts/server';
import {AccountsPassword } from '@accounts/password';*/
import cors from 'cors';
import dotenv from 'dotenv';
import Schema from './schema/Schema.js';


dotenv.config();
const app = express();

const {graphqlHTTP} = expressgraphql;

app.use(cors())


const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.ACCOUNT_PASSWORD}${process.env.DB_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=> console.log('connected'))
.catch(e => console.log(`[Error]: ${e}`));

/*const accountsMongo = new Mongo(mongoose.connection);

const accountsPassword = new AccountsPassword({
    // You can customise the behavior of the password service by providing some options
  });
  
  const accountsServer = new AccountsServer(
    {
      // We link the mongo adapter we created in the previous step to the server
      db: accountsMongo,
      // Replace this value with a strong random secret
      tokenSecret: process.env.ACCOUNT_PASSWORD,
    },
    {
      // We pass a list of services to the server, in this example we just use the password service
      password: accountsPassword,
    }
  );*/

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(process.env.PORT, console.log(`listening at: http://${process.env.HOST}:${process.env.PORT}/graphql`));
