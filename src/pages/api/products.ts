import { NextApiRequest, NextApiResponse } from 'next';
import data from './json/products.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;

    if (method === 'GET') {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(404).json(error);
  }
}
