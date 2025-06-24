import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    generateCalendar();
  }, []);

  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-indexed

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDay = firstDay.getDay(); // day of the week (0 - Sun, 6 - Sat)
    const daysInMonth = lastDay.getDate();

    const weeks = [];
    let week = new Array(startDay).fill(null); // fill start with empty cells

    for (let date = 1; date <= daysInMonth; date++) {
      week.push(date);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }

    setCalendar(weeks);
  };

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="p-4 max-w-md mx-auto">
      <table className="w-full border-collapse">
        <thead className='bg-gray-200 '>
          <tr>
            {days.map((day) => (
              <th key={day} className="border p-2 bg-gray-100 text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((date, idx) => (
                <td key={idx} className="border p-2 text-center h-12">
                  {date || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
