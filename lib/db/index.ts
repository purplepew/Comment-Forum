import { BASE_URL } from "../constants"
import { getGoogleOAuthLinkQuery } from "../queries/GoogleOAuth"
import { GoogleOAuthLinkResponse } from "./types"

type ExtractVariables<T> = T extends { variables: object }
    ? T['variables']
    : never

export const customFetch = async <T>({
    headers, query, variables
}: {
    headers?: HeadersInit,
    query: string,
    variables?: ExtractVariables<T>
}): Promise<{ status: number; body: T }> => {
    try {
        const res = await fetch(`${BASE_URL}/api/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify({
                query,
                ...(variables && { variables })
            })
        })

        const body = await res.json()

        return {
            status: res.status,
            body
        }

    } catch (error) {
        throw {
            cause: error
        }
    }
}

export const getGoogleOAuthLink = async (): Promise<string> => {
    const res = await customFetch<GoogleOAuthLinkResponse>({ query: getGoogleOAuthLinkQuery })
    return res.body.data.generateGoogleAuthLink
}