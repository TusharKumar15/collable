import { NextApiRequest, NextApiResponse } from 'next';
import { connectServer } from '../../serverUtils/connectServer';

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    const db = await connectServer();
    const articles = db.collection('article'); 
    const articlesList = await articles.find().toArray();
    return res.status(200).json(articlesList);
}

export default handler;
