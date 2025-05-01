import mongoose, {Schema, Document} from "mongoose";

export interface ICampaign extends Document {
    name: string;
    description: string;
    status: 'ACTIVE' | 'INACTIVE';
    createdAt: Date;
    updatedAt: Date;
}

const CampaignSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
    },
}, {
    timestamps: true,
});
const Campaign = mongoose.model<ICampaign>('Campaign', CampaignSchema);


export default Campaign;