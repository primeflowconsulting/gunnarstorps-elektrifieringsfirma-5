"use client";

import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Section from '../ui/Section';
import Icon from '../ui/Icon';
import { contactInfo } from '@/lib/data';
import Notification from '../ui/Notification';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

type ContactSectionProps = {
  className?: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = {
  email?: string;
  phone?: string;
  message?: string;
  general?: string;
};

export default function ContactSection({ className = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    visible: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate message (required)
    if (!formData.message.trim()) {
      newErrors.message = 'Meddelande krävs';
    }
    
    // Validate email or phone (at least one required)
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = 'Antingen e-post eller telefon krävs';
      newErrors.phone = 'Antingen e-post eller telefon krävs';
    } else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ogiltig e-postadress';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({
      visible: true,
      message,
      type,
    });
  };

  // Initialize Supabase client
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  
  useEffect(() => {
    // Only initialize Supabase on the client side
    if (typeof window !== 'undefined') {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
      
      if (supabaseUrl && supabaseKey) {
        const client = createClient(supabaseUrl, supabaseKey);
        setSupabase(client);
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if Supabase client is initialized
      if (!supabase) {
        throw new Error('Supabase client not initialized');
      }
      
      // Insert data directly into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);
      
      if (error) throw error;
      
      resetForm();
      showNotification('Tack för ditt meddelande! Vi återkommer så snart som möjligt.', 'success');
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('Ett fel uppstod. Försök igen senare.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className={className}>
      <Notification 
        visible={notification.visible}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification(prev => ({ ...prev, visible: false }))}
      />
      
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kontakta oss</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Ämne
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex justify-center rounded-md border border-transparent bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900">Kontaktinformation</h3>
          <div className="mt-6 space-y-6">
            <div className="flex">
              <Icon name="phone" className="mt-1 text-blue-700" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Telefon</p>
                <p className="mt-1 text-gray-600">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex">
              <Icon name="email" className="mt-1 text-blue-700" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">E-post</p>
                <p className="mt-1 text-gray-600">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex">
              <Icon name="location" className="mt-1 text-blue-700" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Adress</p>
                <div className="mt-1 text-gray-600">
                  {contactInfo.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p>
                    {contactInfo.postalCode} {contactInfo.city}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <Icon name="clock" className="mt-1 text-blue-700" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Öppettider</p>
                <div className="mt-1 space-y-2 text-gray-600">
                  {contactInfo.hours.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium">{item.days}</p>
                      <p>{item.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Härkilavägen+Gunnarstorp,51199+Sätila,Sweden`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Gunnarstorps Elektrifieringsfirma"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
