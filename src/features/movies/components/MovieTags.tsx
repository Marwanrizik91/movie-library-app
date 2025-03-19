import { styled } from "@mui/material";
import { MOVIE_DETAILS_METRICS } from "../constants/styles";

const TagsContainer = styled("ul")`
  display: flex;
  gap: ${MOVIE_DETAILS_METRICS.tags.gap}px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tag = styled("li")`
  display: inline-block;
  padding: ${MOVIE_DETAILS_METRICS.tags.padding};
  border-radius: 5px;
`;

export const MovieTags = ({ tags }: { tags: string[] }) => {
  return (
    <TagsContainer role="list" aria-label="Movie information tags">
      {tags.map((tag, index) => (
        <Tag key={index} role="listitem" tabIndex={0}>
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};
