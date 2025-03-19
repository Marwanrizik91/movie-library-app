import { Grid2 } from "@mui/material";
import React, { lazy } from "react";
import { GRID_SIZES, SKELETON_COUNT } from "../../constants";

const LazyMovieSkeleton = lazy(
  () => import("../../../../shared/components/Skeleton/MovieSkeleton")
);

const MovieSkeletonGroup: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
      {[...Array(SKELETON_COUNT)].map((_, index) => (
        <Grid2 size={GRID_SIZES} key={index}>
          <LazyMovieSkeleton />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MovieSkeletonGroup;
