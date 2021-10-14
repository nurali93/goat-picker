import { DateTime } from 'luxon';

const useWeek = () => {
  const now = DateTime.now();
  const currentYear = now.year;
  const currentWeek = now.weekNumber;

  const getPrevWeek = (year = currentYear, week = currentWeek) => {
    const firstWeek = week === 1;
    const previousYear = year - 1;
    const previousWeek = firstWeek
      ? DateTime.local(previousYear, 2).weeksInWeekYear
      : week - 1;

    return { week: previousWeek, year: firstWeek ? previousYear : year };
  };

  const getNextWeek = (year = currentYear, week = currentWeek) => {
    const lastWeek = week === DateTime.local(year, 2).weeksInWeekYear;
    const nextYear = year + 1;
    const nextWeek = lastWeek ? 1 : week + 1;

    return { week: nextWeek, year: lastWeek ? nextYear : year };
  };

  return {
    getPrevWeek,
    getNextWeek,
    currentWeek,
    currentYear,
  };
};

export default useWeek;
