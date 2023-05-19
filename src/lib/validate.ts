import { ZodError, z } from 'zod';

export const schema = z.object({
  selectedBreed: z.string().min(1),
  selectedSubBreed: z.string().optional(),
  selectedNumber: z.string().min(1),
});

export const parseValidationErrors = (error: ZodError): string[] => {
  return error.issues.map((issue) => `Error: ${issue.path} ${issue.message}`);
};
