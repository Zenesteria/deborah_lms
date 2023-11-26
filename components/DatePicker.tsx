// components/DateSelector.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface compProps{
  selectedDate:any
  onSelectDate:any
}

const DateSelector = ({ selectedDate, onSelectDate }:compProps) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleChange = (date:any) => {
    setStartDate(date);
    onSelectDate(date); // Notify the parent component about the selected date
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      className="border p-2"
    />
  );
};

export default DateSelector;
