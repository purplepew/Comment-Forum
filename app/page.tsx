'use client'
import { getGoogleOAuthLink } from "@/lib/db";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter()

  const handleSignIn = async () => {
    const url = await getGoogleOAuthLink()
    router.push(url)
  }

  return (
    <div>
      <Typography>Main page</Typography>
      <Button onClick={handleSignIn}>Sign in</Button>
    </div>
  );
}
