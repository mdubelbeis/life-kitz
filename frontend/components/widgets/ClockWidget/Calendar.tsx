const Calendar: React.FC = () => {
  return (
    <div>
      <div className="flex gap-1 lg:hidden">
        <span>
          {new Date().toLocaleDateString('en-US', { weekday: 'short' })}
        </span>
        <span>
          {new Date().toLocaleDateString('en-US', { month: 'short' })}
        </span>

        <span>
          {new Date().toLocaleDateString('en-US', { day: 'numeric' })}
        </span>
      </div>
    </div>
  );
};

export default Calendar;