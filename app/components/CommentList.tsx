import { Box } from "@mui/material";
import { type IComment } from "@/lib/db/types";
import CommentItem from "./CommentItem";

interface CommentListProps {
  comments: IComment[] | null;
}

function RenderReplies({ replies, depth = 1 }: { replies: IComment[]; depth?: number }) {
    return (
        <>
            {replies.map(reply => (
                <Box key={reply.id} ml={3} mt={1}>
                    <CommentItem comment={reply} depth={depth} />

                    {reply.replies && reply.replies.length > 0 && (
                        <RenderReplies replies={reply.replies} depth={depth + 1} />
                    )}
                </Box>
            ))}
        </>
    )
}

export default function CommentList({ comments }: CommentListProps) {
    if (!comments || comments.length === 0) {
        return (
            <Box sx={{ p: 2, textAlign: 'center' }}>
                <p>No comments yet. Be the first to comment!</p>
            </Box>
        )
    }

    return (
        <>
            {comments.map(comment => (
                <Box key={comment.id}>
                    <CommentItem comment={comment} depth={0} />

                    {comment.replies && comment.replies.length > 0 && (
                        <RenderReplies replies={comment.replies} depth={1} />
                    )}
                </Box>
            ))}
        </>
    )
}