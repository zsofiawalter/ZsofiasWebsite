import { Router, Request, Response } from "express";
import pool from "../db";

const locationRouter = Router();

//TODO: add data validation so only valid coordinates are entered

// GET all locations
locationRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allLocations = await pool.query('SELECT * FROM locations;')
        res.json(allLocations.rows);
    } catch (err) {
        console.error(err);
        res.json({ message: err });
    }
});

// GET a single location
locationRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const location = await pool.query('SELECT * FROM Locations WHERE id = $1', [id])
        res.json(location.rows[0]);
    } catch (err) {
        console.error(err);
        res.json({ message: err });
    }
});

// POST a new location
locationRouter.post('/', async (req: Request, res: Response) => {
    let { name, latitude, longitude } = req.body;
    try {
        // TODO: check for duplicates
        const newLocation = await pool.query(
            'INSERT INTO Locations (name, latitude, longitude) VALUES ($1, $2, $3) RETURNING *',
            [name, latitude, longitude]
        );
        res.json(newLocation.rows[0]);
    } catch (err) {
        console.error(err);
        res.json({ message: err });
    }
});

// UPDATE a single location
locationRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    let { name, latitude, longitude } = req.body;
    try {
        const updatedLocation = await pool.query(
            'UPDATE Locations SET name = $1, latitude = $2, longitude = $3 WHERE id = $4 RETURNING *', 
            [name, latitude, longitude, id]
        );
        res.json(updatedLocation.rows[0]);
    } catch (err) {
        console.error(err);
        res.json({ message: err })
    }
});

// DELETE a single location
locationRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM Locations WHERE id = $1', [id])
        res.json({ message: 'Location deleted' });
    } catch (err) {
        console.error(err);
        res.json({ message: err });
    }
});

// DELETE all locations
locationRouter.delete('/', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM Locations')
        res.json({ message: 'All locations deleted' });
    } catch (err) {
        console.error(err);
        res.json({ message: err });
    }
});

// export router
export = locationRouter;