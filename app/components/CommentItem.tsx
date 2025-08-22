import { Box, Typography } from "@mui/material";
import { type IComment } from "@/lib/db/types";
import CommentActions from "./CommentActions";

interface CommentItemProps {
  comment: IComment;
  depth: number;
}

export default function CommentItem({ comment, depth }: CommentItemProps) {
  return (
    <>
      <Box
        sx={{
          border: '1px solid grey',
          p: 1,
          ml: depth * 2
        }}
      >
        <Typography variant="body2">{comment.content}</Typography>
        <Typography
          variant='caption'
          color='textSecondary'
          display="block"
          mt={0.5}
        >
          {new Date(comment.createdAt).toLocaleString()}
        </Typography>
        {comment.author && (
          <Typography
            variant='caption'
            color='textSecondary'
            display="block"
          >
            by {comment.author.name}
          </Typography>
        )}
      </Box>
      <CommentActions commentId={comment.id} />
    </>
  )
}
