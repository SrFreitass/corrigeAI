export const getOffAndLimit = (page: number, maxElements: number) => {
  const limit = page * maxElements;
  const offset = limit - maxElements;
  return {
    offset,
    limit,
  };
};
