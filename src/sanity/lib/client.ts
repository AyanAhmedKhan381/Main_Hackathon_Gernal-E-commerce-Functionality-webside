import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  useCdn: false,
  token: "skQ6B4Q7hybEF5QUtlulxAA22Sw4ywwaeqRg5w1bRdPcBn3THKSo2r3R2e2RY5i1nmi2yrA7KBvL2MbgcHEDZ0KlcCeYOKI32mefCrjAhK6fe2qZ4gia9Q9slqDcNz3S7mg7jMqhTe078tZzPus2deq6GD9aSMfpEt1LYJ3raZlDqz3xJ1od", // Ensure this is securely stored
  apiVersion: '2023-01-01',
});
console.log("Sanity Token:", process.env.SANITY_API_TOKEN ? "Loaded ✅" : "Not Loaded ❌");
