require('dotenv').config();
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';
import { loggingHandler } from './middleware/logger';

// Extend Express Request type to include user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
if (process.env.LOGGING_ENABLED) {
  app.use(loggingHandler);
}

app.use(express.json());
app.use(routes);
app.use(errorHandler);

export default app;
