import express, { NextFunction, Request, Response } from 'express';
import BaseHTTPError from './errors/httpError';
import cadastroRouter from './routes/cadastroRout';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send());

app.use('/', cadastroRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: BaseHTTPError, _req: Request, res: Response, _next: NextFunction) => {
    if (err.statuscode) {
        return res.status(err.statuscode).json({ message: err.message });
    }
    console.error(err.message);
    return res.status(500).json({ message: 'Erro Interno'});
});

export default app;