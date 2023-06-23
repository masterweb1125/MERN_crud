import { MongoClient } from "mongodb";

const connectionString = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    console.log("success");
} catch (e) {
    console.error(e);
}

let db = conn.db("sample_training");

export default db;