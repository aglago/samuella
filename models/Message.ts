import mongoose, { Document, Model } from 'mongoose';

// Interface for the Message document
export interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const MessageSchema = new mongoose.Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  }, 
  { timestamps: true }
);

// Model creation with type safety
const Message: Model<IMessage> = 
  mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

export default Message;
