import { Container, } from "@mui/material";
import NewComment from "./components/NewComment";
import CommentList from "./components/CommentList";

export default function Home() {

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
      <CommentList />
      <NewComment />
    </Container>
  )
}
