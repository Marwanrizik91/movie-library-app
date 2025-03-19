import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../../features/search/components";
import { GenresSelect } from "../../features/genres/components";

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

const StyledToolbar = styled(Toolbar)`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const AppToolbar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledLink to="/">Movie Library</StyledLink>
        </StyledTypography>
        {!location.pathname.startsWith("/genre") && <SearchBar />}
        <GenresSelect />
      </StyledToolbar>
    </AppBar>
  );
};

export default AppToolbar;
