import { z } from 'zod';

const formSchema = z.object({
  code: z.string().min(1, { message: 'Please enter a valid code.' }),
});

export { formSchema };
