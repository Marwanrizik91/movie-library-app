// src/components/common/ErrorDisplay.tsx
import { Button, Typography } from "@mui/material";
import React from "react";

interface ErrorDisplayProps {
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ onRetry }) => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h6">Error loading movies</Typography>
      {onRetry && (
        <Button onClick={onRetry} variant="contained" sx={{ mt: 2 }}>
          Retry
        </Button>
      )}
    </div>
  );
};

export default ErrorDisplay;
