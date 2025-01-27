// lib/middleware/cors.ts
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize CORS middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
  origin: '*', // You can set this to your frontend's URL for more security
});

export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
