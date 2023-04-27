const Calendar: React.FC = () => {
  return (
    <p>
      <span className="flex gap-3">
        <span>
          {new Date().toLocaleDateString('en-US', { weekday: 'short' })}
        </span>
        <span>
          {new Date().toLocaleDateString('en-US', { month: 'short' })}
        </span>

        <span>
          {new Date().toLocaleDateString('en-US', { day: 'numeric' })}
        </span>
      </span>
    </p>
  );
};

export default Calendar;
