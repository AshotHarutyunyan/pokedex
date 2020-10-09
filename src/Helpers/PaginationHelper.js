export const PaginationLogic = (
  currentPage,
  ItemsCount,
  pageItemsCount,
  pagesCount
) => {
  let showpagesat = currentPage,
    showpagesTo = 5;
  if (ItemsCount <= pageItemsCount) {
    showpagesat = 1;
    showpagesTo = 1;
  } else if (currentPage <= 4) {
    showpagesat = 1;
    showpagesTo = 5;
  } else if (currentPage >= pagesCount - 4) {
    showpagesat = pagesCount - 5;
    showpagesTo = pagesCount;
  } else {
    showpagesat = currentPage - 2;
    showpagesTo = currentPage + 2;
  }
  return [showpagesat, showpagesTo];
};
