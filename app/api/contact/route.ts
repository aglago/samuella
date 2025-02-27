// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Message from '@/models/Message';
import dbConnect from '@/lib/mongo';
import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
  },
});

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new message
    const newMessage = await Message.create({
      name,
      email,
      message,
      read: false
    });
    
    // Send email notifications
    try {
      // Send notification to you
      await sendNotificationToOwner(name, email, message);
      
      // Send auto-reply to the sender
      await sendAutoReplyToSender(name, email);
      
      console.log('Email notifications sent successfully');
    } catch (emailError) {
      // Log the error but don't fail the request
      console.error('Failed to send email notifications:', emailError);
    }
    
    return NextResponse.json(
      { success: true, data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { success: false, message: 'Error saving your message' },
      { status: 500 }
    );
  }
}

// Function to send notification to the website owner
async function sendNotificationToOwner(name: string, email: string, message: string) {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // Where to send notifications
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #555;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px;">
          <p>This is an automated notification from your portfolio website.</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

// Function to send auto-reply to the sender
async function sendAutoReplyToSender(name: string, email: string) {
  const websiteOwnerName = process.env.OWNER_NAME || 'Samuella';
  const mailOptions = {
    from: `"${websiteOwnerName}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting me!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; padding-bottom: 10px;">Hello ${name},</h2>
        
        <p style="margin: 20px 0; line-height: 1.6;">
          Thank you for reaching out to me through my portfolio website. I have received your message and will review it as soon as possible.
        </p>
        
        <p style="margin: 20px 0; line-height: 1.6;">
          I typically respond to inquiries within 1-2 business days. If your matter is urgent, please feel free to connect with me directly on LinkedIn.
        </p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin-top: 0;">
            <strong>Looking forward to our potential collaboration!</strong>
          </p>
        </div>
        
        <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
          <p style="margin: 5px 0;"><strong>${websiteOwnerName}</strong></p>
          <p style="margin: 5px 0; color: #555;">Full Stack Web Developer</p>
          <p style="margin: 5px 0;">
            <a href="${process.env.PORTFOLIO_URL || '#'}" style="color: #333; text-decoration: none; border-bottom: 1px solid #333;">
              View Portfolio
            </a>
          </p>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

// Handle other methods
export async function GET() {
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
