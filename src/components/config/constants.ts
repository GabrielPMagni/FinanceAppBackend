import * as dotenv from 'dotenv';
dotenv.config();

export const constants = {
    SALT_ROUNDS: 10,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: '1h',
    PORT: +process.env.PORT || 8000,
    SEED_PASSWORD: process.env.SEED_PASSWORD,
    SEED_EMAIL: process.env.SEED_EMAIL,
    JWT_REFRESH_TIMEOUT: 1000 * 60 * 60 * 24 * 3, // 3 days
}