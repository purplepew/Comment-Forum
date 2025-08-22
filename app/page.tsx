import { Container } from "@mui/material";
import { getAllComments } from "@/lib/db";
import CommentList from "./components/CommentList";
import NewCommentForm from "./components/NewCommentForm";

export default async function Home() {
  // Server-side data fetching
  const comments = await getAllComments();

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
      <CommentList comments={comments} />
      <NewCommentForm />
    </Container>
  )
}
