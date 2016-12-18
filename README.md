## Local Setup

* `npm install`
* `npm start` to generate ./data/schema.json and go to http://localhost:3000. Inspector shows Relay Query 
object generated using Tagged Template String so Relay Query aware of types for all its fields.
* Refresh page to show code changes
* Go to GraphQL Server endpoint
    * Query example http://localhost:3000/graphql?query={counter,message,dataArray,dataArrayOfObjects{counter},dataArrayOfLinkObjects{_id,url}} for JSON response
    * Mutation example http://localhost:3000/graphql?mutation{incrementCounter} run multiple times to increment

## TODO 
* [ ] Setup Mongo instead of Mock API (shown in course)
* [ ] Restore Nodemon functionality to watch for changes when using schema.json with Relay

## Credits 
* Built based upon Pluralsight course Building Data-driven React Apps with Relay, GraphQL and Flux.