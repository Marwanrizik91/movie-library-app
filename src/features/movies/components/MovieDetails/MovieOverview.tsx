import { Typography } from "@mui/material";

interface MovieOverviewProps {
  overview: string;
}

export const MovieOverview = ({ overview }: MovieOverviewProps) => (
  <Typography
    overflow="auto"
    align="center"
    variant="body1"
    color="inherit"
    tabIndex={0}
    aria-label="Movie overview"
  >
    {overview}
  </Typography>
);