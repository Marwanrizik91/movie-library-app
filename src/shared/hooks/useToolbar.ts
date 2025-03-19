import { useLocation } from "react-router-dom";

export const useToolbar = () => {
  const location = useLocation();
  const showSearch = !location.pathname.startsWith("/genre");

  return { showSearch };
};