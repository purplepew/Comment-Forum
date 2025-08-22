import { Box, Typography } from "@mui/material";
import { getCommentById } from "@/lib/db";

export default async function CommentReply({ id }: { id: string }) {
    const res = await getCommentById({ id })

    if (!res) return null

    return (
        <>
            <Box
                sx={{
                    border: '1px solid grey',
                    p: 1,
                }}
            >
                <Typography>{res.content}</Typography>
                <Typography
                    variant='caption'
                    color='textSecondary'
                >{new Date(res.createdAt).toLocaleString()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, pl: 1 }}>
                <Typography
                    variant="caption"
                    component='button'
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0)',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >Like</Typography>
                <Typography
                    variant="caption"
                    component='button'
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0)',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >Reply</Typography>
            </Box>
        </>
    )
}