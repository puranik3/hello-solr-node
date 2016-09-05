# About this project
Project to explore using SOLR client in a node.js app.  

Wrapping [Node client for Solr](https://www.npmjs.com/package/solr-client) methods we create a wrapper module that can be used to perform CRUD operations (further) easily.

[Documentation for the solr-client module](http://lbdremy.github.io/solr-node-client/code/solr.js.html)

# Appendix
## Curl commands to work with Solr
- POSTing a document to mycore core - note that commitWthin=<<x>> is required to make sure we will have document added while querying after x milliseconds
```
curl -X POST -H "Content-Type: application/json" -d '[{"id":1001,"title":"hello solr"}]' "http://localhost:8983/solr/mycore/update?commitWithin=1000&overwrite=true&wt=json"
```
- GETting documents
```
curl -X GET "http://localhost:8983/solr/mycore/select?indent=on&q=*:*&rows=50&wt=json"
```

## Working with Logstash
Uploading data from Mongo DB to Solr (config file is mongodb_to_solr.conf)  
From within logstash\bin folder execute this
```
logstash -f ..\config\mongodb_to_solr.conf
```