import express, { Express, Request, Response } from "express";

const router = express.Router();

// GET all locations
router.get('/', (req: Request, res: Response) => {
    res.json({mssg: 'GET all locations'})
})

// GET a single location
router.get('/:id', (req: Request, res: Response) => {
    res.json({mssg: 'GET a location'})
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