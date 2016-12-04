import express from 'express';
import linkApi from './js/api/mockLinkApi';

// GraphQL helper package for Express to mount the GraphQL Schema
import schema from './js/data/schema';
import GraphQLHTTP from 'express-graphql';

const port = 3000;
let app = express();
app.use(express.static('public'));

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
