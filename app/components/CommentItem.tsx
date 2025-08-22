import { Box, Typography } from "@mui/material";
import { type IComment } from "@/lib/db/types";
import CommentActions from "./CommentActions";
import FormattedDate from "./FormattedDate";

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
        <FormattedDate date={comment.createdAt} />
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
