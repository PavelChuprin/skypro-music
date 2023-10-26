export const sortYears = (a, b) => {
  const A = new Date(a);
  const B = new Date(b);

  if (A < B) {
    return -1;
  } else if (A > B) {
    return 1;
  } else {
    return 0;
  }
};