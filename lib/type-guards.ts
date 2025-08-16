import { z } from "zod";

const envSchema = z.object({
  // VERCEL_PRODUCTION_URL: z.string().pipe(z.string().url()),
  GOOGLE_OAUTH_CLIENT_ID: z.string().min(1),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string().min(1),
  JWT_ACCESS_TOKEN_SECRET: z.string().min(1),
  JWT_REFRESH_TOKEN_SECRET: z.string().min(1),
});

export const env = envSchema.parse(process.env);