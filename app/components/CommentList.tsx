import { getAllComments } from "@/lib/db"
import { notFound } from "next/navigation"
import CommentPost from "./CommentPost"
import CommentReply from "./CommentReply";
import { Box } from "@mui/material";
import { type IReplies } from "@/lib/db/types";

async function RenderReplies({ replies, depth = 1 }: { replies: IReplies; depth?: number }) {
    return (
        <>
            {replies.map(reply => (
                <Box key={reply.id} ml={3} mt={1}>
                    <CommentReply id={reply.id} />

                    {reply.replies && reply.replies.length > 0 && (
                        <RenderReplies replies={reply.replies} depth={depth + 1} />
                    )}

                </Box>
            ))}
        </>
    )
}

export default async function CommentList() {
    const res = await getAllComments()

    if (!res) return notFound()

    return (
        <>
            {res.map(comment => (
                <Box key={comment.id}>
                    <CommentPost {...comment} />

                    {comment.replies && comment.replies.length > 0 && (
                        <RenderReplies replies={comment.replies} depth={1} />
                    )}
                </Box>
            ))}
        </>
    )
}