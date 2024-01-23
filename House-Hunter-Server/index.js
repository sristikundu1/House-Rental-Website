const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iz3zu0d.mongodb.net/?retryWrites=true&w=majority`;


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
        // await client.connect();

        // make a collection name tasks
        const houseCollection = client.db("houseDB").collection("houses");

        // read the data in the client site  from server site
        app.get("/house", async (req, res) => {
            // const email = req.query.email;
            // const query = { email: email }

            const result = await houseCollection.find().toArray();
            res.send(result);

        })

        // insert data in the database where there is a collection named tasks
        app.post("/house", async (req, res) => {
            const houseList = req.body;
            const result = await houseCollection.insertOne(houseList)
            res.send(result);
        })

       
        app.delete("/house/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await houseCollection.deleteOne(query)
            res.send(result);
        })




        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('house hunter website server is running');
});

app.listen(port, () => {
    console.log(`house hunter  website server is running on port : ${port}`);
});