import { Skeleton, Card } from "@mui/material";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  margin: 1rem auto;
  min-width: 250px;
  min-height: 450px;
`;

const MovieSkeleton = () => (
  <StyledCard>
    <Skeleton variant="rectangular" width="100%" height="100%" />
  </StyledCard>
);

export default MovieSkeleton;
