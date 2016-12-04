## Local Setup

* `npm install`
* `npm start` and go to http://localhost:3000
* Refresh page to show code changes
* Go to GraphQL Server endpoint
    * Query example http://localhost:3000/graphql?query={counter,message,dataArray,dataArrayOfObjects{counter},dataArrayOfLinkObjects{_id,url}} for JSON response
    * Mutation example http://localhost:3000/graphql?mutation{incrementCounter} run multiple times to increment

## TODO 
* [ ] Setup Relay
* [ ] Setup Mongo instead of Mock API (shown in course)

## Credits 
* Built based upon Pluralsight course Building Data-driven React Apps with Relay, GraphQL and Flux.