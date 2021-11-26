/*const mongoDb = require('mongoDb');
const MongoClient = mongoDb.MongoClient;

const dbConnection = 'mongodb+srv://mongonodejs:mongonodejs@clusternodejs.knwq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = "Integrantes";
const CollectionName = "Integrantes";

function initialize(successCallBack, failureCallBack){
    MongoClient.connect(dbConnection, function(err, dbInstance){
        if(err){
            console.log('[MongoDb] Error'+err);
        }else{
            const dbObject = dbInstance.db(dbName);
            const dbConnection = dbObject.collection(CollectionName);
            console.log('[MongoDb] Error'+err);
        }
    });
}*/