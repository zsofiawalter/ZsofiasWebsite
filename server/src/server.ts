import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import locationRoutes from "./routes/locations";

dotenv.config();

// express app
const app: Express = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use((req: Request, res: Response, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/locations', locationRoutes);

// listen for requests
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});