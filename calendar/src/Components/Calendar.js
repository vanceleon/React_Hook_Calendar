import React, { useState } from 'react';
import dateFns from 'dateFns';
import '../css/Calendar.css';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => {
    const dateFormat = 'MMMM YYYY';
    return (
      <div className='header row flex-middle'>
        <div className='column col-start'>
          <div className='icon' onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='column col-center'>
          <span>{dateFns.format(currentDate, dateFormat)}</span>
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
    let startDate = dateFns.startOfWeek(currentDate);

  }

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  }

  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate,1));
    console.log("ran prev Month")
  }

  return (
    <div className='calendar'>
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
}
