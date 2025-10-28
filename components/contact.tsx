"use client";
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useApi } from '@/lib/use-api';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { ContactMessage } from '@/lib/contact-types';

const Contact: React.FC = () => {
  const { ref } = useSectionInView('Contact');
  const { postData, isLoading } = useApi();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('Preparing to send message...');
      const contactMessage: ContactMessage = {
        ...formData,
        sentAt: new Date().toISOString()
      };

      // Test API accessibility
      try {
        const testResponse = await fetch('https://alyhani.tryasp.net/api/ContactMessage', {
          method: 'OPTIONS',
          headers: {
            'Origin': window.location.origin
          }
        });
        console.log('API accessibility test:', {
          status: testResponse.status,
          headers: Object.fromEntries(testResponse.headers.entries())
        });
      } catch (e) {
        console.log('API accessibility test failed:', e);
      }

      console.log('Sending contact message:', contactMessage);
      const response = await postData('/ContactMessage', contactMessage);
      console.log('API Response:', response);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Detailed contact form error:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        formData
      });

      let errorMessage = 'Failed to send message. ';
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage += 'Could not connect to the server. Please check if the API is accessible.';
      } else if (error instanceof Error) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again later.';
      }
      
      toast.error(errorMessage);
      
      // Log additional debugging information
      console.log('Current form state:', formData);
      console.log('Error details:', error);
      console.log('API URL:', 'https://alyhani.tryasp.net/api/ContactMessage');
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mt-3"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mt-3"
          name="subject"
          type="text"
          required
          maxLength={200}
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitBtn isLoading={isLoading} />
      </form>
    </motion.section>
  );
};

export default Contact;
