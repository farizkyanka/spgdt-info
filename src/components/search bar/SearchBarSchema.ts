import { z } from "zod";

export const schemaSearch = z.object({
  payload: z.string(),
});

export type SearchType = z.infer<typeof schemaSearch>;
