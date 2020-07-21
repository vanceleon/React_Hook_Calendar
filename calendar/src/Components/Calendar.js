import React, { useState } from 'react';
import { addMonths, startOfWeek, addDays, subMonths } from 'date-fns';
import { format } from 'date-fns/esm';
import '../css/Calendar.css';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => {
    const dateFormat = 'mmmm yyyy';
    return (
      <div className='header row flex-middle'>
        <div className='column col-start'>
          <div className='icon' onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='column col-center'>
          <span>{format(currentDate, dateFormat)}</span>
        </div>
        <div className='column col-end'>
          <div className='icon' onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = 'ddd';
    const days = [];
    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='column col-center' key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className='days row'>{days}</div>;
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
    console.log('ran prev Months');
  };

  return (
    <div className='calendar'>
      <div>{header()}</div>
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      {/* <div>{cells()}</div> */}
    </div>
  );
}
