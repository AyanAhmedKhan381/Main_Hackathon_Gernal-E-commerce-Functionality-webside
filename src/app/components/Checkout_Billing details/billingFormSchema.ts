// billingFormSchema.ts
import { z } from "zod";

export const billingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().min(1, "ZIP Code is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  additionalInfo: z.string().optional(),
});

export type BillingFormData = z.infer<typeof billingFormSchema>;
