import * as z from "zod";

export const studentSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters."),
    lastName: z.string().min(2, "Last name must be at least 2 characters."),
    birthDate: z.string().optional(),
    phone: z.string().optional(),
    parentName: z.string().optional(),
    parentPhone: z.string().optional(),
    belt: z.string().optional(),
    monthlyFee: z.coerce.number().optional(),
    notes: z.string().optional(),
    active: z.boolean().default(true),
    groupId: z.string().optional(),
});

export const groupSchema = z.object({
    name: z.string().min(2, "Group name must be at least 2 characters."),
    trainingDay: z.string().optional(),
    trainingTime: z.string().optional(),
});
