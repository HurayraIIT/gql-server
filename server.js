var express = require('express');
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require('graphql');
var cors = require('cors');

const PORT = 4000;

// GraphQL Schema
var schema = buildSchema (`
    type Query {
        message: String
    }
`);

// Root Resolver
var root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
var app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Express GraphQL Server is running on: localhost:${PORT}/graphql`)
});
