export const BASE_URL = process.env.VERCEL_PRODUCTION_URL
    ? process.env.VERCEL_PRODUCTION_URL
    : process.env.NODE_ENV === 'production' 
        ? 'https://vigilant-tribble-v7qrgw97ww73p6p-3000.app.github.dev'
        : 'http://localhost:3000'

export const GOOGLE_OAUTH_REDIRECT_URI =
    process.env.GOOGLE_OAUTH_REDIRECT_URI ??
    `${BASE_URL}/api/google/callback`;