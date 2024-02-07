import cors from 'cors';
import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = parseInt(process.env.PORT || '8836');

const env = process.env['NODE_ENV'];
const isDevelopment = !env || env === 'development';
const prodCorsOrigin = process.env['PROD_CORS_ORIGIN'];

app.use(express.json());

if (isDevelopment) {
  console.warn('Running in development mode - allowing CORS for all origins');
  app.use(cors());
} else if (prodCorsOrigin) {
  console.log(`Running in production mode - allowing CORS for domain: ${prodCorsOrigin}`);
  const corsOptions = {
    origin: prodCorsOrigin, // Restrict to production domain
  };
  app.use(cors(corsOptions));
} else {
  console.warn('Production CORS origin not set, defaulting to no CORS.');
}

app.use(express.text());

app.get('/', (req: Request, res: Response) => {
  // TODO: Handle request and send response

  res.send('LlamaIndex Express Server');
});

app.post('/api/chat', (req: Request, res: Response) => {
  res.json({ response: 'LlamaIndex Express Server' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
