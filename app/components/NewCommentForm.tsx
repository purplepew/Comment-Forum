'use client'
import React from 'react'
import { TextField, Button, Box, Alert } from "@mui/material";
import { createCommentAction } from '@/lib/actions/comments'

export default function NewCommentForm() {
  const [content, setContent] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('content', content)
      formData.append('authorId', 'temp-user-id') // TODO: Get from auth

      const result = await createCommentAction(formData)
      
      if (result.success) {
        setContent('')
      } else {
        setError(result.error || 'Failed to create comment')
      }
    } catch (error) {
      console.error('Error creating comment:', error)
      setError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Write a comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isSubmitting}
        sx={{ mb: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!content.trim() || isSubmitting}
        sx={{ minWidth: 120 }}
      >
        {isSubmitting ? 'Posting...' : 'Post Comment'}
      </Button>
    </Box>
  )
}
