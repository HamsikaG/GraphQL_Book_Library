const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString,
  GraphQLSchema, GraphQLID, GraphQLInt} = graphql;

const _ = require('lodash');

// dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

var authors = [
    { name: 'Jane Austen', age: '25', id: '1' },
    { name: 'Robert Langdon', age: '70', id: '2' },
    { name: 'Mitch Albom', age: '50', id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}

  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    book: {
      type: BookType,
      args:{id: { type: GraphQLID}},
      resolve(parent,args){
        //code to get data from db
        console.log(typeof(args.id));
        return _.find(books,{id: args.id});
      }
    },
    author:{
      type: AuthorType,
      args:{id: { type: GraphQLID}},
      resolve(parent,args){
        //code to get data from db
        console.log(typeof(args.id));
        return _.find(authors,{id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
