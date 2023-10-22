import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === 'POST') {
			const authorizationHeader = req.headers.authorization;

			if (!authorizationHeader || !authorizationHeader.startsWith('LOL ')) {
				res.status(401).json({ error: 'Unauthorized' });
				return;
			}
			const adminSecret = authorizationHeader.replace('LOL ', '');

			if (adminSecret !== `${process.env.PSN_KEY}`) {
				res.status(401).json({ error: 'Unauthorized' });
				return;
			}

			const { projectName, projectDescription, projectLink } = req.body;
			const client = new MongoClient(`${process.env.MONGODB_URI}`);
			console.log(req.body);
			await client
				.connect()
				.then(() => console.log('Connected to MongoDB'))
				.catch((err) => console.log(err));

			const db = client.db(`${process.env.DB_NAME}`);
			const collection = db.collection(`${process.env.COLLECTION_NAME}`);
			const saveBody = {
				projectName,
				projectDescription,
				projectLink,
			};
			await collection
				.insertOne(saveBody)
				.then(() => {
					console.log('Data saved to MongoDB');
				})
				.catch((err) => console.log(err));

			res.status(200).json({ success: true }); // Send a success response
		} else if (req.method === 'GET') {
			const client = new MongoClient(`${process.env.MONGODB_URI}`);

			await client.connect();

			const db = client.db(`${process.env.DB_NAME}`);
			const collection = db.collection(`${process.env.COLLECTION_NAME}`);

			const data = await collection.find().toArray();
			console.log(data, 'meeeeeeeee');

			res.status(200).json(data);
		} else {
			res.status(405).json({ error: 'Method not allowed' });
		}
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch data' });
	}
}
