import { Grid2 } from "@mui/material";
import React from "react";
import MovieSkeleton from "../common/Skeleton/MovieSkeleton";
import { GRID_SIZES, SKELETON_COUNT } from "../../utils/constants";

const MovieSkeletonGroup: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
      {[...Array(SKELETON_COUNT)].map((_, index) => (
        <Grid2 size={GRID_SIZES} key={index}>
          <MovieSkeleton />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MovieSkeletonGroup;
