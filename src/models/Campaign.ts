import mongoose, { Schema, Document } from 'mongoose';

export interface ICampaign extends Document {
  name: string;
  description: string;
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED';
  leads: string[]; 
  accountIDs: mongoose.Types.ObjectId[]; 
  createdAt: Date;
  updatedAt: Date;
}

const campaignSchema = new Schema<ICampaign>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'DELETED'], default: 'ACTIVE' },
    leads: [{ type: String, required: true }], // Array of LinkedIn URLs
    accountIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }] // Assuming Account model exists
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model<ICampaign>('Campaign', campaignSchema);
export default Campaign;
