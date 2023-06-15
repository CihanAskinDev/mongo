import { MongoClient } from "mongodb"; // getting function from library
import { mongoURI } from "./secrets.js" // getting our secret connection string

const connection = new MongoClient(mongoURI); // connecting to our database using our secret connection string

await connection.connect();

const db = connection.db("Cluster0")

await db.collection("students").insertOne({ name: "Cihan Askin" , age: 36})

const results = await db.collection("students").findOne({ name: "Cihan Askin" }); //get student

console.log(results);

connection.close();