export type IUserDocument = {
    id: string,
    name: string,
    email: string,
    role: "USER" | "ADMIN",
    createdAt: Date,
    updatedAt: Date
}

export type GoogleOAuthLinkResponse = {
    data: {
        generateGoogleAuthLink: string
    }
}