import express from 'express';
import {
  createCampaign,
  getCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign
} from '../controllers/campaignControllers';
import asyncHandler from '../utils/asyncHandler'; // Import the asyncHandler

const router = express.Router();

// Define routes and wrap controller methods with asyncHandler
router.post('/campaigns', asyncHandler(createCampaign));
router.get('/campaigns', asyncHandler(getCampaigns));
router.get('/campaigns/:id', asyncHandler(getCampaignById));
router.put('/campaigns/:id', asyncHandler(updateCampaign));
router.delete('/campaigns/:id', asyncHandler(deleteCampaign));

export default router;
