'use client'
import React from 'react'
import { Box, Typography, Button } from "@mui/material";

interface CommentActionsProps {
  commentId: string;
}

export default function CommentActions({ commentId }: CommentActionsProps) {
  const handleLike = () => {
    // TODO: Implement like functionality
    console.log('Like comment:', commentId)
  }

  const handleReply = () => {
    // TODO: Implement reply functionality
    console.log('Reply to comment:', commentId)
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, pl: 1, mt: 0.5 }}>
      <Button
        size="small"
        variant="text"
        onClick={handleLike}
        sx={{
          minWidth: 'auto',
          p: 0.5,
          fontSize: '0.75rem'
        }}
      >
        Like
      </Button>
      <Button
        size="small"
        variant="text"
        onClick={handleReply}
        sx={{
          minWidth: 'auto',
          p: 0.5,
          fontSize: '0.75rem'
        }}
      >
        Reply
      </Button>
    </Box>
  )
}
