import axios from 'axios';

interface LinkedInProfile {
  name: string;
  jobTitle: string;
  company: string;
  location: string;
  summary: string;
}

export const generateLinkedInMessage = async (profile: LinkedInProfile) => {
  try {
    const message = `Hello ${profile.name}, I noticed that you're a ${profile.jobTitle} at ${profile.company} based in ${profile.location}. I really admire your expertise in ${profile.summary}, and I'd love to connect with you to discuss potential opportunities.`;

    return message;
  } catch (error) {
    throw new Error('Failed to generate LinkedIn message');
  }
};
