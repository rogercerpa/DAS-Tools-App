import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGODB_URI);

export const fetchData = async (endpoint) => {
  try {
    await mongoClient.connect();

    const collection = mongoClient.db().collection(endpoint);
    const data = await collection.find({}).toArray();

    console.log(data);

    await mongoClient.close();

    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
  }
};
