import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://tusharkmr15:${process.env.MONGODB_PASSWORD}@cluster0.ydux6wm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const connectServer = async() => {
    await client.connect();
    const dbName = "Collable"
    const db = client.db(dbName);
    return db;
}
connectServer().catch(console.dir);
