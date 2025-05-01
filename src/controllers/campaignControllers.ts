import { Request, Response } from 'express';
import Campaign from '../models/Campaign';

export const createCampaign = async (req: Request, res: Response) => {
    try {
      const { name, description, leads, accountIDs } = req.body;
  
      const campaign = new Campaign({
        name,
        description,
        leads,
        accountIDs,
      });
  
      await campaign.save();
      res.status(201).json(campaign);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  

  export const getCampaigns = async (req: Request, res: Response) => {
    try {
      const campaigns = await Campaign.find({ status: { $ne: 'DELETED' } });
      res.json(campaigns);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  

export const getCampaignById = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const campaign = await Campaign.findById(req.params.id);
  
      if (!campaign || campaign.status === 'DELETED') {
        return res.status(404).json({ message: 'Campaign not found' });
      }
  
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  

export const updateCampaign = async (req: Request, res: Response) => {
    try {
      const { name, description, status, leads, accountIDs } = req.body;
  
      const campaign = await Campaign.findByIdAndUpdate(
        req.params.id,
        { name, description, status, leads, accountIDs },
        { new: true }
      );
  
      if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
      }
  
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  

  export const deleteCampaign = async (req: Request, res: Response) => {
    try {
      const campaign = await Campaign.findByIdAndUpdate(
        req.params.id,
        { status: 'DELETED' },
        { new: true }
      );
  
      if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
      }
  
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  


