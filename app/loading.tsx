import { Box, Skeleton, Container } from '@mui/material'

export default function Loading() {
  return (
    <Container
      maxWidth='xl'
      sx={{
        width: '600px',
        paddingTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      {/* Comment list skeleton */}
      {[1, 2, 3].map((i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <Skeleton variant="rectangular" height={80} sx={{ mb: 1 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Skeleton variant="text" width={60} />
            <Skeleton variant="text" width={60} />
          </Box>
        </Box>
      ))}
      
      {/* New comment form skeleton */}
      <Box sx={{ mt: 2 }}>
        <Skeleton variant="rectangular" height={120} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" width={120} height={36} />
      </Box>
    </Container>
  )
}
