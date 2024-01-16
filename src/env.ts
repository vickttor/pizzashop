import { z } from 'zod'

export const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((v) => v === 'true'),
})

// Vite does not bring envs from process.env
export const env = envSchema.parse(import.meta.env)
