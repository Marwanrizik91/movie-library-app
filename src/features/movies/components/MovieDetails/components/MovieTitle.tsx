import { Typography } from "@mui/material";

interface MovieTitleProps {
  title: string;
}

export const MovieTitle = ({ title }: MovieTitleProps) => (
  <Typography variant="h4" component="h2" tabIndex={0}>
    {title}
  </Typography>
);