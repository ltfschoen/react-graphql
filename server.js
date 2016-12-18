import fs from 'fs';
import express from 'express';
import linkApi from './js/api/mockLinkApi';

// GraphQL helper package for Express to mount the GraphQL Schema
import Schema from './js/data/schema';
import GraphQLHTTP from 'express-graphql';

// GraphQL functions for generating schema.json
import {graphql} from 'graphql';
// Query (large) representing full generic GraphQL schema introspection
import {introspectionQuery} from 'graphql/utilities';

const port = 3000;
let app = express();
app.use(express.static('public'));

(async () => {
  let schema = Schema; // Reusable Schema Object

  // Mount GraphQL Endpoint for Express server using GraphQLHTTP helper as callback takes GraphQL Schema as arg
  app.use('/graphql', GraphQLHTTP({
    schema: schema,
    graphiql: true // GraphiQL with built-in autocomplete for our GraphQL server
  }));

  app.listen(port, () => {
    console.log('Listening on port 3000');
  });

  app.get("/data/links", (req, res) => {
    return linkApi.getAllLinks().then((links) => {
      res.json(links);
    }).catch(error => {
      throw(error);
    });
  });

  /**
   *  Generate schema.json (for Relay Plugin) each time server started by
   *  async calling `graphql` function, which executes generic `introspectionQuery`
   *  on our `schema` to generate JSON string representing our full schema
   *  that our Relay Plugin may use to transpile all GraphQL queries and mutations
   *  before shipping them to Client-Side. The ./data/schema.json JSON file is made
   *  available to the Relay Plugin by writing it to a file and used to validate and
   *  compile any query or mutation
   */
  let json = await graphql(schema, introspectionQuery);

  fs.writeFile('./js/data/schema.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;

    console.log("JSON schema created");
  });

})();