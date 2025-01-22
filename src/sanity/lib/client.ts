import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Valid project ID from your environment
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,       // Valid dataset name from your environment
  apiVersion: '2023-01-01',  // Example of a valid API version
  token: process.env.SANITY_API_TOKEN, // Correct token field
  useCdn: process.env.NODE_ENV === 'production' ? false : true, // Use CDN in development, not in production
});
