import React, { memo } from "react";
import { Pagination as MUIPagination, Stack } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = memo(
  ({ currentPage, totalPages, onPageChange }) => {
    const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
      onPageChange(page);
    };

    return (
      <Stack alignItems="center" spacing={1} sx={{ marginTop: "3rem" }}>
        <MUIPagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          color="primary"
          shape="rounded"
        />
      </Stack>
    );
  }
);

export default Pagination;
