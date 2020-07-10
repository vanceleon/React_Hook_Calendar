import React, { useState } from 'react';
import dateFns from 'date-fns';
import './Calendar.css';

export default function Calendar() {
  return (
    <div className='calendar'>
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
}
