'use client'

import { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        textAlign: 'center',
        p: 3
      }}
    >
      <Typography variant="h4" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {error.message || 'An unexpected error occurred'}
      </Typography>
      <Button
        variant="contained"
        onClick={() => reset()}
        sx={{ minWidth: 120 }}
      >
        Try again
      </Button>
    </Box>
  )
}
