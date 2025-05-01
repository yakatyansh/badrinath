import express from 'express';
import { generateLinkedInMessage } from '../services/linkedinMessages';

const router = express.Router();

router.post('/generate-message', async (req, res) => {
  try {
    const { name, jobTitle, company, location, summary } = req.body;

    const profile = { name, jobTitle, company, location, summary };
    const message = await generateLinkedInMessage(profile);

    res.json({ message });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error generating message', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

export default router;
