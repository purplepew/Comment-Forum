import { OAuth2Client } from 'google-auth-library'
import { env } from './type-guards'
import { GOOGLE_OAUTH_REDIRECT_URI } from './constants'

const client = new OAuth2Client({
    clientId: env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
    redirectUri: GOOGLE_OAUTH_REDIRECT_URI
})

export default client