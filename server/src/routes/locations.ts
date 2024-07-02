import express, { Express, Request, Response } from "express";
import pool from "../db";

const router = express.Router();

// GET all locations
router.get('/', async (req: Request, res: Response) => {
    try {
        const allLocations = await pool.query('SELECT * FROM Locations')
        res.json(allLocations.rows);
    } catch (err:any) {
        console.error(err.message);
    }
})

// GET a single location
router.get('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const allLocations = await pool.query('SELECT * FROM Locations WHERE id = $1', [id])
        res.json(allLocations.rows);
    } catch (err:any) {
        console.error(err.message);
    }
})

// POST a new location
router.post('/', (req: Request, res: Response) => {
    res.json({mssg: 'POST a new location'})
})

// DELETE a single location
router.delete('/:id', (req: Request, res: Response) => {
    res.json({mssg: 'DELETE a location'})
})

// UPDATE a single location
router.patch('/:id', (req: Request, res: Response) => {
    res.json({mssg: 'UPDATE a location'})
})

// export router
export = router;