import { NextResponse } from 'next/server';
import Project from '@/models/Project';
import { FEATURED_PROJECTS } from '@/lib/constants';
import dbConnect from '@/lib/mongo';

export async function GET() {
  try {
    await dbConnect();
    
    // Check if we have projects in the database
    const projects = await Project.find({}).sort({ order: 1, featured: -1 });
    
    // If no projects in DB, return the constant projects
    if (projects.length === 0) {
      return NextResponse.json(FEATURED_PROJECTS, { status: 200 });
    }
    
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching projects' },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function POST() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
