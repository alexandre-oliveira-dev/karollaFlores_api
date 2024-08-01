
export function generatePageInfo(take: number, skip: number, total: number) {
  return {
    total: total,
    hasNextPage: take + skip < total,
    currentPage: Math.ceil(skip / take) + 1 || 1,
    lastPage: Math.ceil(total / take) || 1,
  };
}
