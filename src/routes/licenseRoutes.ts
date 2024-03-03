import express from 'express';
import { getAllLicenses, createLicense } from '../controllers/licenseController';

const router = express.Router();

router.get('/', getAllLicenses);
router.post('/', createLicense);

export default router;