import type { Config } from 'drizzle-kit';

export default {
  schema: '/database/schema/index.ts',
  out: '/database/drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: String(process.env.DB_URL),
  },
  verbose: true,
  strict: true,
} satisfies Config;
