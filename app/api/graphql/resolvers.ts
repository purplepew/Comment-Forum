import client from "@/lib/OAuthClient";
import prisma from "@/lib/db/prisma";

const resolvers = {
    Query: {

        users: () => prisma.user.findMany({}),

        user: (_: unknown, args: { id: string }) => {
            return prisma.user.findFirst({
                where: { id: args.id },
                include: { comments: true }
            })
        },

        comments: () => {
            return prisma.comment.findMany({
                where: { parentId: null },
                include: {
                    author: true,
                    replies: {
                        include: {
                            author: true,
                            replies: {
                                include: {
                                    author: true,
                                    replies: {
                                        include: {
                                            author: true,
                                            replies: {
                                                include: {
                                                    author: true,
                                                    replies: {
                                                        include: {
                                                            author: true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                },
            })
        },

        comment: (_: unknown, args: {
            id: string
        }) => {
            return prisma.comment.findFirst({
                where: {
                    id: args.id
                },
                include: { author: true, replies: true, parent: true }
            })
        },

        generateGoogleAuthLink: async () => {
            const url = client.generateAuthUrl({
                access_type: 'offline',
                scope: ['openid', 'email', 'profile']
            });
            return url;
        },


    },

    Mutation: {

        createComment: (_: unknown, args: {
            content: string, authorId: string, parentId: string | null
        }) => {
            return prisma.comment.create({
                data: {
                    content: args.content,
                    authorId: args.authorId,
                    parentId: args.parentId
                },
                include: { author: true, parent: true }
            })
        },


    }
}

export default resolvers