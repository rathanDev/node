Ref
https://www.youtube.com/watch?v=b8ZUb_Okxro&t=40s

npm init

npm i -D typescript 

npm i -D ts-node

npm i -D nodemon

npx tsc --init 
    creates tsconfig.json 

npm i express body-parser cookie-parser compression cors 

npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors

used: janarthan.paraman@gmail.com
mongoAtlasCluster0
root 
root 
url: 
https://cloud.mongodb.com/v2/661bdebd3016b433849252ff#/overview

used: rathan.kparam@gmail.com 
mongoAtlasCluster0
root
root 
mongodb+srv://root:<password>@mongoatlascluster0.hdwgyrk.mongodb.net/?retryWrites=true&w=majority&appName=mongoAtlasCluster0

npm i mongoose
npm i -D @types/mongoose













-----

connection string 
mongodb+srv://root:<password>@mongoatlascluster0.jbymndf.mongodb.net/
mongodb+srv://root:root@mongoatlascluster0.jbymndf.mongodb.net/

-----

mongodb+srv://root:root@mongoatlascluster0.jbymndf.mongodb.net/?retryWrites=true&w=majority&appName=mongoAtlasCluster0

-----


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:root@mongoatlascluster0.jbymndf.mongodb.net/?retryWrites=true&w=majority&appName=mongoAtlasCluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
