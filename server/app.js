const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://Hamsika:Password1!@ds153566.mlab.com:53566/graphql_ninja',{ useNewUrlParser: true });

mongoose.connection.once('open', ()=>{
  console.log('Connected to mlab mongodb');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening to requests on port 4000');
});
