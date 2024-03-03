import { Request, Response } from 'express';
import License from '../models/licenseModel';

export const getAllLicenses = async (req: Request, res: Response) => {
    try {
        const licenses = await License.findAll();
        res.json(licenses);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const createLicense = async (req: Request, res: Response) => {
    const { key } = req.body;
    if (!key) {
        return res.status(400).json({ error: 'Key required!' });
    }

    try {
        const license = await License.create({ key });
        res.json(license);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};