import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ticketSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  product: z.string().min(1, 'Please select a product'),
  severity: z.enum(['low', 'medium', 'high', 'critical']),
  description: z.string().min(15, 'Please provide a detailed description'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});
