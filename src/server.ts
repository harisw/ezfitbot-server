import express, { type Request, type Response } from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

import { HttpCode, ONE_HUNDRED, ONE_THOUSAND, SIXTY } from './core/constants';

interface ServerOptions {
  port: number;
};

export class Server {
  private readonly app = express();
  private readonly port: number;

  constructor(options: ServerOptions) {
    const { port } = options;
    this.port = port;
  }

  async start(): Promise<void> {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());

    this.app.use(
      rateLimit({
        max: ONE_HUNDRED,
        windowMs: SIXTY * SIXTY * ONE_THOUSAND,
        message: 'Too many requests from same IP'
      })
    );

    this.app.get('/', (req: Request, res: Response) => {
      return res.status(HttpCode.OK).send({
        message: `Welcome to Initial API! \n Endpoints available at http://localhost:${this.port}/`
      });
    });

    this.app.post('/test', (req: Request, res: Response) => {
      const { message } = req.body;
      console.log(message);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }

}