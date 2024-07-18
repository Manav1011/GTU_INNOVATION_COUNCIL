const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const {graphqlHTTP} = require('express-graphql')
//import the schema for the graphql
const schemas = require('./GIC_BACKEND/graphql/schema')
const {rootResolver} = require("./GIC_BACKEND/graphql/resolver");
const next = require('next');

//import the resolvers for the graphql
const dev = process.env.NODE_ENV !== 'production';
const server = next({dev})

const handle = server.getRequestHandler();


// initilized the port, for handling all kinds of request on server
const PORT = 3000;
// initilized the express server 
const app = express()

try{
    
    // establish the connection with database  
    // include the body parser middleware
    app.use(bodyParser.json())
    //setup the cors 
    app.use(cors())    

    app.get('/api/manage/custom',(req,res)=>{
        res.json({
            "h1":"hello"
        })
    })        

    // setup the graphql endpoint
    app.use("/api/manage",graphqlHTTP({
        schema: schemas,
        rootValue: rootResolver,
        graphiql: true
    }))

    app.use((err,req,res,next)=>{
        console.error(err.stack);
        res.status(500).send(err.stack);
    })


    server.prepare().then(()=>{
        
        app.all('*',(req,res)=>{
            return handle(req, res);
        })

        app.listen(PORT,()=>{
            console.log("http://localhost:3000")
        })
    })
    .catch((error)=>{
        
    })
}
catch(error){
    console.log(error.message)
}

// listen the requests on the port