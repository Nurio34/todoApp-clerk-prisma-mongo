import { z } from "zod";

export const TaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    isImportant: z.boolean(),
    userId: z.string(),
});

export type TaskType = z.infer<typeof TaskSchema>;
