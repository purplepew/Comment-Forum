'use client'
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface FormattedDateProps {
  date: string | Date;
  variant?: "caption" | "body2" | "body1";
  color?: string;
}

export default function FormattedDate({ date, variant = "caption", color = "textSecondary" }: FormattedDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFormattedDate(new Date(date).toLocaleString());
  }, [date]);

  // Show a simple date format during SSR to prevent hydration mismatch
  const fallbackDate = new Date(date).toISOString().split('T')[0];

  return (
    <Typography
      variant={variant}
      color={color}
      display="block"
      mt={0.5}
    >
      {mounted ? formattedDate : fallbackDate}
    </Typography>
  );
}
