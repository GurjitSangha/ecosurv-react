import { z } from 'zod';
interface Validator {
  validate: (
    parameters: Record<string, string>
  ) => { success: boolean } | { success: boolean; error: string[] };
}
export class ZodValidator implements Validator {
  private schema;
  constructor() {
    this.schema = z.object({
      selectedBreed: z.string().min(1),
      selectedSubBreed: z.string().optional(),
      selectedNumber: z.string().min(1),
    });
  }

  validate(parameters: Record<string, string>) {
    const result = this.schema.safeParse(parameters);
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map((issue) => issue.path[0].toString()),
      };
    }
    return { success: true };
  }
}
