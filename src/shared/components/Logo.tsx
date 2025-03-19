import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Or specify a color */
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
` as typeof Typography;

export const Logo = () => (
  <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    <StyledLink to="/">Movie Library</StyledLink>
  </StyledTypography>
);
