import client from "@/lib/OAuthClient";
import prisma from "@/lib/db/prisma";

const resolvers = {
    Query: {

        generateGoogleAuthLink: async () => {
            const url = client.generateAuthUrl({
                access_type: 'offline',
                scope: ['openid', 'email', 'profile']
            });
            return url;
        },

        


    }
}

export default resolvers