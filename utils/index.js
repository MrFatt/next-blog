export const getPaginations = (pageCount, currentPage) => {
  if (pageCount < 10) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  } else if ([1, 2, 3, 4, 5, 6].includes(currentPage)) {
    return Array.from({ length: 10 }, (_, i) => i + 1);
  } else if (
    Array.from({ length: 5 }, (_, i) => i + pageCount - 4).includes(currentPage)
  ) {
    return Array.from({ length: 10 }, (_, i) => i + pageCount - 9);
  } else {
    return Array.from({ length: 10 }, (_, i) => i + currentPage - 5);
  }
};
