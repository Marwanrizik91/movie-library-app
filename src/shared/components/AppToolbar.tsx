import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../../features/search/components";
import { Logo } from "./Logo";
import { GenresSelect } from "../../features/genres/components";

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
        <Logo />
        {!location.pathname.startsWith("/genre") && <SearchBar />}
        <GenresSelect />
      </StyledToolbar>
    </AppBar>
  );
};

export default AppToolbar;
