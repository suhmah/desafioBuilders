export const period = (preventHour: number | string) => {
  const isMiddle =
    (preventHour >= 3 && preventHour < 6) ||
    (preventHour >= 16 && preventHour < 18);
  const isMorning = preventHour >= 6 && preventHour <= 15;

  return {isMiddle, isMorning};
};
