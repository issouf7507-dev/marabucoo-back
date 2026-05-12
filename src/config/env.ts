import 'dotenv/config';

function get(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
}

export const env = {
  DATABASE_URL:  get('DATABASE_URL'),
  JWT_SECRET:    get('JWT_SECRET'),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '7d',
  PORT:          Number(process.env.PORT) || 3000,
  NODE_ENV:      process.env.NODE_ENV ?? 'development',
  CORS_ORIGIN:   process.env.CORS_ORIGIN ?? 'http://localhost:5173',
};
