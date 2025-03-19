import { Button, styled } from "@mui/material";
import { ChevronRight } from "lucide-react";

const WatchNowButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 3px;
  align-self: center;
  margin-inline-start: 10px;
`;
export const WatchButton = () => (
  <WatchNowButton
    aria-label="Watch movie"
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.currentTarget.click();
      }
    }}
  >
    Watch Now
    <ChevronRight size={20} aria-hidden="true" />
  </WatchNowButton>
);
