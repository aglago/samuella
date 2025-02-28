// components/Contact.tsx
'use client';

import { useState, FormEvent } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';
import axios from 'axios';

type SubmitStatus = 'idle' | 'success' | 'error';

interface ContactProps {
  showHeading?: boolean;
}

const Contact = ({ showHeading = true }: ContactProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill out all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await axios.post('/api/contact', {
        name,
        email,
        message
      });
      
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
        console.log(error);
        
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-3 lg:py-16 bg-light">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="mb-16">
            <h2 className="section-title mx-auto text-center">Get in Touch</h2>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
            <p className="text-secondary mb-8">
              I&apos;m interested in freelance and full-time opportunities – especially ambitious or large projects. 
              Feel free to reach out if you have any questions or want to work together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-light p-3 rounded-full">
                  <FaEnvelope className="text-accent" />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-secondary hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-light p-3 rounded-full">
                  <FaPhone className="text-accent" />
                </div>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-secondary hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-light p-3 rounded-full">
                  <FaMapMarkerAlt className="text-accent" />
                </div>
                <span className="text-secondary">{CONTACT_INFO.location}</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-lg font-medium mb-4 text-primary">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href={CONTACT_INFO.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-light p-3 rounded-full text-accent hover:text-primary hover:bg-gray-100 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={CONTACT_INFO.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-light p-3 rounded-full text-accent hover:text-primary hover:bg-gray-100 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href={CONTACT_INFO.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-light p-3 rounded-full text-accent hover:text-primary hover:bg-gray-100 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-primary font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-primary font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-light py-3 px-4 rounded-md hover:bg-dark transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaPaperPlane size={14} />}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md border border-green-100">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">I&apos;ll get back to you as soon as possible.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-100">
                  <p className="font-medium">Oops! Something went wrong.</p>
                  <p className="text-sm mt-1">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
