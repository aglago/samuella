import mongoose, { Document, Model } from 'mongoose';

// Interface for the Project document
export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const ProjectSchema = new mongoose.Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    imageUrl: { type: String },
    projectUrl: { type: String },
    githubUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  }, 
  { timestamps: true }
);

// Model creation with type safety
const Project: Model<IProject> = 
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
