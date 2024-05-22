import { Box, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <Box display="flex" justifyContent="center" padding="10px">
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          onClick={() => onPageChange(i + 1)}
          colorScheme={currentPage === i + 1 ? "teal" : "gray"}
          variant="outline"
          margin="5px"
        >
          {i + 1}
        </Button>
      ))}
    </Box>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
