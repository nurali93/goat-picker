import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { DateTime } from 'luxon';
import AttendanceDay from './Day';
import { Button } from '@mui/material';
import useWeek from 'hooks/useWeek';

export default function AttendanceTable() {
  const [weekendsVisible, showWeekends] = useState(false);
  const { currentWeek, currentYear } = useWeek();
  const {
    query: { week: weekParam = currentWeek, year: yearParam = currentYear },
  } = useRouter();

  const week = Number(weekParam);
  const year = Number(yearParam);

  const weekday = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) =>
        DateTime.fromObject({
          weekYear: year,
          weekNumber: week,
          weekday: i + 1,
        })
      ),
    [week, year]
  );

  const weekends = useMemo(
    () =>
      weekendsVisible
        ? Array.from({ length: 2 }, (_, i) =>
            DateTime.fromObject({
              weekYear: year,
              weekNumber: week,
              weekday: i + 6,
            })
          )
        : [],
    [week, year, weekendsVisible]
  );

  return (
    <div className="flex flex-col gap-4">
      {weekday.map((date) => (
        <AttendanceDay key={date.toISODate()} date={date} />
      ))}

      <Button
        size="small"
        color={weekendsVisible ? 'primary' : 'warning'}
        onClick={() => showWeekends(!weekendsVisible)}
        className="!outline !outline-offset-0 focus:!outline-2 dark:!outline-gray-600"
      >
        {weekendsVisible ? 'Hide weekends' : 'Show me weekends'}
      </Button>

      {weekends.map((date) => (
        <AttendanceDay key={date.toISODate()} date={date} />
      ))}
    </div>
  );
}
