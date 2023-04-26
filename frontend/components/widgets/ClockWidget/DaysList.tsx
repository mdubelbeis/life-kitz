const DAYS = [
  { day: 'mon', id: 1 },
  { day: 'tues', id: 2 },
  { day: 'wed', id: 3 },
  { day: 'thurs', id: 4 },
  { day: 'fri', id: 5 },
  { day: 'sat', id: 6 },
  { day: 'sun', id: 0 },
];

interface DaysListProps {
  day: string;
}

const DaysList: React.FC<DaysListProps> = ({ day }) => {
  return (
    <ul className="hidden text-sm lg:flex lg:gap-3">
      {DAYS.map((weekday) => {
        return (
          <li
            key={weekday.id}
            className={`${
              weekday.day === day
                ? 'rounded-lg border-2 border-green-900 bg-green-400 p-2 uppercase text-white'
                : 'rounded-lg border-2 border-green-500 p-2 uppercase text-white'
            } tracking-wider`}
          >
            {weekday.day}
          </li>
        );
      })}
    </ul>
  );
};

export default DaysList;
